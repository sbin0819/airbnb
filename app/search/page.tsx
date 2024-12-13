'use client';

import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div>
      <h1>{query}</h1>
    </div>
  );
};

export default SearchPage;
