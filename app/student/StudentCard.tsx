import { motion } from "framer-motion";
import Image from "next/image";

function StudentCard({ data }) {
  const { name, designation, profile_picture, index } = data || {};
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: 0.3 * (index + 1) }}
      className="relative h-[250px] group rounded-md shadow-lg overflow-hidden gap-2"
    >
      <Image
        src={profile_picture}
        alt="student"
        className="w-full object-cover h-[200px] group-hover:scale-120 duration-700"
        fill
      />

      {/* Hidden text that slides up on hover */}
      <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black/60 flex flex-col justify-center items-center transition-all duration-500 group-hover:bottom-0">
        <button className="text-sm text-white text-center cursor-pointer hover:bg-white hover:text-gray-800 duration-500 mt-3 border border-white px-3 py-1">
          Read More
        </button>
      </div>
      <div className="absolute left-0 w-full bottom-0 bg-black/60 text-white p-3">
        <h2 className=" font-semibold">{name}</h2>
        <p className="text-sm">{designation}</p>
      </div>
    </motion.div>
  );
}

export default StudentCard;
