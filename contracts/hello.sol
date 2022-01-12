pragma solidity ^0.8.1;

contract Helloworld{

    string message = "hy bhatt";

    function setMessage (string memory newMessage) public payable returns(string memory){
        message = newMessage;
        return message;
    }

    function hello() public view returns (string memory){
        return message;
    }
}