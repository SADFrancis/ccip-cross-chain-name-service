// test/demo.t.sol
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import {Test, console2} from "../lib/forge-std/src/Test.sol";
import {IRouterClient, WETH9, LinkToken, BurnMintERC677Helper} from "@chainlink/local/src/ccip/CCIPLocalSimulator.sol";
import {CCIPLocalSimulator} from "@chainlink/local/src/ccip/CCIPLocalSimulator.sol";
import {CrossChainNameServiceLookup} from "../contracts/CrossChainNameServiceLookup.sol";
import {CrossChainNameServiceReceiver} from "../contracts/CrossChainNameServiceReceiver.sol";
import {CrossChainNameServiceRegister} from "../contracts/CrossChainNameServiceRegister.sol";

contract Demo is Test {
    CCIPLocalSimulator public ccipLocalSimulator;
    CrossChainNameServiceLookup public ccnsLookupSource;
    CrossChainNameServiceLookup public ccnsLookupDestination;
    CrossChainNameServiceReceiver public ccnsReceiver;
    CrossChainNameServiceRegister public ccnsRegister;
    uint64 public localChainSelector; // will be used for both the source and destination chain
    uint256 public immutable GAS_LIMIT = 200_000;


    function setUp() public {

        ccipLocalSimulator = new CCIPLocalSimulator();
        (
            uint64 chainSelector,
            IRouterClient sourceRouter,
            IRouterClient destinationRouter,
            WETH9 wrappedNative,
            LinkToken linkToken,
            BurnMintERC677Helper ccipBnM,
            BurnMintERC677Helper ccipLnM
        ) = ccipLocalSimulator.configuration();


        //ccipLocalSimulator.requestLinkFromFaucet(receiver, amount);
    
        localChainSelector = chainSelector; // will be used on both the source and destination
        ccnsLookupSource = new CrossChainNameServiceLookup(); // source chain
        ccnsRegister = new CrossChainNameServiceRegister(
            address(sourceRouter), 
            address(ccnsLookupSource)
        ); // source
        ccnsLookupDestination = new CrossChainNameServiceLookup(); // destination chain
        ccnsReceiver = new CrossChainNameServiceReceiver(
            address(sourceRouter), 
            address(ccnsLookupDestination), 
            /*uint64*/chainSelector
        ); // destination chain

        ccipLocalSimulator.requestLinkFromFaucet(address(ccnsRegister), 10 ether);
        ccipLocalSimulator.requestLinkFromFaucet(address(ccnsReceiver), 10 ether);

    
    }


    function testCrossChainLookUpLocal() public{
        
        // call configuration() to get Router contract address X

        // instances created of CCNSRegister, CCNSReceiver, CCNSLookup X

        // call enableChain (on ccNSRegister)

        ccnsRegister.enableChain(localChainSelector,address(ccnsReceiver),GAS_LIMIT);

        // call setCrossChainNameServiceAdddress of the CCNSLookup contracts

        ccnsLookupSource.setCrossChainNameServiceAddress(address(ccnsRegister));
        ccnsLookupDestination.setCrossChainNameServiceAddress(address(ccnsReceiver));

        // call register() and provide alice.ccns

        ccnsRegister.register("alice.ccns");
        address sourceAliceAddress = ccnsLookupSource.lookup("alice.ccns");
        console2.log("Source address look up and then destination address look up");
        console2.log(sourceAliceAddress);
        address destinationAliceAddress = ccnsLookupDestination.lookup("alice.ccns");
        console2.log(destinationAliceAddress);
        assertEq(sourceAliceAddress,destinationAliceAddress, "Assert that the alice.ccns's EOA was registered on the source chain and can be found on the destination chain");


    } 


}