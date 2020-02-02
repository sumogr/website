import * as React from 'react';
import {
    transl,
    fallbackImg,
} from 'utils';

import PageContainer from 'components/pageContainer';
import Button from 'components/button';
import {
    VerticalTimeline,
    VerticalTimelineElement
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import first from 'images/first.png';
import third from 'images/third.png';
import fourth from 'images/fourth.png';
import fifth from 'images/fifth.png';
import sixth from 'images/sixth.png';
import seventh from 'images/seventh.png';
import eighth from 'images/eighth.png';
import tenth from 'images/tenth.png';
import windows from 'images/windows.png';
import macos from 'images/macos.png';
import linux from 'images/linux.png';

import exrates from 'images/exchanges/exrates.png';
import indodax from 'images/exchanges/indodax.png';
import tradeogre from 'images/exchanges/tradeogre.png';
import livecoin from 'images/exchanges/livecoin.png';
import bitalong from 'images/exchanges/bitalong.png';
import txbit from 'images/exchanges/txbit.png';
import qbtc from 'images/exchanges/qbtc.png';
import bilaxy from 'images/exchanges/bilaxy.png';
import citex from 'images/exchanges/citex.png';
import coinex from 'images/exchanges/coinex.png';
import gjcom from 'images/exchanges/gjcom.png';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    
} from '@fortawesome/free-brands-svg-icons';
import {
    faArrowRight,
    faWallet
} from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch('https://api.coingecko.com/api/v3/coins/sumokoin')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    public render() {
        return(
            <div className="home">
                <PageContainer className="first" middle>
                    <div className="col-sm-6 col-xs-12">
                        <h3 className="upper">{transl('first.one')}</h3>
                        <h1>{transl('first.two')}</h1>
                        <h3>{transl('first.three')}</h3>
                       <a href="https://t.me/sumokoinofficial"><Button round uppercase  >{transl('first.four')}</Button></a> 
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={first} alt="Sumokoin" onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="second" id="features" center>
                    <div className="col-xs-12">
                        <h1>{transl('second.one')}</h1>
                        <h2>{transl('second.two')}</h2>
                    </div>
                </PageContainer>
                <PageContainer className="third" big>
                    <div className="col-sm-6 col-xs-12">
                        <img src={third} alt={transl('third.one')} onError={e => fallbackImg(e)} />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('third.one')}</h1>
                        <h3 className="desc">{transl('third.two')} <span>{transl('third.three')}</span> {transl('third.four')} <span>{transl('third.five')}</span> {transl('third.six')}</h3>
                    </div>
                </PageContainer>
                <PageContainer className="fourth" big>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('fourth.one')}</h1>
                        <h3 className="desc">{transl('fourth.two')} <span>{transl('fourth.three')}</span> {transl('fourth.four')}</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={fourth} alt={transl('fourth.one')} onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="fifth" big>
                    <div className="col-sm-6 col-xs-12">
                        <img src={fifth} alt={transl('fifth.one')} onError={e => fallbackImg(e)} />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('fifth.one')}</h1>
                        <h3 className="desc">{transl('fifth.two')} <span>{transl('fifth.three')}</span> {transl('fifth.four')}</h3>
                    </div>
                </PageContainer>
                <PageContainer className="sixth" big>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('sixth.one')}</h1>
                        <h3 className="desc">{transl('sixth.two')} <span>{transl('sixth.three')}</span> {transl('sixth.four')}</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={sixth} alt={transl('sixth.one')} onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="exchanges" id="exchanges" big>
                    <div className="col-sm-6 col-xs-12">
                        <ul>
                            <li>
                                <a target="_blank" href="https://indodax.com/market/SUMOBTC"><img src={indodax} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://tradeogre.com/exchange/BTC-sumo"><img src={tradeogre} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.qbtc.com/"><img src={qbtc} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.livecoin.net"><img src={livecoin} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.bitalong.com/trade/index/market/sumo_btc/"><img src={bitalong} onError={e => fallbackImg(e)} /></a>
                            </li>
			    <li>
                                <a target="_blank" href="https://txbit.io/"><img src={txbit} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://exrates.me/dashboard"><img src={exrates} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://bilaxy.com/"><img src={bilaxy} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.citex.co.kr/"><img src={citex} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.coinex.com/"><img src={coinex} onError={e => fallbackImg(e)} /></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.gj.com/home/"><img src={gjcom} onError={e => fallbackImg(e)} /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('exchanges.one')}</h1>
                        <h3 className="desc">{transl('exchanges.two')}</h3>
                    </div>
                </PageContainer>
                <PageContainer className="eighth" id="wallet" big>
                    <div className="col-sm-6 col-xs-12">
                        <h1><FontAwesomeIcon icon={faWallet} /> {transl('webwallet.header')}</h1>
                        <h2 className="under">{transl('webwallet.description')}</h2>
                        
                    <h3><a href="https://wallet.sumokoin.com/"><FontAwesomeIcon icon={faArrowRight} /> Go to the Web Wallet</a></h3> 

                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={seventh} alt={transl('eighth.one')} onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="seventh" id="wallet" big>
                    <div className="col-sm-6 col-xs-12">
                        <img src={seventh} alt={transl('seventh.one')} onError={e => fallbackImg(e)} />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('seventh.one')}</h1>
                        <h2 className="under">{transl('seventh.two')} v0.3.0</h2>
                        <ul>
                            <li>
                                <img src={windows} alt="Windows" onError={e => fallbackImg(e)} />
                                <h2>Windows</h2>
                                <h3><a href="https://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.3.0/SumoGUIWallet-v0.3.0-w64install.exe">64-bit Installer</a></h3>
                                <h3><a href="https://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.3.0/SumoGUIWallet-v0.3.0-w32install.exe">32-bit Installer</a></h3>
                                <h3><a href="https://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.3.0/SumoGUIWallet-v0.3.0-Win64.7z">64-bit zip</a></h3>
                                <h3><a href="https://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.3.0/SumoGUIWallet-v0.3.0-Win32.7z">32-bit zip</a></h3>
                            </li>
                            <li>
                                <img src={macos} alt="MacOS" onError={e => fallbackImg(e)} />
                                <h2>macOSX</h2>
                                <h3><a href="https://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.3.0/SumoGUIWallet-v0.3.0.dmg">64-bit</a></h3>
                            </li>
                            <li>
                                <img src={linux} alt="Linux" onError={e => fallbackImg(e)} />
                                <h2>Linux</h2>
                                <h3><a href="https://github.com/sumoprojects/SumoGUIWallet/releases/download/v0.3.0/SumoGUIWallet-v0.3.0-Linux-x64.tar.xz">64-bit</a></h3>
                            </li>
                        </ul>
                    </div>
                </PageContainer>
                <PageContainer className="eighth" big>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('eighth.one')}</h1>
                        <h2 className="under">{transl('eighth.two')} v0.6.0.1 "Sendai"</h2>
                        <ul>
                            <li>
                                <img src={windows} alt="Windows" onError={e => fallbackImg(e)} />
                                <h2>Windows</h2>
                                <h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.6.0.1/sumokoin.win.x64.v0-6-0-1.7z">64-bit</a></h3> 
                                <h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.6.0.1/sumokoin.win.x86.v0-6-0-1.7z">32-bit</a></h3>
                            </li>
                            <li>
                                <img src={macos} alt="MacOS" onError={e => fallbackImg(e)} />
                                <h2>macOSX</h2>
                                <h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.6.0.1/sumokoin.mac.x64.v0-6-0-1.tar.xz">64-bit</a></h3>
                            </li>
                            <li>
                                <img src={linux} alt="Linux" onError={e => fallbackImg(e)} />
                                <h2>Linux</h2>
                                <h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.6.0.1/sumokoin.linux.x64.v0-6-0-1.tar.xz">64-bit</a></h3>
                                <h3><a href="https://github.com/sumoprojects/sumokoin/releases/download/v0.6.0.1/sumokoin.linux.x86.v0-6-0-1.tar.xz">32-bit</a></h3>

                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={eighth} alt={transl('eighth.one')} onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="ninth" id="whitepaper" center>
                    <div className="col-xs-12">
                        <h1>{transl('ninth.one')}</h1>
                        <h2>{transl('ninth.two')}</h2>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                        <a href="https://cryptonote.org/whitepaper.pdf"> <FontAwesomeIcon icon={faCheck} className="check" />
                            <h3>{transl('ninth.three')}</h3> </a>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                        <a href="https://downloads.getmonero.org/whitepaper_annotated.pdf"> <FontAwesomeIcon icon={faCheck} className="check" />
                            <h3>{transl('ninth.four')}</h3> </a>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                        <a href="https://downloads.getmonero.org/whitepaper_review.pdf"> <FontAwesomeIcon icon={faCheck} className="check" />
                            <h3>{transl('ninth.five')}</h3> </a>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                        <a href="https://lab.getmonero.org/"> <FontAwesomeIcon icon={faCheck} className="check" />
                            <h3>{transl('ninth.six')}</h3> </a>
                    </div>
                </PageContainer>
                <PageContainer className="tenth" id="development" big>
                    <div className="col-sm-6 col-xs-12">
                        <h1>{transl('tenth.one')}</h1>
                        <h3 className="desc">{transl('tenth.two')} <span>{transl('tenth.three')}</span> {transl('tenth.four')}</h3>
                    </div>
                    <div className="col-sm-6 col-xs-12 first-xs img-right">
                        <img src={tenth} alt={transl('tenth.one')} onError={e => fallbackImg(e)} />
                    </div>
                </PageContainer>
                <PageContainer className="roadmap">
                    <VerticalTimeline animate={true} className="timeline">
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.first.date')}</h3>
                            <h4>{transl('timeline.first.version')}</h4>
                            <p>{transl('timeline.first.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.second.date')}</h3>
                            <h4>{transl('timeline.second.version')}</h4>
                            <p>{transl('timeline.second.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.third.date')}</h3>
                            <h4>{transl('timeline.third.version')}</h4>
                            <p>{transl('timeline.third.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.fourth.date')}</h3>
                            <h4>{transl('timeline.fourth.version')}</h4>
                            <p>{transl('timeline.fourth.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.fifth.date')}</h3>
                            <h4>{transl('timeline.fifth.version')}</h4>
                            <p>{transl('timeline.fifth.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.sixth.date')}</h3>
                            <h4>{transl('timeline.sixth.version')}</h4>
                            <p>{transl('timeline.sixth.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.seventh.date')}</h3>
                            <h4>{transl('timeline.seventh.version')}</h4>
                            <p>{transl('timeline.seventh.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.eighth.date')}</h3>
                            <h4>{transl('timeline.eighth.version')}</h4>
                            <p>{transl('timeline.eighth.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.ninth.date')}</h3>
                            <h4>{transl('timeline.ninth.version')}</h4>
                            <p>{transl('timeline.ninth.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.tenth.date')}</h3>
                            <h4>{transl('timeline.tenth.version')}</h4>
                            <p>{transl('timeline.tenth.desc')}</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement>
                            <h3>{transl('timeline.eleventh.date')}</h3>
                            <h4>{transl('timeline.eleventh.version')}</h4>
                            <p>{transl('timeline.eleventh.desc')}</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </PageContainer>
            </div>
        );
    }
}

export default Home;