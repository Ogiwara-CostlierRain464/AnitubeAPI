package jp.ogiwara.anitube.method

import jp.ogiwara.anitube.Anitube
import jp.ogiwara.anitube.http.getBody
import jp.ogiwara.anitube.makeVideo
import jp.ogiwara.anitube.model.Video
import jp.ogiwara.anitube.toDOM
import jp.ogiwara.anitube.toEscapeUrl
import org.w3c.dom.asList
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.dom.appendText

internal actual class SearchMethod actual constructor(val keyWord: String) {
    actual fun execute(): List<Video> {
        val dom = getBody((Anitube.Url.SEARCH + keyWord).replace(" ","+").replace("　","").toEscapeUrl())?.toDOM() ?: return emptyList()

        //console.log(dom)

        return dom.getElementsByClassName("mainBox")[0]!!.getElementsByClassName("mainList").asList().mapNotNull {
            makeVideo(it.innerHTML)
        }
    }

}