import React, { FC, useEffect } from "react";
// import { Title } from "components/Title";
import { RootReducer } from "app/rootReducer";
import { useSelector } from "react-redux";
import "./InGameWindow.css";

const InGameWindow: FC = () => {
  const { event, info } = useSelector((state: RootReducer) => state.background);
  // const [id, setId] = useState(0);

  useEffect(() => {
    console.info("event", event); // or use https://github.com/AlbericoD/overwolf-modern-react-boilerplate#-remote-redux-debug
  }, [event]);

  useEffect(() => {
    console.info("info", info); // or use https://github.com/AlbericoD/overwolf-modern-react-boilerplate#-remote-redux-debug
  }, [info]);

  const start = () => {
    console.log("start")
  //  overwolf.streaming.onStopStreaming.addListener(console.log); //register to the onStopStreaming
  //  overwolf.streaming.onStreamingError.addListener(console.log); //register to the onStreamingError
  //  overwolf.streaming.onStreamingWarning.addListener(console.log); //register to the onStreamingWarning
  //  let settings = {
  //    audio: { mic: {}, game: {} },
  //    video: {},
  //  };
  //  overwolf.streaming.start(
  //    {
  //      provider: overwolf.streaming.enums.StreamingProvider.VideoRecorder,
  //      settings,
  //    },
  //    (res: any) => {
  //      setId(res?.stream_id)
  //      console.log("Start - Id:", res?.stream_id);
  //    },
  //  );
  }

  const stop = () => {
    
  }

  return (
    <div>
      <div className="btn-wrap">
        <button id="start-btn" onClick={start}>Start</button>
        <button id="stop-btn" onClick={stop}>Stop</button>
      </div>
    </div>
  );
};

export default InGameWindow;
