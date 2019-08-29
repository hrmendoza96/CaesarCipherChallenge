import React from 'react';
import Input from './components/Input';
import TextList from './components/TextList';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-md-8 mt-4 mx-auto ">
            <h2 className="text-capitalize text-center">The Caesar Cipher Challenge</h2>
            <Input/>
            <TextList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
