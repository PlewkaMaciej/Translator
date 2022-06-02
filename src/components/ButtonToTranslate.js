import Button from 'react-bootstrap/Button';
function ButtonToTranslate({sentenceToTranslate,setTranslatedSentence,textRef}) {
    const translateText = () => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", sentenceToTranslate);
        encodedParams.append("target", "en");
        encodedParams.append("source", "pl");

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
                'X-RapidAPI-Key': '7d87bb3916msh9f5f910fcd5aee9p13fbddjsn8bb34f05b98b'
            },
            body: encodedParams
        };
       
        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
            .then(response => response.json())
            .then(data => setTranslatedSentence(data.data.translations[0].translatedText))
            .catch(err => console.error(err));
            textRef.current.value=""
    }
    return (
        <Button onClick={translateText} className='button-to-translate-text' variant="primary">Translate text</Button>
    )
}
export default ButtonToTranslate;