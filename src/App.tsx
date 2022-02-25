import classes from "./App.module.scss";
import { BrewingRightNow } from "./Components/BrewingRightNow/BrewingRightNow";
import { FirstBrewedPot } from "./Components/FirstBrewedPot/FirstBrewedPot";
import { LastBrewedPot } from "./Components/LastBrewedPot/LastBrewedPot";
import { TodaysStats } from "./Components/TodaysStats/TodaysStats";
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
        <div className={classes.todayCard}>
          <TodaysStats />
        </div>
        <div className={classes.lastBrewedCard}>
          <LastBrewedPot />
        </div>
        <div className={classes.firstBrewedCard}>
          <FirstBrewedPot />
        </div>
      </div>
    </div>
  );
}

export default App;
