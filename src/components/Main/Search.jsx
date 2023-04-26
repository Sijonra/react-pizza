import style from "../Header/header.module.scss";
import {useContext, useRef} from "react";
import {SearchContext} from "./Main";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../redux/slices/searchSlice";

const Search = props =>{

    //const {searchValue, setSearchValue} = useContext(SearchContext)
    const dispatch = useDispatch()
    const searchInputRef = useRef()

    const searchValue = useSelector((state) => state.search.searchValue)
    console.log(searchValue)

    const onClearClick = () =>{
        dispatch(setSearchValue(''));
        searchInputRef.current.focus();
    }

    return(
        <div className={style.searchBar}>
            <svg className={style.icon} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero"/></svg>
            <input
                ref={searchInputRef}
                className={style.searchInput}
                onChange={() => dispatch(setSearchValue(searchInputRef.current.value))}
                value={searchValue}
            />
            {
                searchValue ?
                <svg onClick={onClearClick} className={style.icon} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg> : ''
            }
        </div>
    )

}

export default Search;