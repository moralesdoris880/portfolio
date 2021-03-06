import React,{useState} from "react"; 

function Home({burgerking}){
    const[display,setDisplay]=useState("none");
    
    return(
        <div>
            <div id="top">
                <img id="pfp" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/275614533_379443737334355_186047330017330400_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=SEJUZ2u6gE4AX_O6qJl&_nc_ht=scontent-lga3-1.xx&oh=00_AT_aRn4zfnn3QyZMwpf23s2Z5VGnLx-K-Io4KYCUqNysWg&oe=622ED795" alt="Doris"></img>
                <div className="postit">
                <h1>Hi, I'm Doris</h1>
                <h2>I'm a Software Engineer<br/> from New York.</h2>
                <a href="/About">About Me</a>
                </div>
            </div>
            <div id="middle">
            <a href="#down"><img id="arrow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Arrow_Up.svg/1200px-Green_Arrow_Up.svg.png" ></img></a>
            </div>
            <div id="down">
                <h1>Projects</h1>
                <div>
                <img src="./cjfishguide.png"></img>
                <p>CJ's Fishing Guide</p>
                <p>A single page application that serves as a guide for Animal Crossing: New Horizons.</p>
                </div>
                <div>
                <img></img>
                <p>Momo</p>
                <p>A single page application that </p>
                </div>
                <div>
                <img></img>
                <p>Hello, Discord</p>
                <p>A Discord bot that welcomes new users to a discord server.</p>
                </div>
                <a href="/Projects">See more Projects</a>
            </div>
        </div>
        
    )
}

export default Home;