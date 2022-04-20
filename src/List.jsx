import data from './data';


function List(props)
{

    const second_delay = 0.2;

    return (
        <>
        <h1>The top 10 Banned Books of 2021</h1>
        <div className='listContainer'>
        {data.map((book,index) => ( 
        <div 
            style={{
            left:0,
            right:0,
            opacity:0,
            animationName: 'fade',
            animationIterationCount: '1',
            animationDuration: '1s', 
            animationDelay: index * second_delay + "s",
            animationFillMode: 'forwards'
        }} 
            className='listItem' key={book.id} onClick={()=> {
            console.log(book.id);
            props.setId(book.id);
            props.setDisplay(false);
            props.setDetails(true);
            
        }}>
            <h2>{book.title} </h2>
            <img alt={book.title} src={book.image} />
            
        </div>
        ))}
      </div>
        </>
    );
}

export default List;