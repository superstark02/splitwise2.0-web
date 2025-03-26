import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  FilledInput,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useMemo, useState } from "react";
import { AppBarMain } from "../../components/app-bar/AppBarMain.tsx";
import ChipComp from "../../components/chips/Chip.tsx";
import { AppContex } from "../../context/Context.tsx";
import { Friend } from "../../interface/Friends.ts";
import { BottomSheet } from "../../components/bottom-sheet/BottomSheet.tsx";
import { addExpense } from "../new/ApiClient.ts";
import { UserData } from "../../interface/IntialData.ts";

export const AddModifyExpense = () => {
  const { checked, connections, user } = useContext(AppContex);
  const [paidBy, setPaidBy] = useState<Partial<UserData>>(user);
  // image
  // connections

  const addModifyExpense = () => {
    // update all connections with amount acc to percentage/amount etc.
    // add expense
    // modify expense
    const payload = {
      amount: 1200,
      paid_by: "9876543210",
      split_type: "E",
      expense_date: new Date(),
      icon: "",
      description: "",
      connection_id: 1,
    };

    addExpense(payload).then((res) => {
      if (res.data.success) {
        // success
        // redirect to "/"
      } else {
        // sww
      }
    });
  };

  const handleDelete = () => {};

  const handleChange = () => {};

  const selectedConnections = useMemo(() => {
    const result = new Array<Friend>();

    checked.forEach((id) => {
      const friend = connections.find((item) => item.connectionId === id);
      if (friend) result.push(friend);
    });
    return result;
  }, [connections, checked]);

  return (
    <div>
      <AppBarMain
        title="Add Expense"
        icon={<ArrowBackIcon />}
        onIconClick={() => window.history.back()}
      />
      <div style={{ padding: "12px" }}>
        <div
          style={{
            boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
            padding: "12px",
            borderRadius: "8px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          With you and{" "}
          {selectedConnections?.map((item) => (
            <ChipComp
              handleDelete={handleDelete}
              title={item.connectedToName ?? "Bob"}
            />
          ))}
        </div>

        <div
          style={{
            boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
            padding: "12px",
            borderRadius: "8px",
            marginTop: "12px",
            display: "flex",
            gap: "12px",
          }}
        >
          <div>
            <div
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid",
                borderRadius: "8px",
                padding: "4px",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3724/3724720.png"
                alt="grocery_icon"
                width={100}
              />
            </div>
          </div>

          <div>
            <div>
              <TextField
                id="standard-basic"
                label="Name the expense"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Add a description"
                variant="standard"
                multiline
                fullWidth
              />
            </div>
          </div>
        </div>

        <div
          style={{
            boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
            padding: "12px",
            borderRadius: "8px",
            marginTop: "12px",
          }}
        >
          <div style={{ width: "100%" }}>
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              fullWidth
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "12px",
              gap: "12px",
              alignItems: "center",
            }}
          >
            Paid by <ChipComp title={paidBy.name ?? "You"} onClick={() => {}} />{" "}
            and Split <ChipComp title={"Equally"} onClick={() => {}} />
          </div>
        </div>

        <Button
          onClick={addModifyExpense}
          style={{ marginTop: "12px" }}
          fullWidth
          variant="contained"
        >
          Add Expense
        </Button>

        <BottomSheet open={false} setOpen={() => {}}>
          <div>Select user</div>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={paidBy}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </BottomSheet>
      </div>
    </div>
  );
};
