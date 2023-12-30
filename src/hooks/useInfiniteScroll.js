import { useInfiniteQuery } from "@tanstack/react-query";
import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase";

export const useInfiniteScroll = (collectionName, numberOfItem) => {
  //
  const fetchItems = async ({ pageParam = 0 }) => {
    let itemsQuery = query(collection(db, collectionName), limit(numberOfItem));
    if (pageParam) {
      itemsQuery = query(
        collection(db, collectionName),
        startAfter(pageParam),
        limit(numberOfItem)
      );
    }
    const itemsSnapshot = await getDocs(itemsQuery);
    const lastDoc = itemsSnapshot.docs[itemsSnapshot.docs.length - 1];
    return {
      data: itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      lastDoc,
    };
  };
  //
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: [collectionName],
      queryFn: fetchItems,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.lastDoc,
    });
  //
  return { data, fetchNextPage, hasNextPage, isLoading, isError, error };
  //
};
