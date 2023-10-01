import React from 'react'

export default function Newsletter() {
  return (
    <div>
      <section className="newslatter_section">
            <div className="container">
              <div
                className="newslatter_box"
                style={{
                  backgroundImage:
                    'url("assets/images/shape/shape_img_6_custom.svg")',
                }}
              >
                <div className="row justify-content-center">
                  <div className="col col-lg-6">
                    <div className="section_heading text-center">
                      <h2 className="heading_text">
                        Entrez votre email pour suivre nos actualités.
                      </h2>
                      <p className="heading_description mb-0">
                        Recevez les dernières actualités et mises à jour
                        directement dans votre boîte de réception. Restez
                        informé(e) en vous abonnant à notre newsletter{" "}
                      </p>
                    </div>
                    <form action="#">
                      <div className="form_item m-0">
                        <input
                          type="email"
                          name="email"
                          placeholder="Votre email"
                        />
                        <button type="submit" className="btn btn_dark">
                          <span>
                            <small>S'abonner</small>
                            <small>S'abonner</small>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}
