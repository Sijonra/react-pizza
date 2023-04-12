import style from './menu.module.scss'
import PizzaCard from "./PizzaCard";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import SkeletonMenu from "../skeletonComponents/SkeletonMenu";
import Categories from "./Categories";
import {SearchContext} from "./Main";

const Menu = props => {

    const {searchValue} = useContext(SearchContext)
    const [activeCategory, setActiveCategory] = useState(0); // sort categories
    const [activeIndex, setActiveIndex] = useState(0); // categories
    const [items, setItems] = useState([])
    const [isLoading, toggleLoading] = useState(true);
    const sortCategories = ['rating', 'price','name']
    let categoryProperty = sortCategories[activeCategory]

    useEffect(() => {
        toggleLoading(true)
        axios.get( activeIndex !== 0 ? ('https://6400895d63e89b0913b131ba.mockapi.io/items?category=' + activeIndex + '&sortBy=' + categoryProperty + '&order=desc')
            : ('https://6400895d63e89b0913b131ba.mockapi.io/items?sortBy=' + categoryProperty + '&order=desc')).then(response => {
            setItems(response.data)
            toggleLoading(false)
        })
    }, [activeIndex, activeCategory]);

    //console.log(activeIndex + ' ' + categoryProperty)

    const skeleton =  [...new Array(8)].map((item, index) => {return <SkeletonMenu key={index}/>})
    const pizzas =  items.filter(obj=>{if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) return true }).map(pizza => {
        return <PizzaCard key={pizza.id} name={pizza.name} img={pizza.imageUrl} price={pizza.price} sizes={pizza.sizes} types={pizza.types}/>
    })

    //console.log(searchValue)

    return (
        <section className={style.sectionMenu}>
            <Categories activeIndex={activeIndex} setActiveIndex={setActiveIndex} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            <h1 className={style.sectionTitle}>Все пиццы</h1>
            <div className={style.menu}>
                <div className={style.cards}>
                    {
                        isLoading
                            ?
                            skeleton
                            :
                            pizzas
                    }
                </div>
            </div>
        </section>

    )
}

export default Menu;