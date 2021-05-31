import React from "react";
import { connect } from "frontity";
import {
  Container,
  Img,
  Overlay,
  CategoryBlog,
  TitleBlog,
  InfoBlog,
  IntroBlog,
} from "./styles";
import Link from "../Link";
const ContainerBlog = ({
  state,
  title,
  category,
  introBlog,
  link,
  image,
  background,
  key,
}) => {
  const data = state.source.get(state.router.link);
  const media = state.source.attachment[image];
  // console.log(media);
  return (
    <>
      <Container>
        <Link href={link}>
          <Img src={media.source_url} loading="lazy" />
          <Overlay background={background} />
          <InfoBlog>
            <CategoryBlog className="text__italic">{category}</CategoryBlog>
            <TitleBlog>{title}</TitleBlog>
            <IntroBlog
              dangerouslySetInnerHTML={{ __html: introBlog }}
            ></IntroBlog>
          </InfoBlog>
        </Link>
      </Container>
    </>
  );
};

export default connect(ContainerBlog);
