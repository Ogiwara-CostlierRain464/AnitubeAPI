if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'js'.");
}
var js = function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ensureNotNull = Kotlin.ensureNotNull;
  var removeSurrounding = Kotlin.kotlin.text.removeSurrounding_90ijwr$;
  var first = Kotlin.kotlin.sequences.first_veqyi0$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  function Anitube() {
    Anitube_instance = this;
  }
  function Anitube$Url() {
    Anitube$Url_instance = this;
    this.TOP = 'http://www.anitube.se/';
    this.SEARCH = 'http://www.anitube.se/search/?search_id=';
  }
  Anitube$Url.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Url',
    interfaces: []
  };
  var Anitube$Url_instance = null;
  function Anitube$Url_getInstance() {
    if (Anitube$Url_instance === null) {
      new Anitube$Url();
    }
    return Anitube$Url_instance;
  }
  Object.defineProperty(Anitube.prototype, 'highLight', {
    get: function () {
      return (new GetTopVideosMethod(HIGHLIGHT)).execute();
    }
  });
  Object.defineProperty(Anitube.prototype, 'topRated', {
    get: function () {
      return (new GetTopVideosMethod(TOP_RATED)).execute();
    }
  });
  Object.defineProperty(Anitube.prototype, 'mostSeen', {
    get: function () {
      return (new GetTopVideosMethod(MOST_SEEN)).execute();
    }
  });
  Anitube.prototype.search_61zpoe$ = function (keyword) {
    return (new SearchMethod(keyword)).execute();
  };
  Anitube.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Anitube',
    interfaces: []
  };
  var Anitube_instance = null;
  function Anitube_getInstance() {
    if (Anitube_instance === null) {
      new Anitube();
    }
    return Anitube_instance;
  }
  var HIGHLIGHT;
  var TOP_RATED;
  var MOST_SEEN;
  var KEY;
  var HD;
  var SD;
  function Video(title, views, imgUrl, videoUrl) {
    this.title = title;
    this.views = views;
    this.imgUrl = imgUrl;
    this.videoUrl = videoUrl;
  }
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  Video.prototype.getMp4Url_6taknv$ = function (quality) {
    if (quality === void 0)
      quality = false;
    var html = getBody(getKeyUrl(this));
    return first(Regex_init(quality ? HD : SD).findAll_905azu$(removeSurrounding(ensureNotNull(html), 'sources: [{', '}],'))).value;
  };
  Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  Video.prototype.component1 = function () {
    return this.title;
  };
  Video.prototype.component2 = function () {
    return this.views;
  };
  Video.prototype.component3 = function () {
    return this.imgUrl;
  };
  Video.prototype.component4 = function () {
    return this.videoUrl;
  };
  Video.prototype.copy_w74nik$ = function (title, views, imgUrl, videoUrl) {
    return new Video(title === void 0 ? this.title : title, views === void 0 ? this.views : views, imgUrl === void 0 ? this.imgUrl : imgUrl, videoUrl === void 0 ? this.videoUrl : videoUrl);
  };
  Video.prototype.toString = function () {
    return 'Video(title=' + Kotlin.toString(this.title) + (', views=' + Kotlin.toString(this.views)) + (', imgUrl=' + Kotlin.toString(this.imgUrl)) + (', videoUrl=' + Kotlin.toString(this.videoUrl)) + ')';
  };
  Video.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.views) | 0;
    result = result * 31 + Kotlin.hashCode(this.imgUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.videoUrl) | 0;
    return result;
  };
  Video.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.views, other.views) && Kotlin.equals(this.imgUrl, other.imgUrl) && Kotlin.equals(this.videoUrl, other.videoUrl)))));
  };
  function makeVideo(dom) {
    var tmp$;
    var div = toDOM(dom);
    try {
      var thumb = div.getElementsByClassName('videoThumb')[0];
      var videoUrl = ensureNotNull(ensureNotNull(ensureNotNull(thumb).getElementsByTagName('a')[0]).getAttribute('href'));
      var imgUrl = ensureNotNull(ensureNotNull(ensureNotNull(thumb.getElementsByTagName('a')[0]).getElementsByTagName('img')[0]).getAttribute('src'));
      var views = replace(ensureNotNull(ensureNotNull(ensureNotNull(div.getElementsByClassName('videoInfo')[0]).getElementsByClassName('videoViews')[0]).textContent), ' Visualiza\xE7oes', '');
      var title = ensureNotNull(ensureNotNull(ensureNotNull(div.getElementsByClassName('videoTitle')[0]).getElementsByTagName('a')[0]).textContent);
      tmp$ = new Video(title, views, imgUrl, videoUrl);
    }
     catch (_) {
      if (Kotlin.isType(_, NullPointerException)) {
        tmp$ = null;
      }
       else
        throw _;
    }
    return tmp$;
  }
  function toDOM($receiver) {
    var parser = new DOMParser();
    return parser.parseFromString($receiver, 'text/html');
  }
  var MY_PROXY;
  function getBody(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', MY_PROXY + url, false);
    xhr.send();
    return xhr.responseText;
  }
  function GetTopVideosMethod(fragment) {
    this.fragment = fragment;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var wrapFunction = Kotlin.wrapFunction;
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  GetTopVideosMethod.prototype.execute = function () {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = getBody(Anitube$Url_getInstance().TOP)) != null ? toDOM(tmp$) : null;
    if (tmp$_0 == null) {
      return emptyList();
    }
    var document = tmp$_0;
    var fragments = document.getElementById(this.fragment);
    var $receiver = asList(ensureNotNull(fragments).getElementsByClassName('mainList'));
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = makeVideo(element.innerHTML)) != null) {
        destination.add_11rb$(tmp$_0_0);
      }
    }
    return destination;
  };
  GetTopVideosMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetTopVideosMethod',
    interfaces: []
  };
  function SearchMethod(keyWord) {
    this.keyWord = keyWord;
  }
  var mapNotNullTo$lambda_0 = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  SearchMethod.prototype.execute = function () {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = getBody(Anitube$Url_getInstance().SEARCH + this.keyWord)) != null ? toDOM(tmp$) : null;
    if (tmp$_0 == null) {
      return emptyList();
    }
    var dom = tmp$_0;
    var $receiver = asList(ensureNotNull(dom.getElementsByClassName('mainBox')[0]).getElementsByClassName('mainList'));
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = makeVideo(element.innerHTML)) != null) {
        destination.add_11rb$(tmp$_0_0);
      }
    }
    return destination;
  };
  SearchMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SearchMethod',
    interfaces: []
  };
  function getKeyUrl($receiver) {
    var document = getBody($receiver.videoUrl);
    var videoPlayer = toDOM(ensureNotNull(document)).getElementById('videoPlayer');
    var code = ensureNotNull(videoPlayer).innerHTML;
    return first(Regex_init(KEY).findAll_905azu$(code)).value;
  }
  function main$lambda() {
    var tmp$;
    tmp$ = Anitube_getInstance().search_61zpoe$('Kill Me Baby').iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      println(element);
    }
    ok(true, 'success');
    return Unit;
  }
  function main$lambda_0() {
    println(ensureNotNull(ensureNotNull(toDOM(ensureNotNull(getBody(Anitube$Url_getInstance().SEARCH + 'kill me baby'))).getElementsByClassName('mainBox')[0]).getElementsByClassName('mainList')[0]).innerHTML);
    ok(true, 'sc');
    return Unit;
  }
  function main$lambda_1() {
    println(getBody(Anitube$Url_getInstance().SEARCH + 'kill me baby'));
    ok(true, 'efewv');
    return Unit;
  }
  function main$lambda_2() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', MY_PROXY + Anitube$Url_getInstance().SEARCH + 'kill me baby', false);
    xhr.send();
    println(xhr.responseText);
    ok(true, 'vre');
    return Unit;
  }
  function main$lambda_3() {
    var div = toDOM(sample);
    var thumb = div.getElementsByClassName('videoThumb')[0];
    var videoUrl = ensureNotNull(ensureNotNull(ensureNotNull(thumb).getElementsByTagName('a')[0]).getAttribute('href'));
    println(videoUrl);
    var imgUrl = ensureNotNull(ensureNotNull(ensureNotNull(thumb.getElementsByTagName('a')[0]).getElementsByTagName('img')[0]).getAttribute('src'));
    println(imgUrl);
    var views = replace(ensureNotNull(ensureNotNull(ensureNotNull(div.getElementsByClassName('videoInfo')[0]).getElementsByClassName('videoViews')[0]).textContent), ' Visualiza\xE7oes', '');
    println(views);
    var title = ensureNotNull(ensureNotNull(ensureNotNull(div.getElementsByClassName('videoTitle')[0]).getElementsByTagName('a')[0]).textContent);
    println(title);
    println(new Video(title, views, imgUrl, videoUrl));
    ok(true, 'sc');
    return Unit;
  }
  function main$lambda_4() {
    println(first_0(Anitube_getInstance().mostSeen));
    ok(true, 'sc');
    return Unit;
  }
  function main$lambda_5() {
    println(first_0(Anitube_getInstance().mostSeen).getMp4Url_6taknv$());
    ok(true, 'cfs');
    return Unit;
  }
  function main(args) {
    t(0, 'searchTest', main$lambda);
    t(0, 'toDOM', main$lambda_0);
    t(0, 'DOM Check', main$lambda_1);
    t(0, 'getBody Check', main$lambda_2);
    t(0, 'makeVideo Test', main$lambda_3);
    t(0, 'get top test', main$lambda_4);
    t(1, 'video url test', main$lambda_5);
  }
  function t(i, testName, fun) {
    if (i === 1) {
      test(testName, fun);
    }
  }
  var sample;
  Object.defineProperty(Anitube.prototype, 'Url', {
    get: Anitube$Url_getInstance
  });
  var package$jp = _.jp || (_.jp = {});
  var package$ogiwara = package$jp.ogiwara || (package$jp.ogiwara = {});
  var package$anitube = package$ogiwara.anitube || (package$ogiwara.anitube = {});
  Object.defineProperty(package$anitube, 'Anitube', {
    get: Anitube_getInstance
  });
  var package$method = package$anitube.method || (package$anitube.method = {});
  Object.defineProperty(package$method, 'HIGHLIGHT', {
    get: function () {
      return HIGHLIGHT;
    }
  });
  Object.defineProperty(package$method, 'TOP_RATED', {
    get: function () {
      return TOP_RATED;
    }
  });
  Object.defineProperty(package$method, 'MOST_SEEN', {
    get: function () {
      return MOST_SEEN;
    }
  });
  var package$model = package$anitube.model || (package$anitube.model = {});
  Object.defineProperty(package$model, 'KEY', {
    get: function () {
      return KEY;
    }
  });
  Object.defineProperty(package$model, 'HD', {
    get: function () {
      return HD;
    }
  });
  Object.defineProperty(package$model, 'SD', {
    get: function () {
      return SD;
    }
  });
  package$model.Video = Video;
  package$anitube.makeVideo_61zpoe$ = makeVideo;
  package$anitube.toDOM_pdl1vz$ = toDOM;
  var package$http = package$anitube.http || (package$anitube.http = {});
  Object.defineProperty(package$http, 'MY_PROXY', {
    get: function () {
      return MY_PROXY;
    }
  });
  package$http.getBody_61zpoe$ = getBody;
  package$method.GetTopVideosMethod = GetTopVideosMethod;
  package$method.SearchMethod = SearchMethod;
  package$model.getKeyUrl_jkx4oj$ = getKeyUrl;
  package$anitube.main_kand9s$ = main;
  package$anitube.t_jl06c7$ = t;
  Object.defineProperty(package$anitube, 'sample', {
    get: function () {
      return sample;
    }
  });
  HIGHLIGHT = 'fragment-1';
  TOP_RATED = 'fragment-2';
  MOST_SEEN = 'fragment-3';
  KEY = 'http://www\\.anitube\\.se/player/config\\.php\\?key=[0-9a-zA-Z]*';
  HD = 'http://.*_hd\\.mp4';
  SD = 'http://.*\\.mp4';
  MY_PROXY = 'http://ogiwara.ddo.jp:4040/proxy?url=';
  sample = '\n' + '\t\t\t <div class="videoThumb">\n' + '\t\t\t <a href="http://www.anitube.se/video/4824/Giant-Killing-01" title="Bom Anime...Punch Fansub"><img src="http://static.anitube.se/thumb/1_4824.jpg" id="rotate_4824" alt="Giant Killing 01"><\/a>\n' + '\t\t\t <\/div>\n' + '\t\t\t <div class="videoTitle">\n' + '\t\t\t <a href="http://www.anitube.se/video/4824/Giant-Killing-01">Giant Killing 01<\/a>\n' + '\t\t\t <\/div>\n' + '\t\t\t <div class="videoInfo">\n' + '\t\t\t  <div class="videoViews">163521 Visualiza\xE7oes<\/div>\n' + '\t\t\t\t<div class="videoStars"> \n' + '        <img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;<img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;<img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;<img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;<img src="http://static.anitube.se/images/tpl_icon_star_full.gif" width="11" alt="icon star">&nbsp;<\/div>\n' + '\t\t\t <\/div>';
  main([]);
  Kotlin.defineModule('js', _);
  return _;
}(typeof js === 'undefined' ? {} : js, kotlin);
