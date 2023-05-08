import React from 'react'
import phone from '../../assets/picku service.png'
import {IoIosCall} from 'react-icons/io';
import {CiMail} from 'react-icons/ci';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"


function focus() {
  return (
  <div className="bg-[#272727] sm:item-center items-center text-white p-9">
      <div className="flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-around lg:items-center lg:text-start">
        <div className="lg:w-1/2 w-auto">
          <h1 className="font-sans lg:text-5xl font-bold mb-4  text-4xl ">
            Focused on 
            Time Saving
          </h1>
          <p className="mb-4 sm:text-center text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s when an unknown printer took a gully of type and
            scramble it to make a type specimen book.It has survived not only
            five centuries,but also the leap into electronic
            typesetting,remaining essentially unchanged .It was
          </p>

          <button className='border border-solid border-white text-[15px] rounded-full h-12 mt-8 w-[320px] ml-0 p-3 mb-4 text-white' type="submit">Download the mobile app</button>
        </div>

        <img src={phone} alt="" className="lg:w-1/3 w-auto" />
      </div>

      <div className="flex lg:justify-between lg:items-center lg:flex-row   flex-col mt-10">
        <h1 className="lg:text-3xl text-center text-4xl font-bold ">
          Open Auto
        </h1>
        <div className="flex space-x-9  text-center justify-between mt-8 lg:mt-0">
          <div className="flex justify-center items-center">
          <IoIosCall className='text-white-500 '/>
         <h6 className=' text-white-500'>+7695864558</h6>
          </div>
          <div className="flex justify-center items-center ">
          <CiMail className='text-white-500' /><h1>service@openauto.ca</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between  mt-3">
        <p className="self-center">Open Auto @ all rights reserved</p>
        <div className="flex visible lg:hidden justify-between w-full mt-8 lg:mt-0">
          <p>Privacy policy</p>
          <p>Terms of use</p>
          <p>Cookie policy</p>
        </div>

        <div className="flex justify-between w-full lg:w-auto mt-8 lg:mt-0">
          <FaFacebookF className='mr-4' size={25} />
          <AiOutlineTwitter className='mr-4' size={25} /> 
          <AiFillYoutube className='mr-4' size={25} />
          <AiFillLinkedin className='mr-4' size={25} /> 
          <BsInstagram className='mr-4' size={25} /> 
     </div>
     </div>
     </div>
      
  )}

export default focus