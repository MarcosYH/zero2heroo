import React from 'react'
import unauthorized from "../../assets/unauthorized.jpg";

export default function Unauthorized() {
  return (
    <div>
    <div className=" text-center mt-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-500 my-10">
        Vous n'êtes pas autorisé à accéder à cette page.
      </h1>
        </div>
      <div className=" flex justify-center items-center">
      <img src={unauthorized} alt="unauthorized" className=" md:w-1/4 my-10 sm:w-1/3 "/>
      </div>
    </div>
  )
}
