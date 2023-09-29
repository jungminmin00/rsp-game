// import { useState } from "react";

import { useState } from "react";

export default function BtnGroup({com, comCli, userCli, userScore, comScore}){
        
        

        const plus = () => {
            if(userCli[userCli.length-1] == 1){   // 사용자가 주먹
                if(comCli[comCli.length-1] == 1){   // 컴퓨터가 주먹
                    userScore += 0;
                    comScore += 0;
                }else if(comCli[comCli.length-1] == 2){     // 컴퓨터가 가위
                    userScore += 1;
                    comScore += 0;
                }else if(comCli[comCli.length-1] == 3){     // 컴퓨터가 보자기
                    userScore += 0;
                    comScore += 1;
                }
            }else if(userCli[userCli.length-1] == 2){     // 사용자가 가위
                if(comCli[comCli.length-1] == 1){   // 컴퓨터가 주먹
                    userScore += 0;
                    comScore += 1;
                }else if(comCli[comCli.length-1] == 2){     // 컴퓨터가 가위
                    userScore += 0;
                    comScore += 0;
                }else if(comCli[comCli.length-1] == 3){     // 컴퓨터가 보자기
                    userScore += 1;
                    comScore += 0;
                }
            }else if(userCli[userCli.length-1] == 3){     // 사용자가 보자기
                if(comCli[comCli.length-1] == 1){   // 컴퓨터가 주먹
                    userScore += 1;
                    comScore += 0;
                }else if(comCli[comCli.length-1] == 2){     // 컴퓨터가 가위
                    userScore += 0;
                    comScore += 1;
                }else if(comCli[comCli.length-1] == 3){     // 컴퓨터가 보자기
                    userScore += 0;
                    comScore += 0;
                }
            }
            console.log('사용자: ', userScore, '컴 : ',comScore)
        }
    return(
    <>
        <button 
            className="rBtn"
            onClick={ () => {
                comCli.push(com());
                userCli.push(1);
                plus();
                console.log('컴: ', comCli, '사용자 : ',userCli)
            }}
        >주먹</button>
        <button 
            className="sBtn"
            onClick={ () => {
                comCli.push(com());
                userCli.push(2);
                plus();
                console.log('컴: ', comCli, '사용자 : ',userCli)                
            }}
        >가위</button>
        <button 
            className="pBtn"
            onClick={ () => {
                comCli.push(com());
                userCli.push(3);
                plus();
                console.log('컴: ', comCli, '사용자 : ',userCli)
            }}
        >보자기</button>
    </>
    )
}