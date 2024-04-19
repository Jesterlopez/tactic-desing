const fxScrollHome = (targetSectionRef = '#content') => {
  const containerHeader = document.getElementById('header')
  const CHello = document.getElementById('containerHello')

  const Paragraph = document.getElementById('paragraph')
  const ScrollDown = document.querySelector('#scrollDown')
  const ScrollDown2 = document.querySelector('#scrollDown2')

  const Content = document.querySelector(targetSectionRef)

  if (Content.getBoundingClientRect().bottom <= 700) {
    ScrollDown2.style.zIndex = '-1'
  } else {
    ScrollDown2.style.zIndex = '10'
  }

  if (containerHeader.getBoundingClientRect().top < 0) {
    containerHeader.classList.add('expanded__height')
    Paragraph.style.opacity = 1
    ScrollDown.classList.add('animation')
    ScrollDown.classList.add('fadeOut')

    ScrollDown.classList.remove('fadeInScroll')
    ScrollDown2.classList.add('fadeInScroll')
  } else {
    ScrollDown.classList.add('fadeOut')
    ScrollDown2.classList.remove('fadeInScroll')

    ScrollDown.classList.remove('fadeOut')
    ScrollDown.classList.add('fadeInScroll')
    containerHeader.classList.remove('expanded__height')
  }
  if (Content.getBoundingClientRect().top < 0) {
    CHello.style.zIndex = '-1'
    CHello.style.opacity = 0
    Paragraph.style.opacity = 0
    Paragraph.style.zIndex = -1
    Paragraph.style.visibility = 'hidden'
  } else {
    Paragraph.style.zIndex = 1
    CHello.style.zIndex = 0
    CHello.style.opacity = 1
  }
}

export default fxScrollHome
