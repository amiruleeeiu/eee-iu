"use client";

import TypewriterTitle from "@/components/motion/TypewriterTitle";
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
      <div className="flex flex-col justify-center items-center">
        <TypewriterTitle text="Students" />
        <p className="h-1 text-center  w-32 bg-yellow-500"></p>
      </div>
      {content}
    </div>
  );
}

export default Student;
