import { useState } from "react";

export default function Tabs() {
    const [selectedTab, setSelectedTab] = useState("home")
    return (
        <div className="container">
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className={`nav-link ${selectedTab == 'home' && 'active'}`} aria-current="page" href="#" onClick={() => setSelectedTab('home')}>
                            Tela Inicial
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${selectedTab == 'about' && 'active'}`} href="#" onClick={() => setSelectedTab('about')}>
                            Sobre
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${selectedTab == 'contact' && 'active'}`} href="#" onClick={() => setSelectedTab('contact')} >
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                {selectedTab == 'home' && <div>
                    Tela Inicial
                    </div>}
                {selectedTab == 'about' && <div>
                    Sobre
                    </div>}
                {selectedTab == 'contact' && <div>Contato</div>}
            </div>
        </div>
    );
}