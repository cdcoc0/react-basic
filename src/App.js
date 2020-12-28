import React, {Component, PureComponent} from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';
import { findAllByPlaceholderText } from "@testing-library/react";

class App extends Component {
  //render보다 먼저 실행
  //component 초기화하는 함수
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      subject: {title: "WEB", sub: "world wide webb!"},
      welcome: {title: "welcome", desc: "Hey there!"},
      contents: [
        {id: 1, title: "HTML", desc: "HTML"},
        {id: 2, title: "CSS", desc: "CSS"},
        {id: 3, title: "JavaScript", desc: "JavaScript"}
      ]
    }
  }

  render() {
    console.log("App render")
    var _title, _desc = null;
    if(this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode ==="read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    //console.log("render", this)
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}
        onChangePage={function() {
          this.setState({mode: "welcome"})
        }.bind(this)}></Subject>
        {/* <header>
              <h1><a href="/" onClick={function(e) {
                console.log(e);
                e.preventDefault();
                this.setState({
                  mode: "welcome"
                });
                //this.state.mode = "welcome";
                //debugger;
                //alert("hi");
              }.bind(this)}>{this.state.subject.title}</a></h1>
              {this.state.subject.sub}
          </header> */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
