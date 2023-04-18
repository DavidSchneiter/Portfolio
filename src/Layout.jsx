import React from 'react'
import { NavBar } from "./NavBar";
import { ScrollTop } from './ScrollTop';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Layout = ({children}) => {
  return (
      <>
          <NavBar />
          <main >
            {children}
          </main>
          <ScrollTop >
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
    </>
  )
}
