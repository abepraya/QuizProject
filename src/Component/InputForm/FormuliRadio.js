import React, { Component } from "react";

class FormuliRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSoal: [],
      optional: "",
    };
    this.inputOptions = "";
  }
  handlerChange = (event) => {
    this.setState({
      optional: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            aria-label=".form-control-lg example"
            onChange={this.handlerChange}
            // value={this.props.soal}
          />
          <label htmlFor="floatingInput">Soal</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={this.handlerChange}
            // value=""
          />
          <label htmlFor="floatingInput">Jawab A :</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={this.handlerChange}
            // value=""
          />
          <label htmlFor="floatingInput">Jawab B :</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={this.handlerChange}
            // value=""
          />
          <label htmlFor="floatingInput">Jawab C :</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={this.handlerChange}
            // value=""
          />
          <label htmlFor="floatingInput">Jawab D :</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={this.handlerChange}
            // value=""
          />
          <label htmlFor="floatingInput">Kunci :</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            onChange={this.handlerChange}
            // value=""
          />
          <label htmlFor="floatingInput">Score :</label>
        </div>
      </div>
    );
  }
}

export default FormuliRadio;
