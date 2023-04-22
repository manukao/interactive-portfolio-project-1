import { useState, useEffect } from "react";

const useOnScreen = (refs, rootMargin = "0px") => {
  const [isOnScreen, setIsOnScreen] = useState(Array(refs.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          setIsOnScreen((prevState) => {
            const newState = [...prevState];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        });
      },
      {
        rootMargin,
      }
    );

    refs.forEach((ref) => ref.current && observer.observe(ref.current));

    return () => {
      refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, [refs, rootMargin]);

  return isOnScreen;
};
