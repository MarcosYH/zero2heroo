import React from "react";
import Header from "../../components/client/Home/Header";
import CoursHome from "../../components/client/Home/CoursHome";
import Labtechno from "../../components/client/Home/Labtechno";
import Newsletter from "../../components/client/Home/Newsletter";
import IntroVideo from "../../components/client/Home/IntroVideo";
import ParcoursHome from "../../components/client/Home/ParcoursHome";

export default function Home() {
  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
          <Header />
          <IntroVideo />
          <CoursHome />
          <ParcoursHome />
          <Labtechno />
          <Newsletter />
        </main>
      </div>
    </div>
  );
}
