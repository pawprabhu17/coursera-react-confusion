import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }
  renderDish(selectedDish) {
    if (selectedDish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              width="100%"
              src={this.props.dish.image}
              alt={this.props.dish.name}
            />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div />;
    }
  }
  renderComments(comments) {
    var commentList = comments.map(comment => {
      return (
        <li key={comment.id}>
          <div>{comment.comment}</div>

          <div>
            -- {comment.author},
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comment.date)))}
          </div>
          <br />
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1 ">
        <h4>Comments</h4>
        <ul className="list-unstyled">{commentList}</ul>
      </div>
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          {" "}
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Dishdetail;
