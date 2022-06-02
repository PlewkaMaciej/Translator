import { useState } from "react";
import ButtonToTranslate from "./ButtonToTranslate";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/translator.css";
import TextToTranslate from "./TextToTranslate";
import TranslatedText from "./TranlatedText";
import React, {  useRef } from 'react';
function Translator() {
    const textRef = useRef()
    const [sentenceToTranslate, setSentenceToTranslate] = useState();
    const [translatedSentence, setTranslatedSentence] = useState(null)
    return (
        <div >
            <div className="heading-container">
                <h1 className="translator-heading">Translator</h1>
            </div>
            <div className="container-for-both-text-area">
                <div className="container-translate-text">
                    <TextToTranslate textRef={textRef} setSentenceToTranslate={setSentenceToTranslate} />
                </div>
                <div className="container-translate-text">
                    <TranslatedText translatedSentence={translatedSentence}/>
                </div>
            </div>
            <div className="main-button-container">
            <ButtonToTranslate sentenceToTranslate={sentenceToTranslate}  textRef={textRef} setTranslatedSentence={setTranslatedSentence}/>
            </div>
            <p className="information-paragraph">Because I use a free api after entering 500 letters the limit is used</p>
        </div>
    )
}
export default Translator;