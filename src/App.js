/* eslint-disable jsx-a11y/alt-text */

import Button from "./Components/Button";
import "./index.css"
import Tab from "./Components/Tab";
import { useState } from "react";
import Lifecycle from "./Lifecycle";


// const searchFunction=()=>{
//    alert('hello')
// }

// function App(){
// const [activeTab,setActiveTab]=useState(1)
//   return (



//    <main>
// <div style={{padding:20}}>
// <button onClick={()=> setActiveTab(2)}>aktif tabı değiştir</button>
//    <Tab activeTab={activeTab}>
//      <Tab.Panel title="Profil">1.Tab Örneği</Tab.Panel>
//      <Tab.Panel  title="hakkında">2.Tab Örneği</Tab.Panel>
//      <Tab.Panel  title="ayarlar">3.Tab Örneği</Tab.Panel>
//    </Tab>
// </div>




//       <div style={{padding:20,backgroundColor:"blue"}}>

//          <Button variant="succes">Buton Örneği</Button> 
//          <Button variant="danger">Buton Örneği</Button> 
//          <Button variant="warning">Buton Örneği</Button> 
//          <Button variant="">Buton Örneği</Button> 
//          <Button>Buton Örneği</Button> 

      
      
//       </div>
//       <h1 style={{color:'black',backgroundColor:'red',fontSize:'1.5em'}}>aliosmanucar.com</h1>
//       <label htmlFor="search" onClick={searchFunction}>Arama</label>
//       <input type="text" id="search"/>
   
   
//    </main>
//   )
// }

// export default App;

function App(){

   const [show,setShow]=useState(false)
   return(
<>
<button onClick={()=>setShow(show=>!show)}>
   {show ?'Gizle' :'Göster'}
</button>
{show && <Lifecycle/>}

</>

   )
}

export default App;