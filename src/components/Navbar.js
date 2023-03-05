import PropTypes from 'prop-types'

export default function Navbar(props) {
    return ( <>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" style={{color: 'white'}} href="/">{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" style={{color: 'white'}} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" style={{color: 'white'}} href="/">Features</a>
        </li>
        </ul>
    </div>
    </div>
</nav>
        </>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
};