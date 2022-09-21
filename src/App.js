
import './App.css';
import React,{Component} from 'react';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
// import  {pavan} from './assest/image/pavan.png';


class App extends Component {
  render(){
    return(
    <div>
      
      <Greet    name="pavan" role="developer"    >
     
        <p>React</p>
        

      </Greet>
      <Greet  name="vasan" role="QA"></Greet>
      <Greet  name="hari" role="Data"/>
      <Welcome name='arul'/>
    </div>
    )
  }
}



export default App;
