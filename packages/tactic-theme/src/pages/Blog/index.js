import React, { Suspense, useEffect } from "react";
import { connect } from "frontity";
import Title from "../../components/Titles";
import TitleHeader from "../../components/TitleHeader";
import BlockContent from "../../components/BlockContent";
import PlaceholderLazyLoad from "../../components/PlaceholderLazyLoad";
const ContainerBlog = React.lazy(() =>
  import("../../components/ContainerBlog")
);
import SearchBar from "../../components/SearchBar";
import { ScrollDown2 } from "../../components/ScrollDown";
import FilterBlog from "../../components/FilterBlog";
// import LazyLoad from "react-lazyload";
import {
  ContainerHeader,
  ContainerLeft,
  ContainerRight,
  HeadBlockContent,
  BodyContent,
  ContainerBlogs,
  ContainerFluid,
  MessageInfo,
} from "./styles";

const Blog = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  // se obtiene todo el objeto de blogs y se convierte a un array para poder iterar
  const allBlog = Object.values(state.source.blog);
  // const id = Object.values(state.source.blog.acf.categoria);

  // const categori = id.forEach((el) => {
  //   state.source.category[el].name;
  //   // console.log(el);
  //   // console.log();
  // });
  // console.log(categori);

  // const CatID = allBlog.map((blog) => {
  //   const idCat = blog.categories;
  //   // const category = state.source.category[idCat].name;

  //   return category;
  // });

  // const category = state.source.category[CatID];

  // console.log(CatID);
  // se filtran los blog por el nombre del blog
  const filterBlog = allBlog.filter((blog) =>
    blog.title.rendered
      .toLowerCase()
      .includes(state.theme.searchBlogValue.toLowerCase())
  );

  // const Filter = allBlog.map((blog) => {
  //   return Object.values(blog.tags).map((tag) => {
  //     return state.source.tag[tag].name;
  //   });
  // });
  return (
    <>
      <ContainerHeader>
        <ScrollDown2 className="noAnimation scroll__custom" />
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
      {/* {allBlog.map((blog) => {
        const idTags = Object.values(blog.tags);
        return idTags.map((tag, i) => {
          return <FilterBlog key={i}>{state.source.tag[tag].name}</FilterBlog>;
        });
      })} */}

      {/* filtrar por etiquetas */}

      <ContainerBlogs>
        {!filterBlog.length > 0 && (
          // Sino encuentra nada relacionado con lo que esta buscando
          <MessageInfo className="text__italic">
            No hay resultados relacionados con
            <strong>"{state.theme.searchBlogValue}"</strong>
          </MessageInfo>
        )}
        {filterBlog.reverse().map((blog) => {
          const idCategories = Object.values(blog.categories);

          return (
            // <LazyLoad
            //   height={320}
            //   placeholder={<PlaceholderLazyLoad />}
            //   debounce={500}
            //   offset={[-200, 0]}
            // >
            <Suspense key={blog.id} fallback={<PlaceholderLazyLoad />}>
              <ContainerBlog
                category={idCategories.map((el) => {
                  return idCategories.length > 1
                    ? state.source.category[el].name + " "
                    : state.source.category[el].name;
                })}
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
    </>
  );
};

export default connect(Blog);
