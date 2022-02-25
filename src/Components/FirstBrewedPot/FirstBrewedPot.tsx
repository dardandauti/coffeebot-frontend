import classes from "./FirstBrewedPot.module.scss";

export const FirstBrewedPot = () => {
  return (
    <div className={classes.root}>
      <h2>Usually, the first pot of the day is brewed at</h2>
      <div className={classes.time}>
        <h1>08:17</h1>
      </div>
    </div>
  );
};
