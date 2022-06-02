import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/translator.css";
function TranslatedText({translatedSentence}){
    
    return(
<div className="translated-text-container">
<p>Translated text in English:</p>
<p>{translatedSentence}</p>
</div>
    )
}
export default TranslatedText;