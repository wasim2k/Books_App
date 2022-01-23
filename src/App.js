import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
function App() {
  const [clients, setClients] = useState([]);
  // const [show,setShow]=useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba"
      );
      setClients(res.data.clients);
      // console.log(res.data.clients)
    };
    getData();
  }, []);
  return(
   <div className="App">
        <div className='navbar'>
        <ul>
          <li>Name</li>
          <li>Compamy</li>
         
          
        </ul>
      </div>

     <ul>
       { clients.map((item) => {
         return (
         
           <li key={item.id}>
              <div className="Details">
            
          <p>  {item.name}</p> 
            <p>{item.company}</p> 
            </div>
             </li>
            
         )
       })
         

       }
     </ul>

   </div>
  )
}

export default App;
