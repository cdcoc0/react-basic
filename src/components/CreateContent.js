import React, {Component} from "react";

class CreateContent extends Component {
    render() {
        return(
            <article>
                <h2>Create</h2>
                <form action="/create_process" mothod="post"
                onSubmit={function(e) {
                    e.preventDefault();
                    alert("submit completed")
                }}>
                    <p><input type="text" placeholder="title"></input></p>
                    <p><textarea name="desc" placeholder="description"></textarea></p>
                    <p><input type="submit" value="submit"></input></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;