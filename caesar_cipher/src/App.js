import React, { useState } from 'react';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Input Form
function Input({ addCipheredText }) {
  const [value, setValue] = useState(''); //fill in state through user input

  const handleSubmit = e => {
    e.preventDefault();
    value.trim();
    if(value){
      addCipheredText(value);
    }else{
      alert("Input is empty");
    }
    
    setValue(''); //Clean Input
  }
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h5>Text to Cipher</h5>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-secondary text-white">
              <i className="fas fa-keyboard"></i>
            </div>
          </div>
          <input type="text" className="form-control" placeholder="Input Text to Cipher" value={value}
            onChange={e => setValue(e.target.value)}></input>
        </div>
        <button type="submit" className="btn btn-block btn-primary mt-3">Encrypt</button>
      </form>
    </div>
  )
}

//List of Ciphered Texts
function CipheredText(cipheredText) {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6> {cipheredText.cipheredText.text} </h6>
        <div className="todo-icon">
          <span className="mx-2 text-secondary">
            <i className="fas fa-eye-slash" />
          </span>
        </div>
      </li>
    </div>
  )
}

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
      text: 'Cipher Challenge'
    }
  ]);

  const cipher = (textToCipher) => {
    const textArray = textToCipher.toUpperCase().split(""); //Splits each letter
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cipheredArray = [];
    for (let i = 0; i < textArray.length; i++) {
      if (alphabet.indexOf(textArray[i]) !== -1) {
        if (alphabet.indexOf(textArray[i]) < 13) {
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

  const addCipheredText = text => {
    cipheredTexts.map((cipheredText) => (
      cipheredText.text = cipher(cipheredText.text)
    )); //Decrypt original texts
    const newText = [...cipheredTexts, { text }];
    setCipheredTexts(newText);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-md-8 mt-4 mx-auto ">
            <h2 className="text-capitalize text-center">The Caesar Cipher Challenge</h2>
            <Input addCipheredText={addCipheredText} />
            <h3 className="text-capitalize text-center">
              Ciphered Text List
            </h3>
            {
              cipheredTexts.map((cipheredText, index) => (
                cipheredText.text = cipher(cipheredText.text), //CipherText
                <CipheredText key={index} index={index} cipheredText={cipheredText} 
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



