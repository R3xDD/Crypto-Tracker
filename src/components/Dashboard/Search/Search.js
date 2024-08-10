import React from 'react'
import SearchIcon from "@mui/icons-material/Search";


const Search = ({search ,handleChange}) => {
  return (
      <div className=' w-[80%] flex justify-start items-center gap-4 mx-auto bg-[#1b1b1b] px-3 py-6 rounded-3xl mb-6'>
          <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
          <input
            className="bg-[#1b1b1b] text-[#888] text-xl rounded-none w-full focus:outline-none"
            placeholder="Search"
            value={search}
            onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

export default Search