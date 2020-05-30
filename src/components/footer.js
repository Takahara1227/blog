import React from "react"
import { Container, Row, Col} from 'react-bootstrap'
import Style from './kv.module.scss'
function Footer() {
  return (
    <Container>
      <Row>
        <Col sm={12} className="mx-auto">
          <div className={Style.footer}>
            <span>読んでいただきありがとうございました！！</span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer