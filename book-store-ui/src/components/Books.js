import './Books.scss';

const byCopiesSold = (a, b) => {
  return b.copiesSold - a.copiesSold;
};

const Books = ({books, loading}) => {
  if (loading) {
    return null;
  }

  if (!books?.length) {
    return <h3>No data available</h3>;
  }

  const samples = books
    .sort(byCopiesSold)
    .slice(0, 2)
    .map((book) => {
      return (
        <article className="Book" key={book.id}>
          <img src="https://picsum.photos/240/320" alt={book.name} />
          <p className="Book__name">{book.name}</p>
          <p className="Book__author">{book.author.fullName}</p>
        </article>
      );
    });

  return (
    <div className="Books">
      <h3>Best-selling books</h3>
      <section className="Books__list">{samples}</section>
    </div>
  );
};

export default Books;
