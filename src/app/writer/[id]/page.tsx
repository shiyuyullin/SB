export default function Writer({ params }: { params: { id: number } }) {
  return (
    <div>
      <h1>Writer: {params.id}</h1>
    </div>
  );
}
