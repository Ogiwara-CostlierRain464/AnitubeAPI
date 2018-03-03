package jp.ogiwara.anitube.method

import jp.ogiwara.anitube.Anitube
import jp.ogiwara.anitube.http.getBody
import jp.ogiwara.anitube.makeVideo
import jp.ogiwara.anitube.model.Video

const val HIGHLIGHT = "fragment-1"
const val TOP_RATED = "fragment-2"
const val MOST_SEEN = "fragment-3"

internal expect class GetTopVideosMethod(fragment: String){

    fun execute(): List<Video>
}