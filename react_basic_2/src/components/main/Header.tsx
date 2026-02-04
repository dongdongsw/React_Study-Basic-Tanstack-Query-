import {Fragment} from "react";
import {Link} from "react-router";

function Header(){
    return (
        <Fragment>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">React</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">레시피
                                <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><Link to={"/recipe/list"}>레시피 목록</Link></li>
                                <li><a href="#">레시피 검색</a></li>
                                <li><a href="#">쉐프 목록</a></li>
                            </ul>
                        </li>
                        <li><a href="#">커뮤니티</a></li>
                        <li><a href="#">동영상 검색</a></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;