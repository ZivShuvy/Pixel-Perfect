import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/logo.png'

export function AppHeader() {
    return (
        <header className="main-container">
            <section className="header-container flex">
                <div className="flex align-center">
                    <img src={Logo} />
                    <nav className="flex">
                        <NavLink to="/">home</NavLink>
                        <NavLink to="/">about</NavLink>
                    </nav>
                </div>
                <button>contact us</button>
            </section>
        </header>
    )
}

