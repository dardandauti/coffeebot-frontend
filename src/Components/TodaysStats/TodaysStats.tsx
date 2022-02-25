import classes from "./TodaysStats.module.scss";

export const TodaysStats = () => {
  return (
    <div className={classes.root}>
      <h2>So far today, there has been...</h2>
      <div className={classes.container}>
        <div className={classes.pots}>
          <h1>4</h1>
          <h3>pots</h3>
          <h5>brewed</h5>
        </div>
        <div className={classes.cups}>
          <h1>16</h1>
          <h3>cups</h3>
          <h5>enjoyed by the staff</h5>
        </div>
        <div className={classes.energy}>
          <h1>12</h1>
          <h3>kWh</h3>
          <h5>used to brew coffee</h5>
        </div>
        <div className={classes.fluidAmount}>
          <h1>9</h1>
          <h3>litres</h3>
          <h5>of coffee drunk</h5>
        </div>
      </div>
    </div>
  );
};
