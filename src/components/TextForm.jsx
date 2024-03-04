import React, {useEffect, useState, useSyncExternalStore} from 'react'

function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was click")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoclick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
    };


    const handClearclick = ()=>{
      let newText = '';
      setText(newText)
    } 

    const handClearspaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const handleOnChange = (event)=>{
        // console.log("change data")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text');

  return (

    <>
    <div className='container'>

        <h1 className='mt-5'>{props.heading}</h1>
      
        <div className="mt-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>

        <button  type="button" className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to Upercase</button>
        <button  type="button" className="btn btn-primary mt-3 mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
        <button  type="button" className="btn btn-primary mt-3 mx-2" onClick={handClearclick}>Clear text</button>
        <button  type="button" className="btn btn-primary mt-3 mx-2" onClick={handClearspaces}>Remove Extra Spaces</button>

    </div>

    <div className='container mt-5'>
      <h1>Summary your text</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute's read time </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>


    </>

  )
}

export default TextForm
