export const isValidPassword = (password: string): boolean => {
  const hasDigit = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  return hasDigit && hasLetter;
};
