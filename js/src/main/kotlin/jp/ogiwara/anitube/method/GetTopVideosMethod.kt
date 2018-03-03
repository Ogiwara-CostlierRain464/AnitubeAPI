package jp.ogiwara.anitube.method

import jp.ogiwara.anitube.Anitube
import jp.ogiwara.anitube.http.getBody
import jp.ogiwara.anitube.makeVideo
import jp.ogiwara.anitube.model.Video
import jp.ogiwara.anitube.toDOM
import org.w3c.dom.asList

internal actual class GetTopVideosMethod actual constructor(val fragment: String) {
    actual fun execute(): List<Video> {
        val document = getBody(Anitube.Url.TOP)?.toDOM() ?: return emptyList<Video>()
        val fragments = document.getElementById(fragment)
        return fragments!!
                .getElementsByClassName("mainList")
                .asList()
                .mapNotNull {
                    makeVideo(it.innerHTML)
                }
    }
}