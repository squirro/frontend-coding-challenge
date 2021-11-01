import './Rating.scss';

const length = 5;

const Rating = ({rating, setRating}) => {
  const handleClick = (value) => () => setRating(value);

  const stars = Array.from({length}).map((_, index) => {
    const value = length - index;
    const checked = value === rating ? 'checked' : '';
    return <span key={index} className={checked} onClick={handleClick(value)} />;
  });

  return (
    <div className="Rating" onChange={setRating}>
      {stars}
    </div>
  );
};

export default Rating;
