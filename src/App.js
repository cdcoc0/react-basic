import React, {Component} from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  //render보다 먼저 실행
  //component 초기화하는 함수
  constructor(props) {
    super(props);
    this.state = {
      Subject: {title: "WEB", sub: "world wide webb!"}
    }
  }

  render() {
    return (
      <div className="App">
        <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is a Hypertext Markup Language"></Content>
      </div>
    );
  }
}

export default App;
