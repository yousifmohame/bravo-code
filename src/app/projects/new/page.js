"use client"; // Add this because we are now using the Context Provider here for the test

import ProtectedRoute from "@/components/ProtectedRoute";
import ProjectForm from "@/components/admin/ProjectForm";
import { AuthContextProvider } from "@/context/AuthContext"; // <-- Import the provider directly

export default function NewProjectPage() {
  return (
    // We are wrapping the protected route in the provider HERE to test it.
    <AuthContextProvider>
      <ProtectedRoute>
        <div className="container mx-auto py-10 mt-12">
          <ProjectForm />
        </div>
      </ProtectedRoute>
    </AuthContextProvider>
  );
}