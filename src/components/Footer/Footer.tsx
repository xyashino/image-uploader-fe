import classes from "./Footer.module.css";
import {GITHUB_PROFILE_URL, GITHUB_USERNAME} from "../../constants/github.constants.ts";
export const Footer = () => {
  return <footer className={classes.footer}>
    <p className={classes.text}>created by <a href={GITHUB_PROFILE_URL} className={classes.link}>{GITHUB_USERNAME}</a> - devChallenges.io</p>
  </footer>
}