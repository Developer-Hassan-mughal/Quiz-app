import React from 'react'
import { useSelector } from 'react-redux';


const Quiz = (props) => {

    const {
        from,
        setfrom,
        limit,
        setlimit,
        color,
        setcolor,
        red,
        setred,
        setattempt,
        setcorrect,
        setpercent,
        correctt,

    } = props

  const { quiz } = useSelector((state) => state.quizReducer)
  var ans = correctt

const correct = (e, elem, index)=>{
    setcolor(elem+e.question+index)
    setred(null)
    setTimeout(() => {
        
        const start = from+1
        const end = limit+1
        ans = correctt+1
        setfrom(start)
        setlimit(end)
        setattempt(start)
        setcorrect(ans)
        
        const ratio = ans * 100 / start
        setpercent(ratio)
        
    }, 800);
}


const incorrect = (e, elem , index)=>{
    setred(elem+index+e.question)
    const answer = e.options.map((a,index)=> e.answer === a ? setcolor(a+e.question+index) 
    : '')

    setTimeout(() => {
        
        const start = from+1
        const end = limit+1
        setfrom(start)
        setlimit(end)
        setattempt(start)

        const ratio = ans * 100 / start
        setpercent(ratio)
        
    }, 800);
}

  return (
    <>
        {quiz.length > 0 ? 
                    
            <div className="container">
                <h1>Quizzyy</h1>
                {quiz.length > 0 ? quiz.slice(from, limit).map((e , index)=>(

                    <div className="question" key={index}>
                        <p><span><b>Question {limit}</b></span> <br />{e.question}</p>
                        <ul className="options">
                            {e.options.map((elem , index)=>(

                                <li onClick={()=>{elem === e.answer ? correct(e, elem , index) : incorrect(e , elem , index)}} 
                                    key={index} 
                                    style={{
                                        backgroundColor: 
                                            color === e.answer + e.question + index                                                                                                                       ? "#32CD32" :
                                            red === elem + index + e.question ? "red" : 
                                            "white"                                        
                                    }}
                                    className="option"
                                >
                                    {index+1}. {elem}
                                </li>

                            ))}                               
                        </ul>
                    </div>
                ))
                :
                <h2 style={{color : 'white'}}>Loading...</h2>}
                
            </div>

        : ""}

    </>
  )
}

export default Quiz