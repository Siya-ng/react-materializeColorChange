import React, { Component } from 'react';


// not needed
class Subscribe extends Component {
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      alreadySubscribe: false,
      subscribers: props.subscribers
    }
  }

  increaseSubscriber(e) {
    if (!this.state.alreadySubscribe ){
      this.setState({
        subscribers: this.state.subscribers + 1,
        alreadySubscribe: true
      });

    }
}
  render() {

    return (
      <div className="row subscribeBar">
        <div>
          <h6 className="col s12 m6"> {this.state.subscribers} subscribers</h6>
        </div>
        <div className="col s12 m6 subscribeBtn">
          <a className="waves-effect waves-light btn" onClick={(e) => this.increaseSubscriber(e)}>Subscribe</a>
        </div>
      </div>
  )
  }
}
export default Subscribe;
