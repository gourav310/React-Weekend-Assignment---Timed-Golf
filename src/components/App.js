import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderBall:false, time: 0, x: 0, y: 0,ballPosition: { left: "0px" ,top:"0px"} };
    this.Arrow=this.Arrow.bind(this);
    this.renderChoice = this.renderBallOrButton.bind(this)
    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  };
  Arrow(e){
    if(e.keyCode===39){        
     if(this.state.renderBall){
         const position = this.state.x+5;
         this.setState({x:position});
    }
     }
    if(e.keyCode===40){        
    if(this.state.renderBall){

        const position = this.state.y+5;
        this.setState({y:position});
    }
    }
    if(e.keyCode===38){        
      if(this.state.renderBall){
          const position = this.state.y-5;
          this.setState({y:position});
      }
      }
  if(e.keyCode===37){        
    if(this.state.renderBall){
        const position = this.state.x-5;
        this.setState({x:position});
    }
    }
}
  componentDidMount() {
    document.addEventListener("keydown",this.Arrow);
  }

  componentWillUnmount() {
    

  }
  buttonClickHandler() {
    this.setState({renderBall:true});
}
  renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={{top:this.state.y+"px",left:this.state.x+"px"}}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }


  render() {
    return (
      <div>
          {this.renderBallOrButton()}
          <div className="heading-timer">Timer</div>
          <div className="hole"></div>
      </div>
  );
  }
}

export default Timer;
