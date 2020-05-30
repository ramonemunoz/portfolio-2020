import React from "react"
import { Link } from "gatsby"
import "../styles/index.scss"

const NotFoundPage = () => (
  <div className="lost">
    <h1>404 :(</h1>
    <p>You just hit a route that doesn&#39;t exist...my bad.</p>
    <p>
      Lets go back <Link to="/">home</Link>
    </p>
  </div>
)

export default NotFoundPage
