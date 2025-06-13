// utils/ui.tsx
import React, { useState } from 'react';

export const commonBoroughs: string[] = [
  'MANHATTAN',
  'BROOKLYN',
  'QUEENS',
  'BRONX',
  'STATEN_ISLAND',
  'Other',
];

export const BoroughSelect: React.FC<{
  value: string;
  onChange: (borough: string) => void;
}> = ({ value, onChange }) => {
  const [customBorough, setCustomBorough] = useState('');
  const isCustom = value && !commonBoroughs.includes(value);

  return (
    <div>
      <select
        id="borough-select"
        className="border rounded px-9 py-1 text-sm"
        value={isCustom ? 'Other' : value}
        onChange={e => {
          const val = e.target.value;
          if (val === 'Other') {
            onChange(customBorough || '');
          } else {
            onChange(val);
            setCustomBorough('');
          }
        }}
      >
        <option value="">All Boroughs</option>
        {commonBoroughs.map(b => (
          <option key={b} value={b}>{b.replace('_', ' ')}</option>
        ))}
      </select>
      {(value === 'Other' || isCustom) && (
        <input
          type="text"
          className="border rounded px-3 py-1 text-sm mt-2 ml-2"
          placeholder="Custom Borough"
          value={customBorough}
          onChange={e => {
            setCustomBorough(e.target.value);
            onChange(e.target.value);
          }}
        />
      )}
    </div>
  );
};