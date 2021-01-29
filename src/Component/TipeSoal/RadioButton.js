import React, { Component } from "react";
import { Container } from "react-bootstrap";

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jawaban: "",
    };
  }

  eventHandler = (event) => {
    console.log(event.target.value);
    this.setState({ jawaban: event.target.value });
    this.addScore(event.target.value);
  };

  addScore = (jawab) => {
    this.props.funcPilihan({
      nomorSoal: this.props.numbering,
      jawaban: jawab,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <br />
          <label htmlFor="exampleFormControlTextarea1">
            {this.props.numbering}.&nbsp; {this.props.data.soal}
          </label>

          {this.props.data.option.map((opsi, index) => {
            return (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  id="examplRadios"
                  type="radio"
                  name={"examplRadios" + this.props.numbering}
                  value={opsi}
                  onChange={this.eventHandler}
                  htmlFor={"examplRadios" + this.props.numbering}
                />
                <label
                  className="form-check-label"
                  htmlFor={"examplRadios" + this.props.numbering}
                >
                  &nbsp;{opsi}
                </label>
              </div>
            );
          })}
          <p>Jawaban anda : {this.state.jawaban} </p>
        </Container>
      </div>
    );
  }
}

export default RadioButton;
