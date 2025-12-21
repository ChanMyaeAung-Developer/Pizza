import React from 'react'
import { useState } from 'react';
const Home = () => {
  const [inputValue, setInputValue] = useState("Hello");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
 
    alert("User submitted: " + inputValue);
    console.log("Form Data:", inputValue);
  };
  return (
    <>
     <div className='bg-red-400'>Helloworld</div>
     <div style={{ padding: '20px' }}>
      <h3>React Form (Enter Key စမ်းကြည့်ရန်)</h3>
      
    
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="တစ်ခုခုရိုက်ပြီး Enter ခေါက်ပါ..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
      
        <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
      </form>
    </div>
     
    </>
   

  )
}

export default Home