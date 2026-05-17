'use client';

import { useQuery } from "@tanstack/react-query"; 
import apiRouter from "@/api/router";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => apiRouter.user.getUsers()
  });

  console.log(data);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       {data?.map((user: any) => (
          <div key={user.id} className="p-4 bg-gray-100 rounded-lg mb-4 w-full">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
       ))}
       {data?.length === 0 && (
          <p className="text-gray-600">No users found.</p>
       )}
       {!data && isLoading && (
          <p className="text-gray-600">Loading...</p>
       )}
      </main>
    </div>
  );
}
