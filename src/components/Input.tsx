import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      <label>{props.label}</label>
      <input {...props} />
    </>
  );
});

export default Input;
