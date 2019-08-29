import React, { useState } from 'react';
import Input from './components/Input';
import TextList from './components/TextList';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';



function App() {
  const [cipheredText, setCipheredTexts] = useState([
    {
      text: 'Hello Harold',
    },
    {
      text: 'This is a test',
    }
  ]);

  const cipher = (textToCipher) => {
    const textArray = textToCipher.toUpperCase().split(""); //Splits each letter
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cipheredArray = [];
    for (let i = 0; i < textArray.length; i++) {
      if (alphabet.indexOf(textArray[i]) != -1) {
        if (alphabet.indexOf(textArray[i]) <= 13) {
          cipheredArray.push(alphabet[alphabet.indexOf(textArray[i]) + 13]);
        } else {
          cipheredArray.push(alphabet[alphabet.indexOf(textArray[i]) - 13]);
        }
      } else {
        cipheredArray.push(textArray[i]);
      }
    }

    
    console.log(cipheredArray.join(""));
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-md-8 mt-4 mx-auto ">
            <h2 className="text-capitalize text-center">The Caesar Cipher Challenge</h2>
            {cipher("Hola Harold")}
            <Input/>
            <TextList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



