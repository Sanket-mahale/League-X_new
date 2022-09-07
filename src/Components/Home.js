import React ,{useState,useEffect} from "react";
import Cart from "./Cart";
import { Form ,Button } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Home=()=>{
    
    const [user, setUser] = useState([]);
    const [query,setQuery]=useState("");
    const fetchData = () => {
      return fetch("https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }
  
    useEffect(() => {
      fetchData();
    },[])

    const filterResult=(catItem,e)=>{

        console.log(user)
            const result=user.filter((Curdata)=>{
            return Curdata.color===catItem
        })
        setUser(result)
    } 

    const filterResult1=(catItem)=>{
        console.log(user)
        const result=user.filter((Curdata)=>{
            return Curdata.gender===catItem
        })
        setUser(result)
    } 
    const filterResult2=(catItem)=>{
        console.log(user)
        const result=user.filter((Curdata)=>{
            return Curdata.type===catItem
        })
        setUser(result)
    } 

    const filterResult3=(catItem)=>{
        console.log(user)
        const result=user.filter((Curdata)=>{
            return Curdata.price<=250
        })
        setUser(result)
    } 
    const filterResult4=(catItem)=>{
        console.log(user)
        const result=user.filter((Curdata)=>{
            return 251 < Curdata.price || Curdata <= 450
        })
        setUser(result)
    } 

    const filterResult5=(catItem)=>{
        console.log(user)
        const result=user.filter((Curdata)=>{
            return Curdata.price>=450
        })
        setUser(result)
    } 
   
    return(
        <div>
            <div className="filters">
      <strong className="title">Color</strong>
      <span>
        <Form.Check
          inline
          label="Red"
          name="group1"
          type="checkbox"
          
        onChange={()=>filterResult("Red")}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Green"
          name="group1"
          type="checkbox"
          
        onChange={()=>filterResult("Green")}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Blue"
          name="group2"
          type="checkbox"
          
        onChange={()=>filterResult("Blue")}
        />
      </span>
      <span className="title">Gender</span>
      <span>
        <Form.Check
          inline
          label="Men"
          name="group3"
          type="checkbox"
          
        onChange={()=>filterResult1("Men")}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Women"
          name="group4"
          type="checkbox"
          
        onChange={()=>filterResult1("Women")}
        />
      </span>
      
      <strong className="title">Price</strong>
      <span>
        <Form.Check
          inline
          label="0-Rs250"
          name="group5"
          type="checkbox"
          
        onChange={()=>filterResult3("250")}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Rs251-450"
          name="group6"
          type="checkbox"
          
        onChange={()=>filterResult4("450")}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Rs450"
          name="group7"
          type="checkbox"
          
        onChange={()=>filterResult5("450")}
        />
      </span>
      <strong className="title">Type</strong>
      <span>
        <Form.Check
          inline
          label="Polo"
          name="group8"
          type="checkbox"
          
        onChange={()=>filterResult2("Polo")}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Hoodie"
          name="group9"
          type="checkbox"
          
        onChange={()=>filterResult2("Hoodie")}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Basic"
          name="group10"
          type="checkbox"
          
        onChange={()=>filterResult2("Basic")}
        />
      </span>
      </div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e=>setQuery(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <section className="py-6 container">
                <div className="row justify-content-center">
                {user && user.length > 0 && user.filter((users)=>users.color.includes(query) ||users.type.toLowerCase().includes(query) || users.name.toLowerCase().includes(query)).map((userObj, index) => (
                 <Cart name={userObj.name} price={userObj.price} item={userObj} img={userObj.imageURL} userObj={userObj}/>
          ))}
                </div>
            </section>
          
        </div>
    )
}
export default Home;
