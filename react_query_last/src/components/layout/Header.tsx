import {Link} from "react-router-dom";
import apiClient from "../../http-commons";
import {useState, useEffect, Fragment, useRef} from "react";
import {useMutation} from "@tanstack/react-query";
import {AxiosError, AxiosResponse} from "axios";

/*
    서버 연결 => 서버 데이터를 관리
    useQuery => 함수명 지정 => 반복 : refetch : 함수명
    useMutation : mutate = loginOk(주로 사용 : insert , update, delete)
                  => onSuccess
                  => Fail
    1. session
        => 브라우저마다 생성 => 포트에 따라 다르다
        => 3000
             | 로그인 요청
           8080 ============= 로그인 여부(데이터베이스 처리)
                                   |
                              로그인 된 경우
                                   |
                              javascript를 이용해서 자체 저장
                              ---------------------------
                              자바스크립트 세션 저장
                               sessionStorage.setItem("키","값")
                              세션 해제
                               sessionStorage.clear()
 */
function Header() {
    // 변수 => HTML에 바로 적용 => useState
    const [login, setLogin] = useState<boolean>(false);
    const [id, setId] =useState<string>();
    const [pwd, setPwd] = useState<string>();

    const idRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);

    // 서버에서 전송한 데이터
    interface LoginData{
        msg:string; // NOID, NOPWD, OK
        id:string;
        name:string;
    }
    // 로그인 전송 버튼
    const {mutate:loginOk} = useMutation({
        mutationFn: async () => {
            const res : AxiosResponse<LoginData> = await apiClient.get(`/member/login/${id}/${pwd}`);
            return res?.data;
        },
        onSuccess : (data:LoginData) => {
            if(data?.msg === 'NOID'){
                alert("아이디가 존재 하지 않습니다.")
                setId('')
                setPwd('')
                idRef.current?.focus();
            }
            else if(data?.msg === 'NOPWD'){
                alert("비밀번호가 일치 하지 않습니다.")
                setPwd('')
                pwdRef.current?.focus();
            }
            // 값이 없느 경우 => null || undefined
            else if(data?.msg === 'OK' && data.id && data.name){
                // !는 값이 있는 경우
                window.sessionStorage.setItem('id', data.id!);
                window.sessionStorage.setItem('name', data.name!);
                setLogin(true)
                window.location.reload();
            }
        },
        onError: (error:AxiosError) => {
            console.log("loginError",error?.message);
        }
    });
    // 메인 화면이면  => 자동 실행
    // String id = (String)session.getAttribute("id")
    // if(id == null) = <c:if test="$PsessionScope.id=null">
    useEffect(()=>{
        if(sessionStorage.getItem("id")){
            setLogin(true)
        }
    })

    const memberLogin= () =>{
        if(!id || id.trim() === ""){
            idRef.current?.focus()
            return
        }
        // !pwd => null / undefinde가 아닌 경우
        if(!pwd || pwd.trim() === ""){
            pwdRef.current?.focus()

            return
        }
        loginOk() // useMutation 호출 => mutate  / useQuery => refetch
    }

    const memberLogout = () =>{
        window.sessionStorage.clear()
        setId('')
        setPwd('')
        setLogin(false)
        window.location.reload()
    }

    return (
        <Fragment>
            <div className="top_header_area">
                <div className="container">
                    <div className="row">
                        <div className="col-5 col-sm-6">
                            {/*Top Social bar start*/}
                            <div className="top_social_bar">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        {/*Login Register Area*/}
                        <div className="col-7 col-sm-6">
                            <div className="signup-search-area d-flex align-items-center justify-content-end">
                                <div className="login_register_area d-flex">
                                    {
                                        !login?(
                                            <div className={"login"}>
                                                ID : <input type={"text"} size={10} className={"input-sm"} ref={idRef} value={id} onChange={(e:any)=>setId(e.target.value)}/>
                                                &nbsp;
                                                PW : <input type={"password"} size={10} className={"input-sm"} ref={pwdRef} value={pwd} onChange={(e:any)=>setPwd(e.target.value)}/>
                                                &nbsp;
                                                <button className={"btn-sm btn-primary"} onClick={memberLogin}>로그인</button>

                                            </div>):(
                                            <div className={"login"}>
                                                {window.sessionStorage.getItem("name")}님 로그인 중입니다.
                                                <button className={"btn-sm btn-danger"} onClick={memberLogout}> 로그아웃 </button>
                                            </div>
                                        )

                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ****** Top Header Area End ****** */}

            {/* ****** Header Area Start ****** */}
            <header className="header_area">
                <div className="container">
                    <div className="row">
                        {/* Logo Area Start */}
                        <div className="col-12">
                            <div className="logo_area text-center">
                                <Link to={"/"} className="yummy-logo">All Travel</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-nav" aria-controls="yummyfood-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true"></i> Menu</button>
                                {/*Menu Area Start*/}
                                <div className="collapse navbar-collapse justify-content-center" id="yummyfood-nav">
                                    <ul className="navbar-nav" id="yummy-nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to={"/"} >Home <span className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">제주여행</a>
                                            <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                                <Link className="dropdown-item" to={"/jeju/attraction"}>명소</Link>
                                                <a className="dropdown-item" href="archive.html">쇼핑</a>
                                                <a className="dropdown-item" href="single.html">음식</a>
                                                <a className="dropdown-item" href="static.html">축제</a>
                                                <a className="dropdown-item" href="contact.html">숙박</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">부산여행</a>
                                            <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                                <a className="dropdown-item" href="index.html">명소</a>
                                                <a className="dropdown-item" href="archive.html">쇼핑</a>
                                                <a className="dropdown-item" href="single.html">음식</a>
                                                <a className="dropdown-item" href="static.html">축제</a>
                                                <a className="dropdown-item" href="contact.html">숙박</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="yummyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">서울여행</a>
                                            <div className="dropdown-menu" aria-labelledby="yummyDropdown">
                                                <a className="dropdown-item" href="index.html">명소</a>
                                                <a className="dropdown-item" href="archive.html">쇼핑</a>
                                                <a className="dropdown-item" href="single.html">음식</a>
                                                <a className="dropdown-item" href="static.html">축제</a>
                                                <a className="dropdown-item" href="contact.html">숙박</a>
                                            </div>
                                        </li>

                                        {
                                            login &&
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">여행추천코스</a>
                                            </li>
                                        }

                                        <li className="nav-item">
                                            <a className="nav-link" href="#">챗봇</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="archive.html">동영상검색</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/board/list">커뮤니티</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ****** Header Area End ****** */}

        </Fragment>
    )
}

export default Header;