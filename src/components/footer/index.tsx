import * as React from 'react';
import {
    transl,
    fallbackImg
} from 'utils';
import { Link } from 'react-router-dom';
import footerLogo from 'images/footer_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faTelegram,
    faSlack,
    faFacebook,
    faTwitter,
    faDiscord
} from '@fortawesome/free-brands-svg-icons';
import {customScroll} from '../../utils';

const Footer: React.SFC<{}> = () => (
    <footer>
        <div className="container-fluid footer">
            <div className="row center-xs middle-xs">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <Link to="/" onClick={() => customScroll(document.getElementById('home') as HTMLElement)}>
                        <img src={footerLogo} className="logo" alt="Sumokoin" onError={e =>  fallbackImg(e)} />
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">                
                    <ul>
                        <li className="title">{transl('footer.contacts')}</li>
                        <li><a target="_blank" href="mailto:support@sumokoin.org">support@sumokoin.org</a></li>
                    </ul>                   
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                     <ul>
                        <li className="title">{transl('footer.tools.title')}</li>
                        <li><a target="_blank" href="https://explorer.sumokoin.com/">{transl('footer.tools.block1')}</a></li>
                        <li><a target="_blank" href="https://sumoexplorer.com/">{transl('footer.tools.block2')}</a></li>
                    </ul>
                    <ul>
                        <li className="title">{transl('footer.mining.title')}</li>
                        <li><a target="_blank" href="https://pool.sumokoin.com/">{transl('footer.mining.one')}</a></li>
                        <li><a target="_blank" href="https://miningpoolstats.stream/sumokoin">{transl('footer.mining.two')}</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <ul>
                        <li className="title">Social</li>
                        <li>
                            <a target="_blank" href="https://github.com/sumoprojects/sumokoin"><FontAwesomeIcon icon={faGithub} /></a>
                            <a target="_blank" href="https://t.me/joinchat/F8RH2kPmFCnA-igHBKSCAA"><FontAwesomeIcon icon={faTelegram} /></a>
                            <a target="_blank" href="https://sumokoin.slack.com/"><FontAwesomeIcon icon={faSlack} /></a>
                            <a target="_blank" href="https://www.facebook.com/sumokoin/"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a target="_blank" href="https://twitter.com/Sumokoin"><FontAwesomeIcon icon={faTwitter} /></a>
			    <a target="_blank" href="https://discord.gg/heDXTvP"><FontAwesomeIcon icon={faDiscord} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;