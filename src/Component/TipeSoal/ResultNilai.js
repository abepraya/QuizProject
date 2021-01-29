import React, { Component } from "react";

export default class ResultNilai extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.jawaban.map((jawab) => {
            if (jawab.hasil === "benar") {
              return (
                <li className="list-group-item bg-primary">
                  Jawab: {jawab.nomorSoal} {jawab.hasil}
                </li>
              );
            } else if (jawab.hasil === "salah") {
              return (
                <li className="list-group-item bg-danger">
                  Jawab: {jawab.nomorSoal} {jawab.hasil}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
