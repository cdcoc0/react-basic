import React, {Component, PureComponent} from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Controls from "./components/Controls";
import './App.css';
import { findAllByPlaceholderText } from "@testing-library/react";

class App extends Component {
  //render보다 먼저 실행
  //component 초기화하는 함수
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "read",
      selected_content_id: 0,
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
    var _title, _desc, _article = null;
    if(this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode ==="read") {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === "create") {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id += 1;
        // this.state.contents.push(
        // {id: this.max_content_id, title: _title, desc: _desc}
        // );
        var _contents = this.state.contents.concat({
          id: this.max_content_id, title: _title, desc: _desc
        })
        this.setState({
          //contents: this.state.contents
          contents: _contents
        })
      }.bind(this)}></CreateContent>
    }
    //console.log("render", this)
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}
        onChangePage={function() {
          this.setState({
            mode: "welcome"
          });
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
        <TOC data={this.state.contents} 
        onChangePage={function(id) {
          this.setState({
            mode: "read",
            selected_content_id: Number(id)})
        }.bind(this)}></TOC>
        <Controls onChangeMode={function(_mode) {
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Controls>
        {_article}
      </div>
    );
  }
}

export default App;
