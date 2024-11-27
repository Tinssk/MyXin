/*导入动态鼠标ani文件,使用的第三方库*/
import { setANICursor } from "ani-cursor.js";
setANICursor("body", "../cursor/normal.ani");
setANICursor(".slogan .try-btn", "../cursor/Link.ani");
document.getElementById("try-btn").onclick = function postNow() {
  location.href = "https://biyao.org";
};
/*添加点击特效*/
(function () {
  var a_idx = 0;
  window.onclick = function (event) {
    var a = new Array("❤碧瑶❤", "❤雨落❤", "❤爱恋❤", "❤生死❤", "❤痴情咒❤", "❤不悔❤", "❤合欢❤", "❤伤心❤", "❤三生七世❤", "❤九幽阴灵❤", "❤伤心花❤", "❤合欢铃❤");

    var heart = document.createElement("b"); //创建b元素
    heart.onselectstart = new Function("event.returnValue=false"); //防止拖动

    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
    a_idx = (a_idx + 1) % a.length;
    heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

    var f = 16, // 字体大小
      x = event.clientX - f / 2, // 横坐标
      y = event.clientY - f, // 纵坐标
      c = randomColor(), // 随机颜色
      a = 1, // 透明度
      s = 1.2; // 放大缩小

    var timer = setInterval(function () {
      //添加定时器
      if (a <= 0) {
        document.body.removeChild(heart);
        clearInterval(timer);
      } else {
        heart.style.cssText = "font-size:16px;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";

        y--;
        a -= 0.016;
        s += 0.002;
      }
    }, 15);
  };
  // 随机颜色
  function randomColor() {
    return "rgb(" + ~~(Math.random() * 255) + "," + ~~(Math.random() * 255) + "," + ~~(Math.random() * 255) + ")";
  }
})();
/* ---*/
/*设置鼠标按下时的样式(无法用css原生支持*/
document.addEventListener("mousedown", function () {
  document.body.style.cursor = 'url("../cursor/ArrowActice.png"), auto'; // 点击时的鼠标样式
});

document.addEventListener("mouseup", function () {
  document.body.style.cursor = 'url("../cursor/Arrow.png"), auto'; // 松开鼠标恢复默认样式
});
