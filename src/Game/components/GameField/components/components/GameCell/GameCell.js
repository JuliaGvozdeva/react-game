import React from "react";
import styles from '../../../GameFieldStyle';

export default function GameCell(props) {
    const gameStyles = styles();
    const value = props.value;
    const endItem = props.endItem;
    const classCell = value === endItem ? `${gameStyles.gameItem} ${gameStyles.empty}` : `${gameStyles.gameItem}`;

    return (
        <div id={value} className={classCell} onClick={() => props.clickHandler()} draggable={true}>{value === endItem ? '' : value}</div>
    )
}