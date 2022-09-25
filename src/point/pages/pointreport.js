import SearchBox from "./SearchBox"
import CuponRegistTable from "./cuponreportTable"
import "../css/cuponreport-style.css"

//스타일 예시
function cuponRegist(){
    return (
        <div className="componentBox">
            <div className="box">쿠폰리포트</div>

            <div className="box" style={{backgroundColor: "#F8F5FF"}}>
                <div className="subBox">
                <h1>쿠폰이름</h1>
                <input type="text" />
                </div>

                <div className="subBox">
                    <h1>지급 대상</h1>
                    <input type="radio" value="all" name="cuponReportRadio"/> 전체고객 &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="first" name="cuponReportRadio"/> 첫구매고객 &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="again" name="cuponReportRadio"/> 재구매고객 &nbsp;&nbsp;&nbsp;
                </div>

                <div className="subBox">
                    <h1>쿠폰 종류</h1>
                    <input type="radio" value="productDiscount" name="cuponReportTypeRadio"/> 상품할인 &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="deliveryFeeDiscount" name="cuponReportTypeRadio"/> 배송비 할인 &nbsp;&nbsp;&nbsp;
                </div>

                <div className="subBox">
                    <h1>쿠폰 조회 기간</h1>
                    <img src="/common/calendar.png" alt="제발돼라" />
                    <input className="dateInput" type="date" name="cuponReportTypeRadio"/>  &nbsp; ~ &nbsp;
                    <img src="/common/calendar.png" alt="제발돼라" />
                    <input className="dateInput" type="date" name="cuponReportTypeRadio"/>
                </div>
            </div>

            <div className="box">
                <CuponRegistTable/>
            </div>



        </div>
    )
}

export default cuponRegist;