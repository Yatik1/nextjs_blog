import useSWR from 'swr';

const fetcher = (url : string) => fetch(url).then((res) => res.json());

const useBlog = () => {
  const { data: blogs, error } = useSWR('/api/', fetcher, { revalidateOnFocus: false });

  const loading = !error && !blogs;

  return {
    blogs: blogs || [],
    loading,
    error,
  };
};

export default useBlog;
