import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    transl,
    fallbackImg,
    customScroll
} from 'utils';

import logoImg from 'images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAlignCenter,
    faWallet,
    faFile,
    faCodeBranch,
    faExchangeAlt
} from '@fortawesome/free-solid-svg-icons';

interface Props {
    children: React.ReactNode;
}

const Header: React.SFC<Props> = ({children}) => {
    const isHome = window.location.pathname === '/';

    return(
        <React.Fragment>
            <header>
                <div className="container-fluid">
                    <div className="col-xs-12">
                        <Link to="/" onClick={() => customScroll(document.getElementById('home') as HTMLElement)}>
                            <img src={logoImg} alt="Sumokoin" onError={e => fallbackImg(e)} />
                        </Link>
                        {isHome && (<ul>
                            <li title={transl('header.one')} onClick={() => customScroll(document.getElementById('features') as HTMLElement)}>
                                <FontAwesomeIcon icon={faAlignCenter} />
                                <span className="header-features-text">{transl('header.one')}</span>
                            </li>
                            <li title={transl('header.six')} onClick={() => customScroll(document.getElementById('exchanges') as HTMLElement)}>
                                <FontAwesomeIcon icon={faExchangeAlt} />
                                <span className="header-exchanges-text">{transl('header.six')}</span>
                            </li>
                            <li title={transl('header.two')} onClick={() => customScroll(document.getElementById('wallet') as HTMLElement)}>
                                <FontAwesomeIcon icon={faWallet} />
                                <span className="header-wallet-text">{transl('header.two')}</span>
                            </li>
                            <li title={transl('header.three')} onClick={() => customScroll(document.getElementById('whitepaper') as HTMLElement)}>
                                <FontAwesomeIcon icon={faFile} />
                                <span className="header-whitepaper-text">{transl('header.three')}</span>
                            </li>
                            <li title={transl('header.four')} onClick={() => customScroll(document.getElementById('development') as HTMLElement)}>
                                <FontAwesomeIcon icon={faCodeBranch} />
                                <span className="header-development-text">{transl('header.four')}</span>
                            </li>
                        </ul>)}
                    </div>
                </div>
            </header>
            {children}
        </React.Fragment>
    );
}

export default Header;