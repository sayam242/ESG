// ==============================
// Email Validation
// ==============================

export const validateEmail = (email) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    return "Email is required.";
  }

  if (!regex.test(email)) {
    return "Please enter a valid email address.";
  }

  return "";
};

// ==============================
// Password Validation
// ==============================

export const validatePassword = (password) => {
  if (!password) {
    return "Password is required.";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/;

  if (!regex.test(password)) {
    return "Password must contain uppercase, lowercase, number and special character.";
  }

  return "";
};

// ==============================
// Confirm Password
// ==============================

export const validateConfirmPassword = (
  password,
  confirmPassword
) => {
  if (!confirmPassword) {
    return "Please confirm your password.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }

  return "";
};

// ==============================
// Name Validation
// ==============================

export const validateName = (name) => {
  if (!name.trim()) {
    return "This field is required.";
  }

  if (name.length < 2) {
    return "Minimum 2 characters required.";
  }

  return "";
};

// ==============================
// Employee ID Validation
// ==============================

export const validateEmployeeNo = (employeeNo) => {
  if (!employeeNo.trim()) {
    return "Employee ID is required.";
  }

  if (employeeNo.length < 3) {
    return "Employee ID is too short.";
  }

  return "";
};

// ==============================
// Department Validation
// ==============================

export const validateDepartment = (departmentId) => {
  if (!departmentId) {
    return "Please select a department.";
  }

  return "";
};

// ==============================
// Login Validation
// ==============================

export const validateLogin = (form) => {
  const errors = {};

  errors.email = validateEmail(form.email);
  errors.password = validatePassword(form.password);

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) delete errors[key];
  });

  return errors;
};

// ==============================
// Signup Validation
// ==============================

export const validateSignup = (form) => {
  const errors = {};

  errors.employeeNo = validateEmployeeNo(form.employeeNo);

  errors.firstName = validateName(form.firstName);

  errors.lastName = validateName(form.lastName);

  errors.email = validateEmail(form.email);

  errors.departmentId = validateDepartment(
    form.departmentId
  );

  errors.password = validatePassword(
    form.password
  );

  errors.confirmPassword =
    validateConfirmPassword(
      form.password,
      form.confirmPassword
    );

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) delete errors[key];
  });

  return errors;
};

// ==============================
// Forgot Password Validation
// ==============================

export const validateForgotPassword = (email) => {
  return validateEmail(email);
};