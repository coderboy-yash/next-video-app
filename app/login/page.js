"use client";
import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      console.log(data);

      // adding token to session storage

      sessionStorage.setItem("token", JSON.stringify(data));

      if (error) console.log(error);
      else {
        alert("login successfull");
        router.push("/");
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
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
  );
};

export default page;
