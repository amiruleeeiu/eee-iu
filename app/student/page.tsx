"use client";

import { useGetUsersQuery } from "@/services/apiSlice";
import StudentCard from "./StudentCard";

function Student() {
  const { data, isLoading, isSuccess, isFetching } = useGetUsersQuery("");

  let content = null;

  if ((isLoading || isFetching) && !isSuccess) {
    content = <div>Loading...</div>;
  } else if (!(isLoading || isFetching) && isSuccess && data) {
    content = (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5">
        {data?.map((i, index) => (
          <StudentCard key={i.id} data={{ ...i, index }} />
        ))}
      </div>
    );
  }
  return (
    <div className="my-2 md:my-6 mx-2 md:mx-12 lg:mx-20">
      <h1 className="text-2xl font-bold text-center mt-10">Students</h1>
      {content}
    </div>
  );
}

export default Student;
