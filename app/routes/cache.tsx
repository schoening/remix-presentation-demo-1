import { HeadersFunction } from 'remix';

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': 'max-age=300, s-maxage=3600',
  };
};

const CacheExample = () => {
  return <h1>Hello, world! (cached)</h1>;
};

export default CacheExample;
