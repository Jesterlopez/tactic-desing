import React from 'react'
import { connect } from 'frontity'
import {
  MasonryLayout,
  Blog,
  Image,
  Link,
  Category
} from './styles'

const FeatureBlogs = ({ state }) => {
  const blogs = state.source.blog
  
  return (
    <MasonryLayout>
      {
        Object.entries(blogs).slice(0, 6).map(([key, value]) => {
          return (
            <Blog href={value.link} key={key}>
              <Image src={value.featured_image_url} />
              <div>
                <Link href={value.link}>{value.title.rendered}</Link>
                <Category>{value.allCategories[0]}</Category>
              </div>
            </Blog>
          )
        })
      }
    </MasonryLayout>
  )
}

export default connect(FeatureBlogs)
