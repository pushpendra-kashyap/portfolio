import React from 'react';

function Title({ title, des }) {
  return (
    <div>
      <div className="flex justify-center items-center pt-10 text-designColor">
        <h1 className="text-sm"> {title}</h1>
      </div>
      <div className="flex justify-center items-center text-5xl text-white pt-10">
        {des}
      </div>
    </div>
  );
}

export default Title;
