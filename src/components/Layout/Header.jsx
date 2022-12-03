import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import { FaBell } from "react-icons/fa"
import { Dropdown } from 'react-bootstrap'

export default function Header () {
  
  return (
        <div className="container-fluid">
            <nav className="navbar container-fluid navbar-expand-sm container-fluid">
                <div className="container-fluid" >
                    <div className="collapse navbar-collapse container-fluid justify-content-end" id="mynavbar">
                        <div className="d-flex gap-3">
                            <div className="m-1">
                                <HiOutlineMagnifyingGlass/>
                            </div>
                            <div className="m-1">
                                <FaBell/>
                            </div>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                                        Usuario
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Cerrar sesión</Dropdown.Item>
                                        
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
  )
}
