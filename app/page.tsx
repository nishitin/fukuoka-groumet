import { SearchForm } from '../ui/SearchForm';
import { StoreCard } from '../ui/StoreCard';
import { SubmitForm } from '../ui/SubmitForm.client';

async function fetchFukuokaGourmetData() {
  const API_KEY = process.env.API_KEY as string;
  const res = await fetch(API_KEY);

  const data = await res.json();

  return data;
}

export default async function Home() {
  const data = await fetchFukuokaGourmetData();

  return (
    <div className="space-y-12">
      <div className="flex justify-center w-full">
        <SearchForm />
        <SubmitForm />
      </div>
      <div className="flex justify-center w-full">
        <StoreCard data={data} />
      </div>
    </div>
  );
}
