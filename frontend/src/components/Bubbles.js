import React from 'react';
import "../styles/Bubbles.css"
import BubbleItem from "./BubbleItem";

function Bubbles() {
  return (
    //<div className='bubbles'>
    <>
      <h1>THESE ARE BUBBLES:</h1>
      <div class="bubble-container">
        <BubbleItem
          title='Networking Event'
          about='Meet at Bruin Bear on Saturday for networking!'
        />
        <BubbleItem
          title='Internship Opportunity'
          about='Yeah this is a really cool internship, you should apply. You will get to learn about a bunch of stuff. Call 543-909-8433 for more details.'
        />
        <BubbleItem
          title='Meet Research Labs'
          about='Pretty much!'
        />
        <BubbleItem
          title='QWER Hacks'
          about='Hackathon so fun yay!'
        />
        <BubbleItem
          title='Job Opportunity'
          about='Wow jobs yes. Lots of text here. This is a super official job opportunity. Yay. Apply if you want. It will be great. Yay. Apply if you want. It will be great. More text here. Job opportunity is in Los Angeles. Near Santa Monica. Yeah. You will be doing lots of computer stuff. Yeah, it is cool. Really cool. Yeah.'
        />
        <BubbleItem
          title='Evening with Industry'
          about='Come network!'
        />
        <BubbleItem
          title='Summer Internship'
          about='New experiences yay!'
        />
        <BubbleItem
          title='Bruin Bash'
          about='Come turn up!'
        />
      </div>
    </>
  )
}

export default Bubbles;
