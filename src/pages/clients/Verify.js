import React from 'react'
import check_email from "../../assets/check_email.png";
export default function Verify() {
  return (
    <div>
      <div className=" text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-500 my-10">
        Veuillez vérifier votre boite mail pour accéder <br /> au lien de
        validation de votre inscription.
        si vous n'avez pas reçu de mail, veuillez vérifier vos spam.
      </h1>
        </div>
      <div className=" flex justify-center items-center">
      <img src={check_email} alt="check_email" className=" md:w-1/4 my-10 sm:w-1/3 "/>
      </div>
    </div>
  )
}
