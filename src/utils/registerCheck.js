import { toast } from 'react-toastify';

const registerCheck = (error) => {
  const { password, email } = error.response.data.errors;
  console.log(error.response.data.errors);

  if (email) {
    toast.error(email.message);
  }

  if (password) {
    toast.error(password.message);
  }
}

export {registerCheck};