"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Bangladesh page
    router.push("/bd");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#030205] flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">MentorPath.ai</h1>
        <p className="text-gray-300">Redirecting to Bangladesh site...</p>
      </div>
    </div>
  );
}


