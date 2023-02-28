import style from './menu.module.scss'
import PizzaCard from "./PizzaCard";
import pizzaObj from '../../assets/pizzas.json'

const Menu = props =>{

    const pizzas = pizzaObj.pizzas

    return(
        <section className={style.sectionMenu}>
            <h1 className={style.sectionTitle}>Все пиццы</h1>
            <div className={style.menu}>
                <div className={style.cards}>
                    {pizzas.map(pizza=>{
                        return(
                            <PizzaCard name={pizza.name} img={pizza.imageUrl} price={pizza.price} sizes={pizza.sizes} types={pizza.types}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Menu;