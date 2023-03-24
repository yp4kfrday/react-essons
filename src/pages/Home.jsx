import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PerfumeBlock from '../components/perfumeBlock/Index.jsx';
import PerfumeSkeleton from '../components/perfumeBlock/Skeleton';
import Pagination from "../pagination/Index";
import { SearchContext } from "../App";

export const Home = () => {
    const dispatch = useDispatch();
    const { categoryId, sort, currentPage } = useSelector((state) => state.filter);

    const { searchValue } = React.useContext(SearchContext)
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    const onChangePage = number => {
        dispatch(setCurrentPage(number));
    };

    React.useEffect(() => {
        setIsLoading(true);

        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios
            .get(
                `https://6413a04bc469cff60d673b36.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
            )
            .then(res => {
                setItems(res.data); 
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    const perfumesItem = items.map((obj) => <PerfumeBlock key={obj.id} {...obj} />);

    const skeletons = [...new Array(6)].map((_, index) => <PerfumeSkeleton key={index} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Каталог</h2>
            <div className="content__items">
                {isLoading ? skeletons : perfumesItem}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
    )
}

export default Home;