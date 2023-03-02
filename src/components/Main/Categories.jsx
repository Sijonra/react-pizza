import style from './main.module.scss'
import {useState} from "react";
import Sorting from "./Sort";

const Categories = props =>{

    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ['все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

    return(
        <section className={style.categories}>
            <div className={style.types}>
                {
                    categories.map((category, index)=>{
                        return(
                            <p key={index} href="" onClick={()=>setActiveIndex(index)} className={activeIndex === index ? style.sortButton + ' ' + style.sortButtonActive: style.sortButton}>{category}</p>
                        )
                    })
                }
            </div>
            <Sorting />
        </section>
    )
}

export default Categories;