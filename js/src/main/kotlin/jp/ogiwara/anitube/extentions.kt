package jp.ogiwara.anitube

import jp.ogiwara.anitube.model.Video
import org.w3c.dom.Document
import org.w3c.dom.get
import org.w3c.dom.parsing.DOMParser
import kotlin.browser.document

actual fun makeVideo(dom: String): Video?{
    val div = dom.toDOM()

    return try {
        val thumb = div.getElementsByClassName("videoThumb")[0]

        val videoUrl = thumb!!.getElementsByTagName("a")[0]!!.getAttribute("href")!!
        val imgUrl = thumb.getElementsByTagName("a")[0]!!.getElementsByTagName("img").get(0)!!.getAttribute("src")!!
        val views = div.getElementsByClassName("videoInfo").get(0)!!.getElementsByClassName("videoViews").get(0)!!.textContent!!.replace(" Visualizaçoes", "")
        val title = div.getElementsByClassName("videoTitle").get(0)!!.getElementsByTagName("a").get(0)!!.textContent!!

        Video(title, views, imgUrl, videoUrl)
    }catch (_: NullPointerException){
        null
    }
}

fun String.toDOM(): Document{
    val parser = DOMParser()
    return parser.parseFromString(this, "text/html")
}