import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = (props) => {
  return (
    <SparklineComponent
      id={props.id}
      height={props.height}
      width={props.width}
      lineWidth={1}
      valueType="Numeric"
      fill={props.color}
      border={{ color: props.currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ["All"], size: 2.5, fill: props.currentColor }}
      dataSource={props.data}
      xName="x"
      yName="y"
      type={props.type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
