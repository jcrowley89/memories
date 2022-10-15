import React from "react";
import styles from "./Quote.module.css";

export default function Quote({ text, author }) {
  return (
    <div className={styles.quote}>
      <div>
        <p className={styles.quoteTxt}>"{text}"</p>
        <div className={styles.quoteAuthor}>-{author}</div>
      </div>
    </div>
  );
}
