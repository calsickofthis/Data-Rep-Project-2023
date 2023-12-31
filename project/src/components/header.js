// importing libraries
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateComplaint from './CreateComplaint';
import ViewComplaints from './ViewComplaints';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsExclamationLg } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import EditComplaint from './EditComplaint';

// This is the funciton to print the header
function Header() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            {/* Didn't end up using this logo as its margins where too large */}
                            {/* <img src={logo} width="100px"></img> <br/> */}
                            FixMyStreets.ie
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Container>
                </Navbar>
            </div>

            <Nav fill bg="dark" data-bs-theme="dark" className="bg-body-tertiary" variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/"><BsFillHouseDoorFill />  Homepage | what we do</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/createComplaint"><BsExclamationLg />  Report pothole / broken streetlight</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/ViewComplaints"><BsFillPersonFill />  Live reports</Nav.Link>
                </Nav.Item>
            </Nav>
            <Routes>
                <Route path='/' element={<Content></Content>}></Route>
                <Route path='/ViewComplaints' element={<ViewComplaints></ViewComplaints>}></Route>
                <Route path='/createComplaint' element={<CreateComplaint></CreateComplaint>}></Route>
                <Route path='/EditComplaint/:id' element={<EditComplaint></EditComplaint>}></Route>
            </Routes>
        </BrowserRouter>

    );
}
export default Header;