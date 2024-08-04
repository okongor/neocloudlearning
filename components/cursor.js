
import React from "react"; 
import Typewriter from 'typewriter-effect'; 
  
export default function TypingEffect() { 
  return ( 
    <div> 
   
      <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('Learn Tech, Lets Build the Future') 
            .callFunction(() => { 
              console.log('String typed out!'); 
            }) 
            .pauseFor(2000) 
            .deleteAll() 
            .pauseFor(2000)
            typewriter.typeString('Embrace the journey of continuous learning & innovation.') 
            .deleteAll() 
            .pauseFor(2000)
            typewriter.typeString('Console.log("Welcome")') 
         
            .callFunction(() => { 
              console.log('Welcome'); 
            }) 
            .start(); 
            
        }} 
      /> 
    </div> 
  ); 
}

