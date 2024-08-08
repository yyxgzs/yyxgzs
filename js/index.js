window.onscroll = function () {
  const zhidingb = document.documentElement.scrollTop || document.body.scrollTop;
  const zhidingx = document.getElementById('zhidingan');

  if (zhidingb >= 500) {
    zhidingx.style.display = 'block'
  } else {
    zhidingx.style.display = 'none'
  }
}

function zdtop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  }
  );
}

// 获取id为jzsc的div元素
var div = document.getElementById('jzsc');

// 计算本站安全运行时长的函数
function getRunningTime() {
  var now = new Date();
  var startDate = new Date('2018-4-26'); // 假设站点开始运行的日期为2022年1月1日

  var diff = now - startDate; // 相差的毫秒数

  var days = Math.floor(diff / (1000 * 60 * 60 * 24)); // 计算天数
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 计算小时数
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // 计算分钟数
  var seconds = Math.floor((diff % (1000 * 60)) / 1000); // 计算秒数

  // 将结果赋值给div的innerText属性
  div.innerText = "本站已安全运行" + days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
}

// 每秒更新一次运行时长
setInterval(getRunningTime, 1000);

// 初始显示一次
getRunningTime();

function guanbi() {
  // 获取需要关闭的div元素
  const xfxkpgb = document.getElementById('xfxkp');
  xfxkpgb.style.display = 'none'
}

function guanbiskm() {
  const skmqkgb = document.getElementById('skmqk');
  skmqkgb.style.display = 'none'
}

function skmkq() {
  const skmkqb = document.getElementById('skmqk');
  skmkqb.style.display = 'block';
}

// 选项卡
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// 悬浮音乐卡片
function xfyykpgb() {
  const xfyykpgbb = document.getElementById('xfyykpbox'),
    zkxtbfz = document.getElementById('zkxtbx');
  if (xfyykpgbb.style.left === '-280px') {
    xfyykpgbb.style.left = '0';
    zkxtbfz.style.transform = 'rotate(180deg)';
    bofang.style.display = 'none'
    zanting.style.display = 'block'
    audio.play();
  } else {
    xfyykpgbb.style.left = '-280px';
    zkxtbfz.style.transform = 'rotate(0deg)';
  }

}
const zkan = document.querySelector('.zkan')
zkan.addEventListener('click', () => xfyykpgb())


// 获取音频和控件
const audio = document.getElementById('bgMusic')
  , bofang = document.getElementById('bofang')
  , zanting = document.getElementById('zanting')
  , xiayishou = document.getElementById('xiayishou')
  , yousheng = document.getElementById('yousheng')
  , wusheng = document.getElementById('wusheng')
  , $xys = $('.xys')

// 进度条
var progressBar = document.getElementById('progressBar');
var currentTimeText = document.getElementById('currentTime');
progressBar.innerHTML = '<div class="progress"></div>';
var progress = progressBar.getElementsByClassName('progress')[0];

audio.addEventListener('timeupdate', function () {
  var percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + '%';

  var currentMinutes = Math.floor(audio.currentTime / 60);
  var currentSeconds = Math.floor(audio.currentTime % 60);
  currentTimeText.textContent = currentMinutes + ':' + (currentSeconds < 10 ? '0' : '') + currentSeconds;
});

progressBar.addEventListener('click', function (e) {
  var percent = (e.offsetX / progressBar.offsetWidth) * 100;
  audio.currentTime = (percent / 100) * audio.duration;
});
// 获取音乐总时长
var zongsc = document.getElementById("zongsc");

audio.addEventListener("loadedmetadata", function () {
  var totalDuration = audio.duration;
  var minutes = Math.floor(totalDuration / 60);
  var seconds = Math.floor(totalDuration % 60);
  zongsc.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds; // 显示总时长
});

// 播放/暂停
bofang.addEventListener("click", function () {
  audio.play()
  bofang.style.display = 'none'
  zanting.style.display = 'block'
});
zanting.addEventListener("click", function () {
  audio.pause()
  bofang.style.display = 'block'
  zanting.style.display = 'none'
});
// 下一首
// 封装随机数值
const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min
// fetch get请求
fetch('https://api.xfyun.club/musicAll/?sortAll=%E7%83%AD%E6%AD%8C%E6%A6%9C')
  .then(res => res.json())
  .then(data => {
    $xys.on('click', () => {
      const i = random(data.length, 0)
      // 获取音乐总时长 duration
      const { artistsname, name, picurl, url, duration } = data[i]
      $('#yyname').text(name);//引入api歌曲名
      $('#yyimg').attr('src', picurl);//引入api歌曲图片
      $('#bgMusic').attr('src', url);//引入api歌曲地址
      $('#yyzuozhe').text(artistsname);//引入api歌曲作者
      audio.play().catch(err => console.warn('浏览器默认限制了自动播放: ' + err))
      bofang.style.display = 'none'
      zanting.style.display = 'block'
    })
    $xys.trigger('click')
  })

  .catch(err => console.error(`请求失败：${err}`))

// 播放结束自动下一首
document.getElementById('bgMusic').addEventListener('ended', function () {
  // 音乐播放结束后执行的事件
  console.log('音乐播放结束了！');
  $xys.trigger('click')
});

// 开静音
yousheng.addEventListener("click", function () {
  audio.muted = true;
  yousheng.style.display = "none";
  wusheng.style.display = "block"
});
//关静音
wusheng.addEventListener("click", function () {
  audio.muted = false;
  yousheng.style.display = "block";
  wusheng.style.display = "none";
});