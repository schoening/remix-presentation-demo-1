import { json, ActionFunction, useActionData, Form, MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return {
    title: 'greeting',
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const username = formData.get('username');

  return json({ username: username });
};

export default function Greeting() {
  const formdata = useActionData();

  const username = formdata?.username;

  return (
    <main>
      <Form method="post">
        <h1>Hello, {username || '?'}</h1>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </Form>
    </main>
  );
}
