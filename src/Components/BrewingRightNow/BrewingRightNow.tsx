import classes from "./BrewingRightNow.module.scss";

export const BrewingRightNow = () => {
  return (
    <div className={classes.root}>
      <h2 className={classes.rightAlignedTitle}>
        There is coffee bewing in pot
      </h2>
      <h1>1</h1>
      <h2 className={classes.leftAlignedFooter}>right now</h2>
    </div>
  );
};
