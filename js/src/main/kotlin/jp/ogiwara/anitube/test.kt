package jp.ogiwara.anitube

import jp.ogiwara.anitube.http.MY_PROXY
import jp.ogiwara.anitube.http.getBody
import jp.ogiwara.anitube.model.Video
import org.w3c.dom.asList
import org.w3c.dom.get
import org.w3c.xhr.XMLHttpRequest


fun main(args: Array<String>){

    /**
     * ご覧の通り、適切なURIエンコーディングが必要です
     */

    t(0,"searchTest",{
        println(Anitube.search("kill me baby").first().getMp4Url(false))
        //println(getBody("http://www.anitube.se/search/?search_id=kill+me+baby".toEscapeUrl()))

        ok(true,"success")
    })

    t(0,"escape test",{
        println((Anitube.Url.SEARCH + "kill me baby").replace(" ","+").toEscapeUrl())

        println("http://www.anitube.se/search/?search_id=kill+me+baby".toEscapeUrl())

        ok(true, "ecbewc")
    })

    t(0,"escape test",{

        println("&'`\"<>".toEscapeHtml())

        ok(true,"frv")
    })

    t(0,"toDOM",{
        println(getBody(Anitube.Url.SEARCH + "kill me baby")!!.toDOM().getElementsByClassName("mainBox")[0]!!.getElementsByClassName("mainList")[0]!!.innerHTML)

        ok(true,"sc")
    })

    t(0,"DOM Check",{
        println(getBody(Anitube.Url.SEARCH + "kill me baby"))

        ok(true,"efewv")
    })

    t(0,"getBody Check",{
        val xhr = XMLHttpRequest()
        xhr.open("GET", MY_PROXY + Anitube.Url.SEARCH + "kill me baby",false)
        xhr.send()

        println(xhr.responseText)

        ok(true,"vre")
    })

    t(0,"makeVideo Test",{

        val div = sample.toDOM()

        val thumb = div.getElementsByClassName("videoThumb")[0]

        val videoUrl = thumb!!.getElementsByTagName("a")[0]!!.getAttribute("href")!!

        println(videoUrl)

        val imgUrl = thumb.getElementsByTagName("a")[0]!!.getElementsByTagName("img").get(0)!!.getAttribute("src")!!

        println(imgUrl)

        val views = div.getElementsByClassName("videoInfo").get(0)!!.getElementsByClassName("videoViews").get(0)!!.textContent!!.replace(" Visualizaçoes", "")

        println(views)

        val title = div.getElementsByClassName("videoTitle").get(0)!!.getElementsByTagName("a").get(0)!!.textContent!!

        println(title)

        println(Video(title, views, imgUrl, videoUrl))

        ok(true,"sc")
    })

    t(0,"get top test",{

        println(Anitube.mostSeen.first())

        ok(true,"sc")
    })

    t(0,"video url test",{
        println(Anitube.mostSeen.first().getMp4Url(false))

        ok(true,"cfs")
    })
}

external fun test(testName: String, `fun`: dynamic)
external fun ok(result: Boolean, output: String)
external fun same(result: Any, expect: Any, message: String) //===


fun t(i: Int,testName: String,`fun`: dynamic){
    if(i == 1){
        test(testName,`fun`)
    }
}

const val sample = "\n" +
        "\t\t\t <div class=\"videoThumb\">\n" +
        "\t\t\t <a href=\"http://www.anitube.se/video/4824/Giant-Killing-01\" title=\"Bom Anime...Punch Fansub\"><img src=\"http://static.anitube.se/thumb/1_4824.jpg\" id=\"rotate_4824\" alt=\"Giant Killing 01\"></a>\n" +
        "\t\t\t </div>\n" +
        "\t\t\t <div class=\"videoTitle\">\n" +
        "\t\t\t <a href=\"http://www.anitube.se/video/4824/Giant-Killing-01\">Giant Killing 01</a>\n" +
        "\t\t\t </div>\n" +
        "\t\t\t <div class=\"videoInfo\">\n" +
        "\t\t\t  <div class=\"videoViews\">163521 Visualizaçoes</div>\n" +
        "\t\t\t\t<div class=\"videoStars\"> \n" +
        "        <img src=\"http://static.anitube.se/images/tpl_icon_star_full.gif\" width=\"11\" alt=\"icon star\">&nbsp;<img src=\"http://static.anitube.se/images/tpl_icon_star_full.gif\" width=\"11\" alt=\"icon star\">&nbsp;<img src=\"http://static.anitube.se/images/tpl_icon_star_full.gif\" width=\"11\" alt=\"icon star\">&nbsp;<img src=\"http://static.anitube.se/images/tpl_icon_star_full.gif\" width=\"11\" alt=\"icon star\">&nbsp;<img src=\"http://static.anitube.se/images/tpl_icon_star_full.gif\" width=\"11\" alt=\"icon star\">&nbsp;</div>\n" +
        "\t\t\t </div>"