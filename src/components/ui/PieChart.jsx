import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class PieChart extends React.Component {
  componentDidMount() {
    if (__CLIENT__) {
      const c3 = require('c3');

      this.chart = c3.generate({
        bindto: ReactDOM.findDOMNode(this.refs.chart),
        size: {
          height: 350,
          width: 350
        },
        data: {
          columns: this.props.columns ,
          type : 'pie',
        }
      });
    }
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.chart.load({ columns: nextProps.columns });
    }
  }

  render() {
    return (
      <div ref="chart" />
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array
};

export default PieChart;
