"use client";

import Image from 'next/image'
import { useState } from 'react';
import { useEffect } from "react";
import { useSendTransaction, usePrepareSendTransaction, useAccount, useSignMessage, useContractRead } from 'wagmi'
import abi from './lib/abi';
import tokenAbi from './lib/tokenAbi';
import abiJson from './lib/tokenAbi.json';

const config = {
    // BRIDGE 
    // contractAddress: "0x9bed32dcf78c24D5e2D34AFeBB0b4C021C1c4805", 
    // coinAddress: "0x23D2B582755f4803493F292A03d4C008525F2492", 
    
    // pancake 
    contractAddress: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4", 
    coinAddress: "0x12BB890508c125661E03b09EC06E404bc9289040", 
    
    contractAbi: abi,
    tokenAbi: tokenAbi
}

const Bridge = () => {

    const { isConnected, address } = useAccount();
    const [ willReceive, setWillReceive ] = useState()
     // State to store the contract data
    const [contractData, setContractData] = useState(null);
    // State to store allowance data
    const [allowance, setAllowance] = useState(0);
      
    useEffect(() => {
        console.log(
            `Current connection status: ${isConnected ? "connected" : "disconnected"}`
        );
    }, [isConnected]);

    const {data: allowanceData, isError: allowanceError, isLoading : allowanceLoading} = useContractRead({
        address: config.coinAddress,
        abi: abiJson,
        functionName: 'allowance',
        args: [address.toString(), config.contractAddress],
    })

    useEffect(() => {
            console.log("allowanceLoading: " + allowanceLoading)
            console.log("allowanceError: " + allowanceError)
            console.log("allowanceData: " + allowanceData)
            if (!allowanceLoading && !allowanceError) {
                console.log("Update ")
                setAllowance(allowanceData);
            }
    }, [allowanceLoading, allowanceError, allowanceData]); 
    
        // Handle loading state
        // useEffect(() => {
        //     if (loading) {
        //     console.log('<<<<Loading...');
        //     }
        // }, [loading]);
    
        // // Handle errors
        // useEffect(() => {
        //     if (error) {
        //     console.error('>>>Error:', error);
        //     }
        // }, [error]);
    
        // // Handle successful contract call
        // useEffect(() => {
        //     console.log("datadatadata", data)
        //     if (data) {
        //     console.log('Contract Data:', data);
        //     }
        // }, [data]);

    // useContractRead hook to check allowance
    // const { data: allowanceData, isLoading: allowanceLoading, error: allowanceError , isFetching} = useContractRead(
    //     config.coinAddress,
    //     abiJson,
    //     'allowance',
    //     [address, config.contractAddress] // Replace with the spender's address
    // );

    // // Update the allowance state when data is available
    // useEffect(() => {
    //     console.log("allowanceLoading: " + allowanceLoading)
    //     console.log("allowanceError: " + allowanceError)
    //     console.log("allowanceData: " + allowanceData)
    //     console.log("isFetching: " + isFetching)
    //     if (!allowanceLoading && !allowanceError) {
    //         setAllowance(allowanceData);
    //     }
    // }, [allowanceData, allowanceLoading, allowanceError]);
    
    const handleSubmit = async () => {
        useEffect(() => {
            console.log("allowanceLoading: " + allowanceLoading)
            console.log("allowanceError: " + allowanceError)
            console.log("allowanceData: " + allowanceData)
            if (!allowanceLoading && !allowanceError) {
                setAllowance(allowanceData);
            }
        }, [allowanceLoading, allowanceError, allowanceData]); 
        console.log("allowance", allowance)
        console.log("allowance", allowanceData)
    }

    async function handleFee(event) {
        event.preventDefault();

        if(event.target.value > 0) {
            var calculateWithFee = parseFloat(event.target.value) + 1;
            setWillReceive(calculateWithFee)
        }
        else{
            setWillReceive(0)
        }
    }

  return (
    <>
         <form method="post" name="myForm" id="myForm">
                            <p className="mb-0" id="error-msg"></p>
                            <div id="simple-msg"></div>
                            <div className="grid lg:grid-cols-1">
                                <div className="mb-5">
                                    {allowance && (<div>Allowance: {allowance}</div>) }
                                    <div className="text-start">
                                        <label className="font-semibold">To Wallet Address:</label>
                                        <input name="name" id="name" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Address : -" disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="mb-5">
                                    <div className="text-start">
                                        <label className="font-semibold">Amount:</label>
                                        <input 
                                          type="number" 
                                          minLength={1}
                                          required 
                                          name="amount" 
                                          id="amount"
                                          onChange={handleFee}
                                          className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" 
                                          placeholder="Amount :"/>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="text-start">
                                        <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                            <div>
                                                <span className="text-[16px] font-medium text-slate-400 block">Will Receive</span>
                                                <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> {willReceive} ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <button type="button" onClick={handleSubmit} name="send" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full justify-center flex w-full items-center">Submit Transaction</button>
                            </div>
                        </form>
    </>
  )
}


export default Bridge;