import React from 'react'
import './Album.css'

export default function Album() {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">

              <img src="https://www.apple.com/v/iphone/home/ce/images/overview/select/iphone_17pro__0s6piftg70ym_large_2x.jpg" alt="" />
              <div className="card-body">
                <h3>iPhone 17 Pro</h3>

                <p className="card-text">
                  Innovative design for ultimate
                  performance .
                </p>
                <h5>From $1099 or $45.79/mo. for 24 mo.1</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      learn more
                    </button>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="https://www.apple.com/v/iphone/home/ce/images/overview/select/iphone_air__f0t56fef3oey_large_2x.jpg" alt="" />
              <div className="card-body">
                <h3>iPhone 17 Air</h3>

                <p className="card-text">
                  The thinnest iPhone ever.
                  With the power of pro inside.
                </p>
                <h5>From $999 or $41.62/mo. for 24 mo.1</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      learn more
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">

              <img src="https://www.apple.com/v/iphone/home/ce/images/overview/select/iphone_17__ck7zzemcw37m_large_2x.jpg" alt="" />
              <div className="card-body">
                <h3>iPhone 17</h3>

                <p className="card-text">
                  Even more delightful.
                    Even more durable.
                </p>
                <h5>From $799 or $33.29/mo. for 24 mo.1</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      learn more
                    </button>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">

              <img src="https://www.apple.com/v/iphone/home/ce/images/overview/select/iphone_16__drr03yfz644m_large_2x.jpg" alt="" />
              <div className="card-body">
                <h3>iPhone 17 Pro</h3>

                <p className="card-text">
                  Innovative design for ultimate
                  performance and battery life.
                </p>
                <h5>From $1099 or $45.79/mo. for 24 mo.1</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      learn more
                    </button>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">

              <img src="https://www.apple.com/v/iphone/home/ce/images/overview/select/iphone_16e__dar81seif0cy_large_2x.jpg" alt="" />
              <div className="card-body">
                <h3>iPhone 17 Pro</h3>

                <p className="card-text">
                  Innovative design for ultimate
                  performance and battery life.
                </p>
                <h5>From $1099 or $45.79/mo. for 24 mo.1</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      learn more
                    </button>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">

              <img src="data:image/webp;base64,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" alt="" />
              <div className="card-body">
                <h3>iPhone 17 Pro</h3>

                <p className="card-text">
                  Innovative design for ultimate
                  performance and battery life.
                </p>
                <h5>From $1099 or $45.79/mo. for 24 mo.1</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      learn more
                    </button>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
