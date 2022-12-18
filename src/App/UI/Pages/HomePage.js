import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SendIcon from "@mui/icons-material/Send";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import { _ICONBODY, _MARKETPLACE, _SERVICES } from "../Components/Paletes";
import { Button, Fab } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <div className="homeCenter">
        <h1 className="homeCenterH1">
          With RedRun, watch your business grow and florish.
        </h1>
        <h4 className="homeCenterh4">Let us show you how</h4>
        <Button
          style={{
            color: "black",
            backgroundColor: "yellow",
            marginTop: 100,
            width: "40%",
            height: 60,
          }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Join us Today
        </Button>
      </div>
      {_ICONBODY}
      <Fab style={{position: "fixed", top: 100, right: 20}} variant="extended">
        <AddIcCallIcon sx={{ mr: 1 }} />
        Need a hand?
      </Fab>
      {_MARKETPLACE}
      {_SERVICES}
    </div>
  );
};

export default HomePage;
