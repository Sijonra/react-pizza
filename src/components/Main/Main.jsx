import style from './main.module.scss'
import Menu from "./Menu";
import Header from "../Header/Header";
import {useState} from "react";

const Main = props =>{

    const [searchValue, setSearchValue] = useState('');


    return(
        <main className={style.main}>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Menu searchValue={searchValue} />
        </main>
    )
}

export default Main;