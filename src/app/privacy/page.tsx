import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="relative w-full overflow-hidden mt-[calc(4rem+10px)] bg-gray-100 text-gray-800 px-6 py-12 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-12 leading-relaxed">
          At <span className="font-bold">LinkW Innovation Pvt. Ltd.</span> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed
          to protecting your personal information and providing you with
          transparency about how we handle your data.
        </p>

        {/* Content Sections */}
        {/* Section 1: Data Collection */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            1. Data Collection
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Account Information:</span> Includes your name, phone number, email
              address, and other essential details required for account creation
              and management.
            </li>
            <li>
              <span className="font-semibold">Device Data:</span> Collected from our smart motor control solutions
              when synced with the{" "}
              <span className="italic">KISAN MITHRAA</span> app, including
              performance metrics, usage patterns, and operational data.
            </li>
            <li>
              <span className="font-semibold">Interaction Data:</span> Details provided through inquiries, customer
              support communications, surveys, or participation in promotional
              events.
            </li>
          </ul>
        </section>

        {/* Section 2: Data Usage */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            2. Data Usage
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Service Delivery:</span> To provide, maintain, and enhance our products
              and services, including personalized user experiences and
              efficient device functionality.
            </li>
            <li>
              <span className="font-semibold">Communication:</span> To share updates, promotional offers, and respond
              to your queries or feedback.
            </li>
            <li>
              <span className="font-semibold">Safety and Compliance:</span> To ensure the security of our systems,
              address fraud or abuse, and comply with legal or regulatory
              obligations.
            </li>
          </ul>
        </section>

        {/* Section 3: Data Sharing */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            3. Data Sharing
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">With Trusted Partners:</span> To service providers or affiliates who
              assist with technical support, analytics, and data processing,
              under strict confidentiality agreements.
            </li>
            <li>
              <span className="font-semibold">For Legal Obligations:</span> When required by law or to prevent harm,
              fraud, or abuse, or to comply with legal processes such as court
              orders or government requests.
            </li>
            <li>
              <span className="font-semibold">Aggregated Data:</span> Non-personal, anonymized data may be shared for
              research or marketing purposes without identifying individuals.
            </li>
          </ul>
        </section>

        {/* Section 4: Data Security */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            4. Data Security
          </h2>
          <p className="leading-relaxed">
            We implement industry-standard security practices, including:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <span className="font-semibold">Encryption:</span> Secure Sockets Layer (SSL) protocols to encrypt data
              during transmission.
            </li>
            <li>
              <span className="font-semibold">Access Controls:</span> Restricted access to personal data, ensuring only
              authorized personnel handle sensitive information.
            </li>
            <li>
              <span className="font-semibold">Regular Audits:</span> Routine assessments to identify and mitigate
              potential risks.
            </li>
          </ul>
          <p className="mt-4">
            While we take every precaution to protect your data, no system is
            entirely immune to threats. We encourage you to take personal
            measures to protect your information, such as using strong passwords
            and avoiding sharing login credentials.
          </p>
        </section>

        {/* Section 5: Data Retention */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            5. Data Retention
          </h2>
          <p className="leading-relaxed">
            We retain your information only as long as necessary to fulfill our
            service commitments, comply with legal obligations, or resolve
            disputes. Upon your request, we will delete or anonymize your data
            unless restricted by law or legitimate business needs.
          </p>
        </section>

        {/* Section 6: User Rights */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            6. User Rights
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Access:</span> Request access to the data we hold about you.
            </li>
            <li>
              <span className="font-semibold">Correction:</span> Correct any inaccurate or incomplete information.
            </li>
            <li>
              <span className="font-semibold">Deletion:</span> Request the deletion of your personal data, subject to
              legal and contractual obligations.
            </li>
          </ul>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Contact Information
          </h2>
          <p className="leading-relaxed">
            If you have any questions, concerns, or feedback about this Privacy
            Policy or our data practices, please feel free to contact us:
          </p>
         
          <address className="mt-4 not-italic">
            <p><strong>LinkW Innovation Pvt. Ltd.</strong></p>
            <p>H No: 17-112, Road No-3, Kamalanagar,</p>
            <p>Dilsukhnagar, Hyderabad, Telangana - 500060, India</p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:team@linkwinnovation.com" className="text-blue-600 hover:underline">
                team@linkwinnovation.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919032747058" className="text-blue-600 hover:underline">
                +91 90327 47058
              </a>
            </p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
