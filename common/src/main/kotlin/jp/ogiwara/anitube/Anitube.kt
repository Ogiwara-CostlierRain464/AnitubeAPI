package jp.ogiwara.anitube

import jp.ogiwara.anitube.model.Video
import jp.ogiwara.anitube.method.*
import kotlinx.coroutines.experimental.CommonPool
import kotlinx.coroutines.experimental.Deferred
import kotlinx.coroutines.experimental.async


object Anitube {

    object Url{
        const val TOP = "http://www.anitube.se/"
        const val SEARCH = "http://www.anitube.se/search/?search_id="
    }

    val highLight: List<Video>
        get() = GetTopVideosMethod(GetTopVideosMethod.HIGHLIGHT).execute()

    val topRated: List<Video>
        get() = GetTopVideosMethod(GetTopVideosMethod.TOP_RATED).execute()

    val mostSeen: List<Video>
        get() = GetTopVideosMethod(GetTopVideosMethod.MOST_SEEN).execute()

    fun search(keyword: String): List<Video>{
        return SearchMethod(keyword).execute()
    }

    val highLightAsync: Deferred<List<Video>>
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
    }
}