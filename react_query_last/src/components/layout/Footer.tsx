import {Link} from "react-router-dom";
import {Fragment} from "react";

function Footer(){
    return (
         <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* Copywrite Text */}
                    <div className="copy_right_text text-center">
                        <p>Copyright @2026 A강의장 | 개인 프로젝트
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            by <a href="https://github.com/dongdongsw" target="_blank">서동현</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;