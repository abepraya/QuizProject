import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CreateQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataCategory: [],
    };
  }
  componentDidMount() {
    this.props.updateLinkStatus(["", "disabled"]);
    fetch("http://localhost:3010/quiz")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dataCategory: data });
      });
  }

  changePage = (event) => {
    this.props.history.push("/attemptquiz/" + event.target.value);
  };

  render() {
    return (
      <div class="row">
        {this.state.dataCategory.map((category) => {
          return (
            <div class="col-sm-6">
              <div className="card mx-auto" style={{ width: "80%" }}>
                <img
                  src={category.image}
                  className="card-img-top"
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "contain",
                  }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{category.type}</h5>
                  <p className="card-text">{category.description}.</p>
                  <button
                    className="btn btn-primary"
                    value={category.type}
                    onClick={this.changePage}
                  >
                    Attempt Quiz
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(CreateQuiz);
