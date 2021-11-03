import PropTypes from 'prop-types';
// feature
// components
// styles
import './Book.scss';

const Book = ({ book }) => {
  return (
    <div className="book">
      <img className="book__cover" src="https://picsum.photos/240/320" alt={book.name} />
      <span className="book__name">{book.name}</span>
      <span className="book__author">{book.author.fullName}</span>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
