"use client";

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // We wait until the loading is false and then check if the user is logged in.
    if (!loading && !user) {
      // If not logged in, redirect to the login page.
      router.push('/login');
    }
  }, [user, loading, router]); // This effect runs whenever user, loading, or router changes.

  // If the auth state is still loading, or if there is no user (and a redirect is imminent),
  // we can show a loading state or return null to prevent rendering the protected content.
  if (loading || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl">جاري التحقق من صلاحية الدخول...</p>
      </div>
    );
  }

  // If the user is logged in, render the child components (the protected page).
  return children;
}