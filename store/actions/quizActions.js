import { addQuiz } from "../reducers/quizReducer";
import axios from "../../utils/axios";



export const asyncAddQuiz = (props) => async (dispatch,getstate) => {
    try {
        const {data} = await axios.get(`api.php?amount=${props.amount}&category=${props.category}&difficulty=${props.difficulty}&type=${props.type}`);
            try {
      
                const shuffleArray = (arr) => {
                    return arr
                        .map((a) => [Math.random(), a])
                        .sort((a, b) => a[0] - b[0])
                        .map((a) => a[1]);
                };
      
                const updatedQuiz = data.results.reduce(
                    (acc, cv) => [
                        ...acc,
                        {
                            question: cv.question,
                            answer: cv.correct_answer,
                            options: shuffleArray([
                                ...cv.incorrect_answers,
                                cv.correct_answer,
                            ]),
                        },
                    ],
                    []
                );
                dispatch(addQuiz(updatedQuiz));
              } catch (error) {
                console.log(error);
              }
    } catch (error) {
        console.log(error)
    }
}