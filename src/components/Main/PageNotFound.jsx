import style from "../Cart/cart.module.scss";
import Header from "../Header/Header";

const PageNotFound = props =>{
    return(
        <>
            <Header />
            <section className={style.cartEmpty}>
                <h2>Страница не найдена 😕</h2>
            </section>
        </>

    )
}

export default PageNotFound