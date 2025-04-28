"use client";
import TypewriterTitle from "@/components/motion/TypewriterTitle";
import Text from "@/components/Text";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div className=" m-2 md:my-9 md:mx-24">
      <div className="flex flex-col justify-center items-center mb-8">
        <TypewriterTitle text="About" />
        <p className="h-1 text-center  w-32 bg-yellow-500"></p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Text>
          Islamic University is one of the sixth major public universities in
          Bangladesh and largest seat of higher education in the south-west part
          of the country financially aided by the Organization of the Islamic
          Conference (OIC) and the government of Bangladesh through University
          Grants Commission, Bangladesh. It was established on 22 November 1979
          by the Islamic University Act. Islamic University began its academic
          operations on 28 June 1986. The university is recognized as the hub of
          academic and research activities, sports and cultural programs with a
          very innate and peaceful environment. It is a major international
          centre for an excellent integration of Islamic Studies with general
          Studies and Studies of modern science, engineering and technology. The
          university provides both local and foreign students with the
          facilities of undergraduate studies, postgraduate research and
          teaching. It is a campus-oriented university, where all the academic
          and administrative buildings, central library, student's residential
          halls, teacher's dormitories, gymnasium, play grounds, tennis court
          and other facilities are in one self-contained 175-acre land at
          Shantidanga-Dulalpur, beside the Kushtia-Khulna highway. It is located
          about 24 km south and 22 km north of the Kushtia and Jhenidah
          district-towns, respectively.
        </Text>
        <Text className="mt-3">
          Electrical and Electronic Engineering (EEE) Department was opened in
          this university in 1995 as the name of “Electronics and Applied
          Physics” with Professor Dr. M Ekin Uddin as the founder head of the
          department. Academic activities were started in the session 1995-96
          with 25 undergraduate students. Later, the course curriculum was
          upgraded and the department was renamed as the “Applied Physics,
          Electronics and Communication Engineering” in December, 2006. Again to
          meet the increasing demand of the 21st century the curriculum was
          updated again and the department was renamed as the “Electrical and
          Electronic Engineering” in August 2017.
        </Text>
      </motion.div>
    </motion.div>
  );
}

export default About;
