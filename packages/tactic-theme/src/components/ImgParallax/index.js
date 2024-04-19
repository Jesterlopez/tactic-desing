/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react'
import { connect } from 'frontity'
import { Img, Content } from './styles'
import { Parallax, Background } from 'react-parallax'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ImgParallax = ({ state, imgID, strength, content }) => {
  const media = state.source.attachment[imgID]
  const contentRef = useRef(null)
  const containerImageRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 800px)': function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 60%',
            end: 'bottom 30%'
          }
        })
        tl.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5
        })
      },

      // mobile
      '(max-width: 799px)': function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 100%',
            end: 'bottom 30%'
          }
        })
        tl.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5
        })
      },

      // all
      all: function () {}
    })
  }, [])

  return (
    <>
      <Parallax
        id="parallaxImage"
        strength={strength}
        style={{ height: '100vh', zIndex: 7 }}
        ref={containerImageRef}
      >
        <Background>
          <Img src={media.source_url} alt='' />
          <Content ref={contentRef} dangerouslySetInnerHTML={{ __html: content }}/>
        </Background>
      </Parallax>
    </>
  )
}

export default connect(ImgParallax)
