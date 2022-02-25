import classes from "./App.module.scss";
import { BrewingRightNow } from "./Components/BrewingRightNow/BrewingRightNow";
import { UpForACup } from "./Components/UpForACup/UpForACup";
import { Weekly } from "./Components/Weekly/Weekly";

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
        <div className={classes.graphCard}>Graph</div>
        <div className={classes.weeklyCard}>
          <Weekly />
        </div>
        <div className={classes.todayCard}>Today</div>
        <div className={classes.lastBrewedCard}>last Brewed</div>
        <div className={classes.firstBrewedCard}>first brewed</div>
      </div>
    </div>
  );
}

export default App;
