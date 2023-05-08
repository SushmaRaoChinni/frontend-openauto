import './App.css';
import {IoIosCall} from 'react-icons/io'
import {CiMail} from 'react-icons/ci'


function App() {
  return (
    
    <div className='text-white  flex justify-between p-8 bg-black '>
    
      <h2 className='text-4xl font-bold'>Open Auto</h2>
      <div className='hidden md:flex w-1/2 justify-end  items-center space-x-1 '>
      <IoIosCall className='text-white-500 '/>
      <h6 className=' text-white-500'>+7695864558</h6>
       <div className='flex  items-center '>
      <CiMail className=' text-white-500'/>
      <h6 className=' text-white-500  px-0'>service@openauto.ca</h6>
    </div>
    <div><button className='px-1 text-white-500 rounded-full border-white-500 border'>Download the mobile app</button></div>
    </div>
    
    </div>
    
  );
}

export default App;
