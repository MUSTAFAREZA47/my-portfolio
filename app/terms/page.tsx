'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-purple hover:text-purple/80 transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/60">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8 text-white/80"
        >
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using Ahmed Reza&apos;s portfolio website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            <p>
              The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily view the materials (information or software) on Ahmed Reza&apos;s portfolio website for personal, non-commercial transitory viewing only.
            </p>
            <p className="mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on Ahmed Reza&apos;s portfolio website are provided on an &apos;as is&apos; basis. Ahmed Reza makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property</li>
              <li>Other violation of rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
            <p>
              In no event shall Ahmed Reza or his suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Ahmed Reza or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Ahmed Reza&apos;s portfolio website could include technical, typographical, or photographic errors. Ahmed Reza does not warrant that any of the materials on the website are accurate, complete, or current. Ahmed Reza may make changes to the materials contained on the website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Links</h2>
            <p className="mb-4">
              Ahmed Reza has not reviewed all of the sites linked to the website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ahmed Reza of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Modifications</h2>
            <p>
              Ahmed Reza may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a 
                href="mailto:mustafareza47@gmail.com"
                className="text-purple hover:text-purple/80 transition-colors duration-300"
              >
                mustafareza47@gmail.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
