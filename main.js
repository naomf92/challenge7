/*   マイルストーン１   */
// alertで'You got 5 guesses. Guess 1 to 5'と言うメッセージを表示させ、１から５までの数値を当てるよう指示する。
 alert('You got 5 guesses. Guess 1 to 5');

// 答えの数値を2で用意
// promptで'What do you guess?'と言うメッセージとともに、記入欄を表示させる
let message = prompt('What do you guess?');

// forループで１から５までの数値で、答えの2が当たるまで推測を促すpromptを表示させる。
// ヒント１：if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。
// ヒント２：外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。

const answer = [2];
let array = [1,3,4,5];

// for (let i = 0; i<=4; i++) {
//     //else ifの箇所は、実行されずに素通りしている可能性があるので、ここでarray[i]の値を検証します
//     // 正解以外、どの数値をブラウザで入れても1, 3, 4, 5が出てきます
//     // 配列arrayの値の中身が順番につずつ出てきていることがわかります
//     // 1つ数字をブラウザで入力するたびに、配列arrayの先頭の値1つずつしか対象にしてくれないようです。
//     // array[i]とすると、思うように動いてくれないみたいなので、array[指定インデックス番号]で書くと良さそうです
//     // console.log(array[i]);
//     if (message == answer){
//       alert('Good job! See what happens next :)');
//       const img = document.getElementById('img');
//       img.innerHTML = `<h1>You made it! 🎮</h1><iframe src="https://giphy.com/embed/11sBLVxNs7v6WA" width="480" height="217" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheer-cheering-11sBLVxNs7v6WA"></a></p> `
//       break;
//     } else if (
//        message == array[0] ||
//        message == array[1] ||
//        message == array[2] ||
//        message == array[3] 
//     ) {
//        message = prompt('Ops! Maybe, another try?');

//     } else {
//        message = prompt('Pick a number from 1 to 5');
//     }
// }

/*   マイルストーン2   */
// for文で完成したら、for文箇所をコメントアウトし、while文で書き換えてみましょう。

let i = 0;
while (i<=4) {
   i++;
   if (message == answer){
      alert('Good job! See what happens next :)');
      const img = document.getElementById('img');
      img.innerHTML = `<h1>You made it! 🎮</h1><iframe src="https://giphy.com/embed/11sBLVxNs7v6WA" width="480" height="217" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheer-cheering-11sBLVxNs7v6WA"></a></p> `
      break;
   } else if (
      message == array[0] ||
      message == array[1] ||
      message == array[2] ||
      message == array[3]
   ) {
      message = prompt('Ops! Maybe, another try?');
   } else  {
      message = prompt('Pick a number from 1 to 5');
   }
}

