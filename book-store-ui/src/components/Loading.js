// feature
// components
// styles
import './Loading.scss';
// assets
import loadingSVG from './loading.svg';

const Loading = ({loading, children}) => {
  const overlay = loading && (
    <div className="Loading__overlay">
      <img src={loadingSVG} alt="Loading..." />
    </div>
  );

  return (
    <div className="Loading">
      <div className="Loading__content">{children}</div>
      {overlay}
    </div>
  );
};

export default Loading;
