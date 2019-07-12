// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
console.log(name.toUpperCase());
// TODO write your code here...


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function titleCase(str) {
    var newarr, newarr1;
    newarr = str.toLowerCase().split(" ");
    for (var i = 0; i < newarr.length; i++) {
        newarr[i] = newarr[i][0].toUpperCase() + newarr[i].substring(1, newarr[i].length);
    }
    newarr1 = newarr.join(" ");
    return newarr1;
}
titleCase(sentence);

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
console.log(money.substring(1));
