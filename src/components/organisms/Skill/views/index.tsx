import * as React from 'react'
import SkillSection from './styles'
import HeaderSection from '../../../molecules/HeaderSection'

const Skill: React.FC = () => {
  return(
    <SkillSection id="skills" data-wow-offset="40">
      <HeaderSection>SKILL</HeaderSection>
      <div className="row">
        <div className="col-md-5">
          <div className="professional-skills">
            <div className="title-skills">
              <h3>PROFESSIONAL SKILLS</h3>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">Cloud AWS</span>
                <span className="skill-value">60%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress4"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{width: "90%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">Cloud AZURE</span>
                <span className="skill-value">40%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress5"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{width: "80%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">Vmware</span>
                <span className="skill-value">80%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress3"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{width: "75%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">Hardware Server/Storage</span>
                <span className="skill-value">80%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress1"
                        role="progressbar" aria-valuenow={75}
                        aria-valuemin={0} aria-valuemax={100}
                        style={{width: "75%"}}
                        >
                  </div>
              </div>
            </div>
            <div className="skill">
              <div className="title-progress">
                <span className="skill-name">Docker</span>
                <span className="skill-value">75%</span>
              </div>
              <div className="progress">
                  <div className="progress-bar progress5"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{width: "75%"}}
                        >
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="additional-skills">
            <div className="title-skills">
              <h3>ADDITIONAL SKILLS</h3>
            </div>
            <div className="circle-progress">
              <div className="row">
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>60%</span>
                    </div>
                    <div className="chart" data-percent="60">
                    </div>
                    <div className="name-circle">
                      <span>English</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>60%</span>
                    </div>
                    <div className="chart" data-percent="60">
                    </div>
                    <div className="name-circle">
                      <span>Creativity</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="circle">
                    <div className="chart-percentage">
                      <span>90%</span>
                    </div>
                    <div className="chart" data-percent="90">
                    </div>
                    <div className="name-circle">
                      <span>Teamwork</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="other-skills">
              <div className="row">
                <div className="col-sm-6">
                  <div className="other">
                    <div className="skill">
                      <i className="fa fa-check-square-o" aria-hidden="true"></i>
                      <span>Mysql</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="other">
                    <div className="skill">
                      <i className="fa fa-check-square-o" aria-hidden="true"></i>
                      <span>CI/CD</span>
                    </div>
                    <div className="skill">
                      <i className="fa fa-check-square-o" aria-hidden="true"></i>
                      <span>Operating system</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkillSection>
  )
}

export default Skill