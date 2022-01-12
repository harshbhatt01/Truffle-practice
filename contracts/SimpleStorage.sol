// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract SimpStor{
    string data;

    function setdata(string memory _data) public {
        data = _data;
    } 

    function getdata() public view returns(string memory){
        return data;
    }
}