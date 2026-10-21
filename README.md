# Küçük Bir Nezaket — Web platformu

Karakter tanıtımları, hikâye, dört sahnelik etkileşimli slayt gösterisi ve film bağlantısı içeren Türkçe, mobil uyumlu statik web sitesi.

## Dosyalar

- index.html: Dört bölüm ve sayfa içeriği.
- styles.css: Tasarım ve mobil ekran düzeni.
- app.js: Sahne verileri, ileri/geri düğmeleri, klavye kontrolü ve video bağlantısı.
- config.js: Sonradan eklenecek video adresi.
- assets/1.png ... 4.png: Hikâyenin yapay zekâ ile oluşturulmuş sahne görselleri.
- .nojekyll: GitHub Pages için statik dosya sunumu.

Kurulum, npm, derleme veya sunucu tarafı kod gerektirmez. index.html doğrudan tarayıcıda açılabilir. Google Fonts için internet bağlantısı kullanılır; erişilemezse sistem yazı tipleri devreye girer.

## Video bağlantısını ekleme

config.js dosyasını açıp videoUrl alanını doldurun:

```js
window.SITE_CONFIG = {
  videoUrl: "https://www.youtube.com/watch?v=VIDEO_KIMLIGI"
};
```

Adres, YouTube/Vimeo sayfası, doğrudan MP4 veya erişime açık başka bir video sayfası olabilir. Gerçek video adresinizi yazın. Bağlantı boşken kullanıcıya filmin yakında ekleneceği gösterilir. Adres eklendiğinde Filmi izle düğmesi etkinleşir ve yeni sekmede videoyu açar. Video hizmetinin erişim/paylaşım izinlerini de kontrol edin. Adresi sohbetten de iletebilirsiniz; dosyaya eklenebilir.

## GitHub Pages ile yayınlama

1. GitHub üzerinde bir depo oluşturun.
2. Bu klasörün İÇİNDEKİ dosyaları ve assets klasörünü deponun köküne yükleyin. index.html kökte olmalı.
3. Depoda Settings → Pages bölümüne gidin.
4. Source için Deploy from a branch, branch için main, klasör için / (root) seçin ve kaydedin.
5. Yayın tamamlandığında GitHub'ın gösterdiği site adresini açın.

Tüm proje dosyaları göreli yollar kullanır; depo adı altında çalışan GitHub Pages adresleriyle uyumludur. Video adresini güncellediğinizde config.js değişikliğini de GitHub'a yükleyin.

## Kullanım

Üst menüyle bölümlere gidin. Slaytları ileri/geri okları, dört sahne seçme düğmesi veya slayt alanına odaklandıktan sonra klavyenin sağ/sol oklarıyla değiştirin. Otomatik geçiş yoktur; sunum hızını anlatan kişi belirler.

İçerik, MEB Ortaöğretim Akran Nezaketi Etkinlik Kitabı'nın okulda nezaket yaklaşımından hareketle hazırlanmış özgün hikâyeye dayanır. Resmî bir bakanlık sitesi veya bakanlık onayı iddiası taşımaz.
