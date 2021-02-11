function validate(values) {
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
    errors.password = 'password is required';
  }

  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Password doesnot match';
  }

  return errors;
}

export default validate;
