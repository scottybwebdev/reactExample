import React from 'react'

function About() {
    return (
        <React.Fragment>
            <body class="aboutBody">
                <h1>About</h1>
                <p>This is a basic To Do List using React JS and the JSON Placeholder API.</p>
                <br>
                </br>
                <p>The to do list is initally populated with 10 placeholder to do items which can be removed by the user.  The user can then go on to formulate their own to do list for personal use.</p>
                <br>
                </br>
                <h2>References</h2>
                <ul>
                    <li>Traversy Media.  2019.  React JS Crash Course.  [Online].  Available from: <a href="https://www.youtube.com/watch?v=sBws8MSXN7A" class="aboutLinks">https://www.youtube.com/watch?v=sBws8MSXN7A</a></li>
                </ul>
            </body>    
        </React.Fragment>
    )
}

export default About;