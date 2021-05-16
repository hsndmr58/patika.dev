let isim = prompt("Adınız nedir?");//kullanıcıdan isim alıyoruz
document.getElementById("myName").innerText = isim;//isimi elentimize yazdırıyoruz.
const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];//günleri yazdırmak için liste oluşturuyoruz liste pazardan başlıyor çünkü JS'de 0 pazarı temsil eder.
 function showTime() {
    let tarih = new Date();//anlık tarihi aldık
    let saat = tarih.getHours();//saati saat değişkenimize aldık
    let dk = tarih.getMinutes();// dakikayı dakika değişkenimize aldık
    let sn = tarih.getSeconds();// saniyeyi saniye değişkenimize aldık
    saat = saat < 10 ? "0" + saat : saat;//eğer saat tek haneli ise başına 0 ekledik
    dk = dk < 10 ? "0" + dk : dk;//eğer dakika tek haneli ise başına 0 ekledik
    sn = sn < 10 ? "0" + sn : sn;//eğer saniye tek haneli ise başına 0 ekledik
    document.getElementById("myClock").innerText = `${saat}:${dk}:${sn} ${gunler[tarih.getDay()]}`;//myClock id li span öğemize yazdırmak istediklerimizi yazdırdık
    setTimeout(showTime, 1000);//saniyede yenileme yaptık
 }
 showTime();//fonksiyonumuzu çağırdık
 