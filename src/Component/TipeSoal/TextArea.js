import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jawaban : "",
      code: ""
    }
    this.inputText="";
  }
  eventHandler = (event) => {
    
    this.inputText = event.target.value;
    
  };
  addScore = (jawab) => {
    this.props.funcPilihan({
      nomorSoal: this.props.numbering,
      jawaban: jawab,
    });
  };

  clickSubmit = () => {
    const fn = new Function(this.inputText)
    const resultFn = fn();
    this.setState({ code: resultFn });
    this.addScore(resultFn);
  };
  render() {
    return (
      <div>
        <Container>
          <br />
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              {this.props.numbering}.&nbsp; {this.props.soal}
            </label>
            <br />
            <textarea
              id="textarea"
              name="textarea"
              rows="4"
              // cols="74"
              // style={{ resize: "none" }}
              onChange={this.eventHandler}
            />
            <br/>
            <Button variant="warning" onClick={this.clickSubmit}>
              Submit
            </Button>
          </div>
          {/* <p>Jawaban anda : {this.state.jawaban} </p> */}
        </Container>
      </div>
    );
  }
}

export default TextArea;
