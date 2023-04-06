import React from "react";
import qs from "qs";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCategoryId, setCurrentPage, setFilters } from "../redux/slices/filterSlice";

import { sortList } from '../components/Sort'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PerfumeBlock from '../components/perfumeBlock/Index';
import PerfumeSkeleton from '../components/perfumeBlock/Skeleton';
import Pagination from "../pagination/Index";
import { fetchPerfumes } from "../redux/slices/perfumeSlice";

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);
// @ts-ignore
    const { items, status } = useSelector((state) => state.perfume);
    // @ts-ignore
    const { categoryId, sort, currentPage, searchValue } = useSelector((state) => state.filter);



    const onClickCategory = (idx: number) => {
        dispatch(setCategoryId(idx));
    };

    const onChangePage = (value: number) => {
        dispatch(setCurrentPage(value));
    };

    const getPerfumes = async () => {

        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch
        // @ts-ignore
            (fetchPerfumes({
                sortBy,
                order,
                category,
                search,
                currentPage
            }))

        window.scrollTo(0, 0);
    };

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sort.sortProperty, currentPage, navigate]);

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

            dispatch(
                setFilters({
                    ...params,
                    sort,
                }),
            );
            isSearch.current = true;
        }
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            getPerfumes();
        }
        isSearch.current = false;
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    const perfumesItem = items.map((obj: any) => <PerfumeBlock key={obj.id} {...obj} />);

    const skeletons = [...new Array(6)].map((_, index) => <PerfumeSkeleton key={index} />);

    return ( 
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Каталог</h2>
            {
                status === 'error' ? 
                <div className="content__error-info">
                    <h2>Произошла ошибка</h2>
                    <p>Не удалось отрендерить товар. Попробуйте повторить попытку позже.</p>
                </div>
                    : (
                        <div className="content__items"> {status === 'loading' ? skeletons : perfumesItem} </div>
                    )}
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
    )
}

export default Home;