/*导入动态鼠标ani文件,使用的第三方库*/
import { setANICursor } from "ani-cursor.js";
setANICursor("body", "./cursor/normal.ani");
setANICursor(".slogan .try-btn", "./cursor/Link.ani");
setANICursor(".music-btn", "./cursor/Link.ani");
/*按钮设置链接*/
document.getElementById("try-btn").onclick = function postNow() {
  location.href = "https://biyao.org";
};
/*把视频设置为有声音,方便以后改动*/
const video = document.querySelector(".video-background");
const toggleButton = document.getElementById("music"); //获取声音按钮开关
// 切换视频的声音状态
toggleButton.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false; // 取消静音
    toggleButton.src = "./iocn/music50.png"; // 设置开音图标
  } else {
    video.muted = "muted"; // 设置为静音
    toggleButton.src = "./iocn/music50-off.png"; // 设置开音图标
  }
});
/*--*/
/*添加点击特效*/
(function () {
  var a_idx = 0;
  window.onclick = function (event) {
    var a = new Array("❤碧瑶❤", "❤雨落❤", "❤爱恋❤", "❤生死❤", "❤痴情咒❤", "❤不悔❤", "❤合欢❤", "❤伤心❤", "❤三生七世❤", "❤九幽阴灵❤", "❤伤心花❤", "❤合欢铃❤");

    var heart = document.createElement("b"); //创建b元素
    heart.onselectstart = new Function("event.returnValue=false"); //防止拖动
    var clickani = document.createElement("img"); //创建gif播放元素
    clickani.onselectstart = new Function("event.returnValue=false"); //防止拖动
    clickani.src = "./clickAni.gif?nocache=" + new Date().getTime();
    clickani.alt = "clickAni";

    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
    document.body.appendChild(clickani); //添加gif播放
    a_idx = (a_idx + 1) % a.length;

    var f = 16, // 字体大小
      x = event.clientX - f / 2, // 横坐标
      y = event.clientY - f, // 纵坐标
      c = randomColor(), // 随机颜色
      a = 1, // 透明度
      s = 1.2; // 放大缩小

    heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式
    clickani.style.cssText = "position: fixed;left:" + x + "px;top:" + y + "px;" + "width: 150px;height: 150px;transform: translate(-50%, -50%);"; //设置gif样式

    // 设置 GIF 播放结束后的销毁时间
    var gifDuration = 300; // 假设 GIF 播放时长为 3 秒（调整为实际时长）

    setTimeout(function () {
      // 动画播放完后移除 GIF
      document.body.removeChild(clickani);
    }, gifDuration);
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
  document.body.style.cursor = 'url("./cursor/ArrowActice.png"), auto'; // 点击时的鼠标样式
});

document.addEventListener("mouseup", function () {
  document.body.style.cursor = 'url("./cursor/Arrow.png"), auto'; // 松开鼠标恢复默认样式
});

/*添加浮现效果*/
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const handleScroll = () => {
    fadeInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.add("active");
      }
    });
  };

  // 初次加载检查元素是否在视口中
  handleScroll();

  // 滚动时触发检查
  window.addEventListener("scroll", handleScroll);
});
/* ---*/
