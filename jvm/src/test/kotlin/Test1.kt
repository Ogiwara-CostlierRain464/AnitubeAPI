import jp.ogiwara.anitube.Anitube
import jp.ogiwara.anitube.http.getBody
import org.junit.Ignore
import org.junit.Test

class Test1 {

    @Ignore
    fun searchTest(){
        println(Anitube.search("kill me baby").first())
        assert(true)
    }

    @Ignore
    fun getTopTest(){
        println(Anitube.mostSeen.first().getMp4Url(false))
    }

    @Test
    fun searchBody(){
        println(getBody(Anitube.Url.SEARCH + "kill me baby"))
        assert(true)
    }
}