import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            Learn Job ready skills from free online courses with certificates
          </div>
        </div>
        <div>
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
