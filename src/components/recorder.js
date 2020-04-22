import React, { Component } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { Button, Row, Col } from "antd";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
export default class recorder extends Component {
  state = {
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  };
  componentDidMount = () => {};
  start = (e) => {
    e.preventDefault();
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        this.setState({ isBlocked: true });
      }
    );
    if (this.state.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };
  stop = () => {
    debugger;
    const { handleAudio } = this.props;
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        this.setState({ blobURL, isRecording: false });
        handleAudio(blobURL);
      })
      .catch((e) => console.log(e));
  };
  render() {
    return (
      <div>
        <Row>
          <Col span={2} style={{ marginTop: "1%" }}>
            <Button
              icon={this.state.isRecording ? "pause" : "audio"}
              shape="circle"
              type="danger"
              onClick={this.state.isRecording ? this.stop : this.start}
            ></Button>
          </Col>
          <Col span={12}>
            <audio
              style={{ background: "transparent" }}
              src={this.state.blobURL}
              controls="controls"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
