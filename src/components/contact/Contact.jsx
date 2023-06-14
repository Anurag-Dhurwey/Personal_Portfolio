"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Wrapper } from "@/container";
import { mail, calling } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const Yup_validate = {
    name: Yup.string()
      .max(35, "Must be 35 characters or less")
      .required("Required"),
    message: Yup.string()
      .min(10, "Must be 10 characters or more")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  };

  const sendMail = async (value,{setSubmitting}) => {
    try {
      const data = await fetch("api/contact-message", { method: "POST",headers:{'Content-Type': 'application/json'},body:JSON.stringify(value) });
     const jsonData= await data.json()
     if(!jsonData.error){
      setSubmitting(false)
      alert('Message sent successfully')
     }
    } catch (error) {
      console.log(error);
    }
    // setTimeout(() => {
    //   // alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  };

  return (
    <div className="h-[100%] w-[100%] flex justify-evenly items-center max-[820px]:flex-col max-[820px]:gap-y-8 ">
      <div className="flex justify-center items-center flex-col gap-y-4">
        <Link
          href="mailto:anuragdhurwey9211@gmail.com"
          className="flex justify-between items-center gap-x-4 bg-pink-200 px-8 py-2 rounded-xl  "
        >
          <Image src={mail} alt="mail icon" className="h-[40px] w-[40px]" />
          <p className="p-text">anuragdhurwey9211@gmail.com</p>
        </Link>

        <Link
          href="tel:+91 7067996494"
          className="flex justify-between items-center gap-x-4 bg-pink-200 px-8 py-2 rounded-xl"
        >
          <Image
            src={calling}
            alt="calling icon"
            className="h-[40px] w-[40px]"
          />
          <p className="p-text">+91 7067996494</p>
        </Link>
      </div>
      <div className="">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={Yup.object(Yup_validate)}
          onSubmit={(value,{setSubmitting})=>{
        
           sendMail(value,{setSubmitting})
          }}
        >
          {({isSubmitting})=>(
            <Form className="flex flex-col justify-center items-center gap-y-4 ">
            {/* <label htmlFor="name">Name</label> */}
            <div> 
              <Field
                name="name"
                type="text"
                className="bg-slate-300 rounded-md px-3 py-2 w-[300px]"
                placeholder="Name"
              />
              <p className="text-xs h-3 text-red-600 px-2">
                <ErrorMessage name="name" />
              </p>
            </div>

            <div>
              {/* <label htmlFor="email">Email address</label> */}
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="bg-slate-300  rounded-md px-3 py-2 w-[300px]"
              />
              <p className="text-xs h-3 text-red-600 px-2">
                <ErrorMessage name="email" className=" text-xs" />
              </p>
            </div>
            <div>
              {/* <label htmlFor="message">Message</label> */}
              <Field
                name="message"
                as="textarea"
                placeholder="Message"
                className="bg-slate-300 h-[100px] w-[300px] rounded-md px-3 py-2"
              />
              <p className="text-xs h-3 text-red-600 px-2">
                <ErrorMessage name="message" className=" text-xs" />
              </p>
            </div>
            <button
              type="submit"
              className={`bg-blue-800  rounded-lg w-[300px] py-2 ${isSubmitting?'text-green-600':'text-yellow-50'}`}
            >
              {isSubmitting?'Submitting':'Submit'}
            </button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Wrapper(Contact, "contact", "bg-[var(--secondry-bg)]");
