import React, { Component } from "react";

class FormulirCheckbox extends Component {
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
    return (
      <div>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            aria-label=".form-control-lg example"
            // onChange={this.handlerChange}
            // value={this.props.soal}
          />
          <label htmlFor="floatingInput">Soal</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            // onChange={this.handlerChange}
            // value=""
          />
          <label htmlFor="floatingInput">Jawaban:</label>
          <small id="mini-info" class="form-text text-muted">Give (,) for more than one</small>
        </div>
        
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            
            // onChange={this.handlerChange}
            // value=""
          />
          <label htmlFor="floatingInput">Kunci :</label>
          <small id="mini-info" class="form-text text-muted">Give (,) for more than one</small>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            // onChange={this.handlerChange}
            // value=""
          />
          <label htmlFor="floatingInput">Score :</label>
        </div>
        
      </div>
    );
  }
}

export default FormulirCheckbox;
