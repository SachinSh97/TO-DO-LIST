import React, { useState, useEffect, Suspense } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

const Button = React.lazy(() => import('../../atoms/Button'));
const AudioPlayer = React.lazy(() => import('../../atoms/AudioPlayer'));

const AudioRecorder = ({ handleAudio }) => {
  const [recording, setRecording] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [blobURL, setBlobURL] = useState('');

  const Mp3Recorder = new MicRecorder({ bitRate: 128 });

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => setBlocked(false),
      () => setBlocked(true),
    );
  }, []);

  const handleOnStartRecording = () =>
    !blocked &&
    Mp3Recorder.start()
      .then(() => setRecording(true))
      .catch((error) => console.error(error));

  const handleOnStopRecording = () =>
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setBlobURL(blobURL);
        setRecording(false);
        handleAudio(blobURL);
      })
      .catch((error) => console.error(error));

  return (
    <Suspense fallback="loading...">
      <Button
        icon={recording ? 'pause' : 'audio'}
        shape="circle"
        type="danger"
        onClick={recording ? handleOnStopRecording : handleOnStartRecording}
      ></Button>

      <AudioPlayer classname="audio-player" controls="controls" src={blobURL} />
    </Suspense>
  );
};

export default AudioRecorder;
