//-------------STATE-----------------
import { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)
      }
  //this keyword is undefined in event handler without bind(this)
  //but if arrow function is there you can use this without bind(this)
    //   clickHandler(){
    //       this.setState({
    //           message: 'Goodbye!'
    //       })
    //   }
  clickHandler = () => {
    if (this.state.message === 'Hello') {
      this.setState({
        message: 'Goodbye!'
      })
    }
    else {
      this.setState({
        message: 'Hello'
      })
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
