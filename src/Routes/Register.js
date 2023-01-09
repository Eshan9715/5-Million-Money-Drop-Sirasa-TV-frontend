import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux';
import {authActions} from '../store';

const Register = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [data, setData]= useState([{}])
  const [submit, setSubmit]= useState(false)

  const [reg, setReg] = useState({
    name:"", nickname:"" , subject:"", email:"", password: "",confirmPassword:""
  })

  useEffect(() => {
    console.log(formErrors)
    console.log(Object.keys(formErrors).length)
    if (Object.keys(formErrors).length === 0) {
      console.log(reg);
      setSubmit(true);     
    } else{
    setSubmit(false); 
    }

  }, [formErrors,reg])


 const sendRequest = async ()=> {
  const res = await axios.post("http://localhost:5000/api/user/signup",{
     name: reg.name,
     nickname: reg.nickname,
     email:reg.email,
     password: reg.password
   }).catch(err=>console.log(err))

  const data = await res.data;
   return data;
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.nickname) {
      errors.nickname = "Nickname is required!";
    }
    else if (values.nickname.length > 6) {
      errors.nickname = "nickname must be less than 6 characters!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required!";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password does not match!";
    }
    return errors;
  };



 const handleSubmit = (e)=>{
     e.preventDefault()
     setFormErrors(validate(reg));
     console.log(submit)
     submit && sendRequest()
      .then(()=>dispatch(authActions.login()))
      .then(()=>navigate('/login'))
      .then(data=>console.log(data))
      .then(data=>setData(data))

     console.log(data)
   }

   return (
 
     <div className="bg-white dark:bg-gray-900 ml-16">
        <div className="flex justify-center min-h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/5">
             <img src='https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80' alt=''/>
          </div>

          <div className="flex mt-16 w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
                 <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                     Get your game account now.</h1>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                     Lets get you all set up so you can verify your personal account and begin setting up your profile.
                 </p>
             
                 <form onSubmit={handleSubmit}  className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                     <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                         <input 
                           id='name' 
                           type="text" 
                           placeholder="John Perera" 
                           onChange={(e) => {
                              setReg({
                                  ...reg,
                                  name: e.target.value,
                              });
                              }} 
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        

                      </div>

                      <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nickname</label>
                         <input 
                           id='nickname' 
                           type="text" 
                           placeholder="JohnPR" 
                           onChange={(e) => {
                              setReg({
                              ...reg,
                              nickname: e.target.value,
                        });
                        }} 
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />

                     </div>


                      <div>
                       <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input 
                          id='email' 
                          type="email" 
                          onChange={(e) => {
                            setReg({
                                ...reg,
                                email: e.target.value,
                            });
                            }} 
                          placeholder="johnPR@example.com" 
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />

                      </div>

                      <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Well known for</label>
                         <input 
                            id='subject' 
                            type="text" 
                            onChange={(e) => {
                              setReg({
                                  ...reg,
                                  subject: e.target.value,
                              });
                              }} 
                           placeholder="Optional : Technology" 
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />

                      </div>
               
                     <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                         <input 
                           id='password' 
                           type="password" 
                           onChange={(e) => {
                                setReg({
                                    ...reg,
                                    password: e.target.value,
                                });
                                }} 
                            placeholder="Enter your password" 
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />

                     </div>

                     <div>
                         <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                         <input 
                           id='confirmpassword' 
                          type="password" 
                          onChange={(e) => {
                              setReg({
                                  ...reg,
                                  confirmpassword: e.target.value,
                              });
                              }} 
                           placeholder="Re-enter your password" 
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />

                     </div>

                     <button type='submit'
                        className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                         <span>Sign Up </span>

                         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                             <path fill-rule="evenodd"
                                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                 clip-rule="evenodd" />
                         </svg>
                     </button>                   
                 </form>
                 <p className="text-gray-200 mt-8">Already have an account?  <Link to='/login' class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                         </svg></span></Link>
                 </p>

               
             </div>
          </div>
        </div>
     </div>
   )
}

export default Register