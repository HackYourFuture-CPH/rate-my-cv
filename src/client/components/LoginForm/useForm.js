import { useState, useEffect } from 'react';

export default function useForm(validate, onSubmit) {
  const [values, setValues] = useState({
    fullName: '',
    position: '',
    profileImageUrl: '',
    linkedin: '',
    github: '',
    website: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
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
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
}
