// 生成一副扑克牌
/* 定义一个类型别名
Card表示扑克牌
Color表示花色
Poke表示一副扑克牌
*/

import { Color, Num } from "./enums";

// 使用接口
type Card = {
    getString(): string
}
interface NormalCard extends Card {
    color: Color
    num: Num
}
interface Joker extends Card {
    type: "big" | "small"
}
type Poker = Card[]

function createPoker():Poker {
    const poker: Poker = [];
    const colors = Object.values(Color);
    const nums = Object.values(Num);
    for (const num of nums) {
        for (const color of colors) {
            // 类型兼容性，使用变量，更宽松的类型检查
            // const card:NormalCard = {
            //     color,
            //     num,
            //     getString(){
            //         return this.color + this.num
            //     }
            // }
            // poker.push(card)

            // 使用类型断言
            poker.push({
                    color,
                    num,
                    getString(){
                        return this.color + this.num
                    }
                } as Card)
        }
        // 加入大小王
        let joker: Joker = {
            type: "big",
            getString(){
                return "JO"
            }
        }
        poker.push(joker);
        joker = {
            type: "small",
            getString(){
                return "jo"
            }
        }
        poker.push(joker);
    }
    return poker
}

function printPoker(poker: Poker){
    let result = "\n";
    poker.forEach((card)=>{
        result += card.getString() + "\t";
    })
    console.log(result)
}

const poker = createPoker()
printPoker(poker)