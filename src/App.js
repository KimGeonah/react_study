
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import data from './pages/productData'
import About from './pages/About' 
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Event from './pages/Event';


import {Container,Nav,Navbar,Col,Row} from 'react-bootstrap/';
import {Routes,Route, Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {addItem } from './pages/store'



function App() {

  const navigate = useNavigate()
  const [bests] = useState(data)
  const state = useSelector((state) => state)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>
          <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="logo" style={{width:80,cursor:"pointer"}} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/shop')}}>HOME</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>정기배송</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>이벤트</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>

      <Route path='/' element={<div>
          <h2 style={{fontFamily:'KBO-Dia-Gothic_bold',marginTop:70}}>슬림쿡 신규회원 이벤트, 지금 참여해보세요 !</h2>
          <img style={{marginTop: 50,marginRight: 'auto',marginBottom: 50,marginLeft: 'auto',width:800}} src={process.env.PUBLIC_URL+'/images/main_01.jpg'} alt="main" />
        </div>} />

        <Route path='shop' element={
              <Container>
                <img style={{marginTop: 50,marginRight: 'auto',marginBottom: 0,marginLeft: 'auto',width:1250}} src={process.env.PUBLIC_URL+'/images/visual_main.jpg'} alt="vm" />
                <h2 style={{fontSize:35, marginTop:50,marginBottom:50, fontWeight:"bold",fontFamily: 'KBO-Dia-Gothic_bold'}}>BEST 데일리 샐러드</h2>
              <Row>
                {
                  bests.map((best,index)=>{
                    return(
                      <Col key={index} style={{marginBottom:20}}>
                        <Link to={`detail/${index}`} style={{textDecoration:"none"}}>
                          <img src={best.image} alt='product_img' style={{width:250,marginBottom:20}}/>
                          <h2 style={{fontSize:17,color:`black`,fontWeight:"bold"}}>{best.title}</h2>
                          <h2 style={{fontSize:11,color:`black`}}>{best.desc}</h2>
                          <h2 style={{fontSize:15,color:`black`,fontWeight:"bold"}}>{best.price}</h2>
                        </Link>
                        <button style={{border:'none',backgroundColor:'tan',fontSize:15,width:100,marginBottom:20}} onClick={()=>{
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
          <Route path='info' element={<div>
            GIIIII
          </div>}></Route>
          <Route path='loca' element={<div>Location</div>}></Route>
        </Route>

        <Route path='event' element={<Event/>}>

        </Route>




        <Route path='/shop/detail/:id' element={<Detail bests={bests} />} />

        <Route path='cart' element={<Cart/>} />

      </Routes>

    </div>
  );
}

export default App;
