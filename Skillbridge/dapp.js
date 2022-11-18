//const { default: Web3 } = require("web3");

console.log("Hello Blockchain!");

const ssAddress ='0xbb947fDF23bBed7Af1aa5e434c2A18752e36DF26'

const ssABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "val",
				"type": "uint256"
			}
		],
		"name": "createValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieveVal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
window.onload = async () => {

    const Skillbridge = new web3.eth.Contract
(ssABI, ssAddress)
    let myVal = await Skillbridge.methods.retrieveVal().
call()
console.log (myVal)
  
  }


window.addEventListener('load', function(){
    if (typeof window.ethereum !== 'undefined'){
        console.log('MetaMask detected!')
        let mmDetected = document.getElementById('mm-detected');
        mmDetected.innerHTML = "MetaMask has been detected!"
        
    }else {
        console.log('theres no wallet! not available!')
        alert (" you need to install metamask or another wallet")
    }

})

var web3 = new Web3(window.ethereum)


const mmEnable = document.
getElementById('mm-connect');

mmEnable.onclick = async () => {
    await ethereum.request({ method:
    'eth_requestAccounts'})

    const mmCurrentAccount = document.
getElementById('mm-current-account');

mmCurrentAccount.innerHTML = "Here is your current account: " + ethereum.
selectedAddress
}

const ssSubmit = document.
getElementById('ss-input-button');

ssSubmit.onclick = async () => {
    
    const ssValue = document.
    getElementById ('ss-input-box').
    value;
    console.log (ssValue)

    var web3 = new Web3(window.ethereum)

Skillbridge.setProvider(window.ethereum)


await Skillbridge.methods.createValue(ssValue).
send({from: ethereum.selectedAddress})



}




