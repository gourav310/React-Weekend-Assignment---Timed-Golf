import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderBall:false, time: 0, x: 0, y: 0,timeStart:0};
    this.Arrow=this.Arrow.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this)
     this.timer= this.timer.bind(this);
     this.funct=null;
  };
  Arrow(e){
    if(this.state.x===250 && this.state.y===250){
      clearInterval(this.funct);
    }
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
  startTimer(){
      let count =0;
      this.funct=setInterval(()=>{
        count=count+1;
        this.setState({timeStart:count});
      },1*1000)
    
      
    }
  
  timer(){
    
    return `${this.state.timeStart}`;
  }
  componentWillUnmount() {
    

  }
  buttonClickHandler() {
    this.setState({renderBall:true});
//    const time= new Date();
    this.startTimer();
}

  render() {
    return (
      <div>
          <div className="ball" style={{top:this.state.y+"px",left:this.state.x+"px"}}></div>
          {!this.state.renderBall && <button className="start" onClick={this.buttonClickHandler}>start</button>}
          <div className="heading-timer">{this.timer()}</div>
         <div className="hole"></div>
      </div>
  );
  };
}


export default Timer;
