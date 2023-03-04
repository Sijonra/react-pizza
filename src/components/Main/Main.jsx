import style from './main.module.scss'
import Categories from "./Categories";
import Menu from "./Menu";
import Header from "../Header/Header";

const Main = props =>{
    return(
        <main className={style.main}>
            <Header />
            <Categories />
            <Menu />
        </main>
    )
}

export default Main;