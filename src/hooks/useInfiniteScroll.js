import { useEffect, useState, useRef } from "react";

export const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  const loadingRef = useRef(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
  }, [isFetching]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loadingRef.current
    )
      return;
    setIsFetching(true);
  };

  return [isFetching, setIsFetching, loadingRef];
};
