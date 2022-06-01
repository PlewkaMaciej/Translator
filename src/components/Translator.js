import { useState } from "react";
import ButtonToTranslate from "./ButtonToTranslate";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/translator.css";
import TextToTranslate from "./TextToTranslate";
import TranslatedText from "./TranlatedText";
function Translator() {
    const [sentenceToTranslate, setSentenceToTranslate] = useState();
    const [translatedSentence, setTranslatedSentence] = useState()
    // useEffect(() => {
    //     const encodedParams = new URLSearchParams();
    //     encodedParams.append("q", "Hello, world!");
    //     encodedParams.append("target", "es");
    //     encodedParams.append("source", "en");

    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/x-www-form-urlencoded',
    //             'Accept-Encoding': 'application/gzip',
    //             'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    //             'X-RapidAPI-Key': '404efb8bdcmsh985bc528a694a0ep1e399djsne166064a6458'
    //         },
    //         body: encodedParams
    //     };

    //     fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));
    // }, [])
    return (
        <div >
            <div className="heading-container">
                <h1 className="translator-heading">Translator</h1>
            </div>
            <div className="container-for-both-text-area">
                <div className="container-translate-text">
                    <TextToTranslate setSentenceToTranslate={setSentenceToTranslate}/>
                </div>
                <div className="container-translate-text">
                    <TranslatedText translatedSentence={translatedSentence} />
                </div>
            </div>
            <div className="main-button-container">
            <ButtonToTranslate sentenceToTranslate={sentenceToTranslate} setTranslatedSentence={setTranslatedSentence}/>
            </div>
            <p className="information-paragraph">Because I use a free api after entering 500 letters the limit is used</p>
        </div>
    )
}
export default Translator;