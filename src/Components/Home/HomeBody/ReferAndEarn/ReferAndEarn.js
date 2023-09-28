import React, { useState } from "react";
import "./referandearn.css";
import "../../../../Styles/hometaskbar.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function ReferAndEarn() {
  const [referralLink, setReferralLink] = useState("");
  const [rows, setRows] = useState([
    { date: "a", name: "a", plan: "a", duration: "a" },
    { date: "a", name: "a", plan: "a", duration: "a" },
    { date: "a", name: "a", plan: "a", duration: "a" },
  ]);
  return (
    <div className="referandearn">
      <div className="referandearn__taskbar">
        {" "}
        <div className="mainlayout__taskbar">
          <h1>Refer and Earn</h1>
        </div>
      </div>
      <div className="referandearn__body">
        <TextField
          style={{ color: "#7F7F7F" }}
          fullWidth
          id="outlined-required"
          label="Referral Link"
          variant="outlined"
          margin="dense"
          value={referralLink || ""}
          onChange={(e) => {
            setReferralLink(e.target.value);
          }}
        />
        <Button
          disableRipple="true"
          disableFocusRipple="true"
          variant="outlined"
          size="small"
          style={{ marginTop: "1.5rem" }}
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(referralLink);
          }}
          className="hover__backgroundchange__buttons"
        >
          Copy Link
        </Button>
      </div>
      <h3>Created Links</h3>
      <div className="createdlinks__body">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Plan</TableCell>
              <TableCell align="center">Duration of Plan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.plan}</TableCell>
                <TableCell align="center">{row.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ReferAndEarn;
