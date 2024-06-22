import React from "react";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function DaySelect({days , handleDaysChange}) {
  

  return (
    <div className="flex items-center gap-1 ">
      <p className="text-[#40afa0] text-md md:text-lg font-normal  md:font-semibold  tracking-normal md:tracking-wide  leading-6 md:leading-8">
        Days:
      </p>
      <Select
        sx={{
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#40afa0",
            },
          },
        }}
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
      </Select>
    </div>
  );
}
