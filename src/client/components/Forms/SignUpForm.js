import { useState, useEffect } from 'react';

export default function SignUpForm(validate, onSubmit) {
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
  const [isSubmit, setIsSubmit] = useState(false);

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
    onSubmit(values);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
}
