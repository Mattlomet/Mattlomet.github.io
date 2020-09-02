import React from 'react';

const Header = ()=>{
    return(
        <div className=" uk-text-center uk-position-center">
            <h1 className="header__text-main uk-animation-slide-top uk-font-bold ">
                Matthew Lomet
            </h1>
            <h4 className="header__text-sub uk-animation-slide-right ">
                Full Stack Developer
            </h4>
            <a href="#about" className="nostyle " >
                <div className="uk-button   header__button uk-animation-slide-bottom">
                    Learn More
                </div>
            </a>
        </div>
    );
}

export default Header;