import * as React from 'react';
import {connect} from 'react-redux';
export interface SummaryProps {
  value: string
}
function Summary({value}: SummaryProps) {
  return (
    <div>Total Count: {value}</div>
  );
}



function mapStateToProps(state: any) {
  let sum = 0;
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key];
    }
  }
  return {value: sum};
}


export default connect(mapStateToProps)(Summary);


