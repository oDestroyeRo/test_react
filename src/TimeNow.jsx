import React from 'react';

class TimeNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const date = new Date().toLocaleTimeString();
    this.setState({
      date,
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <h1>
          Hello, world!
        </h1>
        <h2>
          It is
          {date}
        </h2>
      </div>
    );
  }
}

export default TimeNow;
