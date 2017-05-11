import React from 'react';

const Stat = ({name, data, backgroundColor}) => {
  const bgColor = {
    backgroundColor: backgroundColor
  }
  return (
    <div style={bgColor} className="rounded p-3">
      <div className="display-4 pt-2">
        {data}
      </div>
      <div className="text-muted text-center">
        {name}
      </div>
    </div>
  );
}

export default Stat;
