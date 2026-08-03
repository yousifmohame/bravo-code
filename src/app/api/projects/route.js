import { NextResponse } from "next/server";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth as getAdminAuth } from "firebase-admin/auth";

// تأكد من أن مسار ملف المفتاح صحيح
const serviceAccount = require("../../../../serviceAccountKey.json");

// تهيئة Firebase Admin مرة واحدة فقط
if (!getApps().length) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();
const adminAuth = getAdminAuth();

// دالة وسيطة للتحقق من التوكن
const verifyToken = async (request) => {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.split("Bearer ")[1];
  try {
    return await adminAuth.verifyIdToken(token);
  } catch (error) {
    console.error("خطأ في التحقق من التوكن:", error);
    return null;
  }
};

// GET: جلب كل المشاريع (عام)
export async function GET() {
  try {
    const snapshot = await db
      .collection("projects")
      .orderBy("createdAt", "desc")
      .get();
    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(projects);
  } catch (error) {
    console.error("فشل جلب المشاريع:", error);
    return NextResponse.json({ error: "فشل جلب المشاريع" }, { status: 500 });
  }
}

// POST: إنشاء مشروع جديد (محمي)
export async function POST(request) {
  const decodedToken = await verifyToken(request);
  if (!decodedToken) {
    return NextResponse.json({ error: "غير مصرح به" }, { status: 401 });
  }

  try {
    const projectData = await request.json();
    const docRef = await db.collection("projects").add(projectData);
    return NextResponse.json(
      { id: docRef.id, ...projectData },
      { status: 201 }
    );
  } catch (error) {
    console.error("فشل إنشاء المشروع:", error);
    return NextResponse.json({ error: "فشل إنشاء المشروع" }, { status: 500 });
  }
}
