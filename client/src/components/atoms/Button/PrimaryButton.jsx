import React from "react";

const PrimaryButton = ({ title, classProps, ...rest }) => {
  return (
    <button
      className={`text-sm  font-semibold text-white bg-gradient-to-r from-[#EB1484] to-[#C81CC5] rounded-[10px] py-[9px] px-[30px] ${classProps}`}
      type="button"
      {...rest}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;