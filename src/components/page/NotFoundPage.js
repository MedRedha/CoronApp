import React from 'react';
import './../../static/css/404.css';
import './../../static/scss/404.css';

export default class NotFoundPage extends React.Component {
    render() {
        // noinspection HtmlRequiredAltAttribute
        return (
            <main className={'bg-purple'}>
                <div className="stars">
                    <div className="objects">
                        <img
                            className="object_rocket"
                            src="http://salehriaz.com/404Page/img/rocket.svg"
                            width="40px"
                        />
                        <div className="earth-moon">
                            <img
                                className="object_earth"
                                src="http://salehriaz.com/404Page/img/earth.svg"
                                width="100px"
                            />
                            <img
                                className="object_moon"
                                src="http://salehriaz.com/404Page/img/moon.svg"
                                width="80px"
                            />
                        </div>
                        <div className="box_astronaut">
                            <img
                                className="object_astronaut"
                                src="http://salehriaz.com/404Page/img/astronaut.svg"
                                width="140px"
                            />
                        </div>
                    </div>
                    <div className="glowing_stars">
                        <div className="star" />
                        <div className="star" />
                        <div className="star" />
                        <div className="star" />
                        <div className="star" />
                    </div>
                </div>
                <div className="about">
                    <a
                        className="bg_links social portfolio"
                        href="https://www.rafaelalucas.com"
                        target="_blank">
                        <span className="icon" />
                    </a>
                    <a
                        className="bg_links social dribbble"
                        href="https://dribbble.com/rafaelalucas"
                        target="_blank">
                        <span className="icon" />
                    </a>
                    <a
                        className="bg_links social linkedin"
                        href="https://www.linkedin.com/in/rafaelalucas/"
                        target="_blank">
                        <span className="icon" />
                    </a>
                    <a className="bg_links logo" />
                </div>
                <nav>
                    <div className="menu">
                        <div className="brand-logo">
                            <img
                                src="https://github.com/TeamWuuD/WuuD-Website/raw/master/favicon.ico?raw=true"
                                width="100px"
                            />
                        </div>
                        <div className="menu_links">
                            <a href="" className="link">
                                about
                            </a>
                            <a href="" className="link">
                                projects
                            </a>
                            <a href="" className="link">
                                contacts
                            </a>
                        </div>
                        <div className="menu_icon">
                            <span className="icon" />
                        </div>
                    </div>
                </nav>
                <section className="wrapper">
                    <div className="container">
                        <div
                            id="scene"
                            className="scene"
                            data-hover-only="false">
                            <div className="circle" data-depth="1.2" />
                            <div className="one" data-depth="0.9">
                                <div className="content">
                                    <span className="piece" />
                                    <span className="piece" />
                                    <span className="piece" />
                                </div>
                            </div>
                            <div className="two" data-depth="0.60">
                                <div className="content">
                                    <span className="piece" />
                                    <span className="piece" />
                                    <span className="piece" />
                                </div>
                            </div>
                            <div className="three" data-depth="0.40">
                                <div className="content">
                                    <span className="piece" />
                                    <span className="piece" />
                                    <span className="piece" />
                                </div>
                            </div>
                            <p className="p404" data-depth="0.50">
                                404
                            </p>
                            <p className="p404" data-depth="0.10">
                                404
                            </p>
                        </div>
                        <div className="text">
                            <article>
                                <p>
                                    Uh oh! Looks like you got lost. <br />
                                    Go back to the homepage if you dare!
                                </p>
                                <button>i dare!</button>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
