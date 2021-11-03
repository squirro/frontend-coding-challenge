// feature
// components
import Book from './Book';
// styles
import './BookList.scss';

const byCopiesSold = (a, b) => b.copiesSold - a.copiesSold;

const BOOKS_RENDER = 2;

const BookList = ({books = []}) => {
  const title = books.length ? 'Best-selling books:' : 'No data available';

  const items = books
    .sort(byCopiesSold)
    .slice(0, BOOKS_RENDER)
    .map((book) => {
      return <Book book={book} key={book.id} />;
    });

  return (
    <div className="book-list">
      <div className="book-list__title">{title}</div>
      <div className="book-list__items">{items}</div>
    </div>
  );
};

export default BookList;
