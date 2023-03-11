import React, { useState } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import '../styles/NewPost.css';



export default function NewPost() {

  const inputProps = useInput();

  // Styling a regular HTML input
  const StyledInput = styled.input`
    font-family: 'Karla', sans-serif;
    background: #cce9fd;
    display: block;
    margin: 10px 10px;
    border: 2px #6d9ced;
    border-radius: 5px;
    padding: 10px;
    width: 91%;
    `;



  // Creating a custom hook
  function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };

  }

  return (

    <Popup trigger={
      <div className="Homebutton">
        +
      </div>

    }

      modal nested>

      {close => (

        <div className='modal'>
          <div className='content'>

            <div>
              Post Subject
              <StyledInput
                {...inputProps}
                placeholder="Type here :)"
              />
              <span> {inputProps.value} </span>
            </div>
            <div>
              External Link
              <StyledInput
                {...inputProps}
                placeholder="Type here !"
              />
              <span> {inputProps.value} </span>
            </div>
            <div>
              Post Body
              <StyledInput
                {...inputProps}
                placeholder="Type here !"
              />
              <span> {inputProps.value} </span>
            </div>
          </div>
          <div>
            <div className="Npbutton"
              onClick={
                close
              }>
              Submit
            </div>
            <div className="Closeb"
              onClick={
                close
              }>
              Close

            </div>


          </div>
        </div>


      )




      }
    </Popup>


  );
}