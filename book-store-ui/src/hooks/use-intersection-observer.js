import {useEffect, useRef, useState} from 'react';

export const useIntersectionObserver = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));

    const ref = containerRef.current;

    ref && observer.observe(containerRef.current);

    return () => ref && observer.unobserve(ref);
  }, [containerRef]);

  return [containerRef, visible];
};
