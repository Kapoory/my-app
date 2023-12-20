import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpclick = () =>{
       // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText (newText);
        props.showAlert('Changed to Uppercase', 'success');
    }
    const handlelowclick = () =>{
        // console.log("LowerCase was Clicked" + text);
         let newText = text.toLowerCase();
         setText (newText);
         props.showAlert('Changed to Lowercase', 'success');

     }
    const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    // setText= "newText";
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example text area</label> */}
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white': 'black'}}onChange={handleOnChange} id="myBox" rows="7" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to lowercase</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white': 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length > 0? text: 'Enter something to preview here'}</p>
    </div>
    </>
  )
}
