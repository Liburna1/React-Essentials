import React from 'react';

export default function TabButton({ isSelected, onSelect, children }) {
  return (
    <li>
      <button className={isSelected ? 'selected' : ''} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
