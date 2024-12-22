import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {

    const ref = useRef()
    const passref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let password = localStorage.getItem("password")
        if (password) {
            setPasswordArray(JSON.parse(password))
        }
    }, [])


    const showpassword = () => {
        if (ref.current.src.includes("/icons/eyecross.png")) {
            ref.current.src = "/icons/eye.png"
            passref.current.type = "password"
        }
        else {
            ref.current.src = "/icons/eyecross.png"
            passref.current.type = "text"
        }
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const savepassword = () => {
        if (form.site === '' || form.username === '' || form.password === '') {
            toast.dismiss();
            toast('🦄 Please fill all the fields!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem('password', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setform({ site: "", username: "", password: "" })
            
        }
        // console.log([...passwordArray, form]);
    }

    const deletepassword = (id) => {
        // console.log("deleting", id);
        let c = confirm('Are you sure you want to delete this password?')
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem('password', JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }

        // console.log([...passwordArray, form]);
    }

    const editpassword = (id) => {
        // console.log("editing", id);

        setform(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))

        // console.log([...passwordArray, form]);
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast.dismiss();
        toast('🦄 copied to clipboard', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(85,185,85,0.3),rgba(255,255,255,0))]"></div>

            <div className="mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>OP/&gt;</span>
                </h1>
                <p className='text-green-800 text-center'>Your own password manager</p>

                <div className="text-black  flex flex-col p-4">
                    <input value={form.site} onChange={handlechange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full px-3 py-2' type="text" name="site" id="" />
                    <div className="relative flex gap-3 py-2">
                        <input value={form.username} onChange={handlechange} placeholder='Enter username' className='rounded-full border border-green-500 w-1/3 px-3 py-2' type="text" name='username' />
                        <div className="relative">
                            <input ref={passref} value={form.password} onChange={handlechange} placeholder='Enter password' className='rounded-full border border-green-500 w-[120%] px-3 py-2' type="password" name='password' />
                            <span className='cursor-pointer absolute right-[-30px] top-[6px]' onClick={showpassword}>
                                <img ref={ref} className='p-1' width={30} src="public\icons\eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savepassword} className='flex gap-x-2 justify-center items-center bg-green-500 rounded-full border-2 border-green-900 mt-2 px-4 py-1 w-fit hover:bg-green-400'>
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="click"
                            stroke="bold"
                            state="hover-swirl"
                            colors="primary:#121331,secondary:#000000">
                        </lord-icon>
                        Save Password
                    </button>

                    <div className='table px-1'>
                        <h2 className='text-xl font-bold py-4'>Your Passwords</h2>
                        {passwordArray.length === 0 && <div>No passwords to show</div>}

                        {passwordArray.length != 0 && <table className="table-auto w-full rounded-lg overflow-hidden">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="text-left px-2 py-2">Site</th>
                                    <th className="text-left py-2">Username</th>
                                    <th className="text-left py-2">Password</th>
                                    <th className="text-left py-2 px-2 flex justify-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-100">
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className="border-y-2 border-white px-2 py-2">
                                            <div className='flex items-center justify-between w-[90%]' onClick={() => { copyText(item.site) }}>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='cursor-pointer'>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/jectmwqf.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        state="hover-squeeze"
                                                        colors="primary:#121331,secondary:#166534"
                                                        style={{ "width": "25px", "height": "25px", "margin": "0 8px", "paddingTop": "2px" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-y-2 border-white py-2">
                                            <div className='flex items-center justify-between w-[80%]' onClick={() => { copyText(item.username) }}><span>{item.username}</span>
                                                <div className='cursor-pointer'>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/jectmwqf.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        state="hover-squeeze"
                                                        colors="primary:#121331,secondary:#166534"
                                                        style={{ "width": "25px", "height": "25px", "margin": "0 8px", "paddingTop": "2px" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-y-2 border-white py-2">
                                            <div className='flex items-center justify-between w-[80%]' onClick={() => { copyText(item.password) }}>
                                                <span>{item.password}</span>
                                                <div className='cursor-pointer'>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/jectmwqf.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        state="hover-squeeze"
                                                        colors="primary:#121331,secondary:#166534"
                                                        style={{ "width": "25px", "height": "25px", "margin": "0 8px", "paddingTop": "2px" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>

                                        </td>
                                        <td className="border-y-2 border-white py-2">
                                            <div className='flex gap-3 justify-end px-2'>
                                                <span className='cursor-pointer' onClick={() => { editpassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/exymduqj.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        state="hover-line"
                                                        colors="primary:#121331,secondary:#166534"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </span>
                                                <span className='cursor-pointer' onClick={() => { deletepassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/hwjcdycb.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        colors="primary:#121331,secondary:#166534"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager
