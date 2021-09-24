import React from "react";
import { connect } from "frontity";
import { IconToggleClose } from "../Icons";
import Link from "../Link";
import { Parallax } from "react-parallax";
import AnchorLink from "../AnchorLink";
import NavLink from "../NavLink";

import Logo from "../../assets/tactic-digital.png";

import {
  ContainerHeader,
  Category,
  TitleBlog,
  IntroBlog,
  BrandImg,
  ContainerContent,
  ImgFullWidth,
  ImgFullWidthParallax,
  ContainerMedia,
  ContainerFullWidth,
  Image,
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
  const author = state.source.author[post.author];
  const seccions = Object.values(post.acf.seccion);
  if (element === "blog") {
    return (
      <>
        <Brand id="brandBlog">
          <NavLink href="/" className="fadeOutUp height100 linkHomeBlog">
            <BrandImg src={state.source.post[1]?.page_logo_src || Logo} alt="logo Tactic Digital" />
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
                __html: post.excerpt.rendered || null,
              }}
            ></IntroBlog>
          </div>
          <div style={{ height: "auto", overflowY: "hidden" }}>
            <InfoBlog className="fadeInUp animation ">
              <p>{author.name}</p>/
              <span className="text__italic">
                {new Intl.DateTimeFormat("es-ES", {
                  dateStyle: "medium",
                }).format(new Date(post.date))}
              </span>
            </InfoBlog>
          </div>
        </ContainerHeader>
        
        <ImgFullWidthParallax id="parallaxBlog">
          <Parallax
            bgImage={FeaturedMedia}
            strength={150}
            style={{ height: "100%" }}
            className="parallax__blog"
          ></Parallax>
        </ImgFullWidthParallax>
        {seccions.map((seccion, i )=> {
          return (
            <span key={i}>
              <ContainerContent>
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
                <ImgFullWidth>
                  <ContainerMedia className="fadeObserve slideOutLeftMid"></ContainerMedia>
                  <Image src={seccion.imagen_ancho_completo.url} />
                </ImgFullWidth>
              ) : null}
            </span>
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
       
      </>
    );
  } else {
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>;

    return <p>No hay nada por mostrar</p>;
  }
};

export default connect(PostSingle);
