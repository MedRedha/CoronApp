import React from 'react';
import Delayed from 'react-delayed';
import Welcome from 'react-welcome-page';
import UIfx from 'uifx';
import './../../static/css/loading.css';

let text = <div className={'LogoText'}>WuuD Team</div>;
let textAnimated = <div className={'LogoText'}>WuuD Team</div>;
let logo = './../../static/image/WuuD.ico';

export default class LoadingPage extends React.Component {
    render() {
        return (
            <div className="bg">
                <Welcome
                    loopDuration={2200}
                    data={[
                        {
                            image: logo,
                            imageAnimation: 'rotateIn',
                            textAnimation: 'bounceIn',
                            text: text,
                            textColor: 'whitesmoke',
                        },
                    ]}
                />
                <Delayed mounted={true} mountAfter={2200} unmountAfter={4400}>
                    <Welcome
                        loopDuration={2200}
                        data={[
                            {
                                image: logo,
                                imageAnimation: 'rubberBand',
                                textAnimation: 'hinge',
                                text: textAnimated,
                                textColor: 'whitesmoke',
                            },
                        ]}
                    />
                </Delayed>
                <Delayed mounted={true} mountAfter={4400} unmountAfter={8800}>
                    <div>
                        <div className="body">
                            <div className="main">
                                <img src={logo} alt={logo} />
                                <div className="slogan anim-typewriter">
                                    Developers by passion
                                </div>
                            </div>
                        </div>
                    </div>
                </Delayed>
            </div>
        );
    }
}
