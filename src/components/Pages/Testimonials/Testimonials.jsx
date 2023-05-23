import React from "react";

import classes from "./Testimonials.module.css";

import { TESTIMONIALS as testimonials } from "../../../store/constants";

const Testimonials = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.testimonialContainer}>
          <ul className={classes.testimonials}>
            {testimonials.map((el, i) => {
              const { id, comment, clientName, companyName, location } = el;

              return (
                <li key={id} className={classes.testimonial}>
                  <p className={classes.comment}>
                    <i>{comment}</i>
                  </p>
                  <p className={classes.clientName}>{clientName}</p>
                  <p className={classes.companyLocation}>
                    {companyName}, {location}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
