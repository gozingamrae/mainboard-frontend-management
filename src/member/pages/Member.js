import { useEffect, useState } from "react";
import style from "../css/Member.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { callGetMembersAPI, callGetSearchMember } from "../../apis/MemberAPICalls";


//스타일 예시
function Member(){

    const [ focusDetail, setFocusDetail ] = useState(null);
    const [ beforeDetail, setBeforeDetail ] = useState("");
    const [ form, setForm] = useState({
        memberId: null,
        memberName: null,
        withdrawalMember: null,
        joinDate: null
    });

    const dispatch = useDispatch(); 
    const members = useSelector(state => state.memberAPIReducer);
    
    useEffect(
        ()=>{
            dispatch(callGetMembersAPI());
            console.log(members)
        },[]
    )

    const onClickAllMemeber = () => {
        dispatch(callGetMembersAPI());
        console.log(members)
    }
  
    //navbutton 클릭 핸들러
    const onClickDetail = (e) => {
      
      //버튼 클릭하며 포커스 버튼 변경
      setFocusDetail(e.target.id);
  
      //같은 버튼 누르면 접기
      if(beforeDetail == e.target)
      {
        setFocusDetail(null);
        setBeforeDetail(null);
      }  
      else{
         (setBeforeDetail(e.target))
      }
    }

    const onClickSearch = () => {
        console.log(form);
        dispatch(callGetSearchMember({
            form: form
        }));
        console.log(members);
    }
    
    const onChangeName = (e) => {
        setForm({...form,  memberName:e.target.value });
        if(e.target.value == ""){
            setForm({...form,  memberName: null });
        }
        console.log(form);
    };
    const onChangeId = (e) => {
        setForm({...form,  memberId:e.target.value });
        if(e.target.value == ""){
            setForm({...form,  memberId: null });
        }
        console.log(form);
    };
    const onChangeJoinDate = (e) => {
        setForm({...form,  joinDate:e.target.value });
        if(e.target.value == ""){
            setForm({...form,  joinDate: null });
        }
        console.log(form);
    };
    const onChangeWithdrawer = (e) => {
        setForm({...form,  withdrawalMember:e.target.value });
        if(e.target.value == ""){
            setForm({...form,  withdrawalMember: null });
        }
        console.log(form);
    };

    return members!=null && (
        <div className={style.componentBox}>
            <div className={style.titleBox}>회원 조회</div>
            <div className={[style.box, style.point].join(" ") } >
                <div className={style.subBox} >
                    <h1>회원이름</h1>
                    <div>
                        <input type="text" name="memberName" value= {form.memberName} onChange={ onChangeName }/>
                    </div>
                </div>
                <div className={style.subBox}>
                    <h1>아이디</h1>
                    <div> 
                        <input type="text" name="memberId" value= {form.memberId}  onChange={ onChangeId }/>
                    </div>
                </div>
                <div className={style.subBox}>
                    <h1>탈퇴 여부</h1>
                    <div>
                        <input className={style.radiobox} type="radio" id="black_true" name="withdrawerMember" value="Y" onChange={ onChangeWithdrawer }/>
                        <label for="black_true"> O </label>
                        <input className={style.radiobox} type="radio" id="black_false" name="withdrawerMember" value="N"onChange={ onChangeWithdrawer }/>
                        <label for="black_false"> X </label>
                    </div>
                </div>
                <div className={style.subBox}>
                    <h1>가입날짜</h1>
                    <div>
                        <input type="date" id="regist_date" name="joinDate" value= {form.joinDate} onChange={ onChangeJoinDate } />
                    </div>
                </div>
                <div className={style.buttonsbox}>
                    <button className={style.searchButtonAll} onClick={ onClickAllMemeber }>전체보기</button>
                    <button className={style.searchButton} onClick={ onClickSearch }>검색</button>
                </div>
            </div>
            <div className={style.box}>
            <table>
                <tr><th>이름</th><th>아이디</th><th>회원 탈퇴 여부</th><th>가입날짜</th><th>상세정보</th></tr>
                {members.data != null && members.data.map((member)=>(<tr><td>{member.memberName}</td><td>{member.memberId}</td><td>{member.withdrawalMember}</td><td>{member.joinDate}</td>
                <td><button id="index" className={style.detailButton} onClick={onClickDetail}>상세정보</button></td></tr>))}
                  </table>   
                  { focusDetail == "index"?
                        <div className={style.tableBox}>
                        <table>
                            <tr><th>이름</th><th>아이디</th><th>회원 배송지</th><th>주문목록</th><th>보유쿠폰</th><th>보유포인트</th><th>블랙리스트여부</th></tr>
                            <tr><td>이유리</td><td>leeyr426</td><td>서울특별시 강서구 강서로</td><td>할리갈리 외 1건 .. </td><td>배송비지원 쿠폰 외 1건...</td><td> 426</td><td> N</td></tr>
                        </table></div> : null
                    }
            <div className={style.pageButtonBox}>
                <img src="/common/left_arrow.png"/>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <img src="/common/right_arrow.png"/>
            </div>
            </div>
        </div>

    )

}

export default Member;