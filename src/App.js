/* eslint-disable jsx-a11y/alt-text */

import styles from './App.module.css'
import Test from "./Test";
import Bootstrap from "./Bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';





function App(){
  console.log(styles)
  return (
   <div className={styles.App}>
      merhabas
  <img src="/logo192.png"></img>
  <Test></Test>

<Bootstrap></Bootstrap>

     </div>
  )
}

export default App;
