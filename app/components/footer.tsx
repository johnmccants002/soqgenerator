import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>If you have any questions, feel free to reach out to us at:</p>
            <p className="mt-2">support@soqgenerator.com</p>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/soqgenerator"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Twitter (@soqgenerator)
              </a>
              <a
                href="https://instagram.com/soqgenerator"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                Instagram (@soqgenerator)
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <a href="/terms-of-service" className="hover:text-gray-400">
              Terms of Service
            </a>
            <br />
            <a href="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
