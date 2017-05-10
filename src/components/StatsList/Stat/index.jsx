import React from 'react';

// Material UI
import Paper from 'material-ui/Paper';

const Stat = ({name, data, backgroundColor}) => {
  const bgColor = {
    backgroundColor: backgroundColor
  }
  return (
    <Paper>
      <div style={bgColor} className="rounded p-3">
        <div className="lead text-white">
          {name}
        </div>
        <div className="display-4 text-white pt-2">
          {data}
        </div>
      </div>
    </Paper>
  );
}

export default Stat;
