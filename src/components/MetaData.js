import React from "react"
import Helmet from "react-helmet"

function MetaData() {
    return (
      
      <Helmet>

        <title>Infinidream | Bruce Hopkins Jr</title>
        <meta name="description" content="I'm Bruce Hopkins Jr. I'm a web developer, and developer of Infinidream. See my portfolio."/>
        <meta name="keywords" content="Bruce Hopkins Jr Infinidream"/>
        <meta name="robots" content="index, nofollow"/>
        <meta name="language" content="EN"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://www.infinidream.net/"/>
        <meta property="og:title" content="Infinidream | Bruce Hopkins Jr"/>
        <meta property="og:description" content="I'm Bruce Hopkins Jr. I'm a web developer, and developer of Infinidream. See my portfolio."/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="http://www.infinidream.net/"/>
        <meta property="twitter:title" content="Infinidream | Bruce Hopkins Jr"/>
        <meta property="twitter:description" content="I'm Bruce Hopkins Jr. I'm a web developer, and developer of Infinidream. See my portfolio."/>

      </Helmet>
    )
  }
  
  export default MetaData