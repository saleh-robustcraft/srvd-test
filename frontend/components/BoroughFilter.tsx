import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Box, CircularProgress } from '@mui/material';
import { getBoroughs } from '../api/api';

interface BoroughFilterProps {
  selectedBorough: string;
  setSelectedBorough: (borough: string) => void;
}

const BoroughFilter: React.FC<BoroughFilterProps> = ({ selectedBorough, setSelectedBorough }) => {
  const [boroughs, setBoroughs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [customBorough, setCustomBorough] = useState('');
  const isCustom = selectedBorough && !boroughs.includes(selectedBorough);

  useEffect(() => {
    setLoading(true);
    getBoroughs()
      .then(data => setBoroughs(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      <FormControl size="small" sx={{ minWidth: 180 }} disabled={loading}>
        <InputLabel>Borough</InputLabel>
        <Select
          label="Borough"
          value={isCustom ? 'Other' : selectedBorough}
          onChange={e => {
            const value = e.target.value;
            if (value === 'Other') {
              setSelectedBorough(customBorough || '');
            } else {
              setSelectedBorough(value);
              setCustomBorough('');
            }
          }}
        >
          <MenuItem value="">All Boroughs</MenuItem>
          {boroughs.map(b => (
            <MenuItem key={b} value={b}>{b.replace('_', ' ')}</MenuItem>
          ))}
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        {loading && <CircularProgress size={20} sx={{ position: 'absolute', right: 10, top: 10 }} />}
      </FormControl>
      {((selectedBorough === 'Other') || isCustom) && (
        <TextField
          size="small"
          label="Custom Borough"
          value={customBorough}
          onChange={e => {
            setCustomBorough(e.target.value);
            setSelectedBorough(e.target.value);
          }}
          sx={{ ml: 2, mt: 1, minWidth: 180 }}
        />
      )}
    </Box>
  );
};

export default BoroughFilter;
