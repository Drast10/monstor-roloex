import React from 'react';
import './App.css';
import { CardList } from './components/card-list/Card-list.component';
import {SearchBox} from './components/search-box/Search-box.component'


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

  handleChange =(e)=>{
    this.setState({searchField:e.target.value})
  }
 render(){
   const {monsters, searchField} = this.state;
   const filteredMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      {/* <CardList><h1>Evee</h1></CardList> */}
      <h1>Monster Rolodex</h1> 
     <SearchBox placeholder='search monster' 
          handleChange={this.handleChange}/>
      <CardList monsters={filteredMonster}/>
    </div>
  );
 }
}

export default App;
