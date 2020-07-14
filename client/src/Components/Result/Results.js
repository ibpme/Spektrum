import React, { Component } from "react";
import Plot from "react-plotly.js";

export class Results extends Component {
  render() {
    console.log(this.props.results);
    return (
      <div className=".container text-center p-3 mx-auto flex-column">
        <Plot
          data={[
            {
              x: [this.props.results.x],
              y: [this.props.results.y],
              mode: "markers",
              marker: {
                size: [40, 60, 80, 100],
              },
            },
            {
              x: [0, 35, 0, -35],
              y: [-35, 0, 35, 0],
              mode: "text",
              name: "Text",
              text: ["Sederhana", "Progresif", "Borjuis", "Konservatif"],
              textposition: "bottom",
              type: "scatter",
            },
          ]}
          layout={{
            width: 600,
            height: 600,
            title: "Results",
            xaxis: { autorange: false, range: [-40, 40] },
            yaxis: { autorange: false, range: [-40, 40] },
            showlegend: false,
          }}
          staticPlot={true}
        />
      </div>
    );
  }
}

export default Results;
