import React from 'react';

const Skills = () => {
    return (

        <div
            className="uk-card uk-card-default uk-card-body uk-text-center"

        >
            <div>
                <div className="uk-card-title uk-text-center">
                    <h2 className="uk-text-primary">Skills</h2>
                    <p className="uk-text-muted uk-text-small">try moving the tiles around...</p>
                </div>
                <div className="uk-card uk-card-default">
                    <ul className="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-text-center"
                        data-uk-sortable="handle: .uk-card" data-uk-grid>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-amazonwebservices-plain-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-bootstrap-plain-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-git-plain icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-github-plain-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-html5-plain icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-java-plain-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-javascript-plain icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i class="devicon-jetbrains-plain icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-mongodb-plain-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-mysql-plain-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-nodejs-plain icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-npm-original-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                            <i class="devicon-react-original-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-visualstudio-plain-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-webstorm-plain-wordmark icon__size"></i>
                            </div>
                        </li>
                        <li>
                            <div className="uk-card uk-card-default uk-card-body">
                                <i className="devicon-yarn-plain-wordmark icon__size"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className="uk-divider-icon"></hr>
            </div>  
        </div>
    )
}


export default Skills;