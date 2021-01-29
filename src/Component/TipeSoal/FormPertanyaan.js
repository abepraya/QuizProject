import React, { Component } from "react";
import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";
import TextArea from "./TextArea";
import { data } from "../../Data/Model";
import ResultNilai from "./ResultNilai";
import { withRouter } from "react-router-dom";

import { Card, Container } from "react-bootstrap";

class FormPertanyaan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataJawaban: [],
      score: 0,
      hasilJawaban: [],
      dataSoal: [],
    };
  }

  componentDidMount() {
    this.props.updateLinkStatus(["", "disabled"]);
    fetch("http://localhost:3010/quiz?type=" + this.props.match.params.type)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dataSoal: data });
      });
  }

  componentDidUpdate() {
    console.log("Update Phase");
  }

  componentWillMount() {
    console.log("Un-Mounting Phase");
  }

  equalsIgnoreOrder = (a, b) => {
    if (a.length !== b.length) {
      return false;
    }
    const uniqueValues = new Set([...a, ...b]);
    for (const v of uniqueValues) {
      const aCount = a.filter((e) => e === v).length;
      const bCount = b.filter((e) => e === v).length;
      if (aCount !== bCount) {
        return false;
      }
    }
    return true;
  };

  addJawaban = (jawaban) => {
    let newJawaban = this.state.dataJawaban.filter((val) => {
      return val.nomorSoal !== jawaban.nomorSoal;
    });
    newJawaban.push(jawaban);

    let hasilJawab = this.hitungNilai(newJawaban);
    hasilJawab.sort((a, b) => a.nomorSoal - b.nomorSoal);
    console.log("new jawaban :" + JSON.stringify(newJawaban));
    this.setState({ dataJawaban: newJawaban, hasilJawaban: hasilJawab });
  };

  hitungNilai = (jawaban) => {
    let tempHasilJawab = [];
    let booleanJawab = "";
    jawaban.map((jawab) => {
      switch (this.state.dataSoal[jawab.nomorSoal - 1].type) {
        case "radio":
        case "essay":
          if (
            jawab.jawaban === this.state.dataSoal[jawab.nomorSoal - 1].kunci
          ) {
            booleanJawab = "benar";
          } else {
            booleanJawab = "salah";
          }
          break;
        case "checkbox":
          if (
            this.equalsIgnoreOrder(
              jawab.jawaban,
              this.state.dataSoal[jawab.nomorSoal - 1].kunci
            )
          ) {
            booleanJawab = "benar";
          } else {
            booleanJawab = "salah";
          }
          break;
      }
      tempHasilJawab.push({
        "nomorSoal": jawab.nomorSoal,
        "hasil": booleanJawab,
      });
      booleanJawab = "";
    });
    return tempHasilJawab;
  };

  render() {
    return (
      <div className="based-background">
        <Container>
          <p>Jawaban : {JSON.stringify(this.state.dataJawaban)}</p>
          <Card>
            {data.map((posisi, index) => {
              if (posisi.type === "essay") {
                return (
                  <TextArea
                    soal={posisi.soal}
                    key={index}
                    numbering={index + 1}
                    funcPilihan={this.addJawaban}
                  />
                );
              } else if (posisi.type === "radio") {
                return (
                  <RadioButton
                    data={posisi}
                    key={index}
                    numbering={index + 1}
                    funcPilihan={this.addJawaban}
                  />
                );
              } else if (posisi.type === "checkbox") {
                return (
                  <CheckBox
                    data={posisi}
                    key={index}
                    numbering={index + 1}
                    funcPilihan={this.addJawaban}
                  />
                );
              }
            })}
            <div className="sticky-top">
              <ResultNilai jawaban={this.state.hasilJawabanSoal} />
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}

export default withRouter(FormPertanyaan);
