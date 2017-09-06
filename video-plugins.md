### 视频广告的形式

- VAST & VAPID

	[对比](http://www.knowonlineadvertising.com/difference-between/difference-between-vpaid-and-vast/)

- pre-roll video

  在视频播放前播放的一段视频广告
    
- VPAID HTML5

- Non-Linear Banner

  不阻塞视频播放，在视频中插入的banner


### 插件

+ videojs

	options:
	
	- controls: 控制条
	- autoplay
	- preload
	- loop
	- poster: 封面图
	- width/height: 不设高度可根据视频比例自动调节
	- ...

<!-- 2. Brightcove -->


+ JW Player

除了广告，基本功能都有，广告似乎收费

<!-- 4. Kaltura -->

+ mediaelement.js

    支持html5和flash

### 对比

插件 | 是否支持fall back至flash播放器 | 是否支持拖动etc | 是否支持自定义样式 | 是否支持广告植入 | 暂停时视频广告 | 播放开始前/中间 插入广告 | 是否收费
--- | --- | --- | --- | --- | --- | --- | ---
video.js | 是 | 是 | 是 | 是 | 未知 | 开始前，中间未知 | 否
jw player | 是 | 是 | 是 | 是 | 未知 | 开始前，中间未知 | 是
mediaelement.js | 是 | 是 | 是 | 是 | 未知 | 开始前， 中间未知 | 否