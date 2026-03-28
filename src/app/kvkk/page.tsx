export default function KvkkPage() {
    return (
      <main className="pt-[100px] md:pt-[120px] pb-20 md:pb-28 bg-white">
        <section className="max-w-[980px] mx-auto px-6 md:px-8">
          <div className="mb-12 md:mb-16 space-y-5">
            <span className="block text-[10px] md:text-[11px] tracking-[0.45em] uppercase text-[#004A30] font-semibold">
              KVKK
            </span>
  
            <h1 className="text-[38px] sm:text-[46px] md:text-[62px] font-light tracking-tighter text-[#231F20] leading-[1.04]">
              Kişisel Verilerin Korunması ve <span className="italic font-serif text-[#004A30]">Aydınlatma Metni</span>
            </h1>
  
            <p className="text-[16px] md:text-[18px] text-black/45 font-light leading-relaxed max-w-3xl">
              Sommario Coffee Company olarak, kişisel verilerinizin güvenliğine önem veriyor; internet sitemiz, başvuru formlarımız ve tüm dijital iletişim kanallarımız üzerinden elde edilen verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hukuka uygun şekilde işliyoruz.
            </p>
          </div>
  
          <div className="space-y-10 md:space-y-12 text-black/65">
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                1. Veri Sorumlusu
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                İşbu aydınlatma metni kapsamında veri sorumlusu Sommario Coffee Company’dir. İnternet sitemiz, iletişim formlarımız, franchise başvuru alanlarımız, kariyer başvuru süreçlerimiz, mağaza etkileşimlerimiz ve dijital iletişim kanallarımız üzerinden elde edilen kişisel verileriniz, KVKK’ya uygun şekilde işlenmekte, saklanmakta ve korunmaktadır.
              </p>
              <div className="p-6 md:p-8 bg-[#FAF9F6] rounded-[2rem] border border-black/[0.03] space-y-2">
                <p className="text-[15px] md:text-[16px] font-light">
                  <span className="font-medium text-[#231F20]">Veri Sorumlusu:</span> Sommario Coffee Company
                </p>
                <p className="text-[15px] md:text-[16px] font-light">
                  <span className="font-medium text-[#231F20]">E-posta:</span> info@sommario.com.tr
                </p>
                <p className="text-[15px] md:text-[16px] font-light">
                  <span className="font-medium text-[#231F20]">İletişim:</span> info@sommario.com.tr
                </p>
                <p className="text-[15px] md:text-[16px] font-light">
                  <span className="font-medium text-[#231F20]">Adres:</span> Şirket merkezi bilgileri güncellenecektir.
                </p>
              </div>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                2. İşlenen Kişisel Veriler
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                İnternet sitemiz ve dijital kanallarımız aracılığıyla aşağıdaki kişisel verileriniz işlenebilmektedir:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Kimlik bilgileri (ad, soyad)",
                  "İletişim bilgileri (telefon numarası, e-posta adresi, adres bilgisi)",
                  "Başvuru bilgileri (franchise, kariyer ve iletişim formları)",
                  "Mesaj ve talep içerikleri",
                  "Özgeçmiş ve profesyonel bilgiler",
                  "Kullanıcı işlem bilgileri",
                  "Site kullanım, cihaz ve teknik log bilgileri",
                  "Talep, şikâyet ve öneri içerikleri",
                  "Hukuki işlem ve uyum süreçlerine ilişkin gerekli veriler",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 md:p-5 rounded-[1.5rem] bg-[#FAF9F6] border border-black/[0.03] text-[14px] md:text-[15px] leading-7 font-light"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Toplanan veriler, yalnızca ilgili işlem ve hizmet bakımından gerekli olduğu ölçüde işlenir. Gereksiz veri toplama yaklaşımı benimsenmez.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                3. Kişisel Verilerin Toplanma Yöntemi
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Kişisel verileriniz, aşağıdaki yöntemlerle otomatik veya kısmen otomatik yollarla toplanabilir:
              </p>
              <ul className="space-y-3 text-[15px] md:text-[17px] leading-8 font-light">
                {[
                  "İnternet sitemizde yer alan iletişim formları",
                  "Franchise başvuru formları",
                  "Kariyer başvuru formları",
                  "E-posta yoluyla yapılan başvurular ve yazışmalar",
                  "Telefon görüşmeleri",
                  "Sosyal medya platformları üzerinden yapılan iletişimler",
                  "Çerezler ve benzeri dijital izleme teknolojileri",
                  "Teknik log kayıtları ve sistem güvenlik kayıtları",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#004A30] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Bu veriler, ilgili kişinin açıkça paylaşması, başvuru yapması, form doldurması, talepte bulunması veya internet sitesini kullanması kapsamında elde edilmektedir.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                4. Kişisel Verilerin İşlenme Amaçları
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Toplanan kişisel verileriniz, aşağıdaki amaçlarla işlenebilmektedir:
              </p>
              <ul className="space-y-3 text-[15px] md:text-[17px] leading-8 font-light">
                {[
                  "İletişim taleplerinizi yanıtlamak",
                  "Soru, öneri, şikâyet ve geri bildirim süreçlerini yürütmek",
                  "Franchise başvurularını değerlendirmek",
                  "Kariyer başvurularını incelemek ve işe alım süreçlerini yürütmek",
                  "Talep edilen bilgi ve hizmetleri sağlamak",
                  "İnternet sitesinin teknik işleyişini sürdürmek",
                  "Kullanıcı deneyimini geliştirmek",
                  "Bilgi güvenliği ve sistem güvenliği süreçlerini yürütmek",
                  "Hukuki yükümlülüklerin yerine getirilmesini sağlamak",
                  "Resmî kurum ve kuruluşların taleplerine cevap vermek",
                  "İş süreçlerini iyileştirmek ve raporlamak",
                  "Ticari faaliyetlerin sürdürülebilirliğini sağlamak",
                  "Olası uyuşmazlıklarda ispat yükümlülüğünü yerine getirmek",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#004A30] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Kişisel verileriniz, belirtilen amaçlarla bağlantılı, sınırlı ve ölçülü olacak şekilde işlenmektedir.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                5. Kişisel Verilerin Hukuki Sebepleri
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Kişisel verileriniz, KVKK’nın 5. ve 6. maddelerinde belirtilen hukuki sebeplere dayalı olarak işlenebilmektedir. Bunlar özellikle aşağıdaki sebepleri kapsamaktadır:
              </p>
              <ul className="space-y-3 text-[15px] md:text-[17px] leading-8 font-light">
                {[
                  "Açık rızanızın bulunması",
                  "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması",
                  "Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması",
                  "Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması",
                  "İlgili kişinin kendisi tarafından alenileştirilmiş olması",
                  "Veri sorumlusunun meşru menfaati için veri işlenmesinin zorunlu olması",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#004A30] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                6. Kişisel Verilerin Aktarılması
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Kişisel verileriniz, KVKK’ya ve ilgili mevzuata uygun olarak, gerekli güvenlik tedbirleri alınmak suretiyle aşağıdaki taraflara aktarılabilir:
              </p>
              <ul className="space-y-3 text-[15px] md:text-[17px] leading-8 font-light">
                {[
                  "Yetkili kamu kurum ve kuruluşları",
                  "Hukuken yetkili idari ve adli merciler",
                  "Teknik altyapı, hosting, bulut, e-posta ve bilgi teknolojileri hizmeti sağlayıcıları",
                  "İş süreçlerinin yürütülmesi için destek alınan çözüm ortakları",
                  "Başvuru ve değerlendirme süreçlerinde görev alan ilgili departmanlar",
                  "Hukuki, mali veya operasyonel danışmanlık alınan profesyonel hizmet sağlayıcılar",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#004A30] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Bu aktarımlar, yalnızca gerekli olduğu ölçüde ve ilgili amaçlarla sınırlı olarak yapılır. Kişisel verileriniz, yasal yükümlülük bulunmadıkça veya açık rızanız alınmadıkça amacı dışında üçüncü kişilerle paylaşılmaz.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                7. Kişisel Verilerin Saklanma Süresi
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Kişisel verileriniz, ilgili mevzuatta öngörülen süre kadar veya işlendikleri amaç için gerekli olan makul süre boyunca saklanır. Saklama süresi sona eren, işlenme amacı ortadan kalkan veya mevzuat gereği silinmesi gereken kişisel veriler; silinir, yok edilir veya anonim hale getirilir.
              </p>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                İletişim talepleri, talebin sonuçlandırılması ve gerekli operasyonel kayıt süreçleri boyunca; kariyer başvuruları değerlendirme süreci ve makul bir aday havuzu süresi boyunca; franchise başvuruları iş geliştirme ve değerlendirme süreçleri kapsamında belirli sürelerle saklanabilir. Yasal yükümlülükler doğuran kayıtlar ise ilgili mevzuatta belirtilen süre kadar muhafaza edilir.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                8. Çerezler ve Dijital İzleme Teknolojileri
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                İnternet sitemizde kullanıcı deneyimini geliştirmek, sistem performansını ölçmek, güvenliği sağlamak ve site kullanım alışkanlıklarını analiz etmek amacıyla çerezler ve benzeri teknolojiler kullanılabilir. Çerezler aracılığıyla elde edilen veriler, ziyaretçilerin siteyi daha verimli kullanabilmesi, teknik sorunların tespit edilmesi ve hizmet kalitesinin artırılması amacıyla işlenebilir.
              </p>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Çerez kullanımına ilişkin daha detaylı bilgilendirme, ayrıca bir Çerez Politikası metni ile sunulabilir. Gerekmesi halinde ziyaretçiler, tarayıcı ayarları üzerinden çerez tercihlerini değiştirebilir veya çerezleri sınırlandırabilir.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                9. Veri Güvenliği
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Sommario Coffee Company, kişisel verilerinizin hukuka aykırı olarak işlenmesini veya erişilmesini önlemek ve verilerin güvenli biçimde muhafaza edilmesini sağlamak amacıyla uygun teknik ve idari tedbirleri almaktadır. Bu kapsamda sistem erişim kontrolleri uygulanır, yetkisiz erişimlere karşı koruma sağlanır, teknik altyapı güvenlik önlemleri geliştirilir, gerekli durumlarda log kayıtları tutulur ve veri işleme süreçlerinde görev alan kişilerin erişimleri sınırlandırılır.
              </p>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Her ne kadar gerekli güvenlik tedbirleri alınsa da dijital ortamların doğası gereği hiçbir sistemin mutlak surette risksiz olduğu garanti edilemez. Bu nedenle sistemlerimiz düzenli olarak gözden geçirilmekte ve geliştirilmektedir.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                10. İlgili Kişinin Hakları
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                KVKK’nın 11. maddesi uyarınca, kişisel verisi işlenen herkes veri sorumlusuna başvurarak aşağıdaki haklara sahiptir:
              </p>
              <ul className="space-y-3 text-[15px] md:text-[17px] leading-8 font-light">
                {[
                  "Kişisel verilerinin işlenip işlenmediğini öğrenme",
                  "İşlenmişse buna ilişkin bilgi talep etme",
                  "Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
                  "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme",
                  "Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme",
                  "KVKK’ya uygun olarak kişisel verilerin silinmesini veya yok edilmesini isteme",
                  "Düzeltme, silme veya yok etme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme",
                  "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme",
                  "Kişisel verilerin hukuka aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#004A30] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                11. Başvuru Usulü
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                KVKK kapsamındaki taleplerinizi, kimliğinizi doğrulayıcı bilgilerle birlikte yazılı olarak veya yürürlükteki mevzuat kapsamında izin verilen diğer usullerle veri sorumlusuna iletebilirsiniz. Başvurularınız, niteliğine göre en kısa sürede ve en geç yasal süre içinde sonuçlandırılır.
              </p>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Başvuru sırasında ad, soyad, başvuruya konu talep, iletişim bilgileri ve varsa ilgili işlem, form veya başvuruya ilişkin detayların açık ve anlaşılır şekilde belirtilmesi önerilir. İnceleme sonucunda talebiniz mevzuat çerçevesinde değerlendirilerek tarafınıza geri dönüş sağlanacaktır.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                12. Kariyer ve Franchise Başvurularına İlişkin Ek Bilgilendirme
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Kariyer ve franchise formları üzerinden iletilen kişisel veriler, yalnızca ilgili başvurunun değerlendirilmesi ve sizinle iletişime geçilmesi amacıyla kullanılmaktadır. Özgeçmiş, deneyim bilgileri, iletişim verileri, başvuru içerikleri ve diğer destekleyici bilgiler, ilgili başvuru sürecinin yürütülmesi amacıyla sınırlı şekilde işlenir.
              </p>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Başvuruların değerlendirilmesi neticesinde bir iş ilişkisi veya iş ortaklığı kurulmadığı takdirde, ilgili veriler makul süre sonunda silinebilir, yok edilebilir veya anonim hale getirilebilir. Ancak yasal gereklilikler, olası uyuşmazlıklar veya açık rızanıza dayalı aday havuzu süreçleri gibi durumlarda daha uzun saklama süreleri gündeme gelebilir.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                13. İletişim Formlarına İlişkin Bilgilendirme
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                İnternet sitemiz üzerinden doldurulan iletişim formları, yalnızca tarafınıza dönüş sağlamak, sorularınızı cevaplamak, taleplerinizi değerlendirmek ve hizmet kalitesini geliştirmek amacıyla kullanılmaktadır. Form alanlarında yalnızca gerekli bilgilerin paylaşılması önerilir. Hassas veya gereğinden fazla kişisel veri iletilmemesi önem taşır.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                14. Güncelleme ve Değişiklik Hakkı
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                Sommario Coffee Company, işbu aydınlatma metnini; mevzuat değişiklikleri, operasyonel ihtiyaçlar, teknik gelişmeler veya veri işleme süreçlerindeki güncellemeler doğrultusunda revize etme hakkını saklı tutar. Güncel metin, internet sitesinde yayımlandığı tarihten itibaren geçerli olur.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#231F20]">
                15. Son Hüküm
              </h2>
              <p className="text-[15px] md:text-[17px] leading-8 font-light">
                İnternet sitemizi kullanmanız, iletişim kurmanız, başvuru yapmanız veya dijital kanallarımız üzerinden bizimle etkileşime geçmeniz halinde, kişisel verilerinizin bu aydınlatma metninde belirtilen kapsamda işlenebileceği konusunda bilgilendirilmiş sayılırsınız. Kişisel verilerinizin korunmasına ilişkin sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz.
              </p>
            </section>
          </div>
        </section>
      </main>
    );
  }