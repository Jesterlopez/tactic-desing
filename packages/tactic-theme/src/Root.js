import { connect, Head } from 'frontity'
import React, { useEffect, useState } from 'react'
import HeaderPage from './components/HeaderPage'
import BorderPage from './components/BorderPage'
import MenuNavbar from './components/MenuNavbar'
import MenuToggleMobile from './components/MenuToggleMobile'
import ContainerHeader from './components/HeaderFirst'
import FooterPage from './components/FooterPage'
import ContentPage from './components/ContentPage'
import Error404 from './components/404'
import Home from './components/Home'
import Title from './title'
import Servicios from './pages/Servicios'
import Preloader from './components/Loading'
import Nosotros from './pages/Nosotros'
import Blog from './pages/Blog'
import PostSingle from './components/PostSingle'
import { ScrollDown2 } from './components/ScrollDown'

import { Globalstyle } from './components/Styles/styles'
import Popup from './components/Popup'
const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link)
  const data2 = state.source
  const id = data.id

  const [loading, setLoading] = useState(true)
  const [formPopup, setFormPopup] = useState(state.theme.formPopup)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  useEffect(() => {
    actions.source.fetch('/inicio')
    window.addEventListener('scroll', scrollAnimations)

    return () => {
      window.removeEventListener('scroll', scrollAnimations)
    }
  }, [])

  const scrollAnimations = () => {
    // referencia al elemento a animar
    const img = document.querySelectorAll('.fadeObserve')

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation')
        }
      })
    }
    const options = {
      root: null,
      rootMargin: '-100px',
      threshold: 0
    }

    const Observer = new IntersectionObserver(callback, options)

    img.forEach((img) => {
      setTimeout(() => {
        Observer.observe(img)
      }, 500)
    })
  }

  useEffect(() => {
    setFormPopup(state.theme.formPopup)
  }, [state.theme.formPopup])

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Globalstyle />
      <Title />
      {loading
        ? (
        <Preloader />
          )
        : (
        <>
          <BorderPage />
          {data.isBlog
            ? (
            <MenuToggleMobile className="d__none" />
              )
            : (
            <MenuToggleMobile />
              )}
          <HeaderPage
            namePage={
              (data.isError && 'Not Found') ||
              (data.isPage && data2.page[id].title.rendered) ||
              (data.isPost && data2.post[id].title.rendered) ||
              (data.isBlogArchive && data.type) ||
              (data.isServiciosArchive && data.type)
            }
          />
          {data.isBlog ? null : <MenuNavbar />}
          { formPopup && <Popup content={formPopup} /> }
          <ScrollDown2 />

          {data.isHome && (
              <ContentPage>
                <ContainerHeader />
                <Home />
              </ContentPage>
          )}
          {data.isPage && data2.page[id].slug === 'services' && (
              <ContentPage>
                <Servicios />
              </ContentPage>
          )}
          {data.isBlogArchive && (
              <ContentPage>
                <Blog />
              </ContentPage>
          )}
          {data.isBlog && (
              <ContentPage element="blog">
                <PostSingle element="blog" />
              </ContentPage>
          )}
          {data.isPage && data2.page[id].slug === 'about-us' && (
              <ContentPage>
                <Nosotros />
              </ContentPage>
          )}

          {data.isFetching && <Preloader />}
          {data.isError && (
              <ContentPage>
                <Error404 />
              </ContentPage>
          )}
        </>
          )}
      <FooterPage />
    </>
  )
}

export default connect(Root)
