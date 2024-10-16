"use client";
import { useState, useRef } from "react";
import styles from "./contact.module.css";
import { motion, useInView } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [status, setStatus] = useState("SEND");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setStatus(result.status);
      toast.success("Submission Success");
    } catch (error) {
      setStatus("Submission failed");
      toast.error("Error sending email!");
    } finally {
      setStatus("SEND");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Track when the section is in view

  return (
    <div ref={ref} className={styles.container} id="Contact">
      <h2 className={"gradientText"}>CONTACT-ME</h2>
      <div className={styles.contactContent}>
        {/* Paragraph Animation: Slide in from the left */}
        <motion.p
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Animate into view when section is in view
          transition={{ duration: 1 }}
          className={styles.contactDescription}
        >
          I am currently seeking opportunities to join a company where I can
          further develop my skills by collaborating with a talented team. I am
          eager to contribute my expertise in front-end development,
          particularly in React and Next.js, while continuously learning and
          growing as a developer. If you`re looking for someone passionate about
          coding and ready to make a positive impact, feel free to reach out!
        </motion.p>

        {/* Form Animation: Slide in from the right */}
        <motion.form
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animate into view when section is in view
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className={styles.contactForm}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{status}</button>
        </motion.form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
