import React from "react";
import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <section className={classes.content}>
          <p>{props.message}</p>
        </section>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;