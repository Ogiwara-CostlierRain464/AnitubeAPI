package jp.ogiwara.anitube.method

import jp.ogiwara.anitube.model.Video


internal expect class SearchMethod(keyWord: String){

    fun execute(): List<Video>
}