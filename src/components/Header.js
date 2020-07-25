import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-code"></span>
                    <h1>Hi, I'm <strong>Nat Baylon</strong>,<br />
                    Full Stack Developer</h1>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Learn More</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
