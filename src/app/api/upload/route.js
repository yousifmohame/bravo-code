// src/app/api/upload/route.js
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
// استورد نفس دالة verifyToken من أي ملف API آخر
// ...

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  //const decodedToken = await verifyToken(request);
  //if (!decodedToken) {
  //    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  //}
  const formData = await request.formData();
  const file = formData.get('file');
  const fileBuffer = await file.arrayBuffer();
  const base64Data = Buffer.from(fileBuffer).toString('base64');
  const fileUri = 'data:' + file.type + ';' + 'base64,' + base64Data;
  const result = await cloudinary.uploader.upload(fileUri, { folder: 'bravocode_projects' });
  return NextResponse.json({ url: result.secure_url });
}