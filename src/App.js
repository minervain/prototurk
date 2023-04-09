/* eslint-disable jsx-a11y/alt-text */





const searchFunction=()=>{
   alert('hello')
}

function App(){

  return (
   <main>
      <h1 style={{color:'black',backgroundColor:'red',fontSize:'1.5em'}}>aliosmanucar.com</h1>
      <label htmlFor="search" onClick={searchFunction}>Arama</label>
      <input type="text" id="search"/>
   
   
   </main>
  )
}

export default App;
