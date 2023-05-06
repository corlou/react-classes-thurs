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
      backgroundColor: "lightblue"
    }
  }
  changeBGToRed = () => {
    this.setState({backgroundColor: "red"})
  }

  // 2. Do different things when different events happen on the webpage
    render() {
      return (
            <div style={{backgroundColor:this.state.backgroundColor}}>
              {this.props.children}
              <button onClick={this.changeBGToRed}>Change background to red</button>
            </div>
          )
    }
}