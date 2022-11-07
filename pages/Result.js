import Summary from "../components/result component/Summary";
import Analysis from "../components/result component/Analysis";
import Head from "next/head";
import Layout from "../components/Layout";
import { withProtected } from "../components/route";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import useAnswers from "../hook/useAnswers";
import Loading from "../components/loading";
import _ from "lodash";

const Result = () => {
  const router = useRouter();
  const id = router.query["id"];

  const { qna } = useAuth();
  // console.log(qna[3]);

  const { loading, error, answers } = useAnswers(id);
  // console.log(answers);

  function calculate() {
    var score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <>
      <Head>
        <title>Result Page</title>
      </Head>

      <Layout>
        <>
          {loading && <Loading />}
          {error && <div>There was an error!</div>}
          {answers && qna && answers.length && qna.length > 0 && (
            <>
              <div className="mx-5 md:mx-10 dark:bg-slate-700 dark:text-black">
                <Summary score={userScore} noq={answers.length} />

                {/* <Summary /> */}
                <Analysis />
              </div>
            </>
          )}
        </>
      </Layout>
    </>
  );
};

export default withProtected(Result);
