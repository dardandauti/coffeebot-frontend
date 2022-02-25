import classes from "./LastBrewedPot.module.scss";

export const LastBrewedPot = () => {
  return (
    <div className={classes.root}>
      <h2>Last time a pot was brewed today</h2>
      <div className={classes.container}>
        <div className={classes.time}>
          <h2>Sisjön</h2>
          <h1>08:12</h1>
        </div>
        <div className={classes.border} />
        <div className={classes.time}>
          <h2>City</h2>
          <h1>08:12</h1>
        </div>
      </div>
    </div>
  );
};
