package jp.ogiwara.anitube.model

import jp.ogiwara.anitube.http.getBody

const val KEY = "http://www\\.anitube\\.se/player/config\\.php\\?key=[0-9a-zA-Z]*"
const val HD = "http://.*_hd\\.mp4"
const val SD = "http://.*\\.mp4"

data class Video(val title: String,
                 val views: String,
                 val imgUrl: String,
                 val videoUrl: String){

    fun getMp4Url(quality: Boolean = false): String {
        val html = getBody(getKeyUrl())
        return  (if(quality) HD else SD)
                .toRegex()
                .findAll(html!!.removeSurrounding("sources: [{","}],"))
                .first()
                .value
    }

}

expect fun Video.getKeyUrl(): String