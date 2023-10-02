import React from 'react'
import imgErro from '../../assets/error_image.png'
export default function Error() {
  return (
    <div>
      <section className=" text-center decoration_wrap">
        <div className="container  ">
          <div className="error_image">
            <img src={imgErro} alt="Error 404" />
          </div>
          <h1 className="error_title"> Page non trouvée</h1>
        </div>
      </section>
    </div>
  )
}
