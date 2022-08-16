import React, {useState} from 'react';
import Heading from './Heading';
const Textutils = () => {
    const[text,setText]=useState('')
    const[color,setColor]=useState('form-control')

    const upper= () =>{
        let newText = text.toUpperCase();
        setText(newText);
    };
    const lower= () =>{
        let newText = text.toLowerCase();
        setText(newText);
    };
    const colorChange= () =>{
        let newColor ="form-control text-warning";
        setColor(newColor);
    };
    const clear= () =>{
        let newText = "";
        setText(newText);
    };
    const onchange= (event) =>{
        setText(event.target.value);
    };
  return (
    <div>
        <Heading id="textUtils" heading="TextUtils" text="Enter the text to analyze below" buttonDesign="btn btn-outline-success" buttonName1="TExt AnalYsis"/>
        <div className="row">
        <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-12 m-auto" style={{minHeight:'60vh',}}>
            <div className='my-3'> 
            <textarea className={color} rows="10" onChange={onchange} value={text} aria-label="With textarea"></textarea>
            <button type='button' className='btn btn-outline-primary my-2 mx-2' onClick={upper}> Convert to Uppercase</button>
            <button type='button' className='btn btn-outline-warning my-2 mx-2' onClick={lower}> Convert to Lowercase</button>
            <button type='button' className='btn btn-outline-danger my-2 mx-2' onClick={clear}> Clear the text box</button>
            <button type='button' className='btn btn-outline-danger my-2 mx-2' onClick={colorChange}> Change the text Color</button>
            <div className="my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <p><h3>Text Preview:</h3></p>
                <p className={color}>{text}</p>
            </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Textutils