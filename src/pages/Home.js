import React from "react";
import Header from "../components/Home/Header";
import CoursHome from "../components/Home/CoursHome";
import Labtechno from "../components/Home/Labtechno";
import Newsletter from "../components/Home/Newsletter";
import IntroVideo from "../components/Home/IntroVideo";

export default function Home() {
  return (
    <div>
      <div className="page_wrapper">
        <main className="page_content">
          <Header />
          <IntroVideo />
          <CoursHome /><CoursHome />
          <Labtechno />
          <Newsletter />
        </main>
      </div>
    </div>
  );
}
