import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
  1. index.tsx => typescript + xml (javascript+xml => jsx)
          |
         App를 호출 => <App/> : 함수 호출 App() X
                      ------ return에 있는 HTML을 읽어서
          |
         index.html
            <div id ="root>|</div>
                        return에서 받은 HTML을 innerHTML을 이용해서 추가
         => 매개변수 전달
            App(name:string) <App name="홍길동/>
                    |                 |
                    -------------------
                          props

       node_modules : 라이브러리 생성 .m2
       public : static = css, js, image, html
       src : js/ts
       package.json : build.gradle
            | 라이브러리 추가

 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
