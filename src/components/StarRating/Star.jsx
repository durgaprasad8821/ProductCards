import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './Star.css'

function Starrating({rating = 5}){
    const [current , setCurrent] = useState(0);
    const [hover , setHover] = useState(0);

    function userclick(index){
        setCurrent(index);
    }

    function userEnter(index){
        setHover(index);

    }
    function userLeave(){
        setHover(current)

    }
     return(
        <div>
        {
            [...Array(rating)].map((_,index) =>{
                index +=1
                return(
                    <FaStar 
                    key = {index}
                    onClick = {()=>{userclick(index)}}
                    onMouseEnter={()=>{userEnter(index)}}
                    onMouseLeave={()=>{userLeave(index)}}
                    className= {index <= (hover) ? "active" : "inactive"}
                    size = {20}/>

                )
            })
        }
        </div>
     )


}


export default Starrating