import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';

export default NextJSLoginForm;

function NextJSLoginForm() {
  const [formDataResult, setFormDataResult] = useState();
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState({});

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password Name is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    loginApi.login(data.username, data.password).then((result) => {
      setFormDataResult(result);
      setUser(result.user || null);
      setErrors(result.errors);
    });

    return false;
  }

  if (user) {
    return (
      <main>
        <h1>Hello, {user.username}!</h1>
      </main>
    );
  }

  return (
    <main>
      {errors.userNotFound && (
        <div style={{ color: 'red' }}>{errors.userNotFound}</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="username"
          type="text"
          {...register('username')}
          className={`${errors.firstName ? 'is-invalid' : ''}`}
        />
        <input
          name="password"
          type="password"
          {...register('password')}
          className={`${errors.firstName ? 'is-invalid' : ''}`}
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
