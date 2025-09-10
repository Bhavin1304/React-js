import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer bg-light pt-5 pb-5">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">About us</h5>
            <p>
              There live the blind texts. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <button className="btn btn-success rounded-pill">Learn More</button>
          </div>

          {/* Navigation */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Navigation</h5>
            <div className="row">
              <div className="col-6">Overview</div>
              <div className="col-6">Overview</div>
            </div>
            <div className="row">
              <div className="col-6">About us</div>
              <div className="col-6">About us</div>
            </div>
            <div className="row">
              <div className="col-6">About buyers</div>
              <div className="col-6">Services</div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3">Recent Posts</h5>
            <div className="mb-3">
              <small className="text-muted">32 May 2020</small>
              <p className="mb-1">There live the Blind Texts</p>
            </div>
            <div>
              <small className="text-muted">32 May 2020</small>
              <p className="mb-1">
                Separated they live in Bookmarksgrove rights
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-4" style={{ fontSize: 24 }}>
              Connect
            </h5>
            <div style={{ fontSize: 20 }}>
              <a href="#" className="text-success me-3">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#" className="text-success me-3">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="text-success me-3">
                <i className="bi bi-instagram" />
              </a>
            </div>

            <h5 className="mt-4">Subscribe</h5>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Bottom Bar */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span>© </span>
            <strong>Active</strong>
            <span> — All Rights Reserved</span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span>Designed by BootstrapMade</span>
          </div>
        </div>
      </div>
    </footer>
    )
}
