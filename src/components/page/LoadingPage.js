import React from 'react';
import Delayed from 'react-delayed';
import ParticlesBg from 'particles-bg';
import Welcome from 'react-welcome-page';
import './../../static/css/loading.css';

let text = <div className={'LogoText'}>WuuD Team</div>;
let textAnimated = <div className={'LogoText'}>WuuD Team</div>;
let logo = './../../static/image/WuuD.ico';

export default class LoadingPage extends React.Component {
    render() {
        let config = {
            num: [5, 50],
            rps: 0.25,
            radius: [30],
            rotate: [0, 20],
            borderRadius: [50],
            life: [0.5, 5],
            v: [0.5, 1],
            tha: [-40, 40],
            alpha: [1, 0],
            scale: [0.1, 0.5],
            position: 'right',
            color: [
                'random',
                '#ff505f',
                '#FF0099',
                '#0082c8',
                '#29ffc6',
                '#fc4a1a',
                '#7303c0',
                '#EF3B36',
                '#ffffff',
                '#fff900',
            ],
            cross: 'bround',
            // emitter: 'follow',
            f: [2, -1],
            g: 1,
        };

        if (Math.random() > 0.85) {
            config = Object.assign(config, {
                onParticleUpdate: (ctx, particle) => {
                    ctx.beginPath();
                    ctx.rect(
                        particle.p.x,
                        particle.p.y,
                        particle.radius * 2,
                        particle.radius * 2
                    );
                    ctx.fillStyle = particle.color;
                    ctx.fill();
                    ctx.closePath();
                },
            });
        }
        return (
            <div className="bg">
                <Delayed mounted={true} mountAfter={1000}>
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
                </Delayed>
                <Delayed mounted={true} mountAfter={3200} unmountAfter={5400}>
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
                <Delayed mounted={true} mountAfter={5400} unmountAfter={9800}>
                    <div>
                        <div className="body">
                            <div className="main">
                                <img className="image" src={logo} alt={logo} />
                                <div
                                    id="typewriter"
                                    className="slogan anim-typewriter">
                                    Developers by Passion
                                </div>
                            </div>
                        </div>
                    </div>
                </Delayed>
                <ParticlesBg
                    num={120}
                    type="custom"
                    config={config}
                    bg={false}
                    color="#131313"
                />
            </div>
        );
    }
}
