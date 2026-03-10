// app/Lab23/feed/page.tsx
import Link from "next/link";

export default function FeedPage() {
  const photos = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <main className="max-w-5xl mx-auto px-1 md:px-4 py-8">
      {/* 3-column grid with tiny gaps like IG */}
      <div className="grid grid-cols-3 gap-1 md:gap-8">
        {photos.map((id) => (
          <Link
            key={id}
            href={`/Lab23/photo/${id}`}
            className="group relative aspect-square overflow-hidden bg-gray-200"
          >
            <img
              src={`https://picsum.photos/id/${id}/500/500`}
              alt="Feed post"
              className="object-cover w-full h-full transition-filter duration-300 group-hover:brightness-75"
            />
            {/* Hover overlay effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">❤️ 1.2k</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}