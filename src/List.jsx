import data from './data';

function List()
{



    return (
        <>
        <h1>The top 10 Banned Books of 2021</h1>
        <div className='listContainer'>
        {data.map((book,index) => ( 
        <div className='listItem' key={book.id} onClick={()=> {}}>
            <h2>{book.title} </h2>
            <img style={{maxWidth: '50px'}} alt={book.title} src={book.image} />
            
        </div>
        ))}
      </div>
        </>
    );
}

export default List;