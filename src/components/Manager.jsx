import React, { useRef, useState, useEffect } from 'react'
import LottieIcon from './LottieIcon';
import { ToastContainer } from 'react-toastify';
import { handleSuccess, handleError } from '../../util';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {

    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({
        site: "",
        username: "",
        password: ""
    })

    const initialform = {
        site: "",
        username: "",
        password: ""
    }

    const [passwordArray, setpasswordArray] = useState([]);

    const getpassword = async () => {
        try {
            let req = await fetch("http://localhost:3000/");
            let passwords = await req.json();
            console.log(passwords);
            setpasswordArray(passwords);
        } catch (error) {
            handleError("Internal server problem", error);
        }
    }

    useEffect(() => {
        getpassword();
    }, [])


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        handleSuccess('Copied to Clipboard!')
    }

    const showPassword = () => {
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png";
            passwordRef.current.type = "password";
        } else {
            ref.current.src = "icons/eyecross.png";
            passwordRef.current.type = "text";
        }
    }

    const handleSave = async() => {
    if (form.site === '' || form.username === '' || form.password === '') {
        handleError("Every field is required!");
        return;
    }
    try {
        // delete if already any entry is there
        await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) });

        let req = await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) });
        let data = await req.json();

        const {success} = data;

        if(!success) {
            handleError("Internal server error");
        }

        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
        setform(initialform)
        console.log([...passwordArray, { ...form, id: uuidv4() }]);
        handleSuccess("password saved!")

    } catch (error) {
        handleError("Internal server error", error);
    }
}


const editPassword = (id) => {
    console.log("Password editing with id ", id)
    setform({...passwordArray.filter(item => item.id === id)[0], id: id});
    setpasswordArray(passwordArray.filter(item => item.id != id));
}


const deletePassword = async(id) => {
    let con = confirm("Do you really want to delete this password!")
    if (con) {
        try {
            let req = await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
            let data = await req.json();
    
            const {success} = data;
    
            if(!success) {
                handleError("Internal server error");
            }
    
            setpasswordArray(passwordArray.filter(item => item.id != id))
            handleSuccess("password deleted!");
    
        } catch (error) {
            handleError("Internal server error", error);
        }

        // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
    }
}

return (
    <div>
        {/* <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div> */}

        <div className='mycontainer'>

            <h1 className='text-4xl font-bold text-center'>
                <span className='text-green-500'>&lt;</span>
                <span>Pass</span>
                <span className='text-green-500'>OP/&gt;</span>
            </h1>

            <p className='text-center text-lg text-green-900'>Your own Password Manager</p>

            <div className='text-black flex flex-col p-4 gap-8 items-center'>
                <input value={form.site} placeholder='Enter Website URL' onChange={handleChange} className='bg-white rounded-full border border-green-500 p-4 py-1 w-full' type="text" name="site" />
                <div className='flex flex-col md:flex-row w-full gap-8'>
                    <input value={form.username} placeholder='Enter Username' onChange={handleChange} className='bg-white rounded-full border border-green-500 p-4 py-1 w-full' type="text" name="username" />
                    <div className='relative'>

                        <input ref={passwordRef} value={form.password} placeholder='Enter Password' onChange={handleChange} className='bg-white rounded-full border border-green-500 p-4 py-1 w-full' type="password" name="password" />
                        <span className='absolute top-[3px] right-[5px] w-[30px] h-[30px] cursor-pointer flex justify-center items-center' onClick={showPassword}>
                            <img ref={ref} className='w-[20px] h-[20px] object-contain' src="icons/eye.png" alt="show" />
                        </span>
                    </div>
                </div>
                <button onClick={handleSave} className='flex justify-center items-center bg-green-400 rounded-full gap-2 px-8 py-2 w-fit border border-green-900 hover:bg-green-500'>
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>
                    Save Password
                </button>
            </div>
            <div className='passwords'>
                <h2 className='font-bold text-xl py-4'>Your Passwords</h2>
                {passwordArray.length === 0 && <div> No Passwords to Show</div>}
                {passwordArray != 0 && <div className='overflow-x-auto mb-10 md:mb-0'>
                    <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {passwordArray.map((item, index) => (
                                <tr key={index} className="hover:bg-green-50 transition duration-300">
                                    <td className="text-center px-4 py-2 border border-gray-200">
                                        <div className="flex items-center justify-center gap-2">
                                            <a
                                                href={item.site}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-600 font-medium hover:underline"
                                            >
                                                {item.site}
                                            </a>
                                            <div className="cursor-pointer hover:scale-110 transition-transform" onClick={() => { copyText(item.site) }}>
                                                <LottieIcon />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center px-4 py-2 border border-gray-200">
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{item.username}</span>
                                            <div className="cursor-pointer hover:scale-110 transition-transform" onClick={() => { copyText(item.username) }}>
                                                <LottieIcon />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center px-4 py-2 border border-gray-200">
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{"*".repeat(item.password.length)}</span>
                                            <div className="cursor-pointer hover:scale-110 transition-transform" onClick={() => { copyText(item.password) }}>
                                                <LottieIcon />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center px-4 py-2 border border-gray-200">
                                        <span className='mx-1 cursor-pointer' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='mx-1 cursor-pointer' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table></div>}

            </div>

        </div>
        <ToastContainer />
    </div>
)
}

export default Manager
