import React,{useState} from 'react'
import ThemeContext from './ThemeContext'
import Navbar from './Navbar'
function Central() {
    const [ntheme,setnTheme] =useState('Light')
    return (
            <div>
                {/* Theme context provider bnake state and setter function pass  */}
                {/* Earlier we used to pass simple value here we've passed an object the value of state[ntheme] is passed in theme */}
                <ThemeContext.Provider value={{theme:ntheme,chfn:setnTheme}}> 

                <Navbar/>

                </ThemeContext.Provider>
             
            </div>
        
    )
}

export default Central