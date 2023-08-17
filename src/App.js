import React from "react";
import Navbar from "./component/Navbar";
import Help from "./component/help";
import { data } from "./data";
import Footer from "./component/footer";
function App() {
  return (
    <div >
      <Navbar/>
      {data.map((element)=>{
        return <Help image={element.img} title={element.title}/>
      })}
      <Footer/>
    </div>
  );
}

export default App;
