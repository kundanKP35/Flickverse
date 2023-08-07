import { MdEmail, MdHome, MdPhone, MdTimer } from "react-icons/md";
import React from "react";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className={styles.contact_section}>
      <div className={styles.contact_heading}>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.contact_details}>
        <div className={styles.grid_container}>
          <div className={styles.grid_item}>
            <i>
              <MdHome className={styles.icon} />
            </i>

            <address>
              IIIT Bhubaneswar, <br />
              Gothapatana, Bhubaneswar, Odisha <br />
              PinCode: 751003
            </address>
          </div>
          <div className={styles.grid_item}>
            <i>
              <MdEmail className={styles.icon} />
            </i>

            <a className={styles.mail_link} href="mailto:clickMart01@gmail.com">
              <p>kflix1@gmail.com</p>
            </a>
          </div>
          <div className={styles.grid_item}>
            <i>
              <MdPhone className={styles.icon} />
            </i>

            <a className={styles.call_link} href="tel:+916389276893">
              <p>+91 6389276893</p>
            </a>
          </div>
          <div className={styles.grid_item}>
            <i>
              <MdTimer className={styles.icon} />
            </i>

            <p>Monday Friday 10 AM to 6 PM</p>
          </div>
        </div>
      </div>
      <div className={styles.two_column_layout}>
        <div className={styles.map_container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.267938902846!2d85.74220103645318!3d20.293357713997874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1678106138854!5m2!1sen!2sin"
            style={{
              height: "100%",
              width: "100%",
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.contact_form_container}>
          <h2>We&apos;d Love To Hear From You</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
