import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', "남성", "신생아/유아", "아동", "H$M Home", "Sale", "지속가능성",];
    const [width, setWidth] = useState(0);
    const navigate = useNavigate();
    const goToLogin = () => {
      navigate("/login");
      // 유저는 로그아웃을 할 수 있다.
      if(authenticate==true) {
        navigate("/");
        setAuthenticate(false);
        console.log("로그아웃")
      }
    }
    // hnm 로고를 클릭하면 메인 페이지로 돌아간다.
    const goToMain = () => {
      navigate("/")
    }
    const search = (event) => {
      //console.log("key press")
      if (event.key === "Enter") {
        console.log("user presses a key", event.key);
        // 입력한 검색어를 읽어온다.
        let keyword = event.target.value;
        console.log("keyword", keyword);
        // 읽어온 값으로 url을 바꿔준다.
        navigate(`/?q=${keyword}`) // 파라미터 값이 아닌 쿼리 값. (?q=검색어)
      }
    }
  return (
    <div>
      <div className='side-menu' style={{width: width}}>
      <button className="closebtn" onClick={() => setWidth(0)}>&times;</button>
        <div className="side-menu-list">
          {menuList.map((menu,idx)=>(<button key={idx}>{menu}</button>))}
        </div>
      </div>

      <div className="nav-area">
        <div className="NavLogo">
          <FontAwesomeIcon icon={faBars} onClick={()=>setWidth(250)}/>
        </div>
        {/* 유저가 로그인을 하면 '로그아웃'이 보이게, 로그아웃을 하면 '로그인'을 볼 수 있다. */}
        {authenticate == false ? (
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon = {faUser}/>
          <div>로그인</div>
        </div>) : (
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon = {faUser}/>
          <div>로그아웃</div>
        </div>) }
      </div>

      <div className="nav-section" onClick={goToMain}>
        <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"/>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
            {menuList.map((menu, idx)=>(<li key={idx}>{menu}</li>))}
        </ul>
        <div className="search-area">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" onKeyPress={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
