package jp.ogiwara.anitube.method

import jp.ogiwara.anitube.model.Video


internal expect class SearchMethod(keyWord: String){
    fun execute(): List<Video>
}

/*
* Sample Html resp
*
* <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#" xml:lang="pt-br" lang="pt-br">
<head>
<title>AniTube! Animes Online</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta name="description" content="AniTube! Animes Online - Assista animes online, Naruto Shippuuden, Bleach, Fairy Tail, Dragon Ball Kai, One Piece e muito mais." />
<meta name="keywords" content="anitube, animetube, anime, animes, naruto, bleach, dragon ball kai, naruto shippuuden, one piece, fairy tail, inuyasha, episodios, assistir online, completo, fansub, videos do naruto, youtube naruto, fairy tail, manga online, alchemist, animes, download, dragon ball z, naruto manga online, naruto, manga naruto, bleach download, naruto fillers, naruto headband, naruto download, kousen" />
<meta name="robots" content="noindex,follow" />
<meta name="reply-to" content="admin@anitube.com.br" />
<meta name="author" content="Maunose" />
<meta name="copyright" content="AniTube.Com.Br Anime Broadcast" />
<link rel="canonical" href="http://www.anitube.se/search/?search_id=Kill" />
<link rel="stylesheet" href="http://static.anitube.se/css/style.css" type="text/css" media="screen" />
<!--[if lte IE 6]>
<link rel="stylesheet" href="http://static.anitube.se/css/ie6.css" type="text/css" media="screen" />
<![endif]-->
<link rel="stylesheet" type="text/css" href="http://static.anitube.se/css/jquery.tabs.css" media="print, projection, screen" />
<link rel="stylesheet" type="text/css" href="http://static.anitube.se/css/anylinkmenu.css" />
<link rel="alternate" type="application/rss+xml" title="RSS - 20 videos mais novos" href="http://feeds.feedburner.com/Anitube" />
<link rel="alternate" type="application/rss+xml" title="RSS - Ultimos 20 videos em destaque" href="http://feeds.feedburner.com/AnitubeDestaques" />
<link rel="alternate" type="application/rss+xml" title="RSS - 20 videos mais visualizados" href="http://feeds.feedburner.com/AnitubePopulares" />
<script type="text/javascript">var baseurl='http://static.anitube.se/';var mainurl='http://www.anitube.se';</script>
<script language="JavaScript" type="text/javascript" src="http://static.anitube.se/js/anitube.js"></script>

</head>
<body>
<!-- Header -->
 <div id="wrapper">
  <div id="header">
	 <div id="logo">
	 <a href="http://www.anitube.se/"><img src="http://static.anitube.se/images/anitube_logo.png" width="490" height="145" alt="AniTube! Animes Online" /></a>
	 </div>
	 <div id="search">
		<div id="searchBox">
    <form action="http://www.anitube.se/search/" method="get" name="searchForm" id="searchForm">
				 <div class="searchBox2">
          <input type="text" name="search_id" value="Kill" tabindex="1" />
         </div>
				 <div class="searchButton">
         <button type="submit"><span>Buscar</span></button>
         </div>
		</form>
		</div>
	 </div>
	 <div id="mainNavigation">
	  <ul id="topNavigation">
		 <li class="topNavHome"><a href="http://www.anitube.se/">ホーム</a></li>
		 <li><a href="http://www.anitube.se/videos">視聴</a></li>
		 <li><a href="http://www.anitube.se/categories">チャンネル</a></li>
		 <li><a href="http://www.anitube.se/community">コミュニティ</a></li>
		 <li><a href="http://anitu.be/twitter" target="_blank">ツイッター</a></li>
		 <li><a href="http://anigrupo.engine.adglare.net/?417115756" target="_blank">&#60;PR&#62; 無料オンラインゲーム</a></li>
		</ul>
		<ul id="rightNavigation">
                                  <li><a href="http://www.anitube.se/signup">新規登録</a></li>
		 <li><a href="http://www.anitube.se/login">ログイン</a></li>

		 <li class="rightNavUpload"><a href="http://www.anitube.se/upload" title="Envie um Episódio Agora!">アップロード</a></li>
		</ul>
	</div>
	<div id="smallNavigation">
						<ul id="bottomNavigation">
      		<li><a href="http://www.anitube.se/videos/basic/mr">video.most_recent</a></li>
		<li><a href="http://www.anitube.se/videos/basic/rf">video.recently_featured</a></li>
		<li><a href="http://www.anitube.se/videos/basic/mv">video.most_viewed</a></li>
		<li><a href="http://www.anitube.se/videos/basic/md">video.most_discussed</a></li>
		<li><a href="http://www.anitube.se/videos/basic/tf">video.top_favorites</a></li>
		<li><a href="http://www.anitube.se/videos/basic/tr">video.top_rated</a></li>
		<li><a href="http://www.anitube.se/videos/basic/rd">video.random</a></li>			</ul>
                              	 </div>
	</div>
<!-- End Of Header -->
<div id="page">
	 <div id="mainContent">
	 <!-- main Content Boxes -->
	  <div class="mainBox">
		<!-- Main Box -->

		<!-- Advert Start -->
		<div id="pageAdvert" align="center">
			<script async src='//anigrupo.engine.adglare.net/?563662525'></script><span id=zone563662525></span>
		</div>
		<!-- Advert End -->

		 <div class="mainBoxTitle">
		 <h1 class="mainBoxHeader">Resultados da Busca</h1>
		 <span class="midLink">Ordenar vídeos por: <a href="http://www.anitube.se/search/basic/1/?sort=addate&search_type=&search_id=Kill">Data Adicionado</a> -
	    <a href="http://www.anitube.se/search/basic/1/?sort=title&search_type=&search_id=Kill">Título</a> -
	    <a href="http://www.anitube.se/search/basic/1/?sort=viewnum&search_type=&search_id=Kill">Visualizaçoes</a> -
	    <a href="http://www.anitube.se/search/basic/1/?sort=rate&search_type=&search_id=Kill">Avaliaçoes</a></span>
		 <span class="moreLink">Videos 1 - 20 de 148</span>
		 </div>
		 <ul>
		 <!-- Video List -->
		 		  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/4824/Giant-Killing-01" title="Bom Anime...Punch Fansub"><img src="http://static.anitube.se/thumb/1_4824.jpg" id="rotate_4824" alt="Giant Killing 01" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/4824/Giant-Killing-01">Giant Killing 01</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">163631 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/4836/Giant-Killing-03" title="Punch Fansub"><img src="http://static.anitube.se/thumb/1_4836.jpg" id="rotate_4836" alt="Giant Killing 03" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/4836/Giant-Killing-03">Giant Killing 03</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">146985 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/4845/Giant-Killing-04" title="Punch Fansub"><img src="http://static.anitube.se/thumb/1_4845.jpg" id="rotate_4845" alt="Giant Killing 04" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/4845/Giant-Killing-04">Giant Killing 04</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">133924 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/4856/Giant-Killing-05" title="Punch Fansub"><img src="http://static.anitube.se/thumb/1_4856.jpg" id="rotate_4856" alt="Giant Killing 05" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/4856/Giant-Killing-05">Giant Killing 05</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">143939 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/4865/Giant-Killing-06" title="Punch Fansub"><img src="http://static.anitube.se/thumb/1_4865.jpg" id="rotate_4865" alt="Giant Killing 06" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/4865/Giant-Killing-06">Giant Killing 06</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">132191 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/4872/Giant-Killing-08" title="Punch Fansub"><img src="http://static.anitube.se/thumb/1_4872.jpg" id="rotate_4872" alt="Giant Killing 08" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/4872/Giant-Killing-08">Giant Killing 08</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">129900 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/5032/Giant-Killing-09" title="Punch Fansub"><img src="http://static.anitube.se/thumb/1_5032.jpg" id="rotate_5032" alt="Giant Killing 09" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/5032/Giant-Killing-09">Giant Killing 09</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">125934 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/5423/Giant-Killing-10" title="Punch Fansub....Futebol o desporto rei"><img src="http://static.anitube.se/thumb/1_5423.jpg" id="rotate_5423" alt="Giant Killing 10" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/5423/Giant-Killing-10">Giant Killing 10</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">127352 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
						<li style="float:left;width:728px;margin-left:8px;height:110px;">
				<script async src='//anigrupo.engine.adglare.net/?515247920'></script><span id=zone515247920></span>
			</li>
		 		  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/5425/Giant-Killing-11" title="O deporto rei............Punch Fansub"><img src="http://static.anitube.se/thumb/1_5425.jpg" id="rotate_5425" alt="Giant Killing 11" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/5425/Giant-Killing-11">Giant Killing 11</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">131597 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/6926/Giant-Killing-13" title="Giant Killing 13"><img src="http://static.anitube.se/thumb/1_6926.jpg" id="rotate_6926" alt="Giant Killing 13" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/6926/Giant-Killing-13">Giant Killing 13</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">136311 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/6930/Giant-Killing-12" title="Giant Killing"><img src="http://static.anitube.se/thumb/1_6930.jpg" id="rotate_6930" alt="Giant Killing 12" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/6930/Giant-Killing-12">Giant Killing 12</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">139979 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/6931/Giant-Killing-14" title="Giant Killing 14"><img src="http://static.anitube.se/thumb/1_6931.jpg" id="rotate_6931" alt="Giant Killing 14" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/6931/Giant-Killing-14">Giant Killing 14</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">125480 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/6939/Giant-Killing-15" title="Giant Killing"><img src="http://static.anitube.se/thumb/1_6939.jpg" id="rotate_6939" alt="Giant Killing 15" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/6939/Giant-Killing-15">Giant Killing 15</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">120679 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/6968/Giant-Killing-17" title="Giant Killing 17"><img src="http://static.anitube.se/thumb/1_6968.jpg" id="rotate_6968" alt="Giant Killing 17" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/6968/Giant-Killing-17">Giant Killing 17</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">126972 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/6969/Giant-Killing-18" title="Giant Killing 18"><img src="http://static.anitube.se/thumb/1_6969.jpg" id="rotate_6969" alt="Giant Killing 18" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/6969/Giant-Killing-18">Giant Killing 18</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">115016 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/7063/Giant-Killing-19" title="Natsuko"><img src="http://static.anitube.se/thumb/1_7063.jpg" id="rotate_7063" alt="Giant Killing 19" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/7063/Giant-Killing-19">Giant Killing 19</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">114524 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/7689/Giant-Killing-20" title="Natsuko"><img src="http://static.anitube.se/thumb/1_7689.jpg" id="rotate_7689" alt="Giant Killing 20" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/7689/Giant-Killing-20">Giant Killing 20</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">114250 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/7691/Giant-Killing-21" title="Natsuko"><img src="http://static.anitube.se/thumb/1_7691.jpg" id="rotate_7691" alt="Giant Killing 21" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/7691/Giant-Killing-21">Giant Killing 21</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">113285 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/7932/Giant-Killing-22" title="Natsuko"><img src="http://static.anitube.se/thumb/1_7932.jpg" id="rotate_7932" alt="Giant Killing 22" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/7932/Giant-Killing-22">Giant Killing 22</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">117536 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
					  <li class="mainList">
			 <div class="videoThumb">
			 <a href="http://www.anitube.se/video/8205/Giant-Killing-23" title="Natsuko"><img src="http://static.anitube.se/thumb/1_8205.jpg" id="rotate_8205" alt="Giant Killing 23" /></a>
			 </div>
			 <div class="videoTitle">
			 <a href="http://www.anitube.se/video/8205/Giant-Killing-23">Giant Killing 23</a>
			 </div>
			 <div class="videoInfo">
			  <div class="videoViews">113764 Visualizaçoes</div>
				<div class="videoStars">
        <img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;<img src='http://static.anitube.se/images/tpl_icon_star_full.gif' width='11' alt='icon star' />&nbsp;</div>
			 </div>
			</li>
						<!-- End Video List -->
		 </ul>
		 <ul id="pagination-flickr">
      	<li class="active">1</li><li><a href="http://www.anitube.se/search/2/?sort=&search_type=videos&search_id=Kill&search_key=">2</a></li><li><a href="http://www.anitube.se/search/3/?sort=&search_type=videos&search_id=Kill&search_key=">3</a></li><li><a href="http://www.anitube.se/search/4/?sort=&search_type=videos&search_id=Kill&search_key=">4</a></li><li class="active">...</li><li><a href="http://www.anitube.se/search/2/?sort=&search_type=videos&search_id=Kill&search_key=">Next</a></li>
</ul>
		</div>
		<!-- End Main Box -->
 </div>
	 <!-- End Main Content Boxes -->
	<div id="sidebar">
	 <!-- Sidebar Adverts Box -->
	  <div class="sidebarBox">
		 <div class="sidebarTitle">
		 <h3 class="sidebarBoxHeader">Patrocinadores</h3>
		 </div>
		 <div class="sidebarInfo">
		  <ul id="sidebarAdvert">
			<li class="sidebarAd" align="center">
			<script async src='//anigrupo.engine.adglare.net/?675638431'></script><span id=zone675638431></span>
			</li>
		  </ul>
		 </div>
		</div>
	 <!-- End Sidebar Adverts Box -->
	 </div>
	</div>
<!-- End Page -->

<!-- Advert Start -->
		<div id="footerAdvert">
			<script async src='//anigrupo.engine.adglare.net/?125357715'></script><span id=zone125357715></span>
		</div>
		<!-- Advert End -->	<div id="footer">
	 <ul>
		<li><a href="http://www.anitube.se/advertise">Anunciantes</a><span class="textF">|</span></li>
		<li><a href="http://www.anitube.se/terms">Termos de Uso</a><span class="textF">|</span></li>
		<li><a href="http://www.anitube.se/privacy">Política de Privacidade</a><span class="textF">|</span></li>
		<li><a href="http://www.anitube.se/rss">Rss Feeds</a></li>
	 </ul>
	 <p class="textFooter">Copyright © 2009 - 2016 <a href="http://www.anitube.se">AniTube!</a></p>
	</div>
<!-- End Footer -->
 </div>
<script>document.write('<scr'+'ipt src="//anigrupo.engine.adglare.net/?771096003"></scr'+'ipt>');</script>
<script type="text/javascript" id="wau_scr_4e9c1c0c">
    var wau_p = wau_p || []; wau_p.push(["antu", "4e9c1c0c", false]);
    (function() {
        var s=document.createElement("script"); s.type="text/javascript";
        s.async=true; s.src="http://widgets.amung.us/a_pro.js";
        document.getElementsByTagName("head")[0].appendChild(s);
    })();
</script>
<script type="text/javascript">
  var addthis_config = {"data_track_clickback":true};
</script>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=maunose"></script>
<script type="text/javascript">
//anylinkmenu.init("menu_anchors_class") //call this function at the very *end* of the document!
anylinkmenu.init("menuanchorclass")
</script>
</body>
</html>
<center><font color="gray">Page generated in 0.1626 seconds.</font></center>
*
*
* */