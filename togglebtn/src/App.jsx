
import './App.css'

import Card from './components/Card';
import ThemeBtn from './components/Themebtn';
import {ThemeProvider} from './context/ThemeProvider'
import { useState ,useEffect} from 'react';

function App() {
  const [themeMode, setthemeMode] = useState('light');

  const darktheme=()=>{
    setthemeMode('dark')
  }
  const lighttheme=()=>{
    setthemeMode('light')
  }

  useEffect(() => {
   document.querySelector('html').classList.remove('dark','light')
   document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode,darktheme,lighttheme}} >
    
     
  <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
             <Card/>
          </div>
      </div>
  </div>

    </ThemeProvider>
  )
}

export default App
