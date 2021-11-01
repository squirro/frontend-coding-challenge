export const handleImageError = (event) => {
  event.target.src = 'https://picsum.photos/320/320';
  event.onerror = null;
};
