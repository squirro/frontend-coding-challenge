// feature
// components
// styles
import './Loading.scss';
// assets
import loadingSVG from './loading.svg';

const Loading = ({loading, children}) => {
  const overlay = loading && (
    <div className="loading__overlay">
      <img src={loadingSVG} alt="Loading..." />
    </div>
  );

  return (
    <div className="loading">
      <div className="loading__content">{children}</div>
      {overlay}
    </div>
  );
};

export default Loading;
