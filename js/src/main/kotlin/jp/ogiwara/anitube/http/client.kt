package jp.ogiwara.anitube.http

import org.w3c.xhr.XMLHttpRequest

const val MY_PROXY = "http://ogiwara.ddo.jp:4040/proxy?url="
//const val MY_PROXY = "http://cors-allow.azurewebsites.net/?url="

actual fun getBody(url: String): String? {
    val xhr = XMLHttpRequest()
    xhr.open("GET", MY_PROXY + url,false)
    xhr.send()

    return xhr.responseText
}