import React from 'react';
import Popup from 'reactjs-popup';
import '../styles/NewPost.css';



export default function NewPost({ newPostTitle, setNewPostTitle, newPostContent, setNewPostContent, newPostLink, setNewPostLink, addPost }) {

  /*
  const inputProps = useInput();

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
  */

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

            <div className="container">
              Post Subject
              <input
                type='text'
                className='messageInput'
                onChange={(e) => setNewPostTitle(e.target.value)}
                placeholder='Type here :)'
                value={newPostTitle}
              />
            </div>
            <div className="container">
              Post Content

              <textarea
                type='text'
                className='messageInput'
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder='Type here :)'
                value={newPostContent}
              />
            </div>
            <div className="container">
              External Link
              <input
                type='text'
                className='messageInput'
                onChange={(e) => setNewPostLink(e.target.value)}
                placeholder='Type here :)'
                value={newPostLink}
              />
            </div>
          </div>
          <div className="ButtonContainer">
            <div className="Npbutton"
              onClick={
                () => { close(); addPost(); }
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