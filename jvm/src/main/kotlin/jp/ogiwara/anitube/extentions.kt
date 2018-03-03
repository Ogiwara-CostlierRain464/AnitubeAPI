package jp.ogiwara.anitube

import jp.ogiwara.anitube.model.Video
import org.jsoup.Jsoup

actual fun makeVideo(dom: String): Video?{
    return try {
        val e = Jsoup.parse(dom)
        val thumb = e.select(".videoThumb").first()
        val videoUrl = thumb.getElementsByTag("a").first().attr("href")
        val imgUrl = thumb.getElementsByTag("a").first().getElementsByTag("img").first().attr("src")
        val views = e.select(".videoInfo .videoViews").first().ownText().replace(" Visualizaçoes", "")
        val title = e.select(".videoTitle").first().getElementsByTag("a").first().ownText()

        Video(title, views, imgUrl, videoUrl)
    }catch (_: NullPointerException){
        null
    }
}