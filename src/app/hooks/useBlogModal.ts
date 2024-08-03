import useSWR from 'swr';

export const revalidate=0;

const fetcher = (url : string) => fetch(`${url}?timestamp=${new Date().getTime()}`, { cache: 'no-store' }).then((res) => res.json());

const useBlog = () => {
  const { data: blogs, error } = useSWR('/api/', fetcher, { revalidateOnFocus: true , refreshInterval : 2000 });

  const loading = !error && !blogs;

  return {
    blogs: blogs || [],
    loading,
    error,
  };
};

export default useBlog;
