"use client";

import { motion } from "framer-motion";
import { Landmark, UserCog, Users } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const StatsCard = () => {
  return (
    <section
      className="relative min-h-[400px] overflow-hidden bg-black/80 z-20"
      style={{
        backgroundImage: `url(${"https://aust.edu/storage/files/c5AfhsxdM5fF8xRRnrLEkgqI57ButlxX1MH9iexP.jpeg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-black/60"></div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="relative mx-3 md:mx-12 lg:mx-18  overflow-hidden  mt-20 mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
          {/* Founded */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="p-4 rounded-lg text-center flex flex-col items-center"
          >
            <div className="p-7 bg-white rounded-full shadow-md flex items-center justify-center">
              <Landmark size={50} className="text-pink-800 font-bold" />
            </div>
            <motion.p
              className="text-3xl font-bold text-white mt-5 mb-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatedCounter value={1995} />
            </motion.p>
            <p className="text-2xl font-bold text-white">Founded</p>
          </motion.div>

          {/* Faculty Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="p-4 rounded-lg text-center flex flex-col items-center "
          >
            <div className="p-7 bg-white rounded-full shadow-md flex items-center justify-center">
              <UserCog size={50} className="text-blue-800 font-bold" />
            </div>
            <motion.p
              className="text-3xl font-bold text-white mt-5 mb-2"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <AnimatedCounter value={23} />
            </motion.p>
            <p className="text-2xl font-bold text-white">Faculty Members</p>
          </motion.div>

          {/* Total Students */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.2, delay: 1 }}
            className="p-4 rounded-lg text-center flex flex-col items-center "
          >
            <div className="p-7 bg-white rounded-full shadow-md flex items-center justify-center">
              <Users size={50} className="text-green-800 font-bold" />
            </div>
            <motion.p
              className="text-3xl font-bold text-white mt-5 mb-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <AnimatedCounter value={500} />
            </motion.p>
            <p className="text-2xl font-bold text-white ">Total Students</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsCard;
