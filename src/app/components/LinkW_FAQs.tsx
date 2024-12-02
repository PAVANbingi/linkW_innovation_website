"use client";
import Link from "next/link";

export default function LinkW_FAQs() {
    const faqs = [
        {
          question: "What is LinkW Innovations?",
          answer:
            "LinkW Innovations is a forward-thinking company dedicated to creating impactful solutions in technology and sustainable development. With innovation at its core, LinkE Innovations bridges the gap between challenges and opportunities, empowering industries and individuals to thrive in a rapidly evolving world.",
        },
        {
          question: "What industries does LinkW Innovations serve?",
          answer:
            "We serve a diverse range of industries, including:\n\n- Agriculture: Offering smart farming solutions.\n- Energy: Promoting renewable energy technologies.\n- Healthcare: Developing tech solutions for better patient outcomes.\n- Education: Creating platforms for digital learning and skill development.",
        },
        {
          question: "What is LinkW Innovations' mission?",
          answer:
            "Our mission is to foster innovation that drives sustainability and inclusivity. We aim to empower businesses and communities by providing cutting-edge technologies that improve lives, reduce environmental impact, and create a smarter, greener future.",
        },
        {
          question: "Who leads LinkW Innovations?",
          answer:
            "LinkE Innovations is led by our visionary CEO, Mallesh Sunchu, whose leadership drives our commitment to innovation, collaboration, and excellence. Under his guidance, we strive to set new benchmarks in technology and sustainability.",
        },
        {
          question: "How does LinkW Innovations contribute to sustainability?",
          answer:
            "Sustainability is at the heart of what we do. From leveraging renewable energy sources to reducing carbon footprints and offering eco-friendly solutions across industries, we are committed to creating a positive environmental impact.",
        },
        {
          question: "What are some of LinkW Innovations’ key solutions?",
          answer:
            "- IoT-Enabled Platforms: Seamlessly connecting devices and systems.\n- AI & Machine Learning Tools: Powering data-driven decision-making.\n- Green Energy Technologies: Promoting renewable and efficient energy solutions.\n- Cloud-Based Systems: Enhancing operational efficiency for businesses.",
        },
        {
          question: "How can I collaborate with LinkW Innovations?",
          answer:
            "We welcome partnerships and collaborations that align with our mission. Whether you're an entrepreneur, a corporation, or a non-profit organization, connect with us through our Contact Us page to explore how we can innovate together.",
        },
        {
          question: "Where is LinkW Innovations located?",
          answer:
            "Our headquarters is based in Hyderabad, India, but our impact spans globally through our digital-first approach and collaborative projects.",
        },
        {
          question: "What sets LinkW Innovations apart from competitors?",
          answer:
            "- Visionary Leadership: Guided by CEO Mallesh Sunchu.\n- Innovation-Centric Approach: Always pushing the boundaries of technology.\n- Sustainability Focus: Prioritizing eco-friendly, scalable solutions.\n- Customer-First Philosophy: Tailored solutions that meet unique needs.",
        },
        {
          question: "How can I stay updated on LinkW Innovations' developments?",
          answer:
            "Follow us on our social media channels and subscribe to our newsletter for updates on our latest projects, innovations, and industry insights.",
        },
      ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white rounded-lg shadow-md p-4">
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
              </summary>
              <div className="mt-3 text-gray-700 whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg py-6 px-8">
          <p className="text-lg text-gray-800">
            Empowering the future with smart IoT solutions – let’s connect to
            transform your vision into reality.
          </p>
          <Link href="/contactUs">
            <button className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
