import { LoaderFunction, json, useLoaderData } from 'remix';

export const loader: LoaderFunction = async () => {
  return json({ message: 'Hello, world!' });
};

const Index = () => {
  const { message } = useLoaderData();

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Index;
