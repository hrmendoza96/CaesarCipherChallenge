import React, { useState } from 'react';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function Input() {
  return (
    <div className="card card-body my-3">
      <form onSubmit={}>
        <div className="mb-3">
          <h5>Text to Cipher</h5>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-secondary text-white">
              <i className="fas fa-keyboard"></i>
            </div>
          </div>
          <input type="text" className="form-control" placeholder="Input Text to Cipher"></input>
        </div>
        <button type="submit" className="btn btn-block btn-primary mt-3">Encrypt</button>
      </form>
    </div>
  )
}

function CipheredText(cipheredText, index) {
  return (
    <li className="list-group-item d-flex justify-content-between my-2">
      <h6> {cipheredText.text} </h6>
      <div className="todo-icon">
        <span className="mx-2 text-primary">
          <i className="fas fa-eye-slash" />
        </span>
        <span className="mx-2 text-danger">
          <i className="fas fa-trash" />
        </span>
      </div>
    </li>
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
      text: 'This is a test 2'
    }
  ]);

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
            <Input/>

            {
              cipheredTexts.map((cipheredText, index) => (
                cipheredText.text = cipher(cipheredText.text), //CipherText
                <CipheredText key={index} index={index} cipheredText={cipheredText} />
              ))

            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



