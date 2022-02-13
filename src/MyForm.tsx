import React, { useState } from "react";

export interface MyFormProps {
  onSubmit: (form: { name: string; description: string }) => void;
}
const MyForm = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState({ name: "", description: "" });
  const { name, description } = form;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={onChange} />
        <input name="description" value={description} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default MyForm;
