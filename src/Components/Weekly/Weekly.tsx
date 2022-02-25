import classes from "./Weekly.module.scss";

export const Weekly = () => {
  return (
    <div className={classes.root}>
      <h2>At Spinit, we drink</h2>
      <div className={classes.numberAndUnit}>
        <h1>36</h1>
        <h2>litres</h2>
      </div>
      <h2>of coffee each week!</h2>
    </div>
  );
};
