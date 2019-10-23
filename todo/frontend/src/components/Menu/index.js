import React from 'react';
import {Link} from 'react-router-dom';
const Menu = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <i className="fa fa-calendar-check-o"></i> TodoRS
                </Link>
                <div className="collapse navbar-collapse ">
                    <div className="nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/todos">
                                    Tarefas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Sobre
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;