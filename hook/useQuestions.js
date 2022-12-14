import { get, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { dataBase } from "../firebase";

export default function useQuestions(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // database related works
      const quizRef = ref(dataBase, "quiz/" + id + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [id]);

  return {
    loading,
    error,
    questions,
  };
}
