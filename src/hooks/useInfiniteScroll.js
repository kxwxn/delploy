import { useEffect, useState } from "react";

export const useInfiniteScroll = (fetchMore) => {
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    const handleScroll = (fetchMore) => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }

      //초기 렌더링 여부 확인
      if (initialRender) {
        setInitialRender(false);
      } else {
        fetchMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMore, initialRender]);
};

// export const useInfiniteScroll = (fetchMore) => {
//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop !==
//         document.documentElement.offsetHeight
//       )
//         return;
//       fetchMore();
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [fetchMore]);
// };
