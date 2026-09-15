import { Language, ParticipantGroup } from "../types/enums";

export const DEMOGRAPHICS_DATA = {
  [Language.TR]: {
    consent: {
      [ParticipantGroup.STANDARD]:
        "Bu çalışmaya katıldığınız için teşekkür ederiz. Bu çalışmada, insanların farklı konuşma biçimlerini nasıl değerlendirdiklerini araştırıyoruz. <br><br> Çalışma kapsamında öncelikle dilsel ve demografik geçmişinizle ilgili kısa bir anket dolduracaksınız. Ardından farklı konuşmacılara ait kısa ses kayıtlarını dinleyecek ve bu kişilerin aksanlarını ve çeşitli özelliklerini değerlendireceksiniz. Çalışmaya katılım genellikle yaklaşık 20–25 dakika sürmektedir. <br><br> Her beş katılımcıdan biri 25 € değerinde GoGift hediye çeki kazanacaktır. Çekilişe katılmak isterseniz, çalışmanın sonunda isteğe bağlı olarak e-posta adresinizi girebilirsiniz. E-posta adresiniz yalnızca hediye çekinin gönderilmesi amacıyla kullanılacaktır. <br><br> Bu çalışmaya katılımla ilişkili bir fiziksel veya duygusal risk bulunmamaktadır. Ses kayıtlarını dinlemek, sıradan bir telefon görüşmesini dinlemekle karşılaştırılabilir. Katılımınız, insanların konuşmaları nasıl algıladığı ve değerlendirdiği konusunda daha fazla bilgi edinmemize yardımcı olacaktır. <br><br> Çalışmaya katılım tamamen gönüllüdür. Çalışmayı dilediğiniz zaman sonlandırabilirsiniz; bunun için herhangi bir gerekçe göstermeniz gerekmez ve bu durum sizin için hiçbir olumsuz sonuç doğurmaz. <br><br> Yanıtlarınız yalnızca bilimsel amaçlarla toplanacak ve analiz edilecektir. Verileriniz güvenli bir şekilde saklanacak, gizli tutulacak ve yürürlükteki veri koruma düzenlemelerine uygun olarak işlenecektir. Kişisel verileriniz anonimleştirilecektir; anonimleştirildikten sonra verileriniz artık sizinle ilişkilendirilemez. Verilere yalnızca araştırma ekibi erişebilecektir. <br><br> Çalışmaya katılmaya ve verilerinizin kullanılmasına ilişkin onayınızı dilediğiniz zaman geri çekebilirsiniz. Bu durumda verileriniz silinecek ve kullanılmayacaktır. <br><br> Çalışma hakkında sorularınız varsa lütfen şu kişiyle iletişime geçin: <br> Aylin Coşkun Kunduz, Konstanz Üniversitesi, aylin.coskun-kunduz@uni-konstanz.de <br><br> Katılımcı olarak haklarınızla ilgili endişeleriniz varsa Konstanz Üniversitesi Etik Kurulu (Ethik-Kommission der Universität Konstanz) ile iletişime geçebilirsiniz: <br> Universitätsstraße 10, 78464 Konstanz, Almanya, Tel.: +49 7531 88-5037, Faks: +49 7531 88-5039. Daha fazla bilgi için Etik Kurulu’nun web sayfasına bakabilirsiniz.",
      checkbox: 
        "Yukarıdaki bilgileri okudum ve anladım. 18 yaşından büyük olduğumu teyit ediyorum ve çalışmaya gönüllü olarak katılmayı kabul ediyorum.",
    }, 
    questions: { 
      initials: "Ad ve soyadınızın baş harfleri nelerdir?",
      age: "Doğum tarihiniz nedir?",
      gender: {
        title: "Cinsiyetiniz nedir?",
        options: ["Kadın", "Erkek"], 
      }, 
      mother_tongue: "Ana diliniz Türkçe mi?",
      other_native_languages: "Türkçe dışında başka bir ana diliniz var mı?",
      other_native_languages_text: "Diğer ana dil(ler)iniz hangisi?",
      additional_languages: "Ana dil(ler)iniz dışında başka bir dil konuşuyor musunuz?",
      list_languages: {
        title: 
        "Ana dil(ler)iniz dışında konuştuğunuz dilleri listeleyin ve her dil için genel yeterliliğinizi 1 ile 10 arasında değerlendirin.",
        language: "Dil",
        proficiency: "Genel yeterlilik (1 = çok düşük, 10 = çok yüksek)", 
        add_language: "Dil ekle",
        remove_language: "Dili kaldır",
      },
      birth_country: "Hangi ülkede doğdunuz?",
      birth_city: "Hangi şehirde doğdunuz?",
      lived_abroad_long: "Yurt dışında 6 aydan daha uzun süre yaşadınız mı?",
      lived_abroad_country: "Hangi ülke veya ülkelerde yaşadınız? Lütfen bu ülkelerde hangi yıllar arasında yaşadığınızı da belirtiniz.",
      current_country: "Şu anda hangi ülkede yaşıyorsunuz?",
      regional_variety_familiarity: "Türkiye'deki bölgesel aksan veya lehçelere aşina mısınız?",
      regional_varieties_text: "Hangi bölgesel aksan veya lehçelere aşinasınız?", 
      education: {
        title: "En yüksek tamamladığınız eğitim seviyesi nedir?",
        options: [
          "İlkokul",
          "Ortaokul",
          "Lise",
          "Ön lisans",
          "Lisans",
          "Yüksek lisans",
          "Doktora"
        ],
      },
      department: "Şu anda okuduğunuz / mezun olduğunuz bölüm nedir?",
    },
    answers: {
      yes: "Evet",
      some: "Kısmen",
      no: "Hayır",
    },
  },
  [Language.DE]: {
    consent: {
      [ParticipantGroup.STANDARD]:
        "Vielen Dank für Ihr Interesse an dieser Studie. In dieser Studie untersuchen wir, wie Menschen gesprochene Sprache wahrnehmen. <br><br> Im Rahmen der Studie werden Sie zunächst einen kurzen Fragebogen zu Ihrem sprachlichen und demografischen Hintergrund ausfüllen. Anschließend hören Sie kurze Audioaufnahmen verschiedener Sprecherinnen und Sprecher und bewerten deren Akzent sowie verschiedene Eigenschaften der sprechenden Personen. Die Teilnahme dauert in der Regel etwa 20–25 Minuten. <br><br> Jede fünfte teilnehmende Person erhält einen GoGift-Gutschein im Wert von 25 €. Wenn Sie bei der Vergabe des Gutscheins berücksichtigt werden möchten, können Sie am Ende der Studie freiwillig Ihre E-Mail-Adresse angeben. Ihre E-Mail-Adresse wird ausschließlich für die Vergabe des Gutscheins verwendet. <br><br> Mit der Teilnahme an dieser Studie sind keine besonderen körperlichen oder emotionalen Risiken verbunden. Das Anhören der Audioaufnahmen ist mit dem Anhören eines gewöhnlichen Telefongesprächs vergleichbar. Mit Ihrer Teilnahme unterstützen Sie die wissenschaftliche Forschung dazu, wie Menschen gesprochene Sprache wahrnehmen und verarbeiten. <br><br> Die Teilnahme an der Studie ist vollständig freiwillig. Sie können die Studie jederzeit beenden; dafür müssen Sie keine Begründung angeben, und Ihnen entstehen daraus keinerlei Nachteile. <br><br> Ihre Antworten werden ausschließlich zu wissenschaftlichen Zwecken erhoben und analysiert. Ihre Daten werden sicher gespeichert, vertraulich behandelt und gemäß den geltenden Datenschutzbestimmungen verarbeitet. Persönliche Daten werden anonymisiert; nach der Anonymisierung können Ihre Daten nicht mehr Ihrer Person zugeordnet werden. Auf die Daten hat ausschließlich das Forschungsteam Zugriff. <br><br> Sie können Ihre Einwilligung zur Teilnahme und zur Nutzung Ihrer Daten jederzeit widerrufen. In diesem Fall werden Ihre Daten gelöscht und nicht verwendet. <br><br> Wenn Sie Fragen zu der Studie haben, wenden Sie sich bitte an: Aylin Coşkun Kunduz, Universität Konstanz, aylin.coskun-kunduz@uni-konstanz.de <br> Wenn Sie Bedenken hinsichtlich Ihrer Rechte als Teilnehmer*in haben, können Sie sich an die Ethik-Kommission der Universität Konstanz wenden: Universitätsstraße 10, 78464 Konstanz, Deutschland, Tel.: +49 7531 88-5037, Fax: +49 7531 88-5039. Weitere Informationen finden Sie auf der Webseite der Ethik-Kommission.", 
      checkbox: 
        "Ich habe die obigen Informationen gelesen und verstanden. Ich bestätige, dass ich mindestens 18 Jahre alt bin und erkläre mich freiwillig mit der Teilnahme an der Studie einverstanden.",
    },
    questions: {
      initials: "Was sind die Initialen Ihres Vor- und Nachnamens?",
      age: "Wie lautet Ihr Geburtsdatum?",
      gender: {
        title: "Was ist Ihr Geschlecht?",
        options: ["Weiblich", "Männlich"],
      },
      mother_tongue: "Ist Deutsch Ihre Muttersprache?",
      other_native_languages: "Haben Sie außer Deutsch eine weitere Muttersprache?",
      other_native_languages_text: "Welche weitere(n) Muttersprache(n) haben Sie?",
      additional_languages: "Sprechen Sie außer Ihrer Muttersprache noch eine weitere Sprache?",
      list_languages: { 
        title:
        "Listen Sie alle Sprachen auf, die Sie außer Ihrer Muttersprache sprechen, und bewerten Sie Ihre allgemeinen Sprachkenntnisse für jede Sprache auf einer Skala von 1 bis 10.",
        language: "Sprache",
        proficiency: "Allgemeine Sprachkenntnisse (1 = sehr gering, 10 = sehr hoch)",
        add_language: "Sprache hinzufügen",
        remove_language: "Sprache entfernen", 
      },
      birth_country: "In welchem Land wurden Sie geboren?",
      birth_city: "In welcher Stadt wurden Sie geboren?",
      lived_abroad_long: "Haben Sie länger als sechs Monate im Ausland gelebt?",
      lived_abroad_country: "In welchem Land oder in welchen Ländern haben Sie gelebt? Bitte geben Sie auch an, in welchen Jahren Sie dort gelebt haben.",
      current_country: "In welchem Land leben Sie derzeit?", 
      regional_variety_familiarity: "Sind Sie mit regionalen Akzenten oder Dialekten aus Deutschland vertraut?",
      regional_varieties_text: "Mit welchen regionalen Akzenten oder Dialekten sind Sie vertraut?",
      education: { 
        title: "Höchster Bildungsabschluss:",
        options: [
          "Grundschule",
          "Haupt-/Realschule",
          "Abitur",
          "Ausbildung",
          "Bachelor",
          "Master",
          "Promotion", 
        ],
      },
      department:
        "In welchem Fach studieren Sie oder haben Sie Ihr Studium abgeschlossen?",
    },
    answers: {
      yes: "Ja",
      some: "Mit einigen", 
      no: "Nein",
    },
  },
}; 
