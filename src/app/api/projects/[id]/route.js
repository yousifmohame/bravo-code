import { NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';

const serviceAccount = require('../../../../../serviceAccountKey.json');
if (!getApps().length) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();
const adminAuth = getAdminAuth();

const verifyToken = async (request) => {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
    const token = authHeader.split('Bearer ')[1];
    try {
        return await adminAuth.verifyIdToken(token);
    } catch (error) {
        return null;
    }
};

// GET: جلب مشروع واحد (عام)
export async function GET(request, { params }) {
    try {
        const { id } = params;
        const docRef = db.collection('projects').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return NextResponse.json({ error: 'المشروع غير موجود' }, { status: 404 });
        }
        return NextResponse.json({ id: doc.id, ...doc.data() });
    } catch (error) {
        return NextResponse.json({ error: 'فشل جلب المشروع' }, { status: 500 });
    }
}

// PUT: تحديث مشروع (محمي)
export async function PUT(request, { params }) {
    const decodedToken = await verifyToken(request);
    if (!decodedToken) {
        return NextResponse.json({ error: 'غير مصرح به' }, { status: 401 });
    }
    try {
        const { id } = params;
        const projectData = await request.json();
        await db.collection('projects').doc(id).update(projectData);
        return NextResponse.json({ message: 'تم تحديث المشروع بنجاح' });
    } catch (error) {
        return NextResponse.json({ error: 'فشل تحديث المشروع' }, { status: 500 });
    }
}

// DELETE: حذف مشروع (محمي)
export async function DELETE(request, { params }) {
    const decodedToken = await verifyToken(request);
    if (!decodedToken) {
        return NextResponse.json({ error: 'غير مصرح به' }, { status: 401 });
    }
    try {
        const { id } = params;
        await db.collection('projects').doc(id).delete();
        return NextResponse.json({ message: 'تم حذف المشروع بنجاح' });
    } catch (error) {
        return NextResponse.json({ error: 'فشل حذف المشروع' }, { status: 500 });
    }
}
