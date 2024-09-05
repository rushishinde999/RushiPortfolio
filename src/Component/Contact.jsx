import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen m-0  p-0 bg-gradient-to-r from-indigo-200 to-yellow-100">
      <div className="font-bold text-blue-500 mb-4 text-2xl ">Contact</div>
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-semibold">Name</span>
            <input
              type="text"
              autoFocus
              placeholder="Enter Your Name"
              className="p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-semibold">Message</span>
            <textarea
              placeholder="Enter Your Message"
              className="p-2 border border-gray-300 rounded resize-y min-h-[100px]"
            ></textarea>
          </label>
          <div className="btn flex justify-center ">
            <button className="rounded-lg bg-green-500 p-2 w-24">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
