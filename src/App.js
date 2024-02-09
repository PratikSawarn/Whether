import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {

  const [step, setStep] = useState(0);
  const [profession, setProfession] = useState('farmer');

  const handleProfessionClick = (profesion)=> {
    setProfession(profesion)
    setStep(1);
  }

  return (
    <>

    {
      step === 0 && (
        <div className='w-full h-[100vh] flex justify-center text-white'>

          <div className='w-full my-auto text-center'>
            <div className='w-full mb-10'>
              <h1 className=' text-7xl mb-4'>Welcome People</h1>
              <p className='text-xl text-yellow-500'>Know Whether Condition With Requirements.</p>
              <p className='text-[#94A3B8]'>Still working on this...</p>
            </div>
            <div className='flex flex-row justify-center'>
              <div className=' w-max p-8 rounded-lg text-center bg-[#1E293B]  mr-10 hover:bg-[#1e293bc4]'>
                <button className='py-2 px-4 rounded-lg' onClick={e => handleProfessionClick('farmer')}>Farmer</button>
              </div>
              <div className='w-max p-8 rounded-lg text-center bg-[#1E293B] hover:bg-[#1e293bc4]'>
                <button className='py-2 px-4 rounded-lg' onClick={e => handleProfessionClick('traveller')}>Traveller</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    {
      step === 1 && (
        <>
          <Dashboard profession={profession}/>
        </>
        )
      }
      
      </>
      )
      
    }
    
    export default App;
    