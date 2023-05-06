import React from 'react';

// export default function MessageBox(props) {

//   return (
//     <div style={{backgroundColor: "lightblue"}}>
//       {props.children}
//     </div>
//   )
// }

export default class MessageBox extends React.Component{
  // 1. set up React state
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: "lightblue",
      counter: 0
    }
  }
  changeBGToRed = () => {
    this.setState({backgroundColor: "red"})
  }

  // 2. Do different things when different events happen on the webpage

  componentDidMoount() {
    console.log("The MessageBox was loaded for hte first time");
  }


    render() {
      return (
            <div style={{backgroundColor:this.state.backgroundColor}}>
              {this.props.children}
              <button onClick={this.changeBGToRed}>Change background to red</button>

              <button onClick={() => this.setState({backgroundColor:"lightblue"})}>Change background to light blue</button>

              <button onClick={() => {
                this.setState((state) => {
                  return {counter: state.counter + 1}
                })
              }}>
                Count {this.state.counter}
              </button>

              <button onClick={() => {
                this.setState((previousState) => {
                  return {counter: previousState.counter - 1}
                })
              }}>Decrease the counter</button>
            </div>
          )
    }
}