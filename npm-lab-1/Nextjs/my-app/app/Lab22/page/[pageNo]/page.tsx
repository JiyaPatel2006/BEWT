export default async function Page({
  params,
}: {
  params: Promise<{ pageNo: string }>;
}) {
  const { pageNo } = await params;

  const page = parseInt(pageNo);
  const recordsPerPage = 10;

  const startIndex = (page - 1) * recordsPerPage + 1;
  const endIndex = page * recordsPerPage;

  return (
    <div>
      <h1>Pagination Info</h1>
      <p>Page Number: {page}</p>
      <p>Start Index: {startIndex}</p>
      <p>End Index: {endIndex}</p>
    </div>
  );
}