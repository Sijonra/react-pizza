import style from './menu.module.scss'
import PizzaCard from "./PizzaCard";
import axios from "axios";
import {useEffect, useState} from "react";
import SkeletonMenu from "../skeletonComponents/SkeletonMenu";
import Categories from "./Categories";
import {useSelector, useDispatch} from "react-redux";
import qs from 'qs'
import {setFilters} from '../../redux/slices/sortSlice'
import {useNavigate} from 'react-router-dom'

const Menu = props => {

    //const {searchValue} = useContext(SearchContext)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const searchValue = useSelector(state=> state.search.searchValue)
    const [items, setItems] = useState([])
    const [isLoading, toggleLoading] = useState(true);
    const sortCategories = ['rating', 'price','name']
    const activeCategories = useSelector((state) => state.sort.category)
    const activeSort = useSelector(state => state.sort.sorting)
    let categoryProperty = sortCategories[activeSort]

    useEffect(()=>{
        if(window.location.search){
            const urlParams = qs.parse(window.location.search.substring(1));
            console.log(urlParams)
            dispatch(setFilters(urlParams))
        }

    }, [])


    useEffect(()=>{
        const queryString = qs.stringify({
            activeCategories: activeCategories,
            activeSort: activeSort,
        })
        console.log(queryString)
        navigate('?' + queryString)
    }, [activeCategories, activeSort])

    useEffect(() => {
        toggleLoading(true)
        axios.get( activeCategories !== 0 ? ('https://6400895d63e89b0913b131ba.mockapi.io/items?category=' + activeCategories + '&sortBy=' + categoryProperty + '&order=desc')
            : ('https://6400895d63e89b0913b131ba.mockapi.io/items?sortBy=' + categoryProperty + '&order=desc')).then(response => {
            setItems(response.data)
            toggleLoading(false)
        })
    }, [activeCategories, activeSort]);

    const skeleton =  [...new Array(8)].map((item, index) => {return <SkeletonMenu key={index}/>})
    const pizzas =  items.filter(obj=>{if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) return true }).map(pizza => {
        return <PizzaCard key={pizza.id} name={pizza.name} img={pizza.imageUrl} price={pizza.price} sizes={pizza.sizes} types={pizza.types}/>
    })

    const count = useSelector((state) => state.counter.value)


    return (
        <section className={style.sectionMenu}>
            <Categories />
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