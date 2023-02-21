import style from './main.module.scss'
import Categories from "./Categories";
import Menu from "./Menu";

const Main = props =>{
    return(
        <main className={style.main}>
            <Categories />
            <Menu />
        </main>
    )
}

export default Main;