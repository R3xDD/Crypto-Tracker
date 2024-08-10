import React from "react";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton({priceType , handlePriceChange}) {
  

  return (
    <div className="flex justify-center items-center  my-6  ">
          <p className="md:font-bold font-semibold md:text-lg text-sm text-[#40afa0] mr-3">Type :</p>
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceChange}
        aria-label="Platform"
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--blue)!important",
            borderColor: "unset",
            color: "var(--blue) !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue) !important",
          },
        }}
      >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="market_caps">Market Cap </ToggleButton>
        <ToggleButton value="total_volumes">Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
