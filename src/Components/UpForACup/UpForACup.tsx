import classes from "./UpForACup.module.scss";

export const UpForACup = () => {
  return (
    <div className={classes.root}>
      <p>Are you up for a cup?</p>
      <p>12</p>
      <p>people are waiting for coffee.</p>
      <button>Yes, brew!</button>
    </div>
  );
};
