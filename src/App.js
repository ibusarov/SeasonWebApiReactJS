
import logo from "./logo.svg";
import "./App.css";
import SeasonDisplay from "./SeasonDisplay";
import React from "react";
import Spinner from './Spinner';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent(){

    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h3>Error: {this.state.errorMessage}</h3>
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }

    return (
      <Spinner message="Please accept location request..." />
    );

  }

  render() {
     return <div className="border red">
        {this.renderContent()}
    </div>
  }
}

export default App;
