"use client";
import styles from "@/app/contact/contact.module.css";
import { useState } from "react";

const ContactForm = () => {
  const[user, setUser] = useState({
      username:"",
      email:"",
      phone:"",
      message:""
  })
  const [status, setStatus] = useState(null);


  function handleChange(e) {
      const name = e.target.name;
      const value = e.target.value;

      setUser((prevUser) => ({...prevUser, [name] : value}));
  }

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch('/api/contact', {
              method:'POST',
              headers:{"Content_Type":"application/json"},
              body: JSON.stringify({
                  username:user.username,
                  email:user.email,
                  phone:user.phone,
                  message:user.message
              })
          })

          if (response.status === 200) {
              setUser({
                  username: "",
                  email: "",
                  phone: "",
                  message: ""
              })
              setStatus('success');
          } else {
              setStatus('error');
          }

      }catch (e) {
          console.log(e)
      }

  }

  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <label htmlFor="username" className={styles.label}>
            Enter your name
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              className={styles.input_text}
              value={user.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={styles.input_text}
              value={user.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              className={styles.input_number}
              value={user.phone}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Enter your Message"
              className={styles.textarea}
              value={user.message}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
        </div>

        <div>
          {status === "success" && (
            <p className={styles.success_msg}>Thank you for your message!</p>
          )}
          {status === "error" && (
            <p className={styles.error_msg}>
              There was an error submitting your message. Please try again.
            </p>
          )}

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
