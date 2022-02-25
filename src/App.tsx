import classes from "./App.module.scss";
import { BrewingRightNow } from "./Components/BrewingRightNow/BrewingRightNow";
import { UpForACup } from "./Components/UpForACup/UpForACup";

function App() {
  return (
    <div className={classes.root}>
      <div className={classes.header}>coffeebot &#9749;</div>
      <div className={classes.container}>
        <div className={classes.brewingRightNowCard}>
          <BrewingRightNow />
        </div>
        <div className={classes.upForACupCard}>
          <UpForACup />
        </div>
        <div className={classes.graphCard}>Hello</div>
        <div className={classes.weeklyCard}>Hello</div>
        <div className={classes.todayCard}>Hello</div>
        <div className={classes.lastBrewedCard}>Hello</div>
        <div className={classes.firstBrewedCard}>Hello</div>
      </div>
    </div>
  );
}

export default App;
