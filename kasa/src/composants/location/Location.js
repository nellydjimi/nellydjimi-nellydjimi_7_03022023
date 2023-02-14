import '../location'
import Data from '../../data/data.json'
import Card from '../card/Card'

export default function Location() {
    return (
        <main className='location'>
            {Data.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                        pictures={data.pictures}
                    />
                )
            })}
        </main>
    )
}