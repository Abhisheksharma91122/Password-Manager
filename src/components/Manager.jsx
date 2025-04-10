import React, { useRef, useState, useEffect } from 'react'


const Manager = () => {

    const ref = useRef();
    const [form, setform] = useState({
        site: "",
        username: "",
        password: ""
    })
    const [passwordArray, setpasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    const showPassword = () => {
        alert("show the password");
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png";
        } else {
            ref.current.src = "icons/eyecross.png";
        }
    }

    const handleSave = () => {
        setpasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
        console.log([...passwordArray, form]);
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
                    <input value={form.site} placeholder='Enter Website URL' onChange={handleChange} className='bg-white rounded-full border border-green-500 p-4 py-1 w-full' type="text" name="site" />
                    <div className='flex w-full gap-8'>
                        <input value={form.username} placeholder='Enter Username' onChange={handleChange} className='bg-white rounded-full border border-green-500 p-4 py-1 w-full' type="text" name="username" />
                        <div className='relative'>

                            <input value={form.password} placeholder='Enter Password' onChange={handleChange} className='bg-white rounded-full border border-green-500 p-4 py-1 w-full' type="text" name="password" />
                            <span className='absolute top-[3px] right-[5px] w-[30px] h-[30px] cursor-pointer flex justify-center items-center' onClick={showPassword}>
                                <img ref={ref} className='w-[20px] h-[20px] object-contain' src="icons/eyecross.png" alt="show" />
                            </span>
                        </div>
                    </div>
                    <button onClick={handleSave} className='flex justify-center items-center bg-green-400 rounded-full gap-2 px-8 py-2 w-fit border border-green-900 hover:bg-green-500'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
                <div className='passwords'>
                    <h2 className='font-bold text-xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No Passwords to Show</div>}
                    {passwordArray != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((items, index) => {
                                return <tr>
                                    <td className='text-center w-32 py-2 border border-white'><a href={items.site} target='_blank'>{items.site}</a></td>
                                    <td className='text-center w-32 py-2 border border-white'>{items.username}</td>
                                    <td className='text-center w-32 py-2 border border-white'>{items.password}</td>
                                </tr>
                            })}

                        </tbody>
                    </table>}

                </div>

            </div>
        </div>
    )
}

export default Manager
