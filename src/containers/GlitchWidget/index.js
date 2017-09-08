import React from 'react';

export default function GlitchWidget({ stack, createNewGlitch, removeGlitch }) {
  return (
    <div className="loadsave-widget">
      <h3>Glitch</h3>
      <button onClick={createNewGlitch}>Add Glitch</button>
      <ul>{stack.map(g => <li key={g.key}>{g.glitch.type}</li>)}</ul>
    </div>
  );
}
