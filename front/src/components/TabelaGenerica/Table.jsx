import React from "react";
import Table from "react-bootstrap/Table"
import 'bootstrap/dist/css/bootstrap.min.css';

function Tabela({ data }) {
  if (data.length === 0) {
    return <p>No data to display</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <Table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={`${rowIndex}-${columnIndex}`}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tabela;















