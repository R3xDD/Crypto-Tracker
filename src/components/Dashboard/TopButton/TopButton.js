import React from "react";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
function TopButton() {
  // Get the button
  let mybutton = document.getElementById("btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    console.log(window.scrollY);
    if (window.scrollY < 500) {
      mybutton?.classList.toggle("hidden");
    }
  }
  return (
    <div className="btn">
      <div
        className="flex  border-2 border-solid  border-[#40afa0] fixed w-[3rem] h-[3rem] text-[#40afa0] font-bold rounded-full justify-center items-center cursor-pointer bottom-[1.5rem] right-[1.5rem] "
        id="btn"
        onClick={() => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }}
      >
        <ExpandLessRoundedIcon />
      </div>
    </div>
  );
}

export default TopButton;
