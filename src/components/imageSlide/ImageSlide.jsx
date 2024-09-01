import {useState} from 'react';
import { MdKeyboardDoubleArrowRight , MdKeyboardDoubleArrowLeft } from "react-icons/md";
import './image.css'
function ImageSlide({images}){

    const [currentsilde , setCurrentsilde] = useState(0);

    function lefthandle(){
        setCurrentsilde(currentsilde === 0 ? images.length-1 : currentsilde-1)
    }

    function righthandle(){
        setCurrentsilde(currentsilde === images.length-1 ? 0 : currentsilde+1)
    }

    return(

        <div className='Contianer'>
        <MdKeyboardDoubleArrowLeft 
         onClick={ () => {lefthandle()}}
         className = "arrow arrow-left"/>
        {
            images.map((imageItem , index) => (
                <img 
                alt = {imageItem}
                src = {imageItem}
                className= {currentsilde === index ? "current-image" : "current-image hide-current-image"}
                />
            ))
        }
        <MdKeyboardDoubleArrowRight 
        onClick={ () => {righthandle()}}
         className = "arrow arrow-right" /> 
    </div>
    )


}

export default ImageSlide