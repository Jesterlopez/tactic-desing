import { connect, Head } from "frontity";
import React, { useEffect, useState } from "react";
import HeaderPage from "./components/HeaderPage";
import BorderPage from "./components/BorderPage";
import MenuNavbar from "./components/MenuNavbar";
import MenuToggleMobile from "./components/MenuToggleMobile";
import ContainerHeader from "./components/HeaderFirst";
import Paragraph from "./components/Paragraph";
import FooterPage from "./components/FooterPage";
import Content from "./components/Content";
import ContentPage from "./components/ContentPage";
import Single from "./components/Single";
import Error404 from "./components/404";
import Home from "./components/Home";
import Title from "./title";
import Servicios from "./pages/Servicios";
import Preloader from "./components/Loading";
import Nosotros from "./pages/Nosotros";
import { Globalstyle } from "./components/Styles/styles";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const data2 = state.source;
  const id = data.id;

  const [loading, setLoading] = useState(true);
  const [offset, setoffset] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // useEffect(() => {
  //   const linkMenu = document.querySelector(".link__menu");

  //   if (document.body.classList.contains("menuOpen")) {
  //     if (linkMenu.classList.contains("fadeInUp")) {
  //       linkMenu.classList.remove("fadeInUp");
  //     } else {
  //       linkMenu.classList.add("fadeInUp");
  //     }
  //   }
  // }, []);

  // animacion del home al hace scroll
  useEffect(() => {
    actions.source.fetch("/inicio");

    // if (document.readyState === "complete") {
    window.addEventListener("scroll", scrollAnimations);
    // }

    return () => {
      window.removeEventListener("scroll", scrollAnimations);
    };
  }, []);

  const scrollAnimations = () => {
    // const containerHeader = document.getElementById("header");
    // const Hello = document.getElementById("hello");
    // const CHello = document.getElementById("containerHello");

    // const Paragraph = document.getElementById("paragraph");
    // const ScrollDown = document.querySelector("#scrollDown");
    // const ScrollDown2 = document.querySelector("#scrollDown2");

    // // let scrollPosition = window.pageYOffset;
    // // const ElementParallax = document.querySelector("#paragraph");

    // const Content = document.querySelector("#content");

    // if (Content.getBoundingClientRect().bottom <= 650) {
    //   ScrollDown2.style.zIndex = "-1";
    // } else {
    //   ScrollDown2.style.zIndex = "10";
    // }

    // if (containerHeader.getBoundingClientRect().top < 0) {
    //   containerHeader.classList.add("expanded__height");
    //   Paragraph.style.opacity = 1;
    //   ScrollDown.classList.add("animation");
    //   ScrollDown.classList.add("fadeOut");

    //   ScrollDown.classList.remove("fadeInScroll");
    //   ScrollDown2.classList.add("fadeInScroll");
    // } else {
    //   ScrollDown.classList.add("fadeOut");
    //   ScrollDown2.classList.remove("fadeInScroll");

    //   ScrollDown.classList.remove("fadeOut");
    //   ScrollDown.classList.add("fadeInScroll");
    //   containerHeader.classList.remove("expanded__height");
    // }
    // if (Content.getBoundingClientRect().top < 0) {
    //   CHello.style.zIndex = "-1";
    //   Paragraph.style.opacity = 0;
    //   Paragraph.style.zIndex = -1;
    // } else {
    //   Paragraph.style.zIndex = 1;
    //   CHello.style.zIndex = 0;
    // }

    // referencia al elemento a animar
    const img = document.querySelectorAll(".fadeObserve");

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation");
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const Observer = new IntersectionObserver(callback, options);

    img.forEach((img) => {
      Observer.observe(img);
    });
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Globalstyle />
      <Title />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <BorderPage />
          <MenuToggleMobile />
          <HeaderPage
            namePage={
              (data.isError && "Not Found") ||
              (data.isPage && data2.page[id].title.rendered) ||
              (data.isPost && data2.post[id].title.rendered) ||
              (data.isServicioArchive && data.type)
            }
          />
          <MenuNavbar />
          {data.isHome && (
            <>
              <ContainerHeader />
              <Home />
              {/* <FooterPage /> */}
            </>
          )}
          {data.isServicioArchive && (
            <>
              <ContentPage>
                <Servicios></Servicios>
              </ContentPage>
            </>
          )}

          {data.isFetching && <Preloader />}
          {data.isError && (
            <>
              <ContentPage>
                <Error404 />
              </ContentPage>
            </>
          )}
          {data.isPost && (
            <>
              <ContentPage>
                <Single></Single>
              </ContentPage>
            </>
          )}
          {data.isPage && data2.page[id].slug == "nosotros" && (
            <>
              <ContentPage>
                <Nosotros />
                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: `${data2.page[id].content.rendered}`,
                  }}
                ></div> */}
              </ContentPage>
            </>
          )}
        </>
      )}
      {/* <iframe src="https://tactic-center.vercel.app"></iframe> */}
      <FooterPage />
    </>
  );
};

export default connect(Root);
