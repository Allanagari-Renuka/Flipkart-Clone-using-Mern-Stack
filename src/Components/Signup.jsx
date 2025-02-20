
import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Signup = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phoneno,setPhoneno]=useState("")
    const [password,setPassword]=useState("")
    const [confirmpassword,setConfirmpassword]=useState('')
    const [spanTag,setSpanTag]=useState("")
    const [correctSpan,setCorrectSpan]=useState("")

    const handleClick=async(event)=>{

        event.preventDefault();
        if(!name || !email || !phoneno || !password || !confirmpassword){
            setSpanTag("Missed some Fields"); 
            return;
        }

        if(password!==confirmpassword){
            setSpanTag("Password doesn't match");
            return;
        }

        const payload={
            username:name,
            email:email,
            phoneno:phoneno,
            password:password,
            confirmpassword:confirmpassword
        }
        try{
            const response = await axios.post("http://localhost:4000/signup", payload);
            setCorrectSpan(response?.data?.message)
        }catch(err){
            if(err.response)
                setSpanTag(err.response.data.message);
                setTimeout(()=>{
                    setCorrectSpan("")
                },2000)
            return;
        }

        // console.log(name,email,phoneno,password,confirmpassword)
        setName("");
        setEmail("");
        setPhoneno("");
        setPassword("");
        setConfirmpassword("");
        setSpanTag("");
        setTimeout(()=>{
            setCorrectSpan("")
        },2000)


    }

    return (

        <div className="relative flex flex-col rounded-xl bg-transparent items-center mt-5">
            <h4 className="block text-xl font-medium text-slate-800">
                Sign Up
            </h4>
            <form  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
                <div className="mb-1 flex flex-col gap-6">
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block mb-2 text-sm text-slate-600">
                            User Name
                        </label>
                        <input name='username' onChange={(event)=>{setName(event.target.value)}} value={name} type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
                    </div>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block mb-2 text-sm text-slate-600">
                            Email
                        </label>
                        <input name="email" onChange={(event)=>{setEmail(event.target.value)}} value={email} type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
                    </div>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block mb-2 text-sm text-slate-600">
                            Phone Number
                        </label>
                        <input name="phoneno" onChange={(event)=>{setPhoneno(event.target.value)}} value={phoneno} type="tel" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Phone Number" />
                    </div>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block mb-2 text-sm text-slate-600">
                            Password
                        </label>
                        <input name='password' onChange={(event)=>{setPassword(event.target.value)}} value={password} type="password" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
                    </div>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <label className="block mb-2 text-sm text-slate-600">
                            Confirm Password
                        </label>
                        <input name='confirmpassword' onChange={(event)=>{setConfirmpassword(event.target.value)}} value={confirmpassword} type="password" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
                    </div>
                </div>

                <button type='submit' onClick={handleClick} className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Sign Up
                </button>

                <span className='text-red-500 text-xs'>{spanTag}</span>
                <span className='text-green-400'>{correctSpan}</span>

                <p className="flex justify-center mt-6 text-sm text-slate-600">
                    Have an account?
                    <a href="/login" className="ml-1 text-sm font-semibold text-slate-700 underline">
                        Login
                    </a>
                </p>
            </form>
        </div>

    )
}

export default Signup

