package jp.ogiwara.anitube

import jp.ogiwara.anitube.model.Video
import jp.ogiwara.anitube.method.*

/**
 * typealiasはあきらめて、オブジェクトコンポジションで
 */
object Anitube {

    object Url{
        const val TOP = "http://www.anitube.se/"
        const val SEARCH = "http://www.anitube.se/search/?search_id="
    }

    val highLight: List<Video>
        get() = GetTopVideosMethod(HIGHLIGHT).execute()

    val topRated: List<Video>
        get() = GetTopVideosMethod(TOP_RATED).execute()

    val mostSeen: List<Video>
        get() = GetTopVideosMethod(MOST_SEEN).execute()

    fun search(keyword: String): List<Video>{
        return SearchMethod(keyword).execute()
    }

    /*val highLightAsync: Deferred<List<Video>>
        get() = async(CommonPool){
            highLight
        }

    val topRatedAsync: Deferred<List<Video>>
        get() = async(CommonPool){
            topRated
        }

    val mostSeenAsync: Deferred<List<Video>>
        get() = async(CommonPool){
            mostSeen
        }

    fun searchAsync(keyword: String) = async(CommonPool){
        SearchMethod(keyword).execute()
    }*/
}