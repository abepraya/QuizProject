import React, { Component } from "react";
import CheckBox from "../TipeSoal/CheckBox";
import RadioButton from "../TipeSoal/RadioButton";
import TextArea from "../TipeSoal/TextArea";

export default class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soal: this.props.data,
      jawabanSoal: [],
    };
  }

  tempatJawaban = (data, key) => {
    if (data.type === "Essay") {
      return (
        <TextArea
          jawab={data.jawaban}
          nomor={key + 1}
          funcPilihan={this.addJawaban}
        />
      );
    } else if (data.type === "Checkbox") {
      return (
        <CheckBox
          data={data}
          jawab={data.jawaban}
          nomor={key + 1}
          //   funcPilihan={this.addJawaban}
        />
      );
    } else if (data.type === "Radio") {
      return (
        <RadioButton
          soal={data.soal}
          a={data.a}
          b={data.b}
          c={data.c}
          d={data.d}
          jawab={data.jawaban}
          nomor={key + 1}
          //   funcPilihan={this.addJawaban}
        />
      );
    }
  };
  render() {
    let soal = this.state.soal;
    console.log(soal);
    return (
      <div>
        <div>
          <div id="soal" style={{ minHeight: "450px" }}>
            {soal.map((data, key) => {
              return (
                <div className="pt-2" id={key} key={key}>
                  <span>{key + 1}. </span>
                  <label className="form-label">{data.soal}</label>
                  <div>{this.tempatJawaban(data, key)}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
