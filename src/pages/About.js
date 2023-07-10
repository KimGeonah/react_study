

import React from 'react'
import {Outlet} from 'react-router-dom'


export default function About() {
  return (
    <div>
        <img src={process.env.PUBLIC_URL+'/images/banner_01.png'} alt="banner" style={{marginTop:50}}></img>
        <h1 style={{fontSize:30,marginTop:50,marginBottom:30,fontWeight:'bold',letterSpacing:3}}>🥗 샐러드 정기주문 🥗</h1>
        <ul>
          <li style={{fontSize:20}}>샐럽위치에 샐러드로 꾸준하게 관리해보세요!</li>
          <li style={{fontSize:20}}>서울 / 경기 / 충청권은 신선함 그대로 새벽 배송 </li>
        </ul>
        <img src={process.env.PUBLIC_URL+'/images/detail.jpg'} alt="detail" style={{marginTop:50,marginBottom:100}}></img>
        <Outlet></Outlet>
    </div>
  )
}
