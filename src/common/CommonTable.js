import { useState } from "react";
import style from "./Common.module.css";

function CommonTable(){
     const [focusData, setFocusData]  = useState({"subButton" : 0 , "pageNum" : 1});
    
    const onClickButton = (e) => {
        setFocusData({ ...focusData, "subButton" : e.target.id});
    }
    const [pageNum , setPageNum] = useState();
    
    const clickButton = (e) => {
        setPageNum(e.target.id)
    }
    return(
        <div className={style.box}>
            <h1>박스 제목</h1>
            <table>
                <tr><th>칼럼1</th><th>칼럼2</th><th>칼럼3</th><th>칼럼4</th><th>칼럼5</th><th>칼럼6</th></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
            </table>
            <div className={style.pageButtonBox}>
                <img src="/common/left_arrow.png"/>
                {pageNum == 1 ? <div>hello</div>:<div>hello</div> }
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <img src="/common/right_arrow.png"/>
            </div>
            
        </div>
    )


}
export default CommonTable;