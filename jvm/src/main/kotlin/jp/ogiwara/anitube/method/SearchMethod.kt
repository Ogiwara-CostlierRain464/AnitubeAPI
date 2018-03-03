package jp.ogiwara.anitube.method

import jp.ogiwara.anitube.Anitube
import jp.ogiwara.anitube.http.getBody
import jp.ogiwara.anitube.makeVideo
import jp.ogiwara.anitube.model.Video
import org.jsoup.Jsoup

internal actual class SearchMethod actual constructor(val keyWord: String) {
    actual fun execute(): List<Video> {
        return Jsoup.parse(getBody(Anitube.Url.SEARCH + keyWord)).select(".mainBox ul .mainList").mapNotNull {
                    makeVideo(it.html())
                }
    }
}