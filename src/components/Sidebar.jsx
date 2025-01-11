import "./Sidebar.scss"
import {Link} from "react-router";
import {getLocaleType, localeGet} from "../utils/LocaleUtils";


function Sidebar({isSidebarOpen,modules,locale,page}) {

    return (
        <ul className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
            {modules.map((entry) => (
                <div>
                    <Link to={`/${locale}/${entry}`} key={`item-${entry}`} className="sidebarLink">
                        <p className={`nav-link ${entry === page ? 'active' : ''}`}>
                            {localeGet(locale, 'frame', entry)}
                        </p>
                    </Link>
                    <div className="devider"/>
                </div>

            ))}
            {/*<h2>{localeGet(locale, 'guide', 'guide')}</h2>
            <ul className="menu">
              {modules.map((entry, index) => (
                  <li key={`item-${index}`}>
                    <Link to={`/${locale}/guide/${entry}`} className={entry === page ? 'active' : ''}>
                      {localeGet(locale, 'guide', entry)}
                    </Link>
                  </li>
              ))}
            </ul>*/}
        </ul>

    )
}

export default Sidebar
