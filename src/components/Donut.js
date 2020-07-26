import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Mutual Funds", value: 800 },
  { name: "ETFs", value: 300 },
];
const COLORS = ["#0088FE", "#b09f32"];
const style = {
  top: 80,
  left: 200,
  lineHeight: "20px",
};

const Example = () => {
  return (
    <div className="column is-3 is-pulled-right">
      <div className="columns">
        <div className="card h-16">
          <div className="content mt-3">
            <span className="title is-5 ml-4">Portfolio</span>
            <span className="is-pulled-right mr-2">Asset Wise</span>
            <PieChart width={320} height={230}>
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={1}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                iconSize={15}
                width={90}
                height={90}
                layout="vertical"
                verticalAlign="bottom"
                wrapperStyle={style}
              />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
