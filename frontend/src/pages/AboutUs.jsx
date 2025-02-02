import React from "react";
import { FaQuoteLeft, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-[gray-100] min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-700"
          variants={itemVariants}
        >
          About Fusion Fit
        </motion.h1>

        <motion.div
          className="mb-20 bg-white rounded-lg shadow-lg p-6 md:p-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600">
            Our Story
          </h2>
          <div className="flex items-start">
            <FaQuoteLeft className="text-3xl md:text-4xl text-orange-500 mr-4 mt-2" />
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Fusion Fit was founded in 2024 with a simple mission: to help
              people achieve their fitness goals and lead healthier lives. We
              believe that everyone deserves access to high-quality fitness
              resources and support, regardless of their current fitness level
              or background.
            </p>
          </div>
        </motion.div>

        

        <motion.div
          className="mb-20 bg-white rounded-lg shadow-lg p-6 md:p-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            At Fusion Fit, we're committed to empowering individuals to take
            control of their health and fitness. Through our innovative
            platform, expert guidance, and supportive community, we aim to make
            fitness accessible, enjoyable, and sustainable for everyone.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#00bcd4] text-white p-6 md:p-10 rounded-lg shadow-lg"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Join Us on Your Fitness Journey
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Whether you're just starting out or looking to take your fitness to
            the next level, Fusion Fit is here to support you every step of the
            way. Let's work together to achieve your goals and create lasting,
            healthy habits.
          </p>
          <Link
            to="/register"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-orange-600 transition duration-300"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
