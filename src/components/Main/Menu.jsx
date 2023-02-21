import style from './menu.module.scss'
import img from '../../assets/png/img_1.png'

const Menu = props =>{
    return(
        <section className={style.sectionMenu}>
            <h1 className={style.sectionTitle}>Все пиццы</h1>
            <div className={style.menu}>
                <div className={style.cards}>
                    <div className={style.card}>
                        <img src={img} alt="" className={style.cardImage}/>
                        <h3 className={style.title}>Чизбургер-пицца</h3>
                        <div className={style.config}>
                            <ul className={style.blockSelector}>
                                <li className={style.configActive}>тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul className={style.sizeSelector}>
                                <li className={style.configActive}>24 см.</li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className={style.cardBottom}>
                            <p className={style.price}>от 395 ₽</p>
                            <button className={style.addToCart}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                                </svg>
                                <span>Добавить </span>
                                <div className={style.count}>2</div>
                            </button>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src={img} alt="" className={style.cardImage}/>
                        <h3 className={style.title}>Чизбургер-пицца</h3>
                        <div className={style.config}>
                            <ul className={style.blockSelector}>
                                <li className={style.configActive}>тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul className={style.sizeSelector}>
                                <li className={style.configActive}>24 см.</li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className={style.cardBottom}>
                            <p className={style.price}>от 395 ₽</p>
                            <button className={style.addToCart}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                                </svg>
                                <span>Добавить </span>
                                <div className={style.count}>2</div>
                            </button>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src={img} alt="" className={style.cardImage}/>
                        <h3 className={style.title}>Чизбургер-пицца</h3>
                        <div className={style.config}>
                            <ul className={style.blockSelector}>
                                <li className={style.configActive}>тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul className={style.sizeSelector}>
                                <li className={style.configActive}>24 см.</li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className={style.cardBottom}>
                            <p className={style.price}>от 395 ₽</p>
                            <button className={style.addToCart}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                                </svg>
                                <span>Добавить </span>
                                <div className={style.count}>2</div>
                            </button>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src={img} alt="" className={style.cardImage}/>
                        <h3 className={style.title}>Чизбургер-пицца</h3>
                        <div className={style.config}>
                            <ul className={style.blockSelector}>
                                <li className={style.configActive}>тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul className={style.sizeSelector}>
                                <li className={style.configActive}>24 см.</li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className={style.cardBottom}>
                            <p className={style.price}>от 395 ₽</p>
                            <button className={style.addToCart}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                                </svg>
                                <span>Добавить </span>
                                <div className={style.count}>2</div>
                            </button>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src={img} alt="" className={style.cardImage}/>
                        <h3 className={style.title}>Чизбургер-пицца</h3>
                        <div className={style.config}>
                            <ul className={style.blockSelector}>
                                <li className={style.configActive}>тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul className={style.sizeSelector}>
                                <li className={style.configActive}>24 см.</li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className={style.cardBottom}>
                            <p className={style.price}>от 395 ₽</p>
                            <button className={style.addToCart}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                                </svg>
                                <span>Добавить </span>
                                <div className={style.count}>2</div>
                            </button>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src={img} alt="" className={style.cardImage}/>
                        <h3 className={style.title}>Чизбургер-пицца</h3>
                        <div className={style.config}>
                            <ul className={style.blockSelector}>
                                <li className={style.configActive}>тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul className={style.sizeSelector}>
                                <li className={style.configActive}>24 см.</li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className={style.cardBottom}>
                            <p className={style.price}>от 395 ₽</p>
                            <button className={style.addToCart}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                                </svg>
                                <span>Добавить </span>
                                <div className={style.count}>2</div>
                            </button>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src={img} alt="" className={style.cardImage}/>
                        <h3 className={style.title}>Чизбургер-пицца</h3>
                        <div className={style.config}>
                            <ul className={style.blockSelector}>
                                <li className={style.configActive}>тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul className={style.sizeSelector}>
                                <li className={style.configActive}>24 см.</li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className={style.cardBottom}>
                            <p className={style.price}>от 395 ₽</p>
                            <button className={style.addToCart}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                                </svg>
                                <span>Добавить </span>
                                <div className={style.count}>2</div>
                            </button>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src={img} alt="" className={style.cardImage}/>
                        <h3 className={style.title}>Чизбургер-пицца</h3>
                        <div className={style.config}>
                            <ul className={style.blockSelector}>
                                <li className={style.configActive}>тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul className={style.sizeSelector}>
                                <li className={style.configActive}>24 см.</li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className={style.cardBottom}>
                            <p className={style.price}>от 395 ₽</p>
                            <button className={style.addToCart}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                                </svg>
                                <span>Добавить </span>
                                <div className={style.count}>2</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu;