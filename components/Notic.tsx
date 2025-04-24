"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

interface NoticeItemProps {
  notice: {
    id: number;
    title: string;
    content: string;
    date: string;
  };
}

const NoticeItem: FC<NoticeItemProps> = ({ notice }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ scale: 1, opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 3, type: "spring" }}
      className="shadow-lg flex justify-between  duration-300 bg-white border-l-8 border-green-600 p-4 mt-2 w-[90%] mx-auto rounded-md mb-2"
    >
      <div>
        <Link
          href={"/"}
          className="font-bold text-lg  hover:text-yellow-500 duration-500 text-gray-600"
        >
          {notice.title}
        </Link>
        <p className="text-gray-800 text-sm tracking-wider mt-2">
          {notice.content}{" "}
          <Link
            href={"/"}
            className="text-xs font-bold hover:underline text-blue-600 duration-300 rounded-full"
          >
            Read More
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-end justify-between">
        {/* <Link
          href={"/"}
          className="flex items-center  text-sm border border-blue-600 hover:bg-blue-500 py-1 px-3 duration-300 rounded-full"
        >
          Read More <ChevronRight size="20" />
        </Link> */}
        <div></div>
        <p className="text-sm mt-2">{notice.date}</p>
        {/* <p className="text-sm flex justify-end">{notice.date}</p> */}
      </div>
    </motion.div>
  );
};

function Notic() {
  const notices = [
    {
      id: 1,
      title: "Notice Title 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Published: 16 Apr, 2025",
    },
    {
      id: 2,
      title: "Notice Title 2",
      content: "Sed tincidunt, nunc at venenatis tincidunt.",
      date: "Published: 16 Apr, 2025",
    },
    {
      id: 3,
      title: "Notice Title 3",
      content: "Nunc nisl aliquet nunc, eget aliquam nisl.",
      date: "Published: 16 Apr, 2025",
    },
    {
      id: 4,
      title: "Notice Title 4",
      content: "Eget aliquam nisl nunc eget nunc.",
      date: "Published: 16 Apr, 2025",
    },
  ];

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "spring" }}
        className="my-5 flex justify-center items-center"
      >
        <h1 className="text-3xl font-bold border-b-2">Notice</h1>
      </motion.div>

      <div className="space-y-2">
        {notices.map((notice) => (
          <NoticeItem key={notice.id} notice={notice} />
        ))}
      </div>
    </motion.div>
  );
}

export default Notic;
