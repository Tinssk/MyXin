/*导入动态鼠标ani文件,使用的第三方库*/
import { setANICursor } from "ani-cursor.js";
setANICursor("body", "./cursor/normal.ani");
setANICursor(".slogan .try-btn", "./cursor/Link.ani");
setANICursor(".music-btn", "./cursor/Link.ani");
/*按钮设置链接*/
document.getElementById("try-btn").onclick = function postNow() {
  location.href = "https://biyao.org";
};
/*为div按钮设置tab下的可Enter激活*/
document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    // The Enter/Return key
    document.activeElement.onclick(e);
  }
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
// 注销所有的 Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then(function (registrations) {
      registrations.forEach(function (registration) {
        registration.unregister().then(function (success) {
          if (success) {
            console.log("Service Worker 已注销");
          } else {
            console.log("Service Worker 注销失败");
          }
        });
      });
    })
    .catch(function (error) {
      console.error("获取注册的 Service Worker 失败: ", error);
    });

  // 可选：删除相关的缓存
  caches.keys().then(function (cacheNames) {
    cacheNames.forEach(function (cacheName) {
      caches.delete(cacheName).then(function (deleted) {
        if (deleted) {
          console.log("缓存 " + cacheName + " 已删除");
        }
      });
    });
  });
}

/*添加点击特效*/
(function () {
  var a_idx = 0;
  window.onclick = function (event) {
    var a = new Array("❤碧瑶❤", "❤雨落❤", "❤爱恋❤", "❤生死❤", "❤痴情咒❤", "❤不悔❤", "❤合欢❤", "❤伤心❤", "❤三生七世❤", "❤九幽阴灵❤", "❤伤心花❤", "❤合欢铃❤");

    var heart = document.createElement("b"); //创建b元素
    heart.onselectstart = new Function("event.returnValue=false"); //防止拖动
    var clickani = document.createElement("video"); //创建gif播放元素
    clickani.onselectstart = new Function("event.returnValue=false"); //防止拖动
    clickani.src = "./clickAni.webm";
    clickani.alt = "clickAni";
    // 为 video 元素添加属性
    clickani.setAttribute("width", "150");
    clickani.setAttribute("height", "150");
    clickani.setAttribute("muted", "muted");
    clickani.setAttribute("autoplay", "autoplay");
    clickani.setAttribute("preload", "auto");
    clickani.setAttribute("type", "video/webm");

    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
    document.body.appendChild(clickani); //添加视频特效播放
    a_idx = (a_idx + 1) % a.length;

    var f = 16, // 字体大小
      x = event.clientX - f / 2, // 横坐标
      y = event.clientY - f, // 纵坐标
      c = randomColor(), // 随机颜色
      a = 1, // 透明度
      s = 1.2; // 放大缩小

    heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式
    clickani.style.cssText = "position: fixed;left:" + x + "px;top:" + y + "px;" + "width: 150px;height: 150px;transform: translate(-50%, -50%);"; //设置gif样式
    //移除视频元素
    clickani.addEventListener("ended", () => {
      clickani.pause(); // 停止播放
      clickani.parentNode.removeChild(clickani); // 移除视频元素
    });

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
