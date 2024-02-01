import React from "react";
import "./style.scss";
type InputFormProps = {
  placeholder: string;
  typeInput: string;
  nameInput: string;
};
export function InputForm({
  placeholder,
  typeInput,
  nameInput,
}: InputFormProps) {
  return (
    <input
      type={typeInput}
      name={nameInput}
      placeholder={placeholder}
      className="input-form"
    />
  );
}
type memoProps = {
  name: string;
  placeholder: string;
};
export const MemoForm = ({ name, placeholder }: memoProps) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      id=""
      cols={30}
      rows={10}
      className="input-form"
    ></textarea>
  );
};
