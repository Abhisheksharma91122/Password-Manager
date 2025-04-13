import React from 'react'

const Footer = () => {
    return (
        <div className="bg-slate-800 px-4 py-1 shadow-md text-white flex flex-col md:flex-col md:justify-between md:items-center fixed bottom-0 w-full">
            {/* Logo Section */}
            <div className="logo text-2xl font-bold flex items-center gap-1 justify-center">
                <span className="text-green-500">&lt;</span>
                <span>Pass</span>
                <span className="text-green-500">OP/&gt;</span>
            </div>

            {/* Footer Note */}
            <div className="flex items-center justify-center text-sm md:text-base">
                Created with
                <img
                    src="icons/love.svg"
                    alt="love"
                    className="w-6 h-6 mx-1 invert hover:scale-110 transition-transform duration-200"
                />
                by <span className="ml-1 font-semibold">AbhishekSharma</span>
            </div>
        </div>
    )
}

export default Footer
