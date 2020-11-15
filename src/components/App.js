import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderBall:false, time: 0, x: 0, y: 0,ballPosition: { left: "0px" ,top:"0px"} };
    this.Arrow=this.Arrow.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  };
  Arrow(e){
    if(this.state.x!==250 || this.state.y!==250){
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
  }
  componentDidMount() {
    document.addEventListener("keydown",this.Arrow);
  }

  componentWillUnmount() {
    

  }
  buttonClickHandler() {
    this.setState({renderBall:true});
    const time= new Date();
    console.log(time.value);
}
  
  render() {
    return (
      <div>
          <div className="ball" style={{top:this.state.y+"px",left:this.state.x+"px"}}></div>
          {!this.state.renderBall && <button className="start" onClick={this.buttonClickHandler}>start</button>}
          <div className="heading-timer">Timer</div>
          <div className="hole"></div>
      </div>
  );
  }
}

export default Timer;
