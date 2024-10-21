import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import "../styles/CustomNavbar.css"
import {Home} from "../pages/Home.jsx";
import {House, HouseFill} from "react-bootstrap-icons";

// This is a basic navbar component that has some search functionality
// There is a Form input with the search bar which tracks the keystrokes through the onChange method
// The Forms submit function is tied to the handleSearch function which does the API request.
// The button is of type submit to tell the form to trigger submit on the button press.

// The setSearchResults is a useState that updates when data is returned from the API request.
// This then triggers the App.js to update

// I also have an handleHomeClick button to reset the search query when home is pressed


const CustomNavbar = ({setSearchResults, url}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null)

    const handleSearch = async (e) => {
        e.preventDefault()
        if (searchQuery.trim() !== '') {
            console.log('Searching...')
            try {
                const response = await axios.get(url, {
                    params: {
                        query: searchQuery
                    }
                });
                setSearchResults(response.data);
            } catch (err) {
                setError(err);
            }
        }
    }

    const handleHomeClick = () => {
        setSearchQuery('')
    }

    return (
        <Navbar expand="lg" className=" sticky-top navbar">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">


                        <Nav.Link style={{color: "white"}} onClick={handleHomeClick} href="/">
                            <div style={{display: "flex", justifyContent: 'center', gap: 10}}>
                                <HouseFill size='24' color='white'/>
                                <p>Home</p>
                            </div>
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button variant="success" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar;