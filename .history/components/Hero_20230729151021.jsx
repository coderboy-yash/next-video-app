import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div className="flex">
        <div className="basis-1/2">
          <div>
            Learn Job ready skills from free online courses with certificates
          </div>
          <div>
            1000+ Free Courses, Live Sessions by Experts, and Job Opportunities
            from 2800+ Companies. Join 1 Crore+ learners to build your dream
            career now!
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src="/assets/student.jpg"
            width={500}
            height={500}
            alt="Picture of the student"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
