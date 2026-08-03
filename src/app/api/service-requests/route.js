import { NextResponse } from "next/server";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth as getAdminAuth } from "firebase-admin/auth";

// تأكد من أن مسار ملف المفتاح صحيح
const serviceAccount = require("../../../../serviceAccountKey.json");

if (!getApps().length) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();
const adminAuth = getAdminAuth();

// دالة للتحقق من توكن الادمن
const verifyAdminToken = async (request) => {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.split("Bearer ")[1];
  try {
    return await adminAuth.verifyIdToken(token);
  } catch (error) {
    return null;
  }
};

// POST: حفظ طلب خدمة جديد (عام)
// Updated POST handler in your API route
export async function POST(request) {
  try {
    const { serviceName, serviceId, whatsappNumber, clientName } =
      await request.json();

    if (!serviceName || !whatsappNumber || !clientName) {
      return NextResponse.json(
        { error: "البيانات المطلوبة غير مكتملة" },
        { status: 400 }
      );
    }

    const newRequest = {
      serviceName,
      serviceId: serviceId || "N/A",
      clientName,
      whatsappNumber,
      requestedAt: new Date().toISOString(),
      status: "new",
    };

    await db.collection("serviceRequests").add(newRequest);
    return NextResponse.json(
      { message: "تم إرسال طلبك بنجاح!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("فشل حفظ طلب الخدمة:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إرسال الطلب" },
      { status: 500 }
    );
  }
}



// GET: جلب كل طلبات الخدمات (محمي للادمن)
export async function GET(request) {
  const decodedToken = await verifyAdminToken(request);
  if (!decodedToken) {
    return NextResponse.json({ error: "غير مصرح به" }, { status: 401 });
  }

  try {
    const snapshot = await db
      .collection("serviceRequests")
      .orderBy("requestedAt", "desc")
      .get();
    const requests = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(requests);
  } catch (error) {
    console.error("فشل جلب الطلبات:", error);
    return NextResponse.json({ error: "فشل جلب الطلبات" }, { status: 500 });
  }
}
