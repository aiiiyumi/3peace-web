
import React, { useEffect, useContext } from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { IoArrowForwardSharp } from "react-icons/io5";
import "./service.css"
import "../layout.scss"
import * as styles from "../../style/index.module.scss"
import { ObserverContext } from "../../provider/IntersectionObserverProvider";
import { handleObserver } from '../../utils/IntersectionObserver'


export default function ServiceLink() {


  const { toTargets, targets } = useContext(ObserverContext);
  useEffect(() => {
    handleObserver(targets)
  }, [])

  return (
    <section>
      <div className={`${styles.DeteailBack}`}>

        <div className={`contentWrapMain ${styles.DeteailBgcolor}`}>
          <div ref={toTargets}  className="testView">
            <div
              style={{
                margin: `0 auto`,
                maxWidth: `var(--size-content)`,
                padding: `var(--size-gutter)`,
              }}
            >
              <h1 className="text-6xl font-bold text-primary">Business details</h1>
              <div className="service-wrap container-blo">
                <StaticImage
                  src="../../images/logo.png"
                  loading="eager"
                  width={64}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="事業内容の画像"
                  style={{ marginBottom: `var(--space-3)` }}
                  className="Point"
                />
                <p className="text-primary">2011年の創業から営業支援を長年実施しております。</p>
              </div>
              <div className="Link-wrap linkEnd">
                <Link
                  to={"static-service"}
                  className="Link-button"
                >
                    業務内容を詳しくを見る<IoArrowForwardSharp />
                </Link>
              </div>
            </div>
          </div>


          </div>

      </div>
    </section>

  )
}


