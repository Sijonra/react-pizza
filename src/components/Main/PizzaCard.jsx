import style from './menu.module.scss'
import {useState} from "react";

const PizzaCard = props =>{

    const [activeSize, setActiveSize] = useState(0)
    const [activeType, setActiveType] = useState(0)

    return(
        <>
            <div className={style.card}>
                <img src={props.img} alt="" className={style.cardImage}/>
                <h3 className={style.title}>{props.name}</h3>
                <div className={style.config}>
                    <ul className={style.blockSelector}>
                        <li onClick={()=>setActiveType(0)} className={activeType === 0 ? style.configActive : ''}>тонкое</li>
                        <li onClick={()=>setActiveType(1)} className={!props.types[1] ? style.configDisabled : activeType === 1 ? style.configActive : ''}>традиционное</li>
                    </ul>
                    <ul className={style.sizeSelector}>
                        {
                            props.sizes.map((size, index)=>{
                                return(
                                    <li onClick={()=>{setActiveSize(index)}} className={activeSize === index ? style.configActive : ''}>{size} см.</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={style.cardBottom}>
                    <p className={style.price}>от {props.price} ₽</p>
                    <button className={style.addToCart}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                        </svg>
                        <span >Добавить </span>
                        <div className={style.count}>2</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PizzaCard;