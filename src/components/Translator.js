import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/translator.css";
import TextToTranslate from "./TextToTranslate";
import TranslatedText from "./TranlatedText";
function Translator() {
    const [sentenceToTranslate, setSentenceToTranslate] = useState("hello");
    const [chooseLanguange, setChooseLanguange] = useState("pl")
    const [translatedSentence, setTranslatedSentence] = useState(null)
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
                <TextToTranslate />
            </div>
            <div className="container-translate-text">
                <TranslatedText />
            </div>
            </div>
        </div>
    )
}
export default Translator;