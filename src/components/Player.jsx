import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(editing => !editing); // => schedules a state update with the latest isEditing value when the state is updated based on the previous state value
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    // Two-way binding is the action of getting a value out of this input and feeding a value back into this input
    const editablePlayerName = isEditing ?
        <input type="text" value={playerName} onChange={handleChange}/> : 
        <span className="player-name">{playerName}</span>;

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}