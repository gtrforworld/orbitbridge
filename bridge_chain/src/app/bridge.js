"use client";

import Image from 'next/image'
import { useState } from 'react';
import { useSendTransaction, usePrepareSendTransaction, useAccount, useSignMessage, useContractRead } from 'wagmi'
import { useEffect } from "react";
import abi from './lib/abi';
import tokenAbi from './lib/tokenAbi';
import abiJson from './lib/tokenAbi.json';

const config = {
    contractAddress: "0x9bed32dcf78c24D5e2D34AFeBB0b4C021C1c4805", 
    coinAddress: "0x23D2B582755f4803493F292A03d4C008525F2492", 
    contractAbi: abi,
    tokenAbi: tokenAbi
}

const Bridge = () => {
    // const { connect, connectors } = useConnect();
    const { isConnected, address } = useAccount();
    const [ willReceive, setWillReceive ] = useState()
    // const useContractRead = useContractRead();
    
    useEffect(() => {
        console.log(
            `Current connection status: ${isConnected ? "connected" : "disconnected"}`
        );
    }, [isConnected]);
    console.log("config", config)
    console.log("address", address)

    const [data, isLoading, isSuccess] = useContractRead({
        address: config.coinAddress,
        abi: abiJson,
        // functionName: 'allowance',
        args: [address, config.contractAddress],
        onError(error) {
            console.log('Error', error)
        },
    })


    async function handleSubmit(event) {
        event.preventDefault();
    
        const data = {
          amount: event.target.amount.value
        }

        if(!isLoading){
            console.log("The counter value is ",data)
        }
        // const { config } = usePrepareContractWrite({
        //     address: config.contractAddress,
        //     abi: config.contractAbi,
        //     functionName: "swapAsset",
        //     // address fromAsset, address dst, uint amount, bool isCOIN
        //     args: [config.coinAddress, address, data.amount, false],
        //     overrides: {
        //       from: address,
        //     //   value: ethers.utils.parseEther(data.amount), //the integer value should match your nft minting requirements
        //     },
        // });
    
        console.log("response", allowance)
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
         <form method="post" name="myForm" id="myForm" onSubmit={handleSubmit}>
                            <p className="mb-0" id="error-msg"></p>
                            <div id="simple-msg"></div>
                            <div className="grid lg:grid-cols-1">
                                <div className="mb-5">
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
                                <button type="submit" id="submit" name="send" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full justify-center flex w-full items-center">Submit Transaction</button>
                            </div>
                        </form>
    </>
  )
}


export default Bridge;