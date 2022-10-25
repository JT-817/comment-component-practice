import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 4:45PM"
        avatar={faker.image.image()}
        content="Nice Blog Post"
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 6:23AM"
        avatar={faker.image.image()}
        content="Nice Blog Post"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
