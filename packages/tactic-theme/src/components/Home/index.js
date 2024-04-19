import React, { useEffect } from 'react'
import { connect } from 'frontity'
import NameSection from '../NameSection'
import BlockContent from '../BlockContent'
import Title from '../Titles'
import AnchorLink from '../AnchorLink'
import ImgParallax from '../ImgParallax'
import { Parallax } from 'react-parallax'
import TitleSection from '../TitleSection'
import ContainerServices from '../ContainerServices'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import fxScrollHome from '../../utils/fxScrollHome'

import {
  ContainerContent,
  ContentSection,
  HeadBlockContent,
  BodyContent,
  ContainerImage
} from './styles'
import FeatureBlogs from '../FeatureBlogs'
gsap.registerPlugin(ScrollTrigger)

const Home = ({ state }) => {
  const home = state.source.page[51]

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimations)

    return () => {
      window.removeEventListener('scroll', scrollAnimations)
    }
  }, [])

  const scrollAnimations = () => fxScrollHome()

  return (
    <>
      {typeof home === 'undefined'
        ? null
        : (

        <ContainerContent id="content">
          <div className="container__fullWidth">
            <ImgParallax
              imgID={home.featured_media}
              strength={150}
              className="img_mobile"
              content={home.acf.imagenes.contenido}
            ></ImgParallax>
          </div>

          <ContentSection className="padding__bottom__none" id="section">
            <div className="container__fullWidth">
              <NameSection>
                <TitleSection
                  textUp={home.acf.primer_seccion.titulo_de_la_seccion.slice(
                    0,
                    3
                  )}
                  textDown={home.acf.primer_seccion.titulo_de_la_seccion.slice(
                    3
                  )}
                />
              </NameSection>
            </div>
            <div className="container__left middle">
              <BlockContent id="BlockContent">
                <HeadBlockContent>
                  <Title className="title__low">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: home.acf.primer_seccion.titulo_de_parrafo
                      }}
                    ></span>
                  </Title>
                </HeadBlockContent>
                <BodyContent>
                  {home.acf.primer_seccion.contenido_de_parrafo}
                </BodyContent>
                <AnchorLink
                  className="text__italic link__blockContent"
                  href={home.acf.primer_seccion.enlace_parrafo.url}
                >
                  {home.acf.primer_seccion.enlace_parrafo.title}
                </AnchorLink>
              </BlockContent>
            </div>
            <ContainerServices />
          </ContentSection>

          <ContentSection className="padding__bottom__none padding__top__none">
            <div className="container__fullWidth">
              <NameSection className="textUpImg">
                {/* <IconWaveQuote className="big" /> */}
                <TitleSection
                  textUp={`${home.acf.ultima_seccion.titulo_de_la_seccion.split(' ')[0]} ${home.acf.ultima_seccion.titulo_de_la_seccion.split(' ')[1]}`}
                  textDown={home.acf.ultima_seccion.titulo_de_la_seccion.split(' ')[2]}
                />
              </NameSection>
            </div>
            <ContainerImage>
              <div className="image container__fullWidth fadeObserve slideDown">
                <Parallax
                  bgImage={
                    home.acf.ultima_seccion.imagen_de_la_seccion.url
                  }
                  strength={150}
                  style={{ height: 300 }}
                ></Parallax>
              </div>
            </ContainerImage>

            <div className="container__fullWidth padding__top__80">
              <BlockContent id="BlockContent">
                <HeadBlockContent className="column__left">
                  <Title className="title__low">
                    {home.acf.ultima_seccion.titulo_de_parrafo}
                  </Title>
                </HeadBlockContent>
                <BodyContent className="column__center" dangerouslySetInnerHTML={{ __html: home.acf.ultima_seccion.primer_parrafo }} />
                <BodyContent className="column__right">
                <div dangerouslySetInnerHTML={{ __html: home.acf.ultima_seccion.segundo_parrafo }}></div>
                <span>
                    <AnchorLink
                      className="text__italic link__blockContent"
                      href="#"
                    >
                      {home.acf.ultima_seccion.cta}
                    </AnchorLink>
                  </span>
                </BodyContent>
              </BlockContent>
            </div>
          </ContentSection>

          <ContentSection className="">
            <div className="container__fullWidth">
              <NameSection className="textUpImg">
                <TitleSection
                  textUp={''}
                  textDown={'BLOG'}
                />
              </NameSection>
            </div>
          </ContentSection>
          <FeatureBlogs />
        </ContainerContent>
          )}
    </>
  )
}
export default connect(Home)
