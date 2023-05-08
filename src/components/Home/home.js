import React from 'react'
import map from '../../assets/Pickup_Illustration.png'
import { BsInstagram } from "react-icons/bs";

import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa";
import  { useState} from 'react'
import Axios from "axios";

const Home =() =>{
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [formErrors,setFormErrors]=useState({})
//     const [isSubmit,setIsSubmit]=useState(false)
//     const data={name,email}
//     useEffect(() => {
//       if (Object.keys(formErrors).length === 0 && isSubmit) {
//         console.log(name,email)
//       }
//     },[data])
  
//     const onSubmitForm = async (e) => {
//       console.log(data)
//       e.preventDefault()
//       setIsSubmit(true)
//       setFormErrors(validate(data))
//       Axios.post("http://localhost:4600/", {name,email}).then(
//         (res) => console.log(res)
//       );
//       setEmail("")
//       setName("")
//       console.log(name,email)
//     }
//     const validate = (values) => {
//       const errors = {}
//       if (!values.name) {
//         errors.name="*name is Required"
//       }
//       if (!values.email) {
//         errors.email="*Email is Required"
//       }
//       return errors
//     }
//   return (
        
// <div className=' flex bg-black text-white h-auto p-5 lg:p-10 flex-col '>
//     <div className=' sm:flex-wrap lg:text-left sm:text-center px-4 bg-black'>
//         <h1 className='text-4xl leading-relaxed mt-2 text-white font-bold'>
//         Vehicle Maintenance <br/> From The Comfort of <br/>Your Home</h1>
//         <p className=' text-gray-500 mt-2'>
//         Open Auto Soothes the hassle OF maintaining <br/> your vehicle and helps you deal with <br/>unexpected repairs worry free
//         </p> 
         
//     <form method="post" className='flex flex-col mt-5' onSubmit={onSubmitForm}>
//     <input type="text" 
//     value={name} 
//     onChange={(e) => setName(e.target.value)}
//      placeholder='Enter your name' 
//      className='text-white outline-none mt-4 mb-4 bg-transparent border rounded-full p-4 pl-8 w-[320px]'></input>
//     <input 
//     type="email" 
//     value={email}
//     onChange={(e)=>setEmail(e.target.value)} 
//     placeholder='Enter your Email'
//     className='text-white outline-none bg-transparent border rounded-full p-4 pl-8 w-[320px]'></input>

//     <div>
//     <button type="submit" className='text-white outline-none mt-4 mb-4 text-center bg-transparent border font-bold cursor-pointer rounded-full p-3 pl-6 w-[320px] hover:bg-purple-500 hover:border-0'>submit</button> 
//     </div>
//     </form>
//     </div>
//     <div className='flex justify-center  width-7  max-h-100 max-auto mr-7 lg:text-right'>
//     <img src={map} className=' "w-auto lg:w-2/4 mt-5' alt="map"/>
//     </div>
//     <div className="flex gap-5 mb-5 text-white self-center lg:self-end mt-5">
//  <ImFacebook className="lg:text-2xl text-xl" />
//  <ImTwitter className="lg:text-2xl text-xl" />
//  <ImYoutube className="lg:text-2xl text-xl" />
//  <ImLinkedin className="lg:text-2xl text-xl" />
//  <BsInstagram className="lg:text-2xl text-xl" />
// </div>
// </div>


//   )
const initialState = { name: "", email: "" };
  const [formVal, setForm] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formVal, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
 
    setFormErrors(validate(formVal));

    Axios.post("http://localhost:4600/",{userName:formVal.name,userEmail : formVal.email})


  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "UserName is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } 

    return errors;
  };


  return (
    <div>
    <div className=" bg-black sm:text-center text-white p-4 justify-centre lg:p-9 flex flex-col">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:text-start">
        <div className='sm:items-center'>
          <h1 className="lg:text-5xl sm:text-center font-bold mb-4 text-4xl">
            Vehicle Maintenance 
             From The Comfort of 
              Your Home
          </h1>
          <p className="mb-4 sm:text-center text-gray-400">
            Open Auto Soothes the hassels of maintaining your vehicle and helps
            you deal with unexpected repairs 
            worry-free.
          </p>

          <form className="flex flex-col mt-5 " onSubmit={submit}>
            <input
              className="p-2 rounded-full mt-4 mb-4 text-white bg-transparent border w-auto lg:w-2/5"
              type="text"
              name="name"
              value={formVal.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
            /><p>{formErrors.name}</p>
            <input
              className="text-white  p-2 rounded-full mt-4 mb-4 bg-transparent border w-auto lg:w-2/5" placeholder="Enter Your Email"
              name="email" value={formVal.email}
              onChange={handleChange}/><p>{formErrors.email}</p>
          
             <button type="submit" className="p-2 rounded-full mt-4 mb-4 text-white bg-transparent border w-auto lg:w-2/5 hover:bg-purple-500 hover:border-0" >Submit</button> 
          </form>
        </div>
        <img src={map} alt="" className="w-auto lg:w-2/4 mt-5" />
      </div>

      <div className="flex self-center space-x-4 lg:self-end mt-5">
        <FaFacebookF className="lg:text-600px " />
        <AiOutlineTwitter className="lg:text-600xl " />
        <AiFillYoutube className="lg:text-600xl " />
        <AiFillLinkedin className="lg:text-600xl" />
        <BsInstagram className="lg:text-600xl" />
      </div>
    </div><hr/>
    </div>
  );
}

export default Home