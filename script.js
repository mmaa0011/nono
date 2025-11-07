// 表示したいテキストを配列で管理
const scenario = [
    { name: "？？？", text: "……やっと起きた？" },
    { name: "？？？", text: "ここは、あなたが来るはずの場所だったの。" },
    { name: "？？？", text: "さあ、始めましょう。" }
  ];
  
  let index = 0;       // 今の文章番号
  let charIndex = 0;   // テキストの中の現在位置
  let speed = 40;      // 文字速度（ms）
  
  const nameBox = document.getElementById("name");
  const textBox = document.getElementById("text");
  
  // 文字を一文字ずつ表示
  function typeWriter() {
    let sentence = scenario[index].text;
    if (charIndex < sentence.length) {
      textBox.innerHTML += sentence.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed);
    }
  }
  
  // 次の文章へ
  function next() {
    if (charIndex < scenario[index].text.length) {
      // 途中なら一気に全文表示
      charIndex = scenario[index].text.length;
      textBox.innerHTML = scenario[index].text;
    } else {
      // 次へ進む
      index++;
      if (index >= scenario.length) return;
      nameBox.innerHTML = scenario[index].name;
      textBox.innerHTML = "";
      charIndex = 0;
      typeWriter();
    }
  }
  
  // 初期表示
  nameBox.innerHTML = scenario[0].name;
  typeWriter();
  
  // 画面タップで次へ
  document.getElementById("game").addEventListener("click", next);
  