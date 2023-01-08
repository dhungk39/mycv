import * as React from "react"
import AboutSection from "./styles"

const About: React.FC = () => {
  return(
    <AboutSection id="about">
      <div className="profile">
        <div className="row">
          <div className="col-sm-4">
            <div className="photo-profile">
              <img src={process.env.PUBLIC_URL + "/images/me.jpg"} alt="Nguyen Dang Hung" />
            </div>
            <a href={process.env.PUBLIC_URL + "/cv/CV.pdf"} target="cv">
              <div className="download-resume">
                <i className="fa fa-cloud-download" aria-hidden="true"></i>
                <span className="text-download">DOWNLOAD CV</span>
              </div>
            </a>
          </div>
          <div className="col-sm-8">
            <div className="info-profile">
              <h2><span>HI I'M</span> NGUYEN DANG HUNG</h2>
              <h3>Cloud Engineer</h3>
              <p>Hello! I’m Nguyen Dang Hung. Ruby on Rails Developer with over 3 years of experience.</p>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Age</span>
                      <span className="info">25</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Address</span>
                      <span className="info">Huong An, Huong Tra, Thua Thien Hue</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Email</span>
                      <span className="info">dhungk39@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Phone</span>
                      <span className="info">+840969083940</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Website</span>
                      <span className="info">https://iamdhungk39.github.io/mycv</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Nationality</span>
                      <span className="info">Viet Nam</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <span className="title-links">Social Links</span>
                  <ul className="ul-social-links">
                    <li className="li-social-links">
                      <a href="https://www.facebook.com/NDHKmy" data-tootik="Facebook" data-tootik-conf="square">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="# " data-tootik="Twitter" data-tootik-conf="square">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="# " data-tootik="Google Plus" data-tootik-conf="square">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="# " data-tootik="Linkedin" data-tootik-conf="square">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="li-social-links">
                      <a href="# " data-tootik="Pinterest" data-tootik-conf="square">
                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  )
}

export default About
