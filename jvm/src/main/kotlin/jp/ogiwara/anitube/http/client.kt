package jp.ogiwara.anitube.http

import com.google.api.client.http.GenericUrl
import com.google.api.client.http.javanet.NetHttpTransport
import org.jsoup.Jsoup

actual fun getBody(url: String): String? {
    val httpTransport = NetHttpTransport()
    val requestFactory = httpTransport.createRequestFactory()
    val uri = GenericUrl(url)
    val req = requestFactory.buildGetRequest(uri)
    val res = req.execute()
    val str = res.parseAsString()

    return if(str == "") null else str
}