function Validation(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email,
    )
  ) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } 
  else if ('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,}') {
    errors.password =
      'Password must contain at least one number and one uppercase letter, and at least 6 characters';
  }
  return errors;
}

export default Validation;
