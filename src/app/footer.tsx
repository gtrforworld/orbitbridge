import Image from 'next/image'

export default function Footer() {
  return (
   <>
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200 mt-24">
        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
            <div className="container text-center">
                <div className="grid md:grid-cols-2 items-center gap-6">
                    <div className="md:text-start text-center">
                        <p className="mb-0 text-gray-300 text-sm">Copyright © 2023 Orbital Protocol Inc. All Rights Reserved </p>
                    </div>

                    <ul className="list-none md:text-end text-center">
                        <li className="inline"><a href="https://twitter.com/OrbitalProtocol" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><i className="uil uil-telegram align-middle" title="telegram"></i></a></li>
                        <li className="inline"><a href="https://twitter.com/OrbitalProtocol" target="_blank" className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
   </>
  )
}
