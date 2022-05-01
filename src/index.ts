// 生成一副扑克牌
/* 定义一个类型别名
Card表示扑克牌
Color表示花色
Poke表示一副扑克牌
*/
type Card = {
    color: Color
    num: number
}
type Color = "♠" | "♥" | "♣" | "♦";

type Poker = Card[]

function createPoker():Poker {
    const poker: Poker = [];
    for(let i=1; i<=13; i++){
        poker.push({
            num: i,
            color: "♠"
        })
        poker.push({
            num: i,
            color: "♥"
        })
        poker.push({
            num: i,
            color: "♣"
        })
        poker.push({
            num: i,
            color: "♦"
        })
    }
    return poker;
}

function printPoker(poker: Poker){
    let result = "\n";
    poker.forEach(card => {
        let str = card.color;
        if(card.num === 1){
            str += "A";
        }else if(card.num <= 10 && card.num > 1){
            str += card.num;
        }else if(card.num === 11){
            str += "J";
        }else if(card.num === 12){
            str += "Q";
        }else if(card.num === 13){
            str += "K";
        }
        result += str + "\t";
    })
    console.log(result)
}

const poker = createPoker()
printPoker(poker)