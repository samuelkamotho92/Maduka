import React from 'react'
import Loginnavbar from './Loginnavbar'
import Formone from './Formone'
import FormTwo from './FormTwo'
import { useState } from 'react'
import { Button } from 'react-daisyui'
const Sell = () => {
    const [pgno,setPagno] = useState(1);
  return (
    <div>
      <Loginnavbar />
<div className='flex items-center justify-between  header m-[2rem] bg-slate-300'>
      <h2 className='' style={{textAlign:"center"}}>Sell your Products</h2>
        <p style={{textAlign:"center"}}>Page {pgno} / 2</p>
</div>   
      <div className='flex flex-col justify-center   bg-slate-300 w-1/2 h-[100vh] auctionpg'>
       <div>
        {pgno == 1 ? <Formone />: <FormTwo />}
       </div>
          {pgno > 1 && (
        <div>
            <Button onClick={()=>{
                let pg = pgno;
                setPagno(pg - 1);
            }}
            style={{textAlign:"center"}}
           type='submit'
           >
Back Page
            </Button>
            </div>
          )}  

          {pgno <2 && (
            <div>

               <Button onClick={()=>{
                let pg = pgno;
                setPagno(pg + 1);
            }}
            style={{textAlign:"center"}}
           type="submit"
          >
Next Page
            </Button>  
            </div>
          )}
    </div>
    </div>
  )
}

export default Sell
