import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="relative w-full overflow-hidden mt-[calc(4rem+10px)] bg-slate-950 text-white px-6 py-12 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 hover:text-rose-600 transition-colors duration-300">
          Terms & Conditions
        </h1>
        <p className="text-center text-gray-400 mb-12 leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
          These terms of use (the “Agreement”) apply to your use of the{" "}
          <span className="font-bold">LinkW Innovation Pvt. Ltd.</span> website
          (referred to as the &quot;LinkW Website&quot;), including any associated
          content, services, or features provided on the website. Please read
          these terms carefully before using the LinkW Website.
        </p>

        {/* Section 1: Agreement Acceptance */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 hover:text-rose-600 transition-colors duration-300">
            1. Agreement Acceptance
          </h2>
          <p className="leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
            By accessing or using the LinkW Website, you agree to be bound by
            all the terms and conditions outlined in this Agreement. If you do
            not agree to these terms, you must not access or use the website.
          </p>
          <p className="mt-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
            Please periodically review this Agreement for updates. Continued
            use of the website after modifications implies your acceptance of
            the changes.
          </p>
        </section>

        {/* Section 2: Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 hover:text-rose-600 transition-colors duration-300">
            2. Privacy Policy
          </h2>
          <p className="leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
            Your use of the LinkW Website is governed by our{" "}
            <span className="font-semibold">Privacy Policy</span>, which
            ensures the protection of your personal information. By continuing
            to use the website, you consent to the terms of the Privacy Policy.
          </p>
        </section>

        {/* Section 3: Prohibited Activities */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 hover:text-rose-600 transition-colors duration-300">
            3. Prohibited Activities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <li>
              Modifying, adapting, or reverse-engineering any part of the
              website.
            </li>
            <li>
              Using unauthorized methods to access website content or features.
            </li>
            <li>
              Engaging in activities that disrupt the functionality or security
              of the website.
            </li>
          </ul>
        </section>

        {/* Section 4: Intellectual Property Rights */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 hover:text-rose-600 transition-colors duration-300">
            4. Intellectual Property Rights
          </h2>
          <p className="leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
            All content on the LinkW Website, including trademarks, text, and
            design elements, is owned or licensed by LinkW Innovation Pvt. Ltd.
            Unauthorized use of this content is strictly prohibited.
          </p>
        </section>

        {/* Section 5: Termination */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 hover:text-rose-600 transition-colors duration-300">
            5. Termination
          </h2>
          <p className="leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
            We may terminate your access to the website if you breach these
            terms. Upon termination, you must stop using the website and
            destroy any downloaded content.
          </p>
        </section>

        {/* Section 6: Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 hover:text-rose-600 transition-colors duration-300">
            6. Limitation of Liability
          </h2>
          <p className="leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
            LinkW Innovation Pvt. Ltd. will not be liable for any damages,
            including data loss or service interruptions, resulting from your
            use of the website.
          </p>
        </section>

        {/* Section 7: Governing Law */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 hover:text-rose-600 transition-colors duration-300">
            7. Governing Law
          </h2>
          <p className="leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
            This Agreement is governed by the laws of India. Any disputes will
            be resolved in the courts of Telangana, India.
          </p>
        </section>

        {/* Section 8: Contact Information */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 hover:text-rose-600 transition-colors duration-300">
            Contact Information
          </h2>
          <p className="leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
            If you have questions regarding these Terms & Conditions, please
            contact us:
          </p>
          <address className="mt-4 not-italic text-gray-400">
            <p><strong>LinkW Innovation Pvt. Ltd.</strong></p>
            <p>H No: 17-112, Road No-3, Kamalanagar,</p>
            <p>Dilsukhnagar, Hyderabad, Telangana - 500060, India</p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:team@linkwinnovation.com"
                className="text-blue-600 hover:underline transition-colors duration-300"
              >
                team@linkwinnovation.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919032747058"
                className="text-blue-600 hover:underline transition-colors duration-300"
              >
                +91 90327 47058
              </a>
            </p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
