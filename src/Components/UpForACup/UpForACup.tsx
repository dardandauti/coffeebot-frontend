import classes from "./UpForACup.module.scss";

export const UpForACup = () => {
  return (
    <div className={classes.root}>
      <h2>Are you up for a cup?</h2>
      <div className={classes.numberOfPeople}>
        <h1>12</h1>
        <h4>people are waiting for coffee.</h4>
      </div>
      <button className={classes.brewButton}>Yes, brew!</button>
    </div>
  );
};
