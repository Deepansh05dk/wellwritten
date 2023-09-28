import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./balance3.css";

function Balance3() {
  const [rows, setRows] = useState([
    { source: "a", usage: "a", date: "a" },
    { source: "a", usage: "a", date: "a" },
    { source: "a", usage: "a", date: "a" },
  ]);
  return (
    <div className="balance3">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Invoice Id</TableCell>
            <TableCell align="center">Bill Date</TableCell>
            <TableCell align="center">Bill Plan</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.source}>
              <TableCell align="center">{row.source}</TableCell>
              <TableCell align="center">{row.usage}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                <div className="view__download__container">
                  <p>Views</p>
                  <p>Download</p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Balance3;
