import styles from "./Container.module.css";

function Container(props) {
  return (
    <div
      className={
        /*Desta maneira é possível passar uma classe de estilização por props, obs:esta classe ja deve estar em styles*/ `${
          styles.container
        } ${styles[props.customClass]}`
      }
    >
      {props.children}
    </div>
  );
}

export default Container;
