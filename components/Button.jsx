import React from "react";

const Button = ({ onClick, text, color = 'bg-purpleLogo' }) => {
  return (
    <a href="#" className={`text-sm font-medium leading-6 text-whitePrimary ${color} min-w-[110px] text-center p-2`} onClick={onClick}>
      { text }
    </a>
  );
};

export default Button;
