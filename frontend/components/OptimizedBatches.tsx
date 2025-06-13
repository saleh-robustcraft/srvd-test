import React from 'react';
import { Batch } from '../types';
import { Paper, Box, Typography, Chip, Divider, Avatar } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface OptimizedBatchesProps {
  batches: Batch[];
  getFleetLabel?: (idx: number) => string;
}

const fleetColors = [
  '#1976d2', '#388e3c', '#fbc02d', '#d32f2f', '#7b1fa2', '#0288d1', '#c2185b', '#ffa000'
];

const OptimizedBatches: React.FC<OptimizedBatchesProps> = ({ batches, getFleetLabel }) => {
  return (
    <Box>
      <Typography variant="h6" fontWeight={600} mb={2}>
        <LocalShippingIcon sx={{ mr: 1, color: '#1976d2', verticalAlign: 'middle' }} />
        Optimized Batches
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
        {batches.map((batch, idx) => (
          <Paper key={batch.borough + '-' + batch.assignment} elevation={2} sx={{ p: 3, borderRadius: 2, borderLeft: `6px solid ${fleetColors[idx % fleetColors.length]}` }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Avatar sx={{ bgcolor: fleetColors[idx % fleetColors.length], mr: 2 }}>
                <LocalShippingIcon />
              </Avatar>
              <Typography variant="subtitle1" fontWeight={700} sx={{ flex: 1 }}>
                {batch.borough}
              </Typography>
              <Chip label={batch.assignment}
                sx={{ bgcolor: fleetColors[idx % fleetColors.length], color: '#fff', fontWeight: 600, ml: 1 }} />
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <LocationOnIcon sx={{ color: '#1976d2' }} />
              <Typography variant="body2" color="text.secondary">
                {batch.count} order{batch.count !== 1 ? 's' : ''} in this batch
              </Typography>
            </Box>
            {batch.optimizedRoute && (
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                Route: {batch.optimizedRoute}
              </Typography>
            )}
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default OptimizedBatches;
