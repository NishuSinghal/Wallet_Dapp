import { useState, useEffect } from "react";
import Web3 from "web3";
import Welcome from "./components/Welcome.js";
import Accounts from "./components/Accounts.js";
import SendEther from "./components/SendEther.js";
import "./App.css";

function App() {
  const [web3, setWeb3] = useState(null);
  const [account,setAccount]=useState(null);

  function setAddress(address){
    setAccount(address)
  }
  useEffect(() => {
    const init = async () => {
      try {
        const web3 = new Web3("http://127.0.0.1:7545");
        setWeb3(web3);
        // console.log(state);
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, []);
  return (
    <div className="Flex">
      <div className="welMargin">
        <Welcome />
      </div>
      <div className="Account">
        <Accounts setAddress={setAddress} web3={web3}/>
      </div>

      <div>
        <SendEther />
      </div>
    </div>
  );
};
export default App;
