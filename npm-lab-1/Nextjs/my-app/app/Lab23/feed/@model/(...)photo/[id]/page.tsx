"use client";

import { use } from "react"; // 1. Import use
import { useRouter } from "next/navigation";

// 2. Update the type for params
export default function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // 3. Unwrap the params
  const router = useRouter();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-10"
      onClick={() => router.back()}
    >
      <div 
        className="bg-white flex flex-col md:flex-row w-full max-w-6xl max-h-[90vh] rounded-r-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-black flex-grow flex items-center justify-center">
          <img
            src={`https://picsum.photos/id/${id}/800/800`}
            alt="Post content"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Info Panel - Removed 'hidden' so it's always visible for testing */}
        <div className="flex flex-col w-full md:w-[400px] border-l bg-white">
          <div className="p-4 border-b flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600" />
            <span className="font-semibold text-sm">user_handle</span>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto text-sm">
            <p><strong>user_handle</strong> Check out this photo! #{id}</p>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-4 mb-2">
              <button className="text-2xl">❤️</button>
              <button className="text-2xl">💬</button>
            </div>
            <p className="font-semibold text-xs text-gray-500 uppercase">2 hours ago</p>
          </div>
        </div>
      </div>

      <button 
        className="absolute top-5 right-5 text-white text-3xl font-light"
        onClick={() => router.back()}
      >
        &times;
      </button>
    </div>
  );
}



