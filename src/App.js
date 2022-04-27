import React, {Fragment, useState} from 'react';
import Form from './componets/Form';
import Header from './componets/Header';

function App() {

  const [accountAddress, setAccountAddress] = useState("");

  return (
    <Fragment>
      <Header title="Patient Monitoring"/>
      <div className='container'>
        <Form
          accountAddress = {accountAddress}
          setAccountAddress = {setAccountAddress}
        />
      </div>
    </Fragment>
  );
}

export default App;
