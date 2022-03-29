import { LoaderFunction, useLoaderData, json } from 'remix';

type User = {
  username: string;
};

export const loader: LoaderFunction = async () => {
  const users = await fetch('http://localhost:9999/thiswontwork').then(
    (response) => response.json()
  );

  return json(users);
};

const ErrorExample = () => {
  const users = useLoaderData();

  return (
    <div>
      {users.map((user: User, i: number) => (
        <h1 key={i}>{user.username}</h1>
      ))}
    </div>
  );
};

export default ErrorExample;
