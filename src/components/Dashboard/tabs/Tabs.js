import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import Grid from '../Grid/Grid';
import List from '../List/list';
import { Margin, WidthFull } from '@mui/icons-material';


export default function Tabs({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    const style = {
        color: "#40afa0",
        
        fontFamily: "Inter,sans-serif",
        fontWeight: 600,
        textTransform: "capitalize",
    };

  return (
    <div  >
      <TabContext value={value}  >
        <div className='bg-[#1b1b1b] my-4 mx-auto w-[60%]  '>
          <TabList variant="fullWidth" onChange={handleChange}  >
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        </div>
          
        <TabPanel value="grid">
            <div className='flex  flex-wrap justify-center items-start w-full gap-4 '>
              {coins.map((coin, i) => {
                return <Grid coin={coin} key={i} />
              })}
            </div>
        </TabPanel>
        <TabPanel value="list" className='bg-[#1b1b1b] rounded-xl w-[88%] mx-auto my-6' s>
          {coins.map((coin, i) => {
            return <List coin={coin} key={i} />
          })}
        </TabPanel>
      </TabContext>
    </div>
  );
}