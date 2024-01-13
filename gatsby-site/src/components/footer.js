import * as React from "react"
import "../style/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} 3peace Inc. Web All rights reserved.
    </footer>
  )
}
