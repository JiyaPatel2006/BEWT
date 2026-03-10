export default async function PhotoModal({ params,}: {params: Promise<{ id: string }>;}) 
{
  const { id } = await params;

  return (
    <div style={{ background: "rgba(0,0,0,0.5)", position: "fixed", inset: 0 }}>
      <div style={{ background: "#fff", margin: 100, padding: 20 }}>
      {id}
        <img src={`https://picsum.photos/id/${id}/800/600`} />

      </div>
    </div>
  );
}