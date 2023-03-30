import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const DetailedPerfumePage: React.FC = () => {
    const [perfume, setPerfume] = React.useState<{
        imageUrl:string,
        title:string,
        price:number,
    }>();
    
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchPerfumes() {
            try {
                const { data } = await axios.get('https://6413a04bc469cff60d673b36.mockapi.io/items/' + id);
                setPerfume(data)
            } catch (error) {
                alert('ошибка при получении данных')
                navigate('/')
            }
        }

        fetchPerfumes()
    }, [])

    if (!perfume) {
        return <>Загрузка...</>;
    }


    return (
        <div className='perfume-block__link'>
            <img src={perfume.imageUrl} alt="imageUrl" />
            <h2>{perfume.title}</h2>
            <h4> {perfume.price} ₽ </h4>
        </div>
    );
};

export default DetailedPerfumePage
