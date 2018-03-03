package jp.ogiwara.anitube

import jp.ogiwara.anitube.model.Video

/**
 * sample DOM struct
 *
<div class="videoThumb">
    <a href="http://www.anitube.se/video/4824/Giant-Killing-01" title="Bom Anime...Punch Fansub"><img src="http://static.anitube.se/thumb/1_4824.jpg" id="rotate_4824" alt="Giant Killing 01"></a>
</div>

<div class="videoTitle">
    <a href="http://www.anitube.se/video/4824/Giant-Killing-01">Giant Killing 01</a>
</div>
<div class="videoInfo">
    <div class="videoViews">163531 Visualizaçoes</div>
    <div class="videoStars">
        <img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;<img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;<img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;<img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;<img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;</div>
</div>
 *
 */
expect fun makeVideo(dom: String): Video?