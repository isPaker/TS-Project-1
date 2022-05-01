// 生成一副扑克牌
/* 定义一个类型别名
Card表示扑克牌
Color表示花色
Poke表示一副扑克牌
*/
// 使用枚举
enum Color {
    spade = "♠",
    heart = "♥",
    club = "♣",
    diamond = "♦"
}
enum Num {
    A = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    thirteen = "K"
}
type Card = {
    color: Color,
    num: Num
}

type Poker = Card[]

function createPoker():Poker {
    const poker: Poker = [];
    const colors = Object.values(Color);
    const nums = Object.values(Num);
    for (const num of nums) {
        for (const color of colors) {
            poker.push({
                color,
                num
            })
        }
    }
    return poker;
}

function printPoker(poker: Poker){
    let result = "\n";
    poker.forEach(card => {
        let str = card.color + card.num;
        result += str + "\t";
    })
    console.log(result)
}

const poker = createPoker()
printPoker(poker)