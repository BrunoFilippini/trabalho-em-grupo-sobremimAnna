/* import forro from 'FOTO-DO-FORRO'
import sandy from 'SANDY -UNIOR'
import duda from 'DUDA-BEAT'
import Exotico from 'GOSTO-DUVIDOSO'
import ForroAudio from ''
import SandyAudio from ''
import DudaAudio from ''
import GostoDuvidoAudio from '' */

export function GostosMusicais(){

    return (
    <>
    <h1>Gostos Musicais de Anna Reis<h1>



        <div className="swiper-container">  
    <div className="swiper-wrapper">  
    <div className="slider-item swiper-slide">  
    <div className="slider-image-wrapper">  
    <img className="slider-image" src={forro} alt="SliderImg">  
    </div>  
    <div className="slider-item-content">  
    <h1>Forró</h1>  
        <video width="420" height="315"
            src="https://www.youtube.com/watch?v=QDAHMMMtFBI">
        </video>  
    </div>  
    </div>  
    <div className="slider-item swiper-slide">  
    <div className="slider-image-wrapper">  
    <img className="slider-image" src={sandy} alt="SliderImg">  
    </div>  
    <div className="slider-item-content">  
    <h1>Sandy e Junior</h1>  
        <video width="420" height="315"
                src="https://www.youtube.com/watch?v=tCvLOhusfwM">
        </video>    
    </div>  
    </div>  
    <div className="slider-item swiper-slide">  
    <div className="slider-image-wrapper">  
    <img className="slider-image" src={duda} alt="SliderImg">  
    </div>  
    <div className="slider-item-content">  
    <h1>Duda Beat</h1>  
        <video width="420" height="315"
                src="https://www.youtube.com/watch?v=qGZgSnJBilE">
        </video>  
    </div>  
    </div>  
    <div className="slider-item swiper-slide">  
    <div className="slider-image-wrapper">  
    <img className="slider-image" src={Exotico} alt="SliderImg">  
    </div>  
    <div className="slider-item-content">  
    <h1>Gostos Duvidodos/Exóticos</h1>  
        <video width="420" height="315"
                src="https://www.youtube.com/watch?v=Ktgsn_G59os">
        </video>  
    </div>  
    </div>  
    </div>  
    <div className="slider-buttons">  
    <button className="swiper-button-prev"> &#60; </button>  
    <button className="swiper-button-next"> &#62; </button>  
    </div>  
    <div className="swiper-pagination"></div>  
    </div>
            </>
    )

} 