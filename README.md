<img width="1408" height="712" alt="image" src="https://github.com/user-attachments/assets/52ccf639-7be6-41f0-9804-3499548f60f7" />
Crypto Charts App (Dark Mode with Custom Hooks)

Bu proje, React kullanılarak geliştirilmiş basit bir kripto para grafik uygulamasıdır. Uygulama içerisinde coin verileri grafikler halinde gösterilmektedir ve kullanıcılar uygulama arayüzünde bulunan buton sayesinde Dark Mode (Gece Modu) özelliğini açıp kapatabilmektedir. Kullanıcının seçtiği dark mode durumu localStorage kullanılarak saklanır. Böylece sayfa yenilendiğinde veya uygulama tekrar açıldığında kullanıcının tercih ettiği tema korunmuş olur.

Bu proje özellikle React Custom Hooks kullanımı, localStorage ile veri saklama ve component yapısının düzenli şekilde organize edilmesi konularını pekiştirmek amacıyla geliştirilmiştir.

Proje içerisinde React’in temel özellikleri olan component yapısı, state yönetimi ve custom hook oluşturma teknikleri kullanılmıştır. Uygulama geliştirilirken kodların yeniden kullanılabilir olması ve okunabilirliğinin yüksek olması hedeflenmiştir.

Projenin yapısında iki adet özel hook bulunmaktadır. Bunlardan ilki useLocalStorage hook’udur. Bu hook React state'ini tarayıcının localStorage alanı ile senkronize etmek için oluşturulmuştur. Uygulama ilk çalıştığında localStorage içerisinde ilgili anahtar bulunmuyorsa başlangıç değeri otomatik olarak localStorage’a kaydedilir. Daha sonra state değeri değiştiğinde localStorage da otomatik olarak güncellenir. Bu sayede kullanıcı tercihleri kalıcı olarak saklanabilmektedir.

İkinci hook ise useDarkMode hook’udur. Bu hook uygulamadaki dark mode özelliğini yönetmek için geliştirilmiştir. useDarkMode hook’u aslında useLocalStorage hook’unu kullanarak dark mode değerini localStorage içerisinde saklar. Uygulama ilk render edildiğinde dark mode değeri false olarak belirlenir ve localStorage’a kaydedilir. Kullanıcı navbar içerisinde bulunan butona bastığında bu değer değişir ve değişen değer tekrar localStorage’a kaydedilir.

Uygulamanın arayüzünde Navbar ve Charts olmak üzere iki temel component bulunmaktadır. Navbar componenti içerisinde dark mode’u açıp kapatmaya yarayan bir buton bulunmaktadır. Charts componenti ise coin verilerini grafik halinde kullanıcıya göstermektedir. Bu veriler proje içerisinde bulunan data.js dosyasından alınmaktadır.

Proje geliştirilirken modern React geliştirme araçlarından biri olan Vite kullanılmıştır. Vite, hızlı geliştirme ortamı sağlayarak React uygulamalarının daha hızlı başlatılmasını ve geliştirilmesini mümkün kılar.

Projeyi kendi bilgisayarınızda çalıştırmak için öncelikle projeyi GitHub üzerinden klonlamanız gerekir. Daha sonra proje klasörüne girip gerekli bağımlılıkları yükleyerek uygulamayı çalıştırabilirsiniz.

Projeyi klonlamak için terminalde aşağıdaki komut kullanılabilir:

git clone https://github.com/kullaniciadi/proje-adi.git

Proje klasörüne girdikten sonra gerekli paketleri yüklemek için:

npm install

Uygulamayı geliştirme modunda çalıştırmak için ise:

npm run dev

komutu kullanılabilir. Bu komut çalıştırıldıktan sonra uygulama genellikle http://localhost:5173
 adresinde çalışacaktır.

Bu proje, React geliştirirken custom hook kullanımı, localStorage ile veri saklama ve component tabanlı mimariyi daha iyi anlamak için hazırlanmıştır.
