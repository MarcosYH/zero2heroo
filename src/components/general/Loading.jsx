import React from 'react';
import "../../styles/loading.css";

export default function Loading() {
  return (
    <div>
      <div className=' bg-[#ffffff6f]'>
        <div className='container'>
          <div className="loader text-center flex justify-center align-items-center h-screen">
            <div data-glitch="Zero2hero" className="glitch">
              Zero2hero
            </div>
            <div className="wrapper">
              <div className="circleload"></div>
              <div className="circleload"></div>
              <div className="circleload"></div>
              <div className="shadowload"></div>
              <div className="shadowload"></div>
              <div className="shadowload"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
