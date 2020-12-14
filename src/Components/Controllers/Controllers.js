import './Controllers.css';

const Controllers = (props) => {
    const { running, setRunning, style, setStyle } = props;

    const startStop = () => {
        setRunning(!running);
    }

    const sepiaOnOff = () => {
        setStyle(style.filter ? {} : {filter: 'sepia(100%)'});
    }

    return <div className="controller-container">
        <div className="button-container">
            <button
                onClick={startStop}
            >
                Toggle video
            </button>
        </div>
        <div className="button-container">
            <button
                onClick={sepiaOnOff}
            >
                Toggle sepia
            </button>
        </div>
    </div>
}

export { Controllers }