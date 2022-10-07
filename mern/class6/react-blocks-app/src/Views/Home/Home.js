import React from "react";
import styles from './Home.module.css';

const Home = ({ children }) => {
    return (
        <div className={styles["container"]}>
            { children }
        </div>
    )

}

export default Home;