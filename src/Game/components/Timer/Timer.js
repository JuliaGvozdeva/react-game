import React from 'react';
const INTERVAL = 100;

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }
  
  increment(){
    this.setState({value: this.state.value + 1});
  }
  
  componentDidMount() {
    setInterval(() => this.increment(), 1000/INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {      
    const value = this.state.value
    return (
    <div id='time'>
        <span>{Math.round(value/INTERVAL/60/60) > 0 ? `${Math.round(value/INTERVAL/60/60)} : ` : '' }</span>
        <span>{Math.round(value/INTERVAL/60) > 0 ? `${Math.round(value/INTERVAL/60)} : ` : '' }</span>
        <span>{Math.round(value/INTERVAL)}</span>
    </div>);
  }
}