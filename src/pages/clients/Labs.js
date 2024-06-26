import React from "react";
import { Link } from "react-router-dom";
import reactimg from "../../assets/dashboard/react.png";
import angularimg from "../../assets/dashboard/Angular.png";
import nextimg from "../../assets/dashboard/next.png";
import { images } from "../../assets";
// import dockerimg from "../../assets/dashboard/docker.png";

export default function Labs() {
  const linksData = [
    {
      to: "/login",
      imgSrc: reactimg,
      altText: "React Card",
      label: "React",
    },
    {
      to: "/login",
      imgSrc: angularimg,
      altText: "Angular Card",
      label: "Angular",
    },
    {
      to: "/login",
      imgSrc: nextimg,
      altText: "Next.js Card",
      label: "Next.js",
    },
    {
      to: "/login",
      imgSrc: images.vuejs,
      altText: "vue.js Card",
      label: "vue.js",
    },
  ];
  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
          <section className="">
            <div className="container">
              <div className="content_wrapper">
                <div className="row align-items-center">
                  <div className="col col-lg-6">
                    <ul className="breadcrumb_nav unordered_list">
                      <li>
                        <Link to="/">Accueil</Link>
                      </li>
                      <li>labs</li>
                    </ul>
                    <h1 className="page_title animate__animated animate__fadeIn">
                      Nos Labs
                    </h1>
                    <p className="page_description">
                      Nous disposons d'une collection de labs de test pour vous
                      aider à mettre à l'épreuve vos compétences en sécurité
                      web. Les labs sont des environnements virtuels sécurisés
                      qui vous permettent de tester vos connaissances et de
                      découvrir de nouvelles vulnérabilités.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="courses_archive_section mb-5">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                {linksData.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="rounded-lg overflow-hidden shadow-md m-4"
                  >
                    <img
                      className="w-1/3 mx-auto"
                      src={link.imgSrc}
                      alt={link.altText}
                    />
                    <div className="px-6 py-4 text-center">
                      <span className="font-bold text-xl border rounded-xl px-8 py-1">
                        {link.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
