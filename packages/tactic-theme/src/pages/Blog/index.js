import React, { Suspense, useEffect, useState } from "react";
import { connect } from "frontity";
import Title from "../../components/Titles";
import TitleHeader from "../../components/TitleHeader";
import BlockContent from "../../components/BlockContent";
import PlaceholderLazyLoad from "../../components/PlaceholderLazyLoad";
import SearchBar from "../../components/SearchBar";
import { ScrollDown2 } from "../../components/ScrollDown";
import FilterBlog from "../../components/FilterBlog";

const ContainerBlog = React.lazy(() =>
  import("../../components/ContainerBlog")
);
import {
  ContainerHeader,
  ContainerLeft,
  ContainerRight,
  HeadBlockContent,
  BodyContent,
  ContainerBlogs,
  MessageInfo,
  ContainerCategories
} from "./styles";

const Blog = ({ state }) => {
  
  const [blogFilter, setBlogFilter] = useState([]);
  
  const categories = Object.values(state.source.category)
  const uncategorized = 'Uncategorized'
  const allCategories = categories.map((category) => {
    return category
  })
  const categories2 = allCategories.filter(catDelete => !uncategorized.includes(catDelete.name));

  // se obtiene todo el objeto de blogs y se convierte a un array para poder iterar
  const allBlog = Object.values(state.source.blog);

  const searchBlog = allBlog.filter((blog) =>
    blog.title.rendered
      .toLowerCase()
      .includes(state.theme.searchBlogValue.toLowerCase())
  );

  const idCategory = allCategories.filter((cat)=> cat.name.includes(state.theme.filterBlogValue))
  const handleFindForCategory = (id) => {
    return allBlog.filter((blog)=> blog.categories.includes(id))
  }

  useEffect(() => {
    setBlogFilter(handleFindForCategory(idCategory[0]?.id))
  }, [state.theme.filterBlogValue])

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
      
      <ContainerCategories>
      <FilterBlog>Todos</FilterBlog>
      {
      categories2.map((category) => {
          return <FilterBlog key={category.name}>
            {category.name}
            </FilterBlog>;
      })
      }
      </ContainerCategories>

      {/* filtrar por etiquetas */}

      <ContainerBlogs>
      {!searchBlog.length > 0 && (
          <MessageInfo className="text__italic">
            No hay resultados relacionados con
            <strong>"{state.theme.searchBlogValue}"</strong>
          </MessageInfo>
        )
      }
      {
        blogFilter?.length > 0 ? (
          blogFilter?.reverse().map((blog) => {
            const idCategories = Object.values(blog.categories);
  
            return (
              <Suspense key={blog.id} fallback={<PlaceholderLazyLoad />}>
                <ContainerBlog
                  category={idCategories.map((el) => {
                    return idCategories.length > 1
                      ? state.source.category[el].name + " "
                      : state.source.category[el].name;
                  })}
                  title={blog.title.rendered}
                  image={blog?.featured_media}
                  introBlog={blog.excerpt.rendered}
                  link={blog.link}
                  background={blog.acf.background}
                />
              </Suspense>
            );
          })
        ) 
        :
        searchBlog.reverse().map((blog) => {
        const idCategories = Object.values(blog.categories);

        return (
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
        );
        })}
      </ContainerBlogs>
    </>
  );
};

export default connect(Blog);
