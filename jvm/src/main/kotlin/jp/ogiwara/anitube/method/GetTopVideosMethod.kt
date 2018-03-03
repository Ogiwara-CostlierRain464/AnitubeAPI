package jp.ogiwara.anitube.method

import jp.ogiwara.anitube.Anitube
import jp.ogiwara.anitube.http.getBody
import jp.ogiwara.anitube.makeVideo
import jp.ogiwara.anitube.model.Video
import org.jsoup.Jsoup

internal actual class GetTopVideosMethod actual constructor(val fragment: String) {
    actual fun execute(): List<Video> {
        val document = Jsoup.parse(getBody(Anitube.Url.TOP))
        val fragments = document.getElementById(fragment)
        val targetFragment = fragments.getElementById(fragment).getElementsByClass("mainList")
        return targetFragment.map(Any::toString).mapNotNull(::makeVideo)
    }
}