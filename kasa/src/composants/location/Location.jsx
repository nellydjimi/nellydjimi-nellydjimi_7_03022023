import './location.scss'
import data from '../../data/data.json'
import Card from '../card/Card'


const Location = ()=> {
    return (
        <main className='location'>
            {data.map((data) => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

export default Location