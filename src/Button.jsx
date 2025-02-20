import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Butoon() {
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button className='bg-amber-300'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}