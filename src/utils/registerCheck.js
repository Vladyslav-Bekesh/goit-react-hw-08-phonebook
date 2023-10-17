import { toast } from 'react-toastify';

const registerCheck = (error) => {
  console.log('error.message');

  if (error.response.data.errors) {
    const { password, email } = error.response.data.errors;

    if (email) {
      toast.error(email.message);
    }
    if (password) {
      toast.error(password.message);
    }
  }

  if (error.message) {
    toast.error(`${error.message};\n Try another email or password`);
  }
}

export { registerCheck };