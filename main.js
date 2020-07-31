/*   マイルストーン１   */
// alertで'You got 5 guesses. Guess 1 to 5'と言うメッセージを表示させ、１から５までの数値を当てるよう指示する。
 alert('You got 5 guesses. Guess 1 to 5');

// 答えの数値を2で用意
let answer = 2;
// promptで'What do you guess?'と言うメッセージとともに、記入欄を表示させる
let message = 'What do you guess?';
prompt(`${message}`);

// forループで１から５までの数値で、答えの2が当たるまで推測を促すpromptを表示させる。
// ヒント１：if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。
// ヒント２：外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。
for (let i = 1; i<= 5; i++) {
     if (i === 2){
        alert('Good job! See what happens next :)');
        console.log(i);
        break;
     } else {
        message = 'Ops! Maybe, another try?';
        prompt(`${message}`);
     }
}

// ヒント: 1つ目のpromptと2つ目のpromptは、全く別の値です。
// つまり1つ目のpromptの内容の「上書き」をしようと思ったら、「代入ができる値」に変えてしまえばよさそうですね
// そうすると、本当に一瞬ですが、1つ目のpromptが出てくるようになります
// 上記が解決したら、今度は答えの数値の値の型に着目します


/*   マイルストーン2   */
// for文で完成したら、for文箇所をコメントアウトし、while文で書き換えてみましょう。
