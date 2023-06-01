import React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationControlled = ({ page, onChange, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={totalPages} page={page} onChange={onChange} />
    </Stack>
  );
};

export default PaginationControlled;
