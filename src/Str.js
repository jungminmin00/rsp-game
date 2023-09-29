import BtnGroup from "./BtnGroup";

export default function Str({comCli, userCli, userScore, comScore}){
    // let 
    // const str = () => {
    //     if()
    // }
    return(
    <>
        <div>
            <p className="score">컴퓨터 점수: {}</p>
            <p className="score">사용자 점수: {}</p>
        </div>
        <div>
            <p className="comCli">컴퓨터: {}</p>
            <p className="userCli">사용자: {}</p>
        </div>
        
    </>
    );
}