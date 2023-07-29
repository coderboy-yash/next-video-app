import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className="flex p-4 m-4 justify-between">
        <div className="basis-1/2 flex justify-center items-center flex-col">
          <div className="text-6xl font-bold text-gray-700">
            Learn Job ready skills from{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              free
            </span>{" "}
            online courses with certificates
          </div>
          <div className="mt-8">
            1000+ Free Courses, Live Sessions by Experts, and Job Opportunities
            from 2800+ Companies. Join 1 Crore+ learners to build your dream
            career now!
          </div>
          <div>
            <button className="bg-orange-400 p-3 mt-4 text-2xl rounded-xl text-white font-bold">
              Start for free
            </button>
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src="/assets/student.jpg"
            width={800}
            height={500}
            alt="Picture of the student"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
