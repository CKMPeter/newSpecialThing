import React from 'react'
import { Container } from 'react-bootstrap'

export default function CenteredContainer({children}) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh"}}
    >
      <div className="w-50" style={{ maxWidth: "700px" }}>
        {children}
        </div>
    </Container>
  )
}
