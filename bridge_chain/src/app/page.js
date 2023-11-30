"use client";

import '@rainbow-me/rainbowkit/styles.css';
import Image from 'next/image'
import Providers from './provider'
import Navbar from './navbar'
import Bridge from './bridge'
import Footer from './footer'
import bridgeIcon from '../assets/images/switch.webp'
import itemImage from '../assets/images/2.gif'
import itemAvatar from '../assets/images/avatar.jpeg'
import { useEffect } from "react";



export default function Home() {

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
                    <Image src={bridgeIcon} className="h-25 w-25 rounded-full mx-auto " alt=""/>
                  <div className="lg:me-2">
                    <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                        <Bridge></Bridge>
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
