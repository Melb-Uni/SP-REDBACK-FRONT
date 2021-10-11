import React from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "../_utils/Table";

export default function ReverseTableQuality(props) {
  const data = props.data;
  const release = props.release;

  let selectedData = {};
  for (var i = 0; i < data.length; i++) {
    if (data[i]["release"] === release) {
      selectedData = data[i];
    }
  }

  const formattedData = [
    {
      metric: "Lines",
      number: selectedData.code_lines_count,
    },
    {
      metric: "Classes",
      number: selectedData.class_count,
    },
    {
      metric: "Files",
      number: selectedData.file_count,
    },
    {
      metric: "Functions",
      number: selectedData.function_count,
    },
    {
      metric: "Comment Lines",
      number: selectedData.comment_lines_count,
    },
    {
      metric: "Comment Lines / Code Lines",
      number: selectedData.comment_to_code_ratio,
    },
    {
      metric: "Declarible Statements",
      number: selectedData.declarative_lines_count,
    },
    {
      metric: "Excutable Statements",
      number: selectedData.executable_lines_count,
    },
    {
      metric: "Sum of Cyclomatic Complexity",
      number: selectedData.sum_cyclomatic_complexity,
    },
    {
      metric: "All Methods",
      number: selectedData.all_methods,
    },
  ];

  const columns = [
    {
      name: "Metric",
      selector: "metric",
      center: true,
      sortable: true,
    },
    {
      name: "Number",
      selector: "number",
      center: true,
      sortable: true,
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        width: props.width ? props.width : "60vw",
      }}
    >
      <DataTable
        customStyles={customStyles}
        columns={columns}
        data={formattedData}
        striped={true}
        fixedHeader={true}
        highlightOnHover={true}
      />
    </div>
  );
}
