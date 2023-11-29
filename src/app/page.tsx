import Image from 'next/image'
import Navbar from './navbar'
import Footer from './footer'
import bridgeIcon from '../assets/images/switch.webp'
import itemImage from '../assets/images/2.gif'
import itemAvatar from '../assets/images/avatar.jpeg'

import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { useAccount, useSignMessage } from "wagmi";


export default function Home() {
    // const { data, error, isLoading, signMessageAsync, variables, status } = useSignMessage();
    // const { address, isDisconnected, isConnected } = useAccount();
    const [amount, setAmount] = React.useState('')
  return (
    <>
    <Providers>
      <Navbar></Navbar>
      <div className="relative md:pt-48 pt-36 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 justify-center text-center mt-10">
                    <div className="relative">
                        <div className="relative mb-5">
                            <h1 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl">Bridge Now! <br/> Rewards <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">Token & NFTs</span></h1>

                            <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                            <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/20 dark:after:bg-violet-600/40 after:bottom-[0] after:end-[15%] after:-z-1 after:rounded-full after:animate-ping"></div>
                        </div>
                        <p className="text-slate-200 dark:text-white/70 max-w-xl mx-auto">Orbital Protocol is the first gamified Layer-2 chain that focuses on the integration of Web3 games with the Ethereum network at the lowest transaction costs with a multitude of proprietary tools.</p>
                    
                        {/* <div className="mt-8">
                            <a href="explore-one.html" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Explore now</a>
                        </div> */}
                    </div>
                </div>

                <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                    <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                    <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                </div>
            </div>
        </div>


        <section className="relative md:py-20">
          <div className="container">
              <div className="grid grid-cols-1 text-center">
                  {/* <h3 className="md:text-[30px] text-[26px] font-semibold">Bridge </h3> */}
              </div>
              <div className="grid xl:grid-cols-8 lg:grid-cols-9 mt-10 gap-[30px]">
                 
                  {/* <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                      <div className="relative overflow-hidden">
                          <div className="relative overflow-hidden rounded-lg">
                              <Image src={itemImage} className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt=""/>
                          </div>
                          <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                              <a href="item-detail.html" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                          </div>
                          <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                          </div>
                      </div>
                      <div className="mt-3">
                          <div className="flex items-center">
                              <Image src={itemAvatar} className="rounded-full h-8 w-8" alt=""/>
                              <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@StreetBoy</a>
                          </div>
                          <div className="my-3">
                              <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead #3902</a>
                          </div>
                          <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                              <div>
                                  <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                  <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                              </div>
                              <div>
                                  <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                  <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                              </div>
                          </div>
                      </div>
                  </div> */}
                    <Image src={bridgeIcon} class="h-25 w-25 rounded-full mx-auto " alt=""/>
                    <Image src={bridgeIcon} class="h-25 w-25 rounded-full mx-auto " alt=""/>
                    <Image src={bridgeIcon} class="h-25 w-25 rounded-full mx-auto " alt=""/>
                  <div className="lg:me-2">
                    <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                        <form method="post" name="myForm" id="myForm">
                            <p className="mb-0" id="error-msg"></p>
                            <div id="simple-msg"></div>
                            <div className="grid lg:grid-cols-1">
                                <div className="mb-5">
                                    <div className="text-start">
                                        <label for="name" className="font-semibold">To Wallet Address:</label>
                                        <input name="name" id="name" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Address : -" disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <div className="mb-5">
                                    <div className="text-start">
                                        <label for="subject" className="font-semibold">Amount:</label>
                                        <input onChange={(e) => setAmount(e.target.value)} type="number" name="subject" id="subject" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Amount :"/>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="text-start">
                                        <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                            <div>
                                                <span className="text-[16px] font-medium text-slate-400 block">Will Receive</span>
                                                <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <button type="submit" id="submit" name="send" className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full justify-center flex w-full items-center">Submit Transaction</button>
                            </div>
                        </form>
                    </div>
                </div>

                  {/* <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                      <div className="relative overflow-hidden">
                          <div className="relative overflow-hidden rounded-lg">
                              <Image src={itemImage} className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt=""/>
                          </div>
                          <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                              <a href="item-detail.html" className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-lightning-bolt"></i> Buy Now</a>                                
                          </div>
                          <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="mdi mdi-plus"></i></a>
                          </div>
                      </div>
                      <div className="mt-3">
                          <div className="flex items-center">
                              <Image src={itemAvatar} className="rounded-full h-8 w-8" alt=""/>
                              <a href="creator-profile.html" className="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">@StreetBoy</a>
                          </div>
                          <div className="my-3">
                              <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead #3902</a>
                          </div>
                          <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                              <div>
                                  <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                                  <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                              </div>
                              <div>
                                  <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                  <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                              </div>
                          </div>
                      </div>
                  </div> */}


              </div>
          </div>
      </section>
      <Footer></Footer>
      </Providers>
    </>
  )
}
