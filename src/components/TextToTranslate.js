import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/translator.css";
import React, {  useRef } from 'react';
function TextToTranslate({setSentenceToTranslate}){
    const textRef = useRef()
   const textValue=(e)=>{
    setSentenceToTranslate(e.target.value)
    }
    return (
        <>
       <div className='text-to-translated-container'>
       <label htmlFor="text">Text to translate in Polish:</label>
<textarea ref={textRef} onChange={textValue} className="input" type="text" id="text"  required
       minLength="50" maxLength="200" size="300"/> 
       </div>
</>
    )
}
export default TextToTranslate;