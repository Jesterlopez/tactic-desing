import React, { useEffect } from 'react'
import { connect } from 'frontity'

import {
  ContainerParagraph,
  Quote,
  ParagraphContent,
  RefQuote
} from './styles'


const Paragraph = ({ referencia, fraseUp, fraseMid, fraseDown, side, nextSection }) => {

  useEffect(() => {
    window.addEventListener('scroll', scrollAnimation)

    return () => {
      window.removeEventListener('scroll', scrollAnimation)
    }
  }, [])

  const scrollAnimation = () => {
    const containerHeader = document.getElementById('header')

    const Paragraph = document.getElementById('paragraph')

    const fadeInUp = document.querySelectorAll('.scrollAnime')
    // const slideInRight = document.querySelector('.slideInRight')
    const fadeInLeft = document.querySelector('.fadeInLeft')

    const scrollPosition = window.pageYOffset
    const ElementParallax = document.querySelector('#paragraph')

    const Content = document.querySelector(nextSection)

    if (containerHeader?.getBoundingClientRect().top < 0) {
      Paragraph.style.opacity = 1
      Paragraph.style.visibility = 'visible'

      fadeInUp.forEach((e) => {
        e.classList.add('animation')
        e.classList.remove('fadeInDown')
      })

      fadeInLeft && fadeInLeft.classList.add('animation')
      fadeInLeft && fadeInLeft.classList.remove('fadeOutLeft')
    } else {
      fadeInLeft && fadeInLeft.classList.add('fadeOutLeft')

      fadeInUp.forEach((e) => {
        e.classList.add('fadeInDown')
      })
    }

    if (typeof Content !== 'undefined' && Content !== null) {
      if (
        Content.getBoundingClientRect().top <= 700 &&
        Content.getBoundingClientRect().top > 0
      ) {
        ElementParallax.style.transform = `translateY(calc(0% + -${
          (scrollPosition / 50) * 3
        }%))`
      } else {
        ElementParallax.style.transform = 'translateY(-50%)'
      }
    }
  }

  return (
    <>
      <ContainerParagraph side={side} id="paragraph">
        {
          referencia && <Quote>
          <RefQuote className="font__italic__paragraph fadeInLeft">
            {referencia}
          </RefQuote>
        </Quote>
        }
        <ParagraphContent>
          <div className="text__primary text__dark">
            <strong className="fadeInUp scrollAnime">{fraseUp}</strong>
          </div>
          <div className="text__secundary text__white">
            <span>
              <strong className="fadeInUp scrollAnime">{fraseMid}</strong>
            </span>
            <span>
              <strong className="fadeInUp scrollAnime">{fraseDown}</strong>
            </span>
          </div>
        </ParagraphContent>
      </ContainerParagraph>
    </>
  )
}

export default connect(Paragraph)
