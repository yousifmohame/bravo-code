"use client";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    // ... نفس كود الـ form الموجود في صفحة الـ Signup ولكن مع تغيير النص والوظيفة
    return (
         <div className="flex items-center justify-center min-h-screen">
          <form onSubmit={handleLogin} className="p-8 bg-gray-800 rounded-lg">
            <h1 className="text-2xl mb-4">Login</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 mb-4 bg-gray-700 rounded"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 mb-4 bg-gray-700 rounded"
            />
            <button type="submit" className="w-full p-2 bg-cyan-500 rounded">Login</button>
          </form>
        </div>
    )
}