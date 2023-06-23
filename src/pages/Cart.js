import React from 'react'
import Table from 'react-bootstrap/Table'
import  {useDispatch, useSelector} from 'react-redux';
import { changeName,changeYear,deleteItem,addCount,subCount } from './store';

export default function Cart() {

    //const state = useSelector((state) => {return state})
    //store에 있는 state르 ㄹ가져오는 Hooks

    const state = useSelector((state) => state)
    const dispatch = useDispatch()

  return (
    <div>
        <h2><span style={{color:'blue', fontWeight:'bold'}}>({state.user.name})</span>님의 장바구니</h2>
        <button onClick={() => dispatch(changeName())}>닉네임보이기</button>
        <h3>회원가입기간 : {state.user.memberYear} 년</h3>
        <button onClick={() => dispatch(changeYear(1))}>+</button>
        <button onClick={() => dispatch(changeYear(-1))}>-</button>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
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
                  <button onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button>
                  <button onClick={()=>dispatch(subCount(state.cart[i].id))}>-</button>
                  <button onClick={()=>dispatch(deleteItem(state.cart[i].id))}>삭제</button>
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
