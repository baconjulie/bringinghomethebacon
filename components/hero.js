import React, { Fragment } from "react";

const Hero = ({ children, imgUrl }) => (
  <Fragment>
    <section className="hero" style={{ backgroundImage: `url(${imgUrl})` }}>
      {children}
    </section>
    <style jsx>{`
      .hero {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        color: var(--white);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </Fragment>
);

export default Hero;
