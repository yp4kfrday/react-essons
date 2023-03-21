import React from "react";

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PerfumeBlock from '../components/perfumeBlock/Index.jsx';
import PerfumeSkeleton from '../components/perfumeBlock/Skeleton';

export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://6413a04bc469cff60d673b36.mockapi.io/items')
            .then((res) => res.json())
            .then((perfumeItems) => {
                setItems(perfumeItems);
                setIsLoading(false);
            })
            window.scrollTo(0, 0);
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Каталог</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <PerfumeSkeleton key={index} />)
                        : items.map((obj) => <PerfumeBlock key={obj.id} {...obj} />)
                }
            </div>
        </div>
    )
}

export default Home;