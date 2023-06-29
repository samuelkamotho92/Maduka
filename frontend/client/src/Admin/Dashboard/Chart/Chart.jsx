import React from 'react'
import './Chart.css'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import { useSelector } from 'react-redux';
const Chart = ({data,title,grid,dataKey}) => {
  return (
    <div className="chart">
    <h3 className="chartTitle">Auctions</h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <LineChart data={data}>
        <XAxis dataKey="title" stroke="#5550bd" />
        <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
        <Tooltip />
        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
      </LineChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Chart
