import React from 'react';
import './App.css';
import { CardList } from './components/card-list/Card-list.component';

class App extends React.Component {
  state={
    monsters:[]
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
 render(){
  return (
    <div className="App">
      {/* <CardList><h1>Evee</h1></CardList> */}
      <CardList monsters={this.state.monsters}/>
    
    
    </div>
  );
 }
}

export default App;
