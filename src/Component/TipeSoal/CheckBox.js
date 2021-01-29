import React, { Component } from "react";
import { Container } from "react-bootstrap";

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jawaban: [],
    };
  }

  eventHandler = (event) => {
    console.log(event.target.value);
    if (event.target.checked) {
      this.addDataJawaban(event.target.value);
    } else {
      this.removeDataJawaban(event.target.value);
    }
  };

  addDataJawaban = (opsi) => {
    let jawab = this.state.jawaban;
    jawab.push(opsi);
    this.setState({ jawaban: jawab });
    this.addScore(jawab);
    console.log(this.state.jawaban);
  };

  removeDataJawaban = (opsi) => {
    let jawab = this.state.jawaban.filter((val) => {
      return val !== opsi;
    });
    this.setState({ jawaban: jawab });

    this.addScore(jawab);
    // console.log(this.state.jawaban);
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
                  id={"exampleRadios" + this.props.numbering}
                  type="checkbox"
                  name={"examplRadios" + this.props.numbering}
                  htmlFor={"exampleRadios" + this.props.numbering}
                  value={opsi}
                  onChange={this.eventHandler}
                />
                <label className="form-check-label">&nbsp;{opsi}</label>
              </div>
            );
          })}

          <p>
            Jawaban anda : {this.state.jawaban.map((choices) => `${choices}, `)}{" "}
          </p>
        </Container>
      </div>
    );
  }
}

export default CheckBox;
