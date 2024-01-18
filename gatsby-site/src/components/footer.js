import * as React from "react"
import "../style/footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} 3peace Inc. Web All rights reserved.
    </footer>
  )
}
