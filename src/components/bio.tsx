/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BsTwitterX, BsLinkedin, BsInstagram } from "react-icons/bs"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {author?.name && (
        <div>
          <h1 className="font-sans font-normal m-0">
            Hey! I am <strong className="text-primary">{author.name}</strong>
          </h1>
          <br />
          <div className="text-xl m-0">{author?.summary || null}</div>
          <br />
          <div className="flex gap-4">
            <a
              className="text-black text-xl"
              href={`https://x.com/${social?.twitter || ``}`}
            >
              <BsTwitterX />
            </a>
            <a
              className="text-black text-xl"
              href={`https://instagram.com/${social?.instagram || ``}`}
            >
              <BsInstagram />
            </a>
            <a
              className="text-black text-xl"
              href={`https://linkedin.com/in/${social?.linkedIn || ``}`}
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Bio
