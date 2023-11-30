"use client";

import Image from 'next/image'
import { useState } from 'react';
import { useEffect } from "react";
import { useSendTransaction, usePrepareSendTransaction, useAccount, useSignMessage, useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi';
import { parseEther, formatEther, constants, ethers } from 'ethers';
import abi from './lib/abi';
// import tokenAbi from './lib/tokenAbi';
import tokenAbi from './lib/tokenAbi.json';
import { useToast } from "@chakra-ui/react";
import { isEmpty } from 'lodash';
import {BigNumber} from 'bignumber.js'

const config = {
    // BRIDGE 
    // contractAddress: "0x9bed32dcf78c24D5e2D34AFeBB0b4C021C1c4805", 
    // coinAddress: "0x23D2B582755f4803493F292A03d4C008525F2492", 
    
    // pancake 
    contractAddress: "0x6DDFbC0140CC0d3ddbB3e6a355475533e2DAc00E", 
    coinAddress: "0xfA427b4F9C886F7DEb3940eCbB5a5EdD1cD7B8F5", //NBTC 
    
    contractAbi: abi,
    tokenAbi: tokenAbi
}

const Bridge = () => {

    const { isConnected, address } = useAccount();
    const [ willReceive, setWillReceive ] = useState(0)
    // State to store the contract data
    const [ amount, setAmount] = useState(0)
    const [ isApproved, setIsApproved ] = useState(false)    
    const toast = useToast();
    // State to store allowance data
    const [allowance, setAllowance] = useState(0);
    
      // Prepare contract write approval
      const { config: configApproval, prepareWrite } = usePrepareContractWrite({
        address: config.coinAddress,
        abi: tokenAbi,
        functionName: 'approve', // Replace with your contract function
        args: [config.contractAddress, 11579208923731619542357098500868790785326998466564056], // Replace with your function arguments
        overrides: {
            from: address,
            // Any other overrides you might need
        },
    });

    const { data: data1, write: writeApproval, isLoading: isLoadingApproved } = useContractWrite(configApproval);

     // Prepare contract write swap bridge
     const { config: configSwap } = usePrepareContractWrite({
        address: config.contractAddress,
        abi: config.contractAbi,
        functionName: 'swapAsset', // Replace with your contract function
        // address fromAsset, address dst, uint amount, bool isCOIN
        args: [config.coinAddress, address, (amount > 0 ? parseEther(amount.toString()) : 0), false], // Replace with your function arguments
        overrides: {
            from: address,
            // Any other overrides you might need
        },
    });

    const { data: txResponse, write: writeSwapAsset, isLoading: isLoadingSwap } = useContractWrite(configSwap);


    useEffect(() => {
        checkAllowance()
        console.log(
            `Current connection status: ${isConnected ? "connected" : "disconnected"}`
        );
        console.log("data1", data1)
        console.log("isLoadingApproved", isLoadingApproved, isLoadingSwap)
    }, [isConnected, data1, isLoadingApproved, isLoadingSwap]);

    const {data: allowanceData, isError: allowanceError, isLoading : allowanceLoading} = useContractRead({
        address: config.coinAddress,
        abi: tokenAbi,
        functionName: 'allowance',
        args: [address.toString(), config.contractAddress],
    })

    const checkAllowance = () => {
        console.log("allowanceData: " + allowanceData)
        console.log("allowanceLoading: " + allowanceLoading)
        console.log("allowanceError: " + allowanceError)
        if (!allowanceLoading && !allowanceError) {
            console.log("Update ")
            setAllowance(allowanceData);
        }
    }






  return (
    <>
         <form method="post" name="myForm" id="myForm">
                            <p className="mb-0" id="error-msg"></p>
                            <div id="simple-msg"></div>
                            <div className="grid lg:grid-cols-1">
                                <div className="mb-5">
                                    <div>Allowance: {allowance.toString()}</div>
                                    <div className="text-start">
                                        <label className="font-semibold">To Wallet Address:</label>
                                        <input name="name" id="name" value={address} type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Address : -" disabled/>
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
                                          maxLength={18}
                                          required 
                                          name="amount" 
                                          id="amount"
                                          value={amount}
                                          onChange={(e) => {
                                              if(isEmpty(e.target.value)) e.target.value = 0;
                                              if(isNaN(e.target.value)) e.target.value = 0;
                                              if(e.target.maxLength < e.target.value.length) e.target.value = e.target.value.slice(0, e.target.maxLength);
                                              
                                            var getAmount = parseFloat(e.target.value);
                                            setAmount(getAmount)

                                            var calculateWithFee = 0;
                                            if(getAmount > 0) calculateWithFee = getAmount - 1;                                            
                                            setWillReceive(calculateWithFee)

                                            console.log("allowance ", allowance )
                                            if (allowance == 0) {
                                                setIsApproved(false);
                                                console.log("Not Allowance")
                                            }else{

                                                var allowanceInBn = formatEther(allowance);
                                                var amountInBn = parseEther(amount.toString());
                                                
                                                console.log("amountInBn", amountInBn )
                                                console.log("allowanceInBn", allowanceInBn)
    
                                                var bnAmount = new BigNumber(amountInBn);
                                                var bnAllowance = new BigNumber(allowanceInBn);
                                                
                                                console.log("bnAmount", bnAmount )
                                                console.log("bnAllowance", bnAllowance)

                                                if(bnAmount >= bnAllowance) {
                                                    setIsApproved(true);
                                                    console.log("Allowance Approved");
                                                }
                                                else{
                                                    setIsApproved(false);
                                                    console.log("Allowance Not Approved XXX");
                                                }
                                            }
                                          }}
                                        //   onChange={handleFee}
                                          className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" 
                                          placeholder="Amount :"/>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="text-start">
                                        <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                            <div>
                                                <span className="text-[16px] font-medium text-slate-400 block">Will Receive</span>
                                                <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> {willReceive} ORBITAL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                {
                                    !isApproved ? (
                                        <button type="button" 
                                            onClick={() => writeApproval?.()}
                                            disabled={isLoadingApproved}
                                            name="send" 
                                            className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full justify-center flex w-full items-center">
                                                {
                                                    isLoadingApproved ? "Loading... " : "Enabled Transaction"
                                                }
                                        </button>

                                    ) : ( 
                                        <div>
                                            <button type="button" 
                                                onClick={() => writeSwapAsset?.()}
                                                disabled={isLoadingSwap}
                                                name="swap" 
                                                className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full justify-center flex w-full items-center">
                                                    {
                                                        isLoadingSwap ? "Loading... " : "Submit Transaction"
                                                    }
                                            </button>

                                        </div>
                                    )

                                }
                            </div>
                        </form>
    </>
  )
}


export default Bridge;