import { ExternalLink, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-2 md:px-12 bg-slate-950 text-white border-t border-gray-200">
      <div className="container mx-auto px-4 pb-3 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <address className="not-italic text-sm">
              <p className="mb-2">
                Department of Electrical and Electronic Engineering
              </p>
              <p className="mb-4">Islamic University, Kushtia.</p>

              <div className="flex items-center mb-2 mt-6">
                <Mail className="w-4 h-4 mr-2" />
                <div>
                  <a
                    href="mailto:chair.eee@du.ac.bd"
                    className="hover:underline"
                  >
                    chair.eee@iu.ac.bd
                  </a>
                  ;{" "}
                  <a
                    href="mailto:office.eee@du.ac.bd"
                    className="hover:underline"
                  >
                    office.eee@iu.ac.bd
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+8809666911463" className="hover:underline">
                  +88 09666 911 463 (Ext7340)
                </a>
              </div>
            </address>
          </div>

          {/* Follow Us & Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Important Links</h2>

            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:underline flex items-center">
                  Career <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center">
                  Webmail <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center">
                  Website <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Find us on Map</h2>

            <div className="w-full mb-4">
              <iframe
                className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4343.727732329484!2d89.14874386729453!3d23.72507916198446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39feeb32fd6efb6f%3A0xedb1c0711b7409a8!2sDept.%20of%20Electrical%20and%20Electronic%20Engineering%2C%20Islamic%20University%20%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1745509701838!5m2!1sen!2sbd"
                allowFullScreen
                height={300}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* <Map /> */}

            {/* <div className="text-sm flex items-center gap-1">
              <input type="text" className="bg-white px-3 py-2" />
              <button className=" bg-slate-700 p-2 cursor-pointer ">
                <ArrowRight size={20} />
              </button>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white mt-6">
          <p>
            © 2025 Electrical and Electronic Engineering, IU. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
