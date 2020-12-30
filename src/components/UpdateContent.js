import React, {Component} from "react";

class UpdateContent extends Component {
    render() {
        console.log(this.props.data);
        return(
            <article>
                <h2>Update</h2>
                <form action="/update_content" method="post">
                    <p><input type="text"></input></p>
                    <p><textarea></textarea></p>
                    <p><input type="submit" value="edit"></input></p>
                </form>
            </article>
        )
    }
}

export default UpdateContent;