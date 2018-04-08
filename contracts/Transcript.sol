pragma solidity ^0.4.19;

import "/zeppelin-solidity/contracts/ownership/Ownable.sol";

contract Transcript is Ownable {
  
    address[] public universities;
    mapping(address => string) public signatures;
    mapping(address => uint) public getUniversity;
    
    modifier authorizedOnly() { 
        require(keccak256(msg.sender) == keccak256(getUniversity[msg.sender])); 
        _; 
    }
    
    function authorize(address _university) public onlyOwner {
        //make sure only owner can authorize universities
        universities.push(_university);
    }
    
    function signTranscript(address _university, string _hash) onlyOwner authorizedOnly public {
        signatures[_university] = _hash;
    }
    
    function isSigned(address _university, string _hash) public view returns (bool) {
        return (keccak256(signatures[_university]) == keccak256(_hash));
    }
}