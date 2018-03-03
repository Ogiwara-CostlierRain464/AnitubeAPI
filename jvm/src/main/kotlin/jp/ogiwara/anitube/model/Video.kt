package jp.ogiwara.anitube.model

import jp.ogiwara.anitube.http.getBody
import org.jsoup.Jsoup

/*actual data class Video actual constructor(val title: String,
                                      val views: String,
                                      val imgUrl: String,
                                      val videoUrl: String)*/

actual fun Video.getKeyUrl(): String{
    val document = getBody(videoUrl)
    val videoPlayer = Jsoup.parse(document).getElementById("videoPlayer")
    val code = videoPlayer.outerHtml()

    return KEY.toRegex().findAll(code).first().value
}
