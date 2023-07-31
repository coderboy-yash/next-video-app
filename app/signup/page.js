"use client";
import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import Image from "next/image";
const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) console.log(error);
      else alert("check your email for verification");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <div className="flex justify-center item-center">
        <Image
          src="/assets/sign.jpg"
          width={400}
          height={400}
          alt="login image"
        ></Image>

        <div>
          <form action="" onSubmit={handleSubmit} className="flex flex-col">
            <input
              placeholder="name"
              name="fullName"
              type="text"
              onChange={handleChange}
            />
            <input
              placeholder="email"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
