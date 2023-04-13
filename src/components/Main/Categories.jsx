import style from './main.module.scss'
import {useState} from "react";
import Sorting from "./Sort";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../redux/slices/sortSlice";

const Categories = props =>{

    const dispatch = useDispatch();
    const activeCategory = useSelector((state) => state.sort.category)

    const categoryOnClick = (id) =>{
        dispatch(setCategory(id))
    }

    const categories = ['все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

    return(
        <section className={style.categories}>
            <div className={style.types}>
                {
                    categories.map((category, index)=>{
                        return(
                            <p key={index} href="" onClick={()=>{categoryOnClick(index)}} className={activeCategory === index ? style.sortButton + ' ' + style.sortButtonActive: style.sortButton}>{category}</p>
                        )
                    })
                }
            </div>
            <Sorting />
        </section>
    )
}

export default Categories;