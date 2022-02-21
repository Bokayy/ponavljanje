import React, {Component} from 'react';

/* class Welcome extends Component {
  return (){
    <div>Welcome</div>
}
} */

class Welcome extends Component {
    render(){
        return(
        <div>
      <h1>
          Welcome {this.props.ime} {this.props.prezime}
        </h1>
      {this.props.children}
      </div>
        )
    }
}

export default Welcome