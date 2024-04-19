export const contactClose = (actions, form) => {
    actions.theme.setFormPopup(form)
    
    const html = document.getElementsByTagName('html')[0]
    const formContainer = document.getElementById('popup')
    if (formContainer) formContainer.classList.add('animation')

    if (!html.classList.contains('overflowContact')) {
      html.classList.add('overflowContact')
    }

    formContainer.classList.remove('hidden')
  }