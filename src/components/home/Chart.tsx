import * as React from "react";
import c3, { Primitive } from "c3";

import { getState } from "utils";
import styled from "lib/emotion";
import SectionWrapper from "components/common/SectionWrapper";

const ChartWrapper = styled(SectionWrapper)`
  background: #fff;
  b {
    display: block;
    font-size: 0.8rem;
  }
`;

const ChartContent = styled("div")<{
  state?: "positive" | "negative";
  chartId: string;
}>`
  display: flex;
  > div:first-of-type {
    display: flex;
    flex-direction: column;
    .value {
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.5rem;
      margin-bottom: 0.4rem;
      margin-top: 0.8rem;
    }
    .description {
      color: ${(props) => props.theme.colors.accent};
      opacity: 0.33;
      font-size: 0.8rem;
    }
    .delta {
      color: ${(props) => props.state && props.theme.colors[props.state]};
      font-size: 0.8rem;
      font-weight: bolder;
      margin-top: 0.5rem;
      :before {
        display: inline-block;
        content: "";
        border: solid 7px transparent;
        border-left-width: 5px;
        border-right-width: 5px;
        ${(props) =>
          props.state === "positive" &&
          `border-bottom-color: ${props.theme.colors[props.state]}`};
        ${(props) =>
          props.state === "negative" &&
          `border-top-color: ${props.theme.colors[props.state]}`};
        width: 0px;
        height: 0px;
        margin-right: 0.6em;
        margin-bottom: ${(props) =>
          props.state === "positive" ? "0" : "-7px"};
      }
    }
  }
  > div:last-of-type {
    flex-grow: 1;
    margin-left: 2em;
  }
  .c3-line {
    stroke-width: 2px;
    ${(props) =>
      props.state && `stroke: ${props.theme.colors[props.state]} !important`};
  }
`;

class Chart extends React.Component<{
  delta: string;
  description: string;
  title: string;
  value: string;
  id: string;
  data: [string, ...Primitive[]];
}> {
  componentDidMount() {
    this.renderChart(this.props.id, this.props.data);
  }

  // componentDidUpdate() {
  //   this.renderChart(this.props.id, this.props.data);
  // }

  renderChart = (id: string, data: [string, ...Primitive[]]) => {
    const chart = c3.generate({
      size: {
        height: 88,
      },
      axis: {
        x: {
          show: false,
        },
        y: {
          show: false,
        },
      },
      point: {
        show: false,
      },
      legend: {
        show: false,
      },
      data: {
        type: "spline",
        columns: [data],
      },
    });
    // @ts-ignore
    document.getElementById(id)!.appendChild(chart!.element);
  };

  public render() {
    const { description, delta, title, value, id } = this.props;
    return (
      <ChartWrapper>
        <b>{title}</b>
        <ChartContent chartId={id} state={getState(delta)}>
          <div>
            <span className="value">{value}</span>
            <small className="description">{description}</small>
            <span className="delta">{delta}</span>
          </div>
          <div id={id}></div>
        </ChartContent>
      </ChartWrapper>
    );
  }
}

export default Chart;
