import React, { useRef } from 'react'


const Manager = () => {

    const ref = useRef();

    const showPassword = ()=>{
        alert("show the password");
        if(ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png";
        } else {
            ref.current.src = "icons/eyecross.png";
        }
    }
    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className='mycontainer'>

                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>

                <p className='text-center text-lg text-green-900'>Your own Password Manager</p>

                <div className='text-black flex flex-col p-4 gap-8 items-center'>
                    <input placeholder='Enter Website URL' className='bg-white rounded-full border border-green-500 p-4 py-1 w-full' type="text" name="" id="" />
                    <div className='flex w-full gap-8'>
                        <input placeholder='Enter Username' className='bg-white rounded-full border border-green-500 p-4 py-1 w-full' type="text" name="" id="" />
                        <div className='relative'>

                        <input placeholder='Enter Password' className='bg-white rounded-full border border-green-500 p-4 py-1 w-full' type="text" name="" id="" />
                        <span className='absolute top-[3px] right-[5px] cursor-pointer' onClick={showPassword}>
                            <img ref={ref} className='p-1' width={26} src="icons/eyecross.png" alt="show" />
                        </span>
                        </div>
                    </div>
                    <button className='flex justify-center items-center bg-green-400 rounded-full gap-2 px-8 py-2 w-fit border border-green-900 hover:bg-green-500'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Manager
