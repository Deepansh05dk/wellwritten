import React, { useState } from "react";
import "./balance1.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function Balance1() {
  const [count, setCount] = useState(1000);
  const [rows, setRows] = useState([
    { source: "a", usage: "a", date: "a" },
    { source: "a", usage: "a", date: "a" },
    { source: "a", usage: "a", date: "a" },
  ]);
  return (
    <div className="balance1">
      <div className="balance__count__container">
        <div>
          <span className="dollar__sign">
            <i className="fas fa-dollar-sign"></i>
          </span>{" "}
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {count}/5000
          </span>
        </div>
        <p>coins remaining</p>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Source</TableCell>
            <TableCell align="center">Usage</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.source}>
              <TableCell align="center">{row.source}</TableCell>
              <TableCell align="center">{row.usage}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Balance1;
