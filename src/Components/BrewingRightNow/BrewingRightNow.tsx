import classes from "./BrewingRightNow.module.scss";

export const BrewingRightNow = () => {
  return (
    <div className={classes.root}>
      <p className={classes.rightAlignedTitle}>There is coffee bewing in pot</p>
      <p>1</p>
      <p className={classes.leftAlignedFooter}>right now</p>
    </div>
  );
};
