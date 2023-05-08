import "./Main.css";

function Accounts({setAddress,web3}) {

  useEffect(() => {
    async function allAccounts(){
      let select=document.querySelector("#selectNumber");
      let options=web3.eth.getAccounts();
      for(let i=0;i<options.length;i++){
        let opt=options[i];
        let element=document.createElement("option");
        element.textContent=opt;
        element.value=opt;
        select.appendChild(element)
      }
    }
    web3 && allAccounts();
  }, [web3])
  
  return (
    <>
      <form className="label1" id="myForm">
        <label htmlFor="">Select an account</label>
        <select className="innerBox" id="selectNumber">
          <option></option>
        </select>
      </form>
      <span className="conAc">Connected Account: None</span>
      <br></br>
      <span className="acBal">Account Balance:0 ether</span>
      <br></br>
      <span className="provider">Provider : None</span>
    </>
  );
}

export default Accounts;
