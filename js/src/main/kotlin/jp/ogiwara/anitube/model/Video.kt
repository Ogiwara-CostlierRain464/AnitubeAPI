package jp.ogiwara.anitube.model

import jp.ogiwara.anitube.http.getBody
import jp.ogiwara.anitube.toDOM

/*actual class Video actual constructor(title: String,
                                      views: String,
                                      imgUrl: String,
                                      videoUrl: String)*/

actual fun Video.getKeyUrl(): String{
    val document = getBody(videoUrl)
    val videoPlayer = document!!.toDOM().getElementById("videoPlayer")
    val code = videoPlayer!!.innerHTML

    return KEY.toRegex().findAll(code).first().value
}
