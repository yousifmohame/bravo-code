import { NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { getApps, initializeApp, cert } from "firebase-admin/app";
const serviceAccount = require("../../../../../serviceAccountKey.json");

if (!getApps().length) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();
const adminAuth = getAdminAuth();

const verifyAdminToken = async (request) => {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;
  const token = authHeader.split("Bearer ")[1];
  try {
    return await adminAuth.verifyIdToken(token);
  } catch {
    return null;
  }
};

// PATCH /api/service-requests/[id]
export async function PATCH(request, { params }) {
  const decodedToken = await verifyAdminToken(request);
  if (!decodedToken) {
    return NextResponse.json({ error: "غير مصرح به" }, { status: 401 });
  }

  try {
    const { status } = await request.json();
    await db.collection("serviceRequests").doc(params.id).update({ status });
    return NextResponse.json({ message: "تم تحديث حالة الطلب" });
  } catch (error) {
    console.error("Error updating request:", error);
    return NextResponse.json({ error: "فشل تحديث الطلب" }, { status: 500 });
  }
}

// DELETE /api/service-requests/[id]
export async function DELETE(request, { params }) {
  const decodedToken = await verifyAdminToken(request);
  if (!decodedToken) {
    return NextResponse.json({ error: "غير مصرح به" }, { status: 401 });
  }

  try {
    await db.collection("serviceRequests").doc(params.id).delete();
    return NextResponse.json({ message: "تم حذف الطلب بنجاح" });
  } catch (error) {
    console.error("Error deleting request:", error);
    return NextResponse.json({ error: "فشل حذف الطلب" }, { status: 500 });
  }
}
