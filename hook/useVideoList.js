import {
  get,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";

import { dataBase } from "../firebase";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      // database related works
      const videosRef = ref(dataBase, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + 1),
        limitToFirst(9)
      );

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          //
        }
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
  };
}
