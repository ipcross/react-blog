import React from 'react';
import PropTypes from 'prop-types';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.columns ,
        type : 'pie',
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.chart.load({ columns: nextProps.columns })
    }
  }

  render() {
    return (
      <div ref="chart" />
    );
  }
}

export default PieChart;
