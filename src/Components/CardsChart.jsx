/* This example requires Tailwind CSS v2.0+ */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Table from "./Table";

const InterestOverTimeChart = ({ extractedData }) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={extractedData}
      margin={{
        top: 5,
        right: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="id" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="SearchRelevance"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default function CardsChart({
  extractedData,
  extractedDataTopics,
  extractedDataSearch,
}) {
  return (
    <div className="">
      <div className="w-full h-72">
        <InterestOverTimeChart extractedData={extractedData} />
      </div>
      <div className="h-[50vh]  overflow-y-scroll">
        <Table
          extractedDataSearch={extractedDataSearch}
          extractedDataTopics={extractedDataTopics}
        />
      </div>
    </div>
  );
}
