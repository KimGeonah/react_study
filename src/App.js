import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './pages/productData'
import About from './pages/About' 
import Detail from './pages/Detail';
import Cart from './pages/Cart';


import {Container,Nav,Navbar,Col,Row} from 'react-bootstrap/';
import {Routes,Route, Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './pages/store'



function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)
  const state = useSelector((state) => state)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/shop')}}>프로젝트</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/shop')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/info')}}>Information</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>

        <Route path='shop' element={
              <Container>
                <img src={process.env.PUBLIC_URL+'/images/visual_main_01.jpg'} alt="vm" />
                <h2>BEST 샐러드</h2>
              <Row>
                {
                  bests.map((best,index)=>{
                    return(
                      <Col key={index}>
                        <Link to={`detail/${index}`}>
                          <img src={best.image} alt='product_img' style={{width:280}}/>
                          <h2 style={{fontSize:17,color:`black`}}>{best.title}</h2>
                          <h2 style={{fontSize:11,color:`black`}}>{best.desc}</h2>
                          <h2 style={{fontSize:11,color:`black`}}>{best.price}</h2>
                        </Link>
                        <button onClick={()=>{
                          dispatch(addItem({id:best.id, title: best.title,
                          count :1}))
                        }}>장바구니</button>
                      </Col>
                    )
                  })
                }
              </Row>
            </Container>
        }/>

        <Route path='about' element={<About/>}>
          <Route path='info' element={<div>Information</div>}></Route>
          <Route path='loca' element={<div>Location</div>}></Route>
        </Route>


        <Route path='detail/:id' element={<Detail bests={bests} />} />
        <Route path='cart' element={<Cart/>} />

      </Routes>



    </div>
  );
}

export default App;
