import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/translator.css";
function TextToTranslate(){
    return (
        <>
       <div className='text-to-translated-container'>
       <label htmlFor="text">Text to translate in Polish:</label>
<textarea className="input" type="text" id="text"  required
       minLength="50" maxLength="200" size="300"/> 
       </div>
</>
    )
}
export default TextToTranslate;