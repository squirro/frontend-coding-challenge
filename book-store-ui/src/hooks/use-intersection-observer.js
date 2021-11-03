import { useEffect, useRef, useState } from 'react';

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export const useIntersectionObserver = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const previous = usePrevious(visible);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));

    const ref = containerRef.current;

    ref && observer.observe(containerRef.current);

    return () => ref && observer.unobserve(ref);
  }, [containerRef]);

  return [containerRef, visible, !previous];
};
