import React from 'react'

const Nav = (props) => {

  const {
    attempt,
    correct,
    percent,
  } = props

  return (
    <>
 <header>
        <nav className="navbar">
            <div className="container-nav">
                <a href="#" className="logo">Quizzyy</a>
                <ul className="nav-links">
                    {/* <li><a href="#">Home</a></li> */}
                    <li><a href="#">attempted: {attempt}</a></li>
                    <li><a href="#">correct answers: {correct}</a></li>
                    <li><a href="#">Success: {Math.floor(percent)}%</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Nav