import React from "react";
import { useState } from "react";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // prettier-ignore
    const tempCustomer = { name: name.toString().trim(), number: number.toString().trim(), email: email.toString().trim(), state: state.toString().trim(), city: city.toString().trim(), pin: pin.toString().trim(), };

    console.log(tempCustomer);

    setName("");
    setNumber("");
    setEmail("");
    setState("");
    setCity("");
    setPin("");
  };

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <div className={classes.formHeading}>
            <p className={classes.formHeadingTxt}>Contact Us</p>
          </div>
          <form className={classes.form}>
            <div className={classes.formEl}>
              <label htmlFor="name" className={classes.label}>
                Name
              </label>
              <input
                className={classes.input}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. John Doe"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="number" className={classes.label}>
                Number
              </label>
              <input
                className={classes.input}
                type="tel"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                placeholder="e.g. +91-9999999999"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="email" className={classes.label}>
                Email
              </label>
              <input
                className={classes.input}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. abc@gmail.com"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="state" className={classes.label}>
                State
              </label>
              <input
                className={classes.input}
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                placeholder="e.g. Maharashtra"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="city" className={classes.label}>
                City
              </label>
              <input
                className={classes.input}
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                placeholder="e.g. Mumbai"
              />
            </div>
            <div className={classes.formEl}>
              <label htmlFor="pin" className={classes.label}>
                Pin Code
              </label>
              <input
                className={classes.input}
                type="text"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
                placeholder="421004"
              />
            </div>
          </form>
          <div className={classes.btnContainer}>
            <button
              type="submit"
              className={classes.submitBtn}
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
