import React from "react";
import Profile from "../../assets/profile.jpg";
import Education from "../Education/Education";

const PersonalDetails = () => {
  return (
    <div className="uk-card uk-card-default uk-card-body uk-text-center">
      <div
        className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        data-uk-grid
      >
        <div className="uk-flex-last@s uk-card-media-right uk-cover-container  uk-padding ">
          <img className="profile__rounded uk-align-center " src={Profile} />
        </div>
        <div>
          <div className="uk-card-body">
            <h2 className="uk-text-primary uk-card-title">Matthew Lomet</h2>

            <p className="uk-text-muted">
              Full Stack Software Engineer.
            </p>
            <p>
              Starting at New York Code and Design Academy I was trained in many
              languages - mainly using ReactJs and NodeJs to build full stack
              web applications. Then I attended Rutgers Full Stack Web
              Development Boot camp and took a further dive into ReactJS,
              nodeJS, paired programming and mySQL and NoSQL persistence.
              Afterwards I was invited to Cognizant's Talent Accelerator program
              run by Rutgers and Trilogy education. This course was an intense 3
              month Boot camp where I was taught Java 8, Spring Boot,
              Micro-service architecture, unit testing, integration testing -
              learning to make strong, scalable APIs. At the end of the course
              there was an interview for an Associate Full Stack Developer role
              at Cognizant and in February 2020 I started my career as a
              Programmer. Cognizant following me being hired has also enabled me
              and helped me get certified as an Amazon Associate Developer
              (certificate on profile).
            </p>

            <div className=" uk-padding-small uk-text-center">
              <h4 className="header__text-sub uk-text-primary">Contact Me</h4>


                <div className="uk-text-center">
                <a href="https://www.linkedin.com/in/mattlomet" target="_blank">
                <i class="fa fa-linkedin-square icon__size-medium uk-text-primary "></i>
                </a>
                <a href="mailto: matthewlomet@gmail.com">
                <i class="fa fa-envelope icon__size-medium uk-text-primary"></i>
                </a>
                </div>

              
            </div>
            
          </div>
        </div>
      </div>
      <hr className="uk-divider-icon"></hr>
    </div>
  );
};

export default PersonalDetails;
