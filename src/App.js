import React from 'react';
import './App.css';
import { CardList } from './components/card-list/Card-list.component';

class App extends React.Component {
  state={
    monsters:[],
    searchField:''
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
 render(){
   const {monsters, searchField} = this.state;
   const filteredMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      {/* <CardList><h1>Evee</h1></CardList> */}
      <input type='search' placeholder='search monster' 
      // onChange={(e=>{
      //   this.setState({searchField:e.target.value}, ()=> console.log(this.state))
       //after immidetaily show log value put console as second argument of setstate
      // })} 
      onChange={(e)=>this.setState({searchField:e.target.value})}
      />
      <CardList monsters={filteredMonster}/>
    </div>
  );
 }
}

export default App;
