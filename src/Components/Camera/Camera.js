import React from 'react';
import Webcam from "react-webcam";
import './Camera.css';

const Camera = (props) => {
    const { running, style } = props;

    return <div className="camera-container">
        { running && (
            <Webcam
                style={style}
                audio={false}
                height={360}
                screenshotFormat="image/jpeg"
                width={640}
            />
        )}
    </div>
}

export { Camera }