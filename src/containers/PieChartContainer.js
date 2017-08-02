import React, { PropTypes } from 'react';
import PieChart from 'components/ui/PieChart';
import { map } from 'lodash/collection';

const PieChartContainer = ({ posts }) => {
  const pieChartColumns = map( posts,
    (post) => ([`${post.title}_${post.id}`, post.meta.likes || 0])
  );
  return (
    <PieChart columns={pieChartColumns} />
  );
};

PieChartContainer.propTypes = {
  posts: PropTypes.array
};

export default PieChartContainer;
