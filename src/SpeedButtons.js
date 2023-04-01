import React from 'react';

const SpeedButtons = ({ setSpeed }) => {
  const buttonStyle = {
    fontSize: '1.5rem',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer'
  };

  return (
    <div className="speed-buttons" style={{ marginBottom: '10px' }}>

<button style={buttonStyle} onClick={() => setSpeed(500)}>
        Tabaney
      </button>
      <button style={buttonStyle} onClick={() => setSpeed(200)}>
        Togge/Byrken
      </button>
      <button style={buttonStyle} onClick={() => setSpeed(100)}>
        Lars
      </button>
      <button style={buttonStyle} onClick={() => setSpeed(50)}>
        Pontus
      </button>
    </div>
  );
};

export default SpeedButtons;