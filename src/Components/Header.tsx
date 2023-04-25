import React from "react";
import { Nav } from "react-bootstrap"
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(): React.ReactNode {
        return <Nav>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/">Főoldal</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/Hibajelentes">Hibajelentés</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/Karakterek">Karakterek</Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    }
}

export default Navbar;