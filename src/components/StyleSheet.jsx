import React from 'react'
import "./mystyles.css"
import styles from "./appStyle.module.css"

function StyleSheet(props) {
    let classname = props.primary ? "primary" : "";
    return (
        <div>

            <h1 className="primary">StyleSheet as a component</h1>
            <h1 className={`${classname} font-xl`}>StyleSheet as a combination of two styles</h1>
            <h1 className={styles.primary}>StyleSheet as a module</h1>
        </div>
    )
}

export default StyleSheet
