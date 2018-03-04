package jp.ogiwara.anitube.model

import jp.ogiwara.anitube.http.getBody

const val KEY = "http://www\\.anitube\\.se/player/config\\.php\\?key=[0-9a-zA-Z]*"
const val HD = "http://.*_hd\\.mp4"
const val SD = "http://.*\\.mp4"

expect class Video(title: String,
                    views: String,
                    imgUrl: String,
                    videoUrl: String){
    fun getMp4Url(quality: Boolean): String
    fun getKeyUrl(): String
}