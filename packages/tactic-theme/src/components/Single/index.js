import React, { useEffect } from 'react'
import { connect } from 'frontity'

import {} from './styles'
function Single ({ state, actions, libraries }) {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const Html2react = libraries.html2react.Component
  useEffect(() => {
    actions.source.fetch('/')
  }, [])
  console.log(post)
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: { post } }}></div>
      <Html2react html={post?.content?.rendered} />
    </>
  )
}

export default connect(Single)
