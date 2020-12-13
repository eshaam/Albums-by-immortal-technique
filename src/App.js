import React from "react"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      index: 0
    };

  }


  componentDidMount = () => {
    console.log('hey');
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">

        </div>



      </React.Fragment>
    );
  }
}


export default App
