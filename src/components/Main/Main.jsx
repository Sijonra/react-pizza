import style from './main.module.scss'
import Menu from "./Menu";
import Header from "../Header/Header";
import {createContext, useContext, useState} from "react";

export const SearchContext = createContext();

const Main = props =>{

    const [searchValue, setSearchValue] = useState('');


    return(
        <main className={style.main}>
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header />
                <Menu />
            </SearchContext.Provider>
        </main>
    )
}
export default Main;