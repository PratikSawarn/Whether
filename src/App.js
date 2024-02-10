import './App.css';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import getGeolocation from './Geolocation';

function App() {

  const [step, setStep] = useState(0);

  // For cordinates if allow
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  const fetchGeolocation = () => {
    getGeolocation(
      (coords) => {
        setCoordinates(coords);
        setError(null);
      },
      (errorMsg) => {
        setError(errorMsg);
      }
    );
  };

  const allowed = () => {
    if (coordinates) {
      setStep(1);
    } else {
      setStep(0);
    }
  };

  // Call the function to get geolocation when the component mounts
  useEffect(() => {
    fetchGeolocation();
  }, []);
  
  useEffect(() => {
    allowed();
  }, [coordinates, error]);

  return (
    <>

    {
      step === 0 && (
        <div className='w-full h-[100vh] flex justify-center text-white'>

          <div className='w-full my-auto text-center'>
            <div className='w-full mb-10'>
              <h1 className=' text-7xl mb-4'>Welcome People</h1>
              <p className='text-xl text-yellow-500'>we use your location to fetch the whether in your location...</p>
              {error && 
                <p className='text-[#94A3B8]'>{error}</p>
              }
              
            </div>
            <div className='flex flex-row justify-center'>
              <svg class="animate-spin h-20 w-20 mr-3 border-white border-t-2 rounded-full" viewBox="0 0 24 24"></svg>
            </div>
          </div>
        </div>
      )
    }
    {
      step === 1 && (
        <>
          <Dashboard coordinates={`${coordinates.lat},${coordinates.long}`}/>
        </>
        )
      }
      
      </>
      )
      
    }
    
    export default App;
    