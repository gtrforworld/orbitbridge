import Image from 'next/image'
import smallLogo from '../assets/images/logo-orbital.webp'
import darkLogo from '../assets/images/logo-orbital.webp'
import whiteLogo from '../assets/images/logo-white.png'
import picImage from '../assets/images/1.jpeg'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  return (
    <>
        <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>
        <nav id="topnav" className="defaultscroll is-sticky">
            <div className="container">
                <Link className="logo ps-0" href="index.html">
                    <Image src={smallLogo} 
                        width={28}
                        height={28}
                        className="inline-block sm:hidden"  
                        alt="" 
                    />
                    <div className="sm:block hidden">
                        <Image src={darkLogo}
                            className="hidden dark:inline-block" 
                            alt=""
                            width={160}
                            height={1}
                         />
                    </div>
                </Link>
                <ul className="buy-button list-none mb-0">
                    {/* <li className="inline-block mb-0">
                       Connect Wallet &nbsp;
                    </li>
            
                    <li className="inline-block ps-1 mb-0">
                        <a id="connectWallet" className="btn btn-icon rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i className="uil uil-wallet"></i></a>
                    </li> */}

                    <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding: 12,
                    }}
                    >
                    <ConnectButton />
                    </div>

                </ul>
                {/* <div id="navigation">
                    <ul className="navigation-menu justify-end">
                        <li className="has-submenu parent-menu-item">
                            <a href="javascript:void(0)">Home</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="index.html" className="sub-menu-item">Home One</a></li>
                                <li><a href="index-two.html" className="sub-menu-item">Home Two</a></li>
                                <li><a href="index-three.html" className="sub-menu-item">Home Three</a></li>
                                <li><a href="index-four.html" className="sub-menu-item">Home Four <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">Light</span></a></li>
                                <li><a href="index-five.html" className="sub-menu-item">Home Five <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">Light</span></a></li>
                                <li><a href="index-six.html" className="sub-menu-item">Home Six <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">Light</span></a></li>
                                <li><a href="index-seven.html" className="sub-menu-item">Home Seven</a></li>
                                <li><a href="index-eight.html" className="sub-menu-item">Home Eight <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">Light</span></a></li>
                                <li><a href="index-nine.html" className="sub-menu-item">Home Nine</a></li>
                                <li><a href="index-ten.html" className="sub-menu-item">Home Ten <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">Light</span></a></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <a href="javascript:void(0)">Explore</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="explore-one.html" className="sub-menu-item"> Explore One</a></li>
                                <li><a href="explore-two.html" className="sub-menu-item"> Explore Two</a></li>
                                <li><a href="explore-three.html" className="sub-menu-item"> Explore Three</a></li>
                                <li><a href="auction.html" className="sub-menu-item">Live Auction</a></li>
                                <li><a href="item-detail.html" className="sub-menu-item"> Item Detail</a></li>
                                <li><a href="activity.html" className="sub-menu-item"> Activities</a></li>
                                <li><a href="collections.html" className="sub-menu-item">Collections</a></li>
                                <li><a href="upload-work.html" className="sub-menu-item">Upload Works</a></li>
                            </ul>
                        </li>

                        <li><a href="wallet.html" className="sub-menu-item">Wallet</a></li>

                        <li className="has-submenu parent-parent-menu-item">
                            <a href="javascript:void(0)">Pages</a><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><a href="aboutus.html" className="sub-menu-item">About Us</a></li>
                                <li className="has-submenu parent-menu-item"><a href="javascript:void(0)"> Creator </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="creators.html" className="sub-menu-item"> Creators</a></li>
                                        <li><a href="creator-profile.html" className="sub-menu-item"> Creator Profile</a></li>
                                        <li><a href="creator-profile-edit.html" className="sub-menu-item"> Profile Edit</a></li>
                                        <li><a href="become-creator.html" className="sub-menu-item"> Become Creator</a></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><a href="javascript:void(0)"> Blog </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="blogs.html" className="sub-menu-item"> Blogs</a></li>
                                        <li><a href="blog-detail.html" className="sub-menu-item"> Blog Detail</a></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><a href="javascript:void(0)"> Auth Pages </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="login.html" className="sub-menu-item"> Login</a></li>
                                        <li><a href="signup.html" className="sub-menu-item"> Signup</a></li>
                                        <li><a href="reset-password.html" className="sub-menu-item"> Forgot Password</a></li>
                                        <li><a href="lock-screen.html" className="sub-menu-item"> Lock Screen</a></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><a href="javascript:void(0)"> Special </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="comingsoon.html" className="sub-menu-item"> Coming Soon</a></li>
                                        <li><a href="maintenance.html" className="sub-menu-item"> Maintenance</a></li>
                                        <li><a href="error.html" className="sub-menu-item"> 404!</a></li>
                                        <li><a href="thankyou.html" className="sub-menu-item"> Thank you</a></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><a href="javascript:void(0)"> Help Center </a><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><a href="helpcenter-overview.html" className="sub-menu-item"> Overview</a></li>
                                        <li><a href="helpcenter-faqs.html" className="sub-menu-item"> FAQs</a></li>
                                        <li><a href="helpcenter-guides.html" className="sub-menu-item"> Guides</a></li>
                                        <li><a href="helpcenter-support.html" className="sub-menu-item"> Support</a></li>
                                    </ul> 
                                </li>
                                <li><a href="terms.html" className="sub-menu-item">Terms Policy</a></li>
                                <li><a href="privacy.html" className="sub-menu-item">Privacy Policy</a></li>
                            </ul>
                        </li>
                
                        <li><a href="contact.html" className="sub-menu-item">Contact</a></li>
                    </ul>
                </div> */}
            </div>
        </nav>
    </>
  )
}
