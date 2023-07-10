import React from 'react'
import Table from 'react-bootstrap/Table'
import  {useDispatch, useSelector} from 'react-redux';
import { changeName,changeYear,deleteItem,addCount,subCount } from './store';

export default function Cart() {

    //const state = useSelector((state) => {return state})
    //store에 있는 state를 가져오는 Hooks

    const state = useSelector((state) => state)
    const dispatch = useDispatch()

  return (
    <div>
        <h2 style={{marginTop:50}}><span style={{color:'black', fontWeight:'bold'}}>{state.user.name}</span>님의 장바구니</h2>
        <button onClick={() => dispatch(changeName())} style={{border:'none',backgroundColor:'tan',fontWeight:'bold',width:150,height:40,marginTop:10,marginBottom:30}}>닉네임보이기</button>
        <h3 style={{fontSize:15}} >가입기간 : {state.user.memberYear} 년</h3>
        <button style={{border:'none',backgroundColor:'tan',fontWeight:'bold'}} onClick={() => dispatch(changeYear(1))}>+</button>
        <button style={{border:'none',backgroundColor:'tan',fontWeight:'bold',marginBottom:10}} onClick={() => dispatch(changeYear(-1))}>-</button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Num</th>
          <th>상품명</th>
          <th>개수</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
      {
          state.cart.map((item,i) => {
            return(
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button style={{border:'none',backgroundColor:'tan',fontWeight:'bold'}} onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button>
                  <button style={{border:'none',backgroundColor:'tan',fontWeight:'bold',marginRight:10}} onClick={()=>dispatch(subCount(state.cart[i].id))}>-</button>
                  <button style={{border:'none',backgroundColor:'tan',fontWeight:'bold'}} onClick={()=>dispatch(deleteItem(state.cart[i].id))}>삭제</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    </div>
  )
}
