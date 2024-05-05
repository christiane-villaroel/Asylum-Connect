# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

 <Navbar expand="lg" >
            <Container fluid>
               <Row>
                    <Col>
                        <NavbarBrand>
                            Asylum Connect
                        </NavbarBrand>
                    </Col>
                    <Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <NavLink  to={'/'}>DashBoard</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
               </Row>

            </Container>
            
        </Navbar>