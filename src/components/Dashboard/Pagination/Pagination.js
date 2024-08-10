import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginationOutlined({page , handlePageChange}) {
  return (
    <div className='bg-[#1b1b1b] py-[2px] rounded-lg w-fit h-fit mb-6 mt-0 mx-auto'>
          <Pagination
              count={10}
              variant="outlined" 
              sx={{
                "& .MuiPaginationItem-text": {
                  color: "var(--white) !important",
                  border: "2px solid var(--white)",
                },
                " & .MuiPaginationItem-text:hover": {
                  backgroundColor: "transparent !important",
                },
                " & .Mui-selected  ": {
                    backgroundColor: "var(--green)",
                    color: "white",
                    borderColor: "var(--green)",
                },
                "& .MuiPaginationItem-ellipsis": {
                  border: "none",
                },
              }}
              page={page}
              onChange={handlePageChange}
              className=' flex justify-center items-center m-12 '
          />
    </div>
  );
}