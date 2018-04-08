var userAccount;
let HEXHash = "d6bbfa551ffc6ed408c30a628176cff4896d0d434d0e1fabfa0a0c214a60352a";

var transcriptContract;
var transcript;

MyContract = {}
function init() {
  var abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_university",
          "type": "address"
        },
        {
          "name": "_hash",
          "type": "string"
        }
      ],
      "name": "isSigned",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_university",
          "type": "address"
        },
        {
          "name": "_hash",
          "type": "string"
        }
      ],
      "name": "signTranscript",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "getUniversity",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "universities",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_university",
          "type": "address"
        }
      ],
      "name": "authorize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "signatures",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ];
  var address = '0xB015214CBd5be80DFb9E53F07D27e622948BB312';
  var web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  MyContract.call = web3.eth.contract(abi).at(address);
};

function startApp(){
  var accountInterval = setInterval(function() {
    // Check if account has changed
    if (web3.eth.accounts[0] !== userAccount) {
      userAccount = web3.eth.accounts[0];
      // Call some function to update the UI with the new account
      //updateInterface();//TODO
    }
  }, 100);
};

function signTranscript() {
  alert("signTranscript");
  let account = web3.eth.accounts[0];
  let address = "0xc429cC3Ec9B840A9b46b10E49E5a223C292Bc3b5";//SET ADDRESS
  let hash = document.getElementById("transcriptFileHash").value = HEXHash;
  
  return MyContract.call.signTranscript(address, hash, function (err, result){console.log(result)})
};

function isSigned() {
  // This is going to take a while, so update the UI to let the user know
  // the transaction has been sent
  $("#txStatus").text("Verifying document. This may take a while...");

  let address = "0xc429cC3Ec9B840A9b46b10E49E5a223C292Bc3b5";//SET UNIVERSITY ADDRESS
  let hash = document.getElementById("signedFileHash").value = HEXHash;
  let account = web3.eth.accounts[0];

  return MyContract.call.isSigned(address, hash, function (err, result){
    console.log(result)
  });
};

function uploadFile(){          
  let file = document.getElementById("transcriptFile");
  HEXHash = "B1674191A88EC5CDD733E4240A81803105DC412D6C6708D53AB94FC248F4F553";
  document.getElementById("transcriptFileHash").value = HEXHash;
  alert("hello: "+ document.getElementById("transcriptFileHash").value);        
}

function uploadFileToValidate(){          
  let file = document.getElementById("signedFile");
  HEXHash = "B1674191A88EC5CDD733E4240A81803105DC412D6C6708D53AB94FC248F4F553";
  document.getElementById("signedFileHash").value = HEXHash;
  alert("hello: "+ document.getElementById("signedFileHash").value);        
}

window.addEventListener('load', function() {
    init();
});
