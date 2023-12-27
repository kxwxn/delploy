import { useInfiniteQuery } from "@tanstack/react-query";
import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase";

export const useInfiniteScroll = (collectionName, itemsPerPage) => {
  const fetchItems = async ({ pageParam = null }) => {
    let itemsQuery = query(collection(db, collectionName), limit(itemsPerPage));
    if (pageParam) {
      itemsQuery = query(
        collection(db, collectionName),
        startAfter(pageParam),
        limit(itemsPerPage)
      );
    }
    const itemsSnapshot = await getDocs(itemsQuery);
    const lastDoc = itemsSnapshot.docs[itemsSnapshot.docs.length - 1];
    return { data: itemsSnapshot.docs.map((doc) => doc.data()), lastDoc };
  };

  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: [collectionName],
      queryFn: fetchItems,
      getNextPageParam: (lastPage) => lastPage.lastDoc,
    });

  return { data, fetchNextPage, hasNextPage, isLoading, isError, error };
};


