import {
  json,
  Form,
  ActionFunction,
  useActionData,
  useTransition,
} from 'remix';
import * as utils from '../utils';

type User = {
  username: string;
  password: string;
};

type Errors = { username?: string; password?: string; userNotFound?: string };

type FormResult = {
  user?: User;
  errors: Errors;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const username = formData.get('username');
  const password = formData.get('password');

  const errors: Errors = {};

  await utils.wait(2000);

  if (!username) {
    errors.username = 'Missing username!';
  }

  if (!password) {
    errors.password = 'Missing password!';
  }

  if (!username || !password) {
    return json({ errors });
  }

  const user: User | undefined = await fetch(
    `http://localhost:9999/users?username=${username}&password=${password}`
  )
    .then((response) => response.json())
    .then((users) => users[0]);

  if (!user) {
    return json({ errors: { userNotFound: '404 user' } });
  }

  return json({ user });
};

export default function LoginWithTransition() {
  const formResult = useActionData<FormResult>();
  const transition = useTransition();

  const user = formResult?.user || null;
  const errors: Errors = formResult?.errors || {};

  if (transition.state === 'submitting') {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
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
      <Form
        method="post"
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
        }}
      >
        {errors.userNotFound && (
          <div style={{ color: 'red' }}>{errors.userNotFound}</div>
        )}
        {errors.username && (
          <div style={{ color: 'red' }}>{errors.username}</div>
        )}
        <input type="text" name="username" />
        {errors.password && (
          <div style={{ color: 'red' }}>{errors.password}</div>
        )}
        <input type="password" name="password" />
        <button>Login</button>
      </Form>
    </main>
  );
}
