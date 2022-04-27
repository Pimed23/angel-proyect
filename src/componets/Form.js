import React from 'react';
import { useEffect } from 'react';

const getAccount = async () => {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    const account = accounts[0];
    return account;
}

const Formulario = ({accountAddress, setAccountAddress}) => {

    React.state = {fileUrl: ''}
    useEffect(() => {
        Storage.get('heartbeat')
        .then(data => {
            this.setState({
                fileUrl: data
            })
            console.log(data);
        })
        .catch(err => {
            console.log('Error fetching data...', err);
        })
    });

    const connectWallet = async (event) => {
        event.preventDefault();
        if (typeof window.ethereum !== 'undefined') {
            getAccount().then((response) => {
                console.log(response);
                setAccountAddress(response);
            });

        } else {
            alert("Metamask is not installed");
        }
    }

    return (
        <form>
          <div className="row">
              <div>
                  <label>Connect to Metamask</label>
                  <button className='u-full-width' onClick={connectWallet}>
                    {!!accountAddress ? "Disconnect" : "Connect Wallet"}
                  </button>
              </div>
              <div>
                  <p></p>
                  <label>Wallet Address</label>
                  <p className="mensajes" type="text" readOnly>{!!accountAddress ? accountAddress : "---"}</p>
              </div>
              <div>
                  <label>Patient Data</label>
                  <textarea className='u-full-width'></textarea>
              </div>
          </div>
  </form>
    );
}
 
export default Formulario;