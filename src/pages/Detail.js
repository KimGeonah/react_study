import React from 'react'
import { useParams } from 'react-router-dom'
import { addItem } from './store'
import { useDispatch } from 'react-redux'


export default function Detail(props) {
    const {bests} = props
    const {id} = useParams()
    const dispatch = useDispatch()


  return (
      <div>
      <h2 style={{fontFamily:'KBO-Dia-Gothic_bold',marginTop:80,marginBottom:40}}> {bests[id].title} 정기배송도 가능해요 !</h2>
      <div style={{display:'flex',justifyContent:'center',width:1000,margin:'0 auto',backgroundColor:'#999',padding:50}}>
      <img src={bests[id].image} alt="" style={{width:300,marginRight:20}}/>
      <div>
      <h4 style={{fontSize:20,fontWeight:'bold',marginTop:50,marginBottom:10}}>{bests[id].title}</h4>
      <p style={{marginBottom:10}}>{bests[id].desc}</p>
      <h4 style={{fontSize:20,fontWeight:'bold',marginTop:50,marginBottom:10}}>가격 : {bests[id].price}</h4>
      <button style={{border:'none',backgroundColor:'tan',fontWeight:'bold',width:100}} onClick={()=>{
        dispatch(addItem({id:bests[id].id, title: bests[id].title, count :1}))
      }}>장바구니</button>
      </div>
      </div>
      </div>
      )

}
