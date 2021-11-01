const Flag = ({code, className}) => {
  if (!code) {
    return null;
  }

  const image = code.toLowerCase();
  const createURL = (type) => `https://flagcdn.com/${type}/${image}.png`;
  return <img className={className} src={createURL('64x48')} width="64" alt={image} />;
};

export default Flag;
