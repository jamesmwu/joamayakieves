import React from 'react';
import "../styles/Bubbles.css"
import BubbleItem from "./BubbleItem";

function Bubbles() {
  return (
    <>
      <div className="bubble-container">
        <BubbleItem
          title='Networking Event. A super long title. It wraps around wow this is amazing!'
          author='Joana Fang'
          about='Meet at Bruin Bear on Saturday for networking! Now we can make the about section really long too. Oh my it stretches the bubble how nice!'
        />
        <BubbleItem
          title='Internship Opportunity'
          author='James Wu'
          about='Yeah this is a really cool internship, you should apply. You will get to learn about a bunch of stuff. Call 543-909-8433 for more details.'
        />
        <BubbleItem
          title='Meet Research Labs'
          author='Maya Balakrishnan'
          about='Pretty much!'
        />
        <BubbleItem
          title='QWER Hacks'
          author='Aki Hasegawa-Johnson'
          about='Hackathon so fun yay!'
        />
        <BubbleItem
          title='Job Opportunity'
          author='Genevieve Chin'
          about='Wow jobs yes. Lots of text here. This is a super official job opportunity. Yay. Apply if you want. It will be great. Yay. Apply if you want. It will be great. More text here. Job opportunity is in Los Angeles. Near Santa Monica. Yeah. You will be doing lots of computer stuff. Yeah, it is cool. Really cool. Yeah.'
        />
        <BubbleItem
          title='Evening with Industry'
          author='Maya Balakrishnan'
          about='Come network!'
        />
        <BubbleItem
          title='Summer Internship'
          author='Genevieve Chin'
          about='New experiences yay!'
        />
        <BubbleItem
          title='Bruin Bash'
          author='Aki Hasegawa-Johnson'
          about='Come turn up!'
        />
      </div>
    </>
  )
}

export default Bubbles;
