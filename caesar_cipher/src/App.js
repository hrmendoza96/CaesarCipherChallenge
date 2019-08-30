import React, { useState } from 'react';
import Input from './components/Input';
import CipheredText from './components/CipheredText';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cipheredTexts, setCipheredTexts] = useState([
    {
      text: 'Hello Harold'
    },
    {
      text: 'This is a test'
    }
    ,
    {
      text: 'This is a test 2'
    }
  ]);

  const handleChange = (e) =>{
    this.setState({
      text: e.target.value
    });
  }

  const addText = (text) => {
    const newCipheredText = [...cipheredTexts, { text }];
    setCipheredTexts(newCipheredText);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent Refresh of page
    

    const addCipheredText = [...cipheredTexts, newText];
    setCipheredTexts(addCipheredText);

  }

  const cipher = (textToCipher) => {
    const textArray = textToCipher.toUpperCase().split(""); //Splits each letter
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cipheredArray = [];
    for (let i = 0; i < textArray.length; i++) {
      if (alphabet.indexOf(textArray[i]) !== -1) {
        if (alphabet.indexOf(textArray[i]) <= 13) {
          cipheredArray.push(alphabet[alphabet.indexOf(textArray[i]) + 13]);
        } else {
          cipheredArray.push(alphabet[alphabet.indexOf(textArray[i]) - 13]);
        }
      } else {
        cipheredArray.push(textArray[i]);
      }
    }


    return cipheredArray.join("");
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-md-8 mt-4 mx-auto ">
            <h2 className="text-capitalize text-center">The Caesar Cipher Challenge</h2>
            <Input addText={addText} handleSubmit={handleSubmit} />

            {
              cipheredTexts.map((cipheredText, index) => (
                cipheredText.text = cipher(cipheredText.text), //CipherText
                console.log(cipheredText)
                // <CipheredText key={index} index={index} cipheredText={cipheredText} />
              ))

            } 
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



