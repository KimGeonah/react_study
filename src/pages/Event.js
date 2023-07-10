

import React from 'react'
import {Outlet} from 'react-router-dom'


export default function Event() {
  return (
    <div>
      <h1 style={{fontFamily:'KBO-Dia-Gothic_bold',marginTop:80,marginBottom:40}}>신규혜택 유의사항</h1>
      <ul style={{width:400,textAlign:'left',margin:'0 auto'}}>
        <li>✔️본 이벤트의 쿠폰들은 <strong>소멸 시 재발급</strong>이 불가합니다.</li>
        <li>✔️적립금은 <strong>3,000원 이상</strong>부터 사용 가능합니다.</li>
        <li>✔️쿠폰의 경우 <strong>한 주문 당 한번</strong>만 사용 가능합니다.</li>
        <li>✔️본 이벤트는 <strong>당사 사정에 의해 조기 종료</strong>될 수 있습니다.</li>
      </ul>

      <img src={process.env.PUBLIC_URL+'/images/event.jpg'} alt="banner" style={{marginTop:50,marginBottom:100,width:500,}}/>
        <Outlet></Outlet>
    </div>
  )
}
