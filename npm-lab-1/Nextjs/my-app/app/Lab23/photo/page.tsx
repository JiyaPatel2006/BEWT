import Link from "next/link";

export default function PhotoPage() {
  const photos = [1, 2, 3, 4, 5, 6];

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Feed</h1>

      {/* This is the magic part: grid-cols-3 */}
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {photos.map((id) => (
          
        
           
          
            <img
              src={`https://picsum.photos/id/${id}/300/300`}
              alt={`Photo ${id}`}
              className="w-full h-full object-cover hover:opacity-80 transition-opacity"
            />
          
        ))}
      </div>
    </main>
  );
}