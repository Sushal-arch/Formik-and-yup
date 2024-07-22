"use client";
import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "@/schemas/page";

export default function Page() {
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const { handleChange, handleBlur, touched, values, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        alert(JSON.stringify(values, null, 2));
        action.resetForm();
      },
    });

  // Log the Formik object
  // console.log("Formik object:", formik);

  return (
    <div className="bg-slate-600 w-full h-screen flex justify-center items-center">
      <div className="bg-white rounded max-w-sm w-full min-h-96 py-4 px-4">
        <div className="flex items-left mb-4">
          <h1 className="font-bold text-xl">Formik and Yup</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-left mt-5"
        >
          <div className="flex gap-2 flex-col">
            <label htmlFor="username" className="input-label">
              Username:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="border p-2 rounded"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="text-red-500 text-xs">{errors.name}</p>
            ) : null}
          </div>
          <div className="flex gap-2  flex-col ">
            <label htmlFor="email" className="">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="border p-2 rounded"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 text-xs">{errors.email}</p>
            ) : null}
          </div>
          <div className="flex gap-2 flex-col ">
            <label htmlFor="password" className="input-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="border p-2 rounded"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="text-red-500 text-xs">{errors.password}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 rounded mt-2 mx-auto"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
