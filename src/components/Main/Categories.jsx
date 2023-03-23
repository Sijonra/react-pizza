import style from './main.module.scss'
import {useState} from "react";
import Sorting from "./Sort";

const Categories = props =>{

    const categories = ['все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

    return(
        <section className={style.categories}>
            <div className={style.types}>
                {
                    categories.map((category, index)=>{
                        return(
                            <p key={index} href="" onClick={()=>props.setActiveIndex(index)} className={props.activeIndex === index ? style.sortButton + ' ' + style.sortButtonActive: style.sortButton}>{category}</p>
                        )
                    })
                }
            </div>
            <Sorting activeCategory={props.activeCategory} setActiveCategory={props.setActiveCategory}/>
        </section>
    )
}

export default Categories;