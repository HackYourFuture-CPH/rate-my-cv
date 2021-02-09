import { useState } from 'react';

function useForm(validate) {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
}

export default useForm;
