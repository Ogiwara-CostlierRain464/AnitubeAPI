import jp.ogiwara.anitube.Anitube
import org.junit.Ignore
import org.junit.Test

class Test1 {

    @Ignore
    fun searchTest(){
        println(Anitube.search("kill me baby").first())
        assert(true)
    }

    @Test
    fun getTopTest(){
        println(Anitube.mostSeen.first().getMp4Url())
    }
}