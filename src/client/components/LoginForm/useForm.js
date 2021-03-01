import { useState, useEffect } from 'react';

export default function useForm(validate, onSubmit, initialState) {
  const [values, setValues] = useState({ initialState });
  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

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
    setIsSubmiting(true);
    onSubmit(values);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmiting) {
      isSubmiting();
    }
  }, [errors, isSubmiting]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
}
