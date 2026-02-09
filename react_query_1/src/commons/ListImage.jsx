import {Link} from 'react-router-dom'

function ListImage({item,index, move}){

    let link = ''

    if(move === 'food'){
        link = <Link to={`/food/detail/${item.fno}`}>
            <img src={item.poster} style={{"width":"250px", "height":"150px"}} />
            <div className="caption">
                <p>{item.title}</p>
            </div>
        </Link>
    }

    if(move === 'recipe'){
        link = <Link to={`/recipe/detail/${item.no}`}>
            <img src={item.poster} style={{"width":"250px", "height":"150px"}} />
            <div className="caption">
                <p>{item.title}</p>
            </div>
        </Link>
    }

    return(
        <div className="col-md-4" key={index}>
            <div className="thumbnail">
                {link}
            </div>
        </div>
    )
}

export default ListImage;