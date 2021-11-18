import './App.css';
import React  from 'react';
import {Component} from 'react'; 


class App extends Component {
  constructor(){
      super()
      this.state ={
          count : 0
      }
      this.handleClick = this.handleClick.bind(this)
      this.decrease  = this.decrease.bind(this)
      this.clear = this.clear.bind(this)
  }
  decrease() {
    this.setState(prevState => {
      return{

        count : prevState.count -1
      }
    })

  }
  handleClick() {
    this.setState(prevState => {
      return{
        
        count : prevState.count +1
      }
    })
   
  }
  clear() {
    this.setState(prevState => {
      return{
        count : 0
      }
    })
  }
  render(){
    return (
      <div ClassName = 'App'>
        <h1 className='App'>{this.state.count}</h1>
        <button onClick={this.handleClick}>increase</button>
        <button onClick={this.decrease}>decrease</button>
        <button onClick={this.clear}>clear</button>
      </div>
    )
  }
}
export default App;

