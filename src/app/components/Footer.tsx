import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>

      <Link href="/">
        <Image
              src="/linkW.png"
              alt="Company Logo"
              height={20}
              width={120}
              className="mx-auto md:mx-0 "
              
            /></Link>
          
          <h2 className="text-white font-semibold text-lg mb-4">About Us</h2>
          {/* Logo */}
          
          
          <p className="text-sm leading-6">
          At LinkW Innovation Pvt. Ltd., we are committed to creating innovative, affordable, and high-quality technology solutions. With a team of tech-savvy and forward-thinking professionals, we leverage cutting-edge technologies to deliver exceptional products that make a difference.


          </p>
         
        </div>

        {/* Corporate Office Section */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            Corporate Office and R&D
          </h2>
          <p className="text-sm leading-6">
          LinkW Innovation Pvt. Ltd.
H No: 17-112, Road No-3,
Kamalanagar, Dilsuknagar,
Hyderabad,  Telangana-500060, India.
          </p>
          <h2 className="text-white font-semibold text-lg mt-6 mb-4">
            Manufacturing Facility
          </h2>
          <p className="text-sm leading-6">
             LinkW Innovation Pvt. Ltd.H No: 17-112,  1st Floor, Road No-3,
Kamalanagar, Dilsuknagar,
Hyderabad,  Telangana-500060, India.
          </p>
        </div>

        {/* Learn More Section */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Learn More</h2>
          <ul className="space-y-2">
          <li>
              <Link
                href="/"
                className="hover:text-white transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutUs"
                className="hover:text-white transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="hover:text-white transition duration-200"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-white transition duration-200"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className="hover:text-white transition duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/order"
                className="hover:text-white transition duration-200"
              >
                Order Now
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-white transition duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/conditions"
                className="hover:text-white transition duration-200"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Contact</h2>
          <p className="text-sm leading-6 mt-4">
            <strong>Contact Number:</strong>{" "}
            <a
              href="tel:+91 9032747058"
              className="hover:text-white transition duration-200"
            >
             +91-90327 47058
            </a>
          </p>
          
          <p className="text-sm leading-6 mt-4">
            <strong>Product Queries:</strong>{" "}
            <a
              href="mailto:team@linkwinnovation.com"
              className="hover:text-white transition duration-200"
            >
              team@linkwinnovation.com
            </a>
          </p>
          <p className="text-sm leading-6">
            <strong>Sales Enquiries:</strong>{" "}
            <a
              href="mailto:team@linkwinnovation.com"
              className="hover:text-white transition duration-200"
            >
              team@linkwinnovation.com
            </a>
          </p>
          <p className="text-sm leading-6">
            <strong>Other Queries:</strong>{" "}
            <a
              href="mailto:team@linkwinnovation.como"
              className="hover:text-white transition duration-200"
            >
              team@linkwinnovation.com
            </a>
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition duration-200"
            >
              <Image src="/brand-x.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition duration-200"
            >
              <Image
                src="/brand-instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition duration-200"
            >
              <Image
                src="/brand-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition duration-200"
            >
              <Image
                src="/brand-linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        <p>
          2025 &copy;{" "}
        <Link href="/contactUs">
          <span className="text-blue-500">LinkW Innovation</span></Link> - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
