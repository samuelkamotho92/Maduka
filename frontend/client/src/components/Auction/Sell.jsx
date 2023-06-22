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
        <h2 className='' style={{textAlign:"center"}}>Sell your Products</h2>
      <div className=''>
        <p style={{textAlign:"center"}}>Page {pgno} / 2</p>
        {pgno == 1 ? <Formone />: <FormTwo />}
        <div>
          {pgno > 1 && (
            <Button onClick={()=>{
                let pg = pgno;
                setPagno(pg - 1);
            }}
            style={{textAlign:"center"}}
            >
Back
            </Button>
          )}  

          {pgno <2 && (
               <Button onClick={()=>{
                let pg = pgno;
                setPagno(pg + 1);
            }}
            style={{textAlign:"center"}}
            >
Next
            </Button>  
          )}
      </div>
    </div>
    </div>
  )
}

export default Sell
