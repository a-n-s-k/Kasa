import styles from "./App.module.scss";
import Router from "./Router.jsx";

export default function App () {
  return (
    <div className={styles.container}>
          <Router/>
    </div>
  );
}
