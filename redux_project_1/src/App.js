
/*
  npm start => 서버 동작 (nodejs 기반)
      |
    index.js
      |
     App호출
      | === return HTML
    index.html

  public : image / css / javascript lib / html
  src : js / ts / jsx / tsx
                  --------- XML 형식으로 HTML만듬
        ------- 일반
  자바 :
      React : JSP
      Redux : MVC
      TanStackQuery : SpringFramework
      Next : SpringBoot

  Redux : 데이터 관리 + 화면 출력
          단방향 통신
          ----------- 보완 => 배민 / 쿠팡

  store : 실제 React에서 출력한 데이터 저장
  reducer : React에서 전송된 데이터를 store에 보내주는 역할
  action : 사용자가 요청한 이벤트
  dispatch : store에 있는 데이터를 읽어서 화면에 출력

  store ======== componenet(HTML) => JSP
                      |
                    Action
                      |
                    Dispatch
                      |
                    Reduce
                      |
                    store
                          axios => 서버 데이터 읽기
  사용자(UI) -------------- action 호출 ------------- reducer ----- store
                  |                         |           | 자동으로 store에 저장
               dispatch()                 dispatch()
       |                        |
     return                 Controller ---------------------------  | DB
       |
      JSP 화면


  1. Action : reducer ==> store(사용자 UI에 출력)
      => 기능 수행 : foodListData()
            | dispatch
  2. Reducer : 결과 값을 받아서 => store
            | dispatch
  3. Store : 데이터 갱신 => 화면에 전송
 */
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import store from './store/store'
import FoodList from './components/FoodList'
import FoodDetail from "./components/FoodDetail";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={"/"} element={<FoodList />} />
          <Route path={"/detail/:fno"} element={<FoodDetail />} />
          <Route path={"/recipe/list"} element={<RecipeList />} />
          <Route path={"/recipe/detail/:no"} element={<RecipeDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
