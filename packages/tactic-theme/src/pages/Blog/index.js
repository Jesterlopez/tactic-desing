import React from "react";
import { connect } from "frontity";
import {
  ContainerHeader,
  ContainerLeft,
  ContainerRight,
  HeadBlockContent,
  BodyContent,
  ContainerBlogs,
  ContainerClients,
} from "./styles";
import Client from "../../components/Client";
import Title from "../../components/Titles";
import TitleHeader from "../../components/TitleHeader";
import BlockContent from "../../components/BlockContent";
import ContainerBlog from "../../components/ContainerBlog";
import PlaceholderLazyLoad from "../../components/PlaceholderLazyLoad";

import LazyLoad from "react-lazyload";

const Blog = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <ContainerHeader>
        <ContainerLeft>
          <TitleHeader
            className="fadeInUp animation"
            textUp={"b"}
            textDown={"log"}
          />
        </ContainerLeft>
        <ContainerRight className="padding__top fadeInUp animation">
          <BlockContent id="BlockContent" className="padding__left noFade">
            <HeadBlockContent>
              <Title className="title__customTwo title__low">
                Conocé todo sobre disrupción
                <span className="text__italic">Digital!</span>
              </Title>
            </HeadBlockContent>
            <BodyContent>
              <p>
                Nuestros especialistas te mostrarán constantemente cuáles son
                las nuevas reglas del juego.
              </p>
            </BodyContent>
          </BlockContent>
        </ContainerRight>
      </ContainerHeader>

      {/* <ContainerBlogs>
        {data.items.map(({ id }) => {
          // console.log(id);
          const blog = state.source.blog[id];
          const idCat = blog.categories;
          const category = state.source.category[idCat].name;
          // console.log(blog);
          return (
            <>
              <LazyLoad
                height={320}
                placeholder={<PlaceholderLazyLoad />}
                debounce={500}
                offset={[-200, 0]}
              >
                <ContainerBlog
                  key={id}
                  category={category}
                  title={blog.title.rendered}
                  image={blog.featured_media}
                  introBlog={blog.excerpt.rendered}
                  link={blog.link}
                  background={blog.acf.background}
                />
              </LazyLoad>
            </>
          );
        })}
      </ContainerBlogs> */}
      <ContainerClients>
        <BlockContent id="BlockContent" className="padding__left">
          <HeadBlockContent>
            <Title className="title__customTwo">
              Nos clients
              <span className="text__italic">depuis 2004</span>
            </Title>
          </HeadBlockContent>
        </BlockContent>
        <Client />
      </ContainerClients>
    </>
  );
};

export default connect(Blog);
