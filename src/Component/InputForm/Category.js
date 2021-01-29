import React, { Component } from "react";
import FormuliRadio from "./FormuliRadio";
import FormulirCheckbox from "./FormulirCheckbox";
import FormulirEssay from "./FormulirEssay";
import Preview from "./Preview";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: "",
      soal: [],
      dataCategory: [],
    };

    this.soal = "";
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";
    this.option = [];
    this.kuncicheckbox = [];
    this.kunci = "";
  }
  componentDidMount() {
    this.props.updateLinkStatus(["disabled", ""]);
    fetch("http://localhost:3010/quiz")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dataCategory: data });
      });
  }
  changePage = (event) => {
    this.props.history.push("/createquiz/" + event.target.value);
  };

  handlingType = (events) => {
    this.setState({
      types: events.target.value,
    });
  };

  radioForm = () => {
    this.soal = document.getElementById("radioForm").value;
    this.a = document.getElementById("a").value;
    this.b = document.getElementById("b").value;
    this.c = document.getElementById("c").value;
    this.d = document.getElementById("d").value;
    this.kunci = document.getElementById("kunci").value;

    document.getElementById("radioForm").value = "";
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("d").value = "";
    document.getElementById("kunci").value = "";

    let radioForm = {
      type: this.state.types,
      soal: this.soal,
      A: this.a,
      B: this.b,
      C: this.c,
      D: this.d,
      kunci: this.kunci,
    };

    let getResult = this.state.soal;
    getResult.push(radioForm);

    this.setState({
      soal: getResult,
    });
    console.log(this.state.soal);
  };

  checkboxForm = () => {
    this.soal = document.getElementById("checkboxModel").value;
    this.option = document.getElementById("checkbox").value.split(",");
    this.kunci = document.getElementById("kuncicheckbox").value.split(",");

    document.getElementById("checkboxModel").value = "";
    document.getElementById("checkbox").value = "";
    document.getElementById("kuncicheckbox").value = "";

    let checkboxModel = {
      type: this.state.types,
      soal: this.soal,
      option: this.option,
      kunci: this.kunci,
    };

    let getResult = this.state.soal;
    getResult.push(checkboxModel);

    this.setState({
      soal: getResult,
    });
    console.log(this.state.soal);
  };

  textAreaForm = () => {
    this.soal = document.getElementById("textAreaModel").value;
    this.kunci = document.getElementById("kunci").value;

    document.getElementById("textAreaModel").value = "";
    document.getElementById("kunci").value = "";

    let textAreaModel = {
      type: this.state.types,
      soal: this.soal,
      kunci: this.kunci,
    };

    let getResult = this.state.soal;
    getResult.push(textAreaModel);

    this.setState({
      soal: getResult,
    });
  };

  formatSoal = (opsi) => {
    if (opsi === "Radio") {
      return (
        <div>
          <FormuliRadio />
          <button
            type="submit"
            className="btn btn-outline-primary mt-2 mb-3"
            onClick={this.radioForm}
          >
            Submit
          </button>
        </div>
      );
    } else if (opsi === "Checkbox") {
      return (
        <div>
          <FormulirCheckbox />
          <button
            type="submit"
            className="btn btn-outline-primary mt-2 mb-3"
            onClick={this.checkboxForm}
          >
            Submit
          </button>
        </div>
      );
    } else if (opsi === "Essay") {
      return (
        <div>
          <FormulirEssay />
          <button
            type="submit"
            className="btn btn-outline-primary mt-2 mb-3"
            onClick={this.textAreaForm}
          >
            Submit
          </button>
        </div>
      );
    }
  };

  render() {
    console.log(this.state);
    let soal = this.state.soal;
    return (
      <div className="container">
        <div className="card mt-3">
          <div className="container-fluid px-3 py-3">
            <div className="row">
              <div className="card col ml-3 mt-4">
                {/* FAILED! NEED TO FIX IT ! */}
                <h4 className="text-center">Preview</h4>
                <Preview data={soal}/>
              </div>
              <form className="col form-group mt-4">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    onChange={this.handlingType}
                  >
                    <option selected>Pilih Tipe Soal</option>
                    <option>Checkbox</option>
                    <option>Radio</option>
                    <option>Essay</option>
                  </select>
                  <label htmlFor="floatingSelect">Tipe Soal</label>
                </div>
                {this.formatSoal(this.state.types)}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
