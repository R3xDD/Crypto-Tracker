import * as React from 'react';
import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { GitHub } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function SwipeableTemporaryDrawer() {
    const [open, setOpen] = useState(false);
  return (
    <div>
      
          <IconButton onClick={() => setOpen(true)}>
              <MenuRoundedIcon style={{color:"var(--grey)"}} />
          </IconButton>
          <SwipeableDrawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
            >
            <div className='w-full h-full bg-[#111] p-10 flex flex-col justify-between  border-[#40afa0] border-2 border-solid '>
                <div>
                    <a href="">
                        <p className="text-xl cursor-pointer transition-all my-5 text-[#888] font-bold hover:text-[#fff] " >Home</p>
                    </a>
                    <a href="">
                        <p  className="text-xl cursor-pointer  my-5   transition-all text-[#888] font-bold hover:text-[#fff] " >Compare</p>
                    </a>
                    <a href="">
                        <p className="text-xl cursor-pointer my-5 transition-all text-[#888] font-bold hover:text-[#fff] ">WatchList</p>
                    </a>
                    <a href="">
                        <p className="text-xl cursor-pointer font-bold my-5 transition-all text-[#888] hover:text-[#fff] " >Dashboard</p>
                    </a>
                  </div>
                  <div className='text-center'>
                      <h1 className='text-[#888] my-4 text-xl font-bold'>Contact Us</h1>
                      <div className='flex justify-between '>
                      <a href="https://www.facebook.com/profile.php?id=100009913004171">
                            <FacebookOutlinedIcon className='text-[#40afa0] ' />
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100009913004171">
                            <InstagramIcon className='text-[#fd025f]'/>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100009913004171">
                            <GitHub  className='text-[#888]'/>
                      </a>
                      
                </div>
                  </div>
                  
            </div>
          </SwipeableDrawer>
    </div>
  );
}
