import React, { useState } from 'react';
import {Camera} from "../../Components/Camera";
import {Controllers} from "../../Components/Controllers";

const MainPage = () => {
    const [style, setStyle] = useState({});
    const [running, setRunning] = useState(true);
    return <div>
        <Camera
            running={running}
            style={style}
        />
        <Controllers
            running={running}
            setRunning={setRunning}
            style={style}
            setStyle={setStyle}
        />
    </div>
}

export { MainPage };