package jp.ogiwara.anitube.method

import jp.ogiwara.anitube.model.Video


internal class GetTopVideosMethod(val fragment: String){

    companion object {
        val HIGHLIGHT = "fragment-1"
        val TOP_RATED = "fragment-2"
        val MOST_SEEN = "fragment-3"
    }

    fun execute(): List<Video>{
        TODO()
    }
}