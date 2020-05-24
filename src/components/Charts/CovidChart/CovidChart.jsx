import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

const CovidChart = ({ data }) => (
  <LineChart
      width={1800}
      height={800}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="natural" dataKey="confirmed" stroke="#8884d8" dot={false} name="Potwierdzonych" strokeWidth={4} />
      <Line type="natural" dataKey="recovered" stroke="#82ca9d" dot={false} name="Wyzdrowiałych" strokeWidth={4} />
      <Line type="natural" dataKey="deaths" stroke="#ff0000" dot={false} name="Zgonów" strokeWidth={4} />
  </LineChart>
)

export default CovidChart;

