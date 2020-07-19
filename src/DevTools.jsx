import React, { useState } from "react";
import axios from "axios";

const DevTools = () => {
  const [open, setOpen] = useState(false);
  const [room, setRoom] = useState("MainHall");

  const submitHandler = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  const selectChange = e => {
    setRoom(e.target.value);
  };

  const clearRoom = str => {
    axios.delete("/clearRoom", { data: { room: str } });
  };

  const clearDatabase = () => {
    clearRoom(room);
    setTimeout(() => {
      alert("Database Cleared please refresh the page");
    }, 2000);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="dev-panel">
      <button className="dev-button" onClick={handleOpen}>
        Show Dev Tools
      </button>
      <button className="dev-button" onClick={handleClose}>
        Hide Dev Tools
      </button>
      {open ? (
        <div className="open-dev-panel">
          <h3>Testing Tools:</h3>
          <h4>Clear local Storage:</h4>
          <button
            style={{ margin: "0px" }}
            className="dev-button"
            onClick={submitHandler}
          >
            Clear Storage
          </button>
          <h4>Select a restaurant region to clear database</h4>
          <select value={room} onChange={selectChange}>
            <option value="MainHall">Main Hall</option>
            <option value="Bar">Bar</option>
            <option value="Riverside">Riverside</option>
            <option value="RiversideSmoking">Riverside Smoking</option>
          </select>
          <button
            style={{ margin: "0px" }}
            className="dev-button"
            onClick={clearDatabase}
          >
            Clear DataBase
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DevTools;
