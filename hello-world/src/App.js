  import React from 'react';
  import './App.css';
  import Demo from './component/Demo';
import { Contextprovider } from './component/Context';


  export default function App() {

 
    return (
      <div>
        <Contextprovider value={"ghgh"}>
        <Demo/>

        </Contextprovider>
      

      
          

        


      </div>
    );
  }

