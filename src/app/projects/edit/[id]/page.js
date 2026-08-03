// src/app/projects/edit/[id]/page.js
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import ProjectForm from "@/components/admin/ProjectForm";
import { AuthContextProvider } from "@/context/AuthContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Give the function a name, like "EditProjectPage"
export default function EditProjectPage() {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`/api/projects/${id}`)
        .then(res => res.json())
        .then(data => {
          setProjectData(data);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
      return (
        <AuthContextProvider>
          <ProtectedRoute>
              <div className="text-center py-40">
                  <p>جاري تحميل بيانات المشروع...</p>
              </div>
          </ProtectedRoute>
        </AuthContextProvider>
      );
  }

  return (
    <AuthContextProvider>
      <ProtectedRoute>
          <div className="container mt-20 mx-auto py-10">
            <ProjectForm initialData={projectData} projectId={id} />
          </div>
      </ProtectedRoute>
    </AuthContextProvider>
  );
}