import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";
function SectionComponent({ children, title }) {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

SectionComponent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default SectionComponent;
