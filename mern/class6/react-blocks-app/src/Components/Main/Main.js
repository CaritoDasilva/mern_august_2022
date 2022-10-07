import React from "react";
import styles from './Main.module.css';

const Main = (props) => {
    const { children } = props;
    return (
        <div className={styles["container"]}>
            { children }
        </div>
    )
}

export default Main;