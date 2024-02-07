import axios from "axios";
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/subscribe", {
        email,
      });
      console.log("Subscribed:", response.data);
      setSubscribed(true);
      setError('');
    } catch (error) {
      console.error("Subscription failed:", error.response.data.error);
      setError(error.response.data.error);
      setSubscribed(false)
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

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
                    Recevez les dernières actualités et mises à jour directement
                    dans votre boîte de réception. Restez informé(e) en vous
                    abonnant à notre newsletter{" "}
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  {subscribed && (
                    <p className="text-success text-center">
                      Inscription à la newsletter réussie!
                    </p>
                  )}
                  {error && <p className="text-danger text-center">{error}</p>}
                  <div className="form_item m-0">
                    <input
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading}
                    />
                    <button
                      type="submit"
                      className="btn btn_dark py-3 text-center d-flex justify-center items-center"
                      disabled={loading}
                    >
                      <div className="mr-2 fw-bold">S'abonner</div>
                      {loading && (
                        <div
                          className="spinner-border  text-light"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
