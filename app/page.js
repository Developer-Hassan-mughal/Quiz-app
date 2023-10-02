"use client"
import { asyncAddQuiz} from '@/store/actions/quizActions';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from '@/components/Quiz/Quiz';
import Nav from '@/components/Nav/Nav';

const page = () => {


  const [amount, setamount] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [type, settype] = useState("")
  const [allcategories, setAllcategories] = useState([]);
  const [allStates, setallStates] = useState([])

  const [from, setfrom] = useState(0)
  const [limit, setlimit] = useState(1)
  const [color, setcolor] = useState(null)
  const [red, setred] = useState(null)

  const [attempt, setattempt] = useState(0)
  const [correct, setcorrect] = useState(0)
  const [percent, setpercent] = useState(0)

  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(asyncAddQuiz(allStates));
}, [allStates]);


  const getCategories = async () => {
      try {
          const { data } = await axios.get(
              "https://opentdb.com/api_category.php"
          );
          setAllcategories(data.trivia_categories);
      } catch (error) {
          console.log(error);
      }
  };

  const CallApiHandler = (e) => {
      e.preventDefault();
      const query = {
          amount,
          category,
          difficulty,
          type
      };
      setallStates(query)
      setfrom(0)
      setlimit(1)
      setcorrect(0)

      setTimeout(() => {        
        window.scrollTo({ top: 1000, behavior: 'smooth' });
      }, 1500);
  };

  useEffect(() => {
      getCategories();
  }, []);


  return (
    <div>
      <Nav
        attempt = {attempt}
        correct = {correct}
        percent = {percent}
      />



        <div className="container">
        <h1>Create Quizzyy</h1>
        <form onSubmit={CallApiHandler}>
            <label>Amount of Questions:</label>
            <input type="number" id="amount" min="1" required value={amount}
                    onChange={(e) => setamount(e.target.value)}/>

                    <hr/>

            <label>Difficulty:</label>
            <select id="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}>
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <hr />

            <label>Category:</label>
            <select id="category" name="category"
            onChange={(e) => setCategory(e.target.value)}
            >
                    <option value="">Any Category</option>
                    {allcategories.map((c) => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))} 
            </select>

            <hr />

            <label>Question Type:</label>
            <select id="type" 
            onChange={(e) => settype(e.target.value)}
            >
                <option value="">Any type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
            </select>

            <button id="submit-btn">Start Quiz</button>
        </form>
    </div>

    <Quiz
      from = {from}
      setfrom = {setfrom}
      limit = {limit}
      setlimit = {setlimit}
      color = {color}
      setcolor = {setcolor}
      red = {red}
      setred = {setred}
      setattempt = {setattempt}
      setcorrect = {setcorrect}
      setpercent = {setpercent}
      correctt = {correct}
      attempt = {attempt}
    />

    </div>
  )
}

export default page