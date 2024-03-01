import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import "./Contact.scss";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wcu9u4s', 'template_276ncvd', refForm.current, {
        publicKey: 'Zpl8bpuodRw0lSG4x',
      })
      .then(
        () => {
          alert('SUCCESS! Message sent, Thank you! :)');
          window.location.reload(false)
        },
        (error) => {
          console.log('Message failed, Please try again :)', error.text);
        },
      );
  }; 

  return (
    <>
      <motion.section
        className="contact-main-section"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <div className="cont-sect" id="section">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden"
            }}
          >
            <motion.h2
              className="contact-title"
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: "0.5", duration: 0.5 }}
            >
              Contact
            </motion.h2>
          </div>
          <div className="contact-wrap">
            <form ref={refForm} onSubmit={sendEmail} action="" className="contact-form">
              <div className="col-sm-6">
                <div className="input-block">
                  {/* <label>First Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                    value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}
                    placeholder={firstName ? "" : "First Name"}
                  />
                </div>
              </div>
              {/* <div className="col-sm-6">
                <div className="input-block">
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={lastName ? "" : "Last Name"}
                  />
                </div>
              </div> */}
               <div className="col-sm-12">
                <div className="input-block">
                  {/* <label>Message Subject</label> */}
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={subject ? "" : "Message Subject"}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="input-block">
                  {/* <label>Email</label> */}
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={email ? "" : "Email"}
                  />
                </div>
              </div>
             
              <div className="col-sm-12">
                <div className="input-block textarea">
                  {/* <label>Drop your message here</label> */}
                  <textarea
                    rows="3"
                    type="text"
                    className="form-control"
                    name="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={message ? "" : "Drop your message here"}
                  ></textarea>
                </div>
              </div>
              <div className="col-sm-12">
                <input type="submit" value="Send" className="square-button" />
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
