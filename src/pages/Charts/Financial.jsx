import React from "react";
import {
  ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject, 
  HiloSeries, 
  Tooltip, 
  DateTime, 
  Zoom, 
  Logarithmic, 
  Crosshair
} from "@syncfusion/ej2-react-charts"

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis} from "../../data/dummy"
import { useStateContext } from "../../contexts/ContextProvider"
import { Header } from "../../components";

const date = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);


const ColorMapping = () => {

  const {currentMode} = useStateContext()

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
    <Header category="Financial" title="AAPL Historical" />
    <div className="w-full">
    <ChartComponent
    id="bar-chart"
    height="420px"
    primaryXAxis={FinancialPrimaryXAxis}
    primaryYAxis={FinancialPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{ enable: true, shared: true }}
    crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
    background={currentMode === "Dark"? "#33373E": "#fff" }
    >
      <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
      <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  </div>
  );
};

export default ColorMapping;
