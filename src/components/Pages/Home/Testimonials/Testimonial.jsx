import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { TESTIMONIALS as testimonials } from "../../../../store/constants";

import classes from "./Testimonial.module.css";

const slides = testimonials.map((test, i) => {
  const { id, comment, clientName, companyName, location } = test;
  return (
    <li className={classes.testimonial} key={id}>
      <p className={classes.comment}>{comment}</p>
      <p className={classes.name}>{clientName}</p>
      <p className={classes.location}>
        {companyName}({location})
      </p>
    </li>
  );
});

const Testimonial = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const [counter, setCounter] = useState(1);
  const [transition, setTransition] = useState("all 1s ease");

  const next = () => {
    if (counter === testimonials.length) {
      setCounter((prev) => prev + 1);
      setTransition("all 0.6s ease");

      setTimeout(() => {
        setCounter(1);
        setTransition("none");
      }, 600);
      // console.log(counter);

      return;
    }
    if (counter < testimonials.length) {
      setCounter((prev) => prev + 1);
      setTransition("all 0.6s ease");
      // console.log(counter);
      return;
    }
  };
  const prev = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
      setTransition("all 0.6s ease");
      // console.log(counter);
      return;
    }
    if (counter === 1) {
      setCounter((prev) => prev - 1);
      setTransition("all 0.6s ease");

      setTimeout(() => {
        setCounter(testimonials.length);
        setTransition("none");
      }, 600);
      // console.log(counter);
      return;
    }
  };

  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [counter, transition]);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h3 className={classes.sectionHeading}>Testimonial</h3>
        <div className={classes.sectionHeadingBorder} />
        <div className={classes.testimonialContainer}>
          <button className={`${classes.prev} ${classes.btn}`} onClick={prev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className={`${classes.next} ${classes.btn}`} onClick={next}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <ul
            className={classes.testimonials}
            style={{
              transform: `translateX(-${counter}00%)`,
              transition: `${transition}`
            }}
          >
            {slides[testimonials.length - 1]}
            {testimonials.map((test, i) => {
              const { id, comment, clientName, companyName, location } = test;
              return (
                <li className={classes.testimonial} key={id}>
                  <p className={classes.comment}>{comment}</p>
                  <p className={classes.name}>{clientName}</p>
                  <p className={classes.location}>
                    {companyName}({location})
                  </p>
                </li>
              );
            })}
            {slides[0]}
          </ul>
        </div>
        <div className={classes.dotsContainer}>
          <ul className={classes.dots}>
            {testimonials.map((el, i) => {
              const { id } = el;

              return (
                <li
                  className={`${classes.dot} ${
                    counter - 1 === i ? classes.activeDot : ""
                  }`}
                  key={id}
                  onClick={() => setCounter(i + 1)}
                >
                  {/* <span className={} ></span> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

/*

// const testimonialRef = useRef();

// useEffect(() => {
//   const section = testimonialRef.current;

//   const revealSection = (entries, observer) => {
//     const [entry] = entries;

//     if (!entry.isIntersecting) return;

//     setIsFirstLoading(false);
//     observer.unobserve(entry.target);
//   };

//   const sectionObserver = new IntersectionObserver(revealSection, {
//     root: null,
//     threshold: 0,
//     rootMargin: "-180px"
//   });

//   sectionObserver.observe(section);
// }, []);

<div className={classes.testimonials} ref={testimonialRef}>

*/

/*

<div
            className={`${classes.testimonial} ${classes.testimonial1} ${
              isFirstLoading ? classes.inactive : ""
            }`}
          >
            <p className={classes.comment}>
              I am distributor partner of eximburg from last 2 year and i am
              happy to work with eximburg because they are continuously looking
              for better things.they are also things about me how can i get
              maximum benifits i earn more then 7 lac till from starting.
            </p>
            <p className={classes.name}>Ghansayam</p>
            <p className={classes.location}>Arpit Group(Mumbai)</p>
          </div>
          <div
            className={`${classes.testimonial} ${classes.testimonial2} ${
              isFirstLoading ? classes.inactive : ""
            }`}
          >
            <p className={classes.comment}>
              In the current market competition there are many difficulty to do
              the business. But i lucky to work with eximburg because eximburg
              has very potential market demanded products so its helpful for
              entering into market and also give lead generation from my
              location help with digital marketing.
            </p>
            <p className={classes.name}>Dhanraj</p>
            <p className={classes.location}>Anjani Agency(Hayderabad)​</p>
          </div>
          <div
            className={`${classes.testimonial} ${classes.testimonial3} ${
              isFirstLoading ? classes.inactive : ""
            }`}
          >
            <p className={classes.comment}>
              I want to share one of the incident of eximburg work ethics. I am
              the distributor of eximburg product in south region.I placed order
              of 2 lac rs but when i get the shipment i found it damaged during
              transportation so i complaint to eximburg. For saving my lost
              eximburg replaced damaged product so that i can say do the
              business with eximburg without any fear because they care for me.
            </p>
            <p className={classes.name}>Narayna</p>
            <p className={classes.location}>S.R Enterprises(Banglore)​</p>
          </div>


*/
