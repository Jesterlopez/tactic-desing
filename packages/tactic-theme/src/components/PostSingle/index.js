import React from "react";
import { connect } from "frontity";
import { IconToggleClose } from "../Icons";
import Link from "../Link";
import { Parallax } from "react-parallax";
import AnchorLink from "../AnchorLink";
import NavLink from "../NavLink";

import {
  ContainerHeader,
  Category,
  TitleBlog,
  IntroBlog,
  // HeaderContent,
  // Container,
  ContainerContent,
  ImgFullWidth,
  ImgFullWidthParallax,
  // Title,
  // Content,
  // ContainerRight,
  ContainerMedia,
  // ContainerLeft,
  ContainerFullWidth,
  Image,
  // ImageTwo,
  ImgFullWidthContent,
  ContainerFooter,
  Button,
  Brand,
  InfoBlog,
} from "./styles";
import { ScrollDown2 } from "../ScrollDown";

const PostSingle = ({ state, element }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const FeaturedMedia = state.source.attachment[post.featured_media].source_url;

  const idCategories = Object.values(post.categories);
  // console.log(idCategories);
  const author = state.source.author[post.author];
  const seccion = Object.values(post.acf.seccion);
  if (element === "blog") {
    return (
      <>
        <Brand id="brandBlog">
          <NavLink href="/" className="fadeOutUp height100 linkHome">
            Tactic Center
          </NavLink>
        </Brand>
        <Link href="/blog">
          <IconToggleClose />
        </Link>
        <ScrollDown2 className="noAnimation" />
        <ContainerHeader
          background={post.acf.background}
          color={post.acf.text_color}
        >
          <div style={{ height: "auto", overflowY: "hidden" }}>
            <Category className="text__italic fadeInUp animation" id="category">
              {idCategories.map((el) => {
                return idCategories.length > 1
                  ? state.source.category[el].name + ". "
                  : state.source.category[el].name;
              })}
            </Category>
          </div>
          <div style={{ height: "auto", overflowY: "hidden" }}>
            <TitleBlog className="fadeInUp animation ">
              {post.title.rendered}
            </TitleBlog>
          </div>
          <div style={{ height: "auto", overflowY: "hidden" }}>
            <IntroBlog
              className="fadeInUp animation "
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered || "Pequeño titulo del blog",
              }}
            ></IntroBlog>
          </div>
          <div style={{ height: "auto", overflowY: "hidden" }}>
            <InfoBlog className="fadeInUp animation ">
              <a href={author.link}>{author.name}</a>/
              <span className="text__italic">
                {new Intl.DateTimeFormat("es-ES", {
                  dateStyle: "medium",
                }).format(new Date(post.date))}
              </span>
            </InfoBlog>
          </div>
        </ContainerHeader>
        {/* <Container>
            <HeaderContent>
              <p className="text__italic">Goal.</p>
              <p>
                Los últimos años el contenido ha tomado fuerza en las redes
                sociales, ya que, si las marcas no tienen presencia en estas
                plataformas con una estrategia de contenido, difícilmente pueden
                tener un lugar en este mundo tan competitivo donde hay bastantes
                ofertas y poca demanda.
              </p>
            </HeaderContent>
            <HeaderContent>
              <p className="text__italic">Goal.</p>
              <p>
                Pero, ¿qué se puede hacer para que el contenido de mi marca sea
                innovador y diferente del resto? Aunque no exista un lineamiento
                exacto de cómo hacerlo, es necesario que empieces planteándote
                que el marketing de contenidos no se limita a publicar textos en
                un sitio, sino que detrás de lo que publicas hay una
                planificación estratégica que busca generar engagement a través
                de contenido variado y de calidad.
              </p>
            </HeaderContent>
            <HeaderContent>
              <p className="text__italic">Goal.</p>
              <p>
                The Zenith Arena in Lille is one of the main concert and event
                halls in the Hauts-de-France. After nearly ten years of
                collaboration, we had carte blanche to create the new site.
              </p>
            </HeaderContent>
          </Container> */}
        <ImgFullWidthParallax id="parallaxBlog">
          <Parallax
            bgImage={FeaturedMedia}
            strength={150}
            style={{ height: 540 }}
            className="parallax__blog"
          ></Parallax>
        </ImgFullWidthParallax>
        {seccion.map((seccion, i) => {
          return (
            <>
              <ContainerContent key={seccion[i]}>
                {seccion.contenido ? (
                  <ContainerFullWidth
                    dangerouslySetInnerHTML={{ __html: seccion.contenido }}
                  ></ContainerFullWidth>
                ) : null}
                {seccion.imagen_en_contenido ? (
                  <ImgFullWidthContent>
                    <ContainerMedia className="fadeObserve slideOutRightMid"></ContainerMedia>
                    <Image src={seccion.imagen_en_contenido.url} />
                  </ImgFullWidthContent>
                ) : null}
              </ContainerContent>
              {seccion.imagen_ancho_completo ? (
                <ImgFullWidth key={seccion[i]}>
                  <ContainerMedia className="fadeObserve slideOutLeftMid"></ContainerMedia>
                  <Image src={seccion.imagen_ancho_completo.url} />
                </ImgFullWidth>
              ) : null}
            </>
          );
        })}
        <ContainerFooter>
          <Button backgroundButton={post.acf.background}>
            <AnchorLink
              className="text__italic link__blockContent color__custom"
              href="/blog"
            >
              Volver al sitio
            </AnchorLink>
          </Button>
        </ContainerFooter>
        {/* <ContainerContent>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </ContainerContent> */}
      </>
    );
  } else {
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>;

    return <p>Soy un post</p>;
  }
};

export default connect(PostSingle);
