"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactUs() {
  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<{ name: string; phone: string }>({
    name: "",
    phone: "",
  });

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "Name") {
      // Validate Name: Letters and spaces only
      const isValid = /^[a-zA-Z\s]+$/.test(value);
      setErrors((prev) => ({
        ...prev,
        name: isValid || value === "" ? "" : "Name should contain only letters.",
      }));
    }

    if (name === "Phone") {
      // Validate Phone: Numbers only
      const isValid = /^\d*$/.test(value);
      setErrors((prev) => ({
        ...prev,
        phone: isValid || value === "" ? "" : "Phone should contain only numbers.",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Block submission if there are validation errors
    if (errors.name || errors.phone) {
      alert("Please fix the errors before submitting.");
      return;
    }

    setStatus("loading");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    fetch(
      "https://script.google.com/macros/s/AKfycbx6yW4_VuHptuKvjb1zvy0ZCjwstb_tFt5NyKlI-UnvMlj2m09Q-iLzqeKmf8n_IXyd/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          setStatus("success");
          formElement.reset();
          setTimeout(() => setStatus(""), 5000);
          return response.text();
        } else {
          throw new Error("Submission failed");
        }
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="relative w-full overflow-hidden mt-[calc(4rem+10px)] bg-white text-black min-h-screen flex flex-col items-center">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold hover:text-yellow-600">
              Welcome to LinkW Innovations
            </h1>
            <p className="mt-4 text-black">
              Got a question or need assistance with our smart IoT products?
              Complete the form, and our team will reach out to you shortly.
              Together, let’s create innovative solutions for a sustainable
              future!
            </p>
            <Link href="/features">
              <button className="px-6 py-2 text-black border-2 border-black rounded-lg bg-transparent hover:bg-black hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Learn More About Our Products
              </button>
            </Link>
            <div className="mt-4 text-black space-y-1">
              <p>
                Hate contact forms? Email us at{" "}
                <a
                  href="mailto:team@linkwinnovation.com"
                  className="text-blue-500"
                >
                  team@linkwinnovation.com
                </a>
              </p>
              <p>
                Or call us at{" "}
                <a href="tel:+919032747058" className="text-blue-500">
                  +91 9032747058
                </a>
              </p>
            </div>
          </div>

          {/* Right Content (Form) */}
          <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
  {/* Name and Email Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <input
        type="text"
        name="Name"
        placeholder="Full Name"
        required
        onChange={handleValidation}
        className={`w-full p-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 ${
          errors.name ? "border-red-500 border-2" : ""
        }`}
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
      )}
    </div>
    <input
      type="email"
      name="Email"
      placeholder="Email Address"
      required
      className="w-full p-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Phone and Inquiry Purpose */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <input
        type="tel"
        name="Phone"
        placeholder="Phone (WhatsApp)"
        onChange={handleValidation}
        className={`w-full p-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 ${
          errors.phone ? "border-red-500 border-2" : ""
        }`}
      />
      {errors.phone && (
        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
      )}
    </div>
    <select
      name="Purpose_of_Inquiry"
      required
      className="w-full p-3 rounded-lg bg-gray-100 text-black focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Purpose of Inquiry</option>
      <option value="Product Inquiry">Product Inquiry</option>
      <option value="Technical Support">Technical Support</option>
      <option value="Sales & Distribution">Sales & Distribution</option>
      <option value="Partnership/Collaboration">Partnership/Collaboration</option>
      <option value="Others">Others</option>
    </select>
  </div>

  {/* Message Field */}
  <textarea
    name="Client_Message"
    rows={4}
    required
    placeholder="Your Message or Inquiry"
    className="w-full p-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
  ></textarea>

  {/* Subscription Checkbox */}
  <div className="flex items-center">
    <input
      type="checkbox"
      name="subscribe"
      id="subscribe"
      className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
    />
    <label htmlFor="subscribe" className="ml-2 text-black">
      Subscribe to our newsletter for the latest updates!
    </label>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={status === "loading"}
    className={`w-full px-6 py-2 text-green-600 border-2 border-green-600 rounded-lg bg-transparent hover:bg-green-600 hover:text-white font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
      status === "loading" ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    {status === "loading" ? "Submitting..." : "Submit"}
  </button>
</form>


            {/* Submission Status Messages */}
            {status === "success" && (
              <p className="mt-4 text-green-600 text-center">
                Successfully submitted! We&apos;ll contact you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-500 text-center">
                Error submitting the form. Please try again.
              </p>
            )}
          </div>
        </div>

      {/* Map Section */}
<div className="mt-12 w-full rounded-lg overflow-hidden shadow-lg bg-white">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15231.661261440002!2d78.5304683!3d17.3678075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e8cfaa30b5%3A0xd8fab637dbcb4b7b!2sLinkW%20Innovation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1732360807795!5m2!1sen!2sin"
    loading="lazy"
    title="LinkW Innovations Location"
    className="w-full h-[50vh] border-0"
    style={{
      filter: "none", // Remove dark effects
    }}
  />
</div>

      </div>
    </div>
  );
}
