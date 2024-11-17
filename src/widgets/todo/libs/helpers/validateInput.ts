export const validateInput = (value: string) => {
  if (!value) {
    return 'The field must not be empty';
  }
}