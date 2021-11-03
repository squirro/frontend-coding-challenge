// feature
// components
// styles
import './Rating.scss';

const STARS_TOTAL = 5;

const Rating = ({rating, setRating}) => {
  const handleClick = (index) => () => setRating(index + 1);

  const stars = Array.from({length: STARS_TOTAL}).map((_, index) => {
    const active = index < rating ? 'rating__item--active' : '';
    return (
      <span className={`material-icons rating__item ${active}`} onClick={handleClick(index)} key={index}>
        star
      </span>
    );
  });

  return <div className="rating">{stars}</div>;
};

export default Rating;
