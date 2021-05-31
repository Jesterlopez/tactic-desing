import React, { Suspense } from "react";
import { connect } from "frontity";
import {
  ContainerHeader,
  ContainerLeft,
  ContainerRight,
  HeadBlockContent,
  BodyContent,
  ContainerBlogs,
  ContainerClients,
  MessageInfo,
} from "./styles";
import Client from "../../components/Client";
import Title from "../../components/Titles";
import TitleHeader from "../../components/TitleHeader";
import BlockContent from "../../components/BlockContent";
// import ContainerBlog from "../../components/ContainerBlog";
import PlaceholderLazyLoad from "../../components/PlaceholderLazyLoad";
const ContainerBlog = React.lazy(() =>
  import("../../components/ContainerBlog")
);
import SearchBar from "../../components/SearchBar";
// import LazyLoad from "react-lazyload";

const Blog = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const allBlog = Object.values(state.source.blog);

  const filterBlog = allBlog.filter((blog) =>
    blog.title.rendered
      .toLowerCase()
      .includes(state.theme.searchBlogValue.toLowerCase())
  );
  console.log(filterBlog);
  console.log(allBlog);

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
          <BlockContent
            id="BlockContent"
            className="padding__left margin__top__paragraph"
          >
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
      <SearchBar />
      <ContainerBlogs>
        {!filterBlog.length > 0 && (
          <MessageInfo className="text__italic">
            No hay resultados relacionados con{" "}
            <strong>"{state.theme.searchBlogValue}"</strong>
          </MessageInfo>
        )}
        {filterBlog.reverse().map((blog) => {
          const idCat = blog.categories;
          const category = state.source.category[idCat].name;
          // console.log(id);
          // const blog = state.source.blog[id];
          // console.log(blog);
          return (
            // <LazyLoad
            //   height={320}
            //   placeholder={<PlaceholderLazyLoad />}
            //   debounce={500}
            //   offset={[-200, 0]}
            // >
            <Suspense fallback={<PlaceholderLazyLoad />}>
              <ContainerBlog
                key={blog.id}
                category={category}
                title={blog.title.rendered}
                image={blog.featured_media}
                introBlog={blog.excerpt.rendered}
                link={blog.link}
                background={blog.acf.background}
              />
            </Suspense>
            // </LazyLoad>
          );
        })}
      </ContainerBlogs>
      <ContainerClients>
        <BlockContent id="BlockContent" className="padding__left">
          <HeadBlockContent className="fadeInUp fadeObserve animate">
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
