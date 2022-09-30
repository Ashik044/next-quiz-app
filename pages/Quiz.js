import Answer from "../components/quiz component/Answer";
import MiniPlayer from "../components/quiz component/MiniPlayer";
import ProgessBar from "../components/quiz component/ProgressBar";
import useQuestions from "../hook/useQuestions";
import Layout from "../components/Layout";
import Head from "next/head";
import { useState, useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { withProtected } from "../components/route";
import _ from "lodash";
import Loading from "../components/loading";
import { useAuth } from "../context/AuthContext";
import { dataBase } from "../firebase";
import { ref, set } from "firebase/database";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;

    default:
      return state;
  }
};

const Quiz = () => {
  var router = useRouter();
  var id = router.query["id"];
  const { currentUser } = useAuth();

  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  // submit quiz
  async function submit() {
    const { uid } = currentUser;

    const resultRef = ref(dataBase, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    router.push({
      pathname: `/Result`,
      query: {
        id,
      },
      state: {
        qna,
      },
    });
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      <Head>
        <title>Quiz Page</title>
      </Head>

      <Layout>
        <div className="mx-10 ">
          {loading && <Loading />}
          {error && <div>There was an error!</div>}
          {!loading && !error && qna && qna.length > 0 && (
            <>
              <div className="text-center mb-4">
                <h1 className="text-4xl font-bold mt-4">
                  {qna[currentQuestion].title}
                </h1>
                <h4 className="text-xl mt-2 font-semibold text-gray-600 dark:text-white">
                  Question can have multiple answers
                </h4>
              </div>

              <div className="w-full md:h-[60vh] mb-10 mt-10">
                <Answer
                  options={qna[currentQuestion].options}
                  handleChange={handleAnswerChange}
                />
              </div>

              <MiniPlayer />
              <ProgessBar
                next={nextQuestion}
                prev={prevQuestion}
                progress={percentage}
                submit={submit}
              />
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default withProtected(Quiz);

