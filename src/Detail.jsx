import data from './data';

function Detail(props)
{

    let [book] = data.filter(book_data => book_data.id === props.id);
    console.log(book);

    return (
        <div className="detailsPanel">
            <div  style={{
            opacity:0,
            animationName: 'fade',
            animationIterationCount: '1',
            animationDuration: '1s', 
            animationFillMode: 'forwards'
        }} className="singleBook">
            <a target="_blank" rel="noreferrer" href={book.link}><img alt={book.title} src={book.image} /></a>
            <h2 className="title">{book.title} </h2>
            <h3 className="author">{book.author}</h3>
            <a target="_blank" rel="noreferrer" href={book.link}><h4 className="link">Link</h4></a>
            <p className="ibsn">{book.ibsn}</p>
            <p className="description">{book.description}</p>
            <p className="reasons">{book.reasons}</p>

            </div>
                <button onClick={()=>{
                props.setDisplay(true);
                props.setDetails(false);
                }}>Back</button>
        </div>
    )

}

export default Detail;