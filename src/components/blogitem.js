import React from "react"
import { Card } from 'react-bootstrap'
import { Link } from 'gatsby'
import sampleImage from '../images/image_002.jpg'
function BlogItem({title, date, src, link}) {
  return (
  <Card className="mt-4">
    <Card.Img variant="" src={src} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {date}
      </Card.Text>
      <Link to={`/${link}`}>see more</Link>
    </Card.Body>
  </Card>
  )
}

export default BlogItem