import style from './menu.module.scss'
import PizzaCard from "./PizzaCard";
import axios from "axios";
import {useEffect, useState} from "react";
import loader from '../../assets/png/loader.gif'

const Menu = props =>{

    const [items, setItems] = useState([])
    const [isLoading, toggleLoading] = useState(false);

    useEffect(()=>{
        toggleLoading(true)
        axios.get('https://6400895d63e89b0913b131ba.mockapi.io/items').then(response=>{
            setItems(response.data[0].pizzas)
            toggleLoading(false)
        })
    }, []);

    console.log(items)

    return(

        !isLoading ?
            (
                <section className={style.sectionMenu}>
                    <h1 className={style.sectionTitle}>Все пиццы</h1>
                    <div className={style.menu}>
                        <div className={style.cards}>
                            {items.map(pizza=>{
                                return(
                                    <PizzaCard key={pizza.id} name={pizza.name} img={pizza.imageUrl} price={pizza.price} sizes={pizza.sizes} types={pizza.types}/>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )
            :
            <div className={style.loader}>
                <img  src={loader} alt=""/>
            </div>


    )
}

export default Menu;