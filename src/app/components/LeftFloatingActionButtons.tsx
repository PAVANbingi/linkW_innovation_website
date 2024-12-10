
"use client";
//import React, { useEffect, useState } from "react";
//import { FaPhoneAlt } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa6";
// import { IoMdArrowUp } from "react-icons/io";


function CallActionButton() {
    return (
      <div>
        <a href="tel:+91 9032747058">
          {/* Replace with the GIF */}
          <div >
            <img
              src="/contact.gif" // Replace with the actual path to your GIF
              alt="Call"
              width={120} // Adjust the size of the GIF as needed
              height={120} // Adjust the size of the GIF as needed
              className="rounded-full" // Optional: Add a class to maintain rounded corners
            />
          </div>
        </a>
      </div>
    );
  }

function WhatsAppActionButton() {
    return (
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=919032747058&text=Hello,%20LinkW%20Innovation!%20👋%20I%20would%20like%20to%20get%20more%20information%20about%20your%20product%20and%20the%20services%20you%20offer.%20Looking%20forward%20to%20your%20response!%20📱%20💬"

          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Replace the icon with a GIF */}
          <div className="rounded-full bg-green-600 overflow-hidden p-1">
            <img
              src="/wp.gif" // Replace with the path to your GIF
              alt="WhatsApp"
              width={40} // Set the size as needed
              height={40} // Set the size as needed
              className="rounded-full" // You can add this class if you want the GIF to have rounded corners
            />
          </div>
        </a>
      </div>
    );
}

function FloatingActionButtons() {
	return (
		<div className="fixed left-2 bottom-5">
			<div className="flex flex-col items-center gap-y-3">
				<CallActionButton />
				<WhatsAppActionButton />
			</div>
		</div>
	);
}

export default FloatingActionButtons;
