/**
 * Mongolian in the traditional script (Mongol bichig, Unicode U+1800–U+18AF).
 *
 * ⚠️  MACHINE DRAFT, ONE REVIEW PASS. An AI model drafted it from the Cyrillic in
 * mn.ts, aiming for classical orthography (e.g. Нүүр → niγur, холбоо → qolboγ-a)
 * rather than letter-by-letter transliteration. One outside review (2026-11-26)
 * caught a meaning error (kegür is "corpse", not "bridge") and a dozen spelling
 * and suffix fixes. All are applied except one, marked "Check:" at home.values.
 * A fluent reader should still sign it off before visitors see it.
 *
 * Only the nav, footer and home page are drafted (plus the event-card labels
 * the home page shows). Every other key falls back to the Cyrillic text in
 * mn.ts, so the rest of the site reads as Cyrillic Mongolian, not English.
 *
 * Each entry has a comment with the Cyrillic source and a romanized classical
 * spelling (roughly Lessing's: γ = back g, ǰ = j, č = ch, š = sh; "-" is the
 * Mongolian vowel separator before a separated final -a/-e; "+" is a case
 * suffix; "¹" is FVS1). "Check:" marks open questions; "Note:" is background.
 *
 * Invisible characters matter and are written as escapes:
 *   \u202F  narrow no-break space, joins a case suffix to its word (ᠨᠣᠮ ᠤᠨ)
 *   \u180E  Mongolian vowel separator, before a separated final -a/-e (ᠠᠷᠭ᠎ᠠ)
 *   \u180B  free variation selector 1, picks a letter's alternate form (final d in loanwords)
 */
import type { Translations } from "./en.ts";
import mn from "./mn.ts";

const drafted = {
  // page metadata
  // Өлзий холбоо  ·  ölǰei qolboγ-a
  "meta.siteName": "ᠥᠯᠵᠡᠢ ᠬᠣᠯᠪᠣᠭ\u180Eᠠ",

  // nav
  // Нүүр  ·  niγur
  "nav.home": "ᠨᠢᠭᠤᠷ",
  // Арга хэмжээ  ·  arγ-a kemǰiy-e
  "nav.events": "ᠠᠷᠭ\u180Eᠠ ᠬᠡᠮᠵᠢᠶ\u180Eᠡ",
  // Номын сан  ·  nom+un sang
  "nav.library": "ᠨᠣᠮ\u202Fᠤᠨ ᠰᠠᠩ",
  // Дэмжлэг  ·  demǰilge
  "nav.support": "ᠳᠡᠮᠵᠢᠯᠭᠡ",
  // Холбоо барих  ·  qolboγ-a bariqu
  "nav.contact": "ᠬᠣᠯᠪᠣᠭ\u180Eᠠ ᠪᠠᠷᠢᠬᠤ",
  // Нэвтрэх  ·  nebterekü
  "nav.signIn": "ᠨᠡᠪᠲᠡᠷᠡᠬᠦ",
  // Гарах  ·  γarqu
  "nav.signOut": "ᠭᠠᠷᠬᠤ",
  // Цэс  ·  čes  ·  Note: čese is the stricter classical form; either is understood
  "nav.menu": "ᠴᠡᠰ",

  // footer
  // Монголчуудын нийгэмлэгийг дэмжих зорилготой ашгийн бус байгууллага.
  // mongγolčud+un neyigemlig+i demǰikü ǰorilγatai asiγ+un busu bayiγululγ-a.
  "footer.about": "ᠮᠣᠩᠭᠣᠯᠴᠤᠳ\u202Fᠤᠨ ᠨᠡᠶᠢᠭᠡᠮᠯᠢᠭ\u202Fᠢ ᠳᠡᠮᠵᠢᠬᠦ ᠵᠣᠷᠢᠯᠭᠠᠲᠠᠢ ᠠᠰᠢᠭ\u202Fᠤᠨ ᠪᠤᠰᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ\u180Eᠠ᠃",
  // Хурдан холбоосууд  ·  qurdun qolboγasud
  "footer.quickLinks": "ᠬᠤᠷᠳᠤᠨ ᠬᠣᠯᠪᠣᠭᠠᠰᠤᠳ",
  // Биднийг дагах  ·  bidan+i daγaqu
  "footer.followUs": "ᠪᠢᠳᠠᠨ\u202Fᠢ ᠳᠠᠭᠠᠬᠤ",
  // Бүх эрх хуулиар хамгаалагдсан.  ·  bükü erke qauli+bar qamaγalaγdaγsan.
  "footer.rights": "ᠪᠦᠬᠦ ᠡᠷᠬᠡ ᠬᠠᠤᠯᠢ\u202Fᠪᠠᠷ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠳᠠᠭᠰᠠᠨ᠃",
  // Нууцлалын бодлого  ·  niγučalal+un bodolγ-a
  "footer.privacy": "ᠨᠢᠭᠤᠴᠠᠯᠠᠯ\u202Fᠤᠨ ᠪᠣᠳᠣᠯᠭ\u180Eᠠ",

  // home
  // Монгол & Нидерланд
  // mongγol ba nidērland¹
  // Note: '&' written as ba; loanword ē and final d with FVS1
  "home.eyebrow": "ᠮᠣᠩᠭᠣᠯ ᠪᠠ ᠨᠢᠳᠧᠷᠯᠠᠨᠳ\u180B",
  // Хоёр соёлын хооронд гүүр бүтээх нь
  // qoyar soyol+un qoγorondu kögürge bütügekü ni
  // Note: kögürge is 'bridge'; the first draft had kegür, which means 'corpse'
  "home.headline": "ᠬᠣᠶᠠᠷ ᠰᠣᠶᠣᠯ\u202Fᠤᠨ ᠬᠣᠭᠣᠷᠣᠨᠳᠤ ᠬᠥᠭᠦᠷᠭᠡ ᠪᠦᠲᠦᠭᠡᠬᠦ ᠨᠢ",
  // Өлзий холбоо нь соёлын солилцоо, хамтын ажиллагаа болон хамт олноор дамжуулан Монгол, Нидерландын иргэдийг холбодог ашгийн бус байгууллага юм.
  // ölǰei qolboγ-a ni soyol+un solilčaγ-a, qamtu+yin aǰillaγ-a bolun qamtu olan+iyar damǰiγulun mongγol, nidērland¹+un irged+i qolbodaγ asiγ+un busu bayiγululγ-a yum.
  "home.sub": "ᠥᠯᠵᠡᠢ ᠬᠣᠯᠪᠣᠭ\u180Eᠠ ᠨᠢ ᠰᠣᠶᠣᠯ\u202Fᠤᠨ ᠰᠣᠯᠢᠯᠴᠠᠭ\u180Eᠠ᠂ ᠬᠠᠮᠲᠤ\u202Fᠶᠢᠨ ᠠᠵᠢᠯᠯᠠᠭ\u180Eᠠ ᠪᠣᠯᠤᠨ ᠬᠠᠮᠲᠤ ᠣᠯᠠᠨ\u202Fᠢᠶᠠᠷ ᠳᠠᠮᠵᠢᠭᠤᠯᠤᠨ ᠮᠣᠩᠭᠣᠯ᠂ ᠨᠢᠳᠧᠷᠯᠠᠨᠳ\u180B\u202Fᠤᠨ ᠢᠷᠭᠡᠳ\u202Fᠢ ᠬᠣᠯᠪᠣᠳᠠᠭ ᠠᠰᠢᠭ\u202Fᠤᠨ ᠪᠤᠰᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠭ\u180Eᠠ ᠶᠤᠮ᠃",
  // Удахгүй болох арга хэмжээнүүд
  // udaqu ügei bolqu arγ-a kemǰiy-e
  // Note: plural -нүүд dropped, which is natural in classical Mongolian
  "home.ctaEvents": "ᠤᠳᠠᠬᠤ ᠦᠭᠡᠢ ᠪᠣᠯᠬᠤ ᠠᠷᠭ\u180Eᠠ ᠬᠡᠮᠵᠢᠶ\u180Eᠡ",
  // Холбоо барих  ·  qolboγ-a bariqu
  "home.ctaContact": "ᠬᠣᠯᠪᠣᠭ\u180Eᠠ ᠪᠠᠷᠢᠬᠤ",
  // Эрхэм зорилго  ·  erkim ǰorilγ-a
  "home.mission": "ᠡᠷᠬᠢᠮ ᠵᠣᠷᠢᠯᠭ\u180Eᠠ",
  // 2008 онд байгуулагдсан бид Монгол болон Нидерландын хооронд гүүр болон ажилладаг бөгөөд бидний алсын харааг хуваалцаж, хамтран ажиллахыг хүссэн хүн бүрд нээлттэй.
  // 2008 on+du bayiγuluγdaγsan bide mongγol bolun nidērland¹+un qoγorondu kögürge bolun aǰilladaγ büged bidan+u alus+un qaraγ-a+yi qubiyalčaǰu, qamturan aǰillaqu+yi küsegsen kümün büri+dü negeltetei.
  "home.missionText": "2008 ᠣᠨ\u202Fᠳᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠳᠠᠭᠰᠠᠨ ᠪᠢᠳᠡ ᠮᠣᠩᠭᠣᠯ ᠪᠣᠯᠤᠨ ᠨᠢᠳᠧᠷᠯᠠᠨᠳ\u180B\u202Fᠤᠨ ᠬᠣᠭᠣᠷᠣᠨᠳᠤ ᠬᠥᠭᠦᠷᠭᠡ ᠪᠣᠯᠤᠨ ᠠᠵᠢᠯᠯᠠᠳᠠᠭ ᠪᠦᠭᠡᠳ ᠪᠢᠳᠠᠨ\u202Fᠤ ᠠᠯᠤᠰ\u202Fᠤᠨ ᠬᠠᠷᠠᠭ\u180Eᠠ\u202Fᠶᠢ ᠬᠤᠪᠢᠶᠠᠯᠴᠠᠵᠤ᠂ ᠬᠠᠮᠲᠤᠷᠠᠨ ᠠᠵᠢᠯᠯᠠᠬᠤ\u202Fᠶᠢ ᠬᠦᠰᠡᠭᠰᠡᠨ ᠬᠦᠮᠦᠨ ᠪᠦᠷᠢ\u202Fᠳᠦ ᠨᠡᠭᠡᠯᠲᠡᠲᠡᠢ᠃",
  // Үнэт зүйлс
  // ünetü ǰüil
  // Check: kept singular. The review rules out ǰüils and suggests ǰüil + NNBSP + üd, but plural -üd is normally written attached (ǰüilüd), so let a fluent reader pick
  "home.values": "ᠦᠨᠡᠲᠦ ᠵᠦᠢᠯ",
  // Хүндэтгэл, шударга байдал, хамтын ажиллагаа бол бидний гол үнэт зүйл юм. Бид олон янз байдлын хүчинд итгэдэг бөгөөд бүх гишүүдэд ээлтэй, хүртээмжтэй орчныг бүрдүүлэхийг эрмэлздэг.
  // kündüdkel, sidurγu bayidal, qamtu+yin aǰillaγ-a bol bidan+u γool ünetü ǰüil yum. bide olan yangǰu bayidal+un küčün+dü itegedeg büged bükü gesigüd+tü egeltei, kürtegemǰitei orčin+i büridügülkü+yi ermelǰedeg.
  "home.valuesText": "ᠬᠦᠨᠳᠦᠳᠬᠡᠯ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠠᠶᠢᠳᠠᠯ᠂ ᠬᠠᠮᠲᠤ\u202Fᠶᠢᠨ ᠠᠵᠢᠯᠯᠠᠭ\u180Eᠠ ᠪᠣᠯ ᠪᠢᠳᠠᠨ\u202Fᠤ ᠭᠣᠣᠯ ᠦᠨᠡᠲᠦ ᠵᠦᠢᠯ ᠶᠤᠮ᠃ ᠪᠢᠳᠡ ᠣᠯᠠᠨ ᠶᠠᠩᠵᠤ ᠪᠠᠶᠢᠳᠠᠯ\u202Fᠤᠨ ᠬᠦᠴᠦᠨ\u202Fᠳᠦ ᠢᠲᠡᠭᠡᠳᠡᠭ ᠪᠦᠭᠡᠳ ᠪᠦᠬᠦ ᠭᠡᠰᠢᠭᠦᠳ\u202Fᠲᠦ ᠡᠭᠡᠯᠲᠡᠢ᠂ ᠬᠦᠷᠲᠡᠭᠡᠮᠵᠢᠲᠡᠢ ᠣᠷᠴᠢᠨ\u202Fᠢ ᠪᠦᠷᠢᠳᠦᠭᠦᠯᠬᠦ\u202Fᠶᠢ ᠡᠷᠮᠡᠯᠵᠡᠳᠡᠭ᠃",
  // Удирдах зөвлөлийн гишүүд  ·  uduridqu ǰöblel+ün gesigüd
  "home.board": "ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ\u202Fᠦᠨ ᠭᠡᠰᠢᠭᠦᠳ",
  // Манай удирдах зөвлөл өөрсдийн туршлага, мэдлэгээ ашиглан санаачилгуудыг маань чиглүүлж, эрхэм зорилго болон үнэт зүйлдээ үнэнч байхад тусалдаг.
  // manu uduridqu ǰöblel öbesüd+ün tursilγ-a, medelge+ben asiγlan sanaγačilγ-a+yi mani čiglegülǰü, erkim ǰorilγ-a bolun ünetü ǰüil+degen ünenči bayiqu+du tusaladaγ.
  "home.boardText": "ᠮᠠᠨᠤ ᠤᠳᠤᠷᠢᠳᠬᠤ ᠵᠥᠪᠯᠡᠯ ᠥᠪᠡᠰᠦᠳ\u202Fᠦᠨ ᠲᠤᠷᠰᠢᠯᠭ\u180Eᠠ᠂ ᠮᠡᠳᠡᠯᠭᠡ\u202Fᠪᠡᠨ ᠠᠰᠢᠭᠯᠠᠨ ᠰᠠᠨᠠᠭᠠᠴᠢᠯᠭ\u180Eᠠ\u202Fᠶᠢ ᠮᠠᠨᠢ ᠴᠢᠭᠯᠡᠭᠦᠯᠵᠦ᠂ ᠡᠷᠬᠢᠮ ᠵᠣᠷᠢᠯᠭ\u180Eᠠ ᠪᠣᠯᠤᠨ ᠦᠨᠡᠲᠦ ᠵᠦᠢᠯ\u202Fᠳᠡᠭᠡᠨ ᠦᠨᠡᠨᠴᠢ ᠪᠠᠶᠢᠬᠤ\u202Fᠳᠤ ᠲᠤᠰᠠᠯᠠᠳᠠᠭ᠃",
  // Бидний үйл ажиллагаа  ·  bidan+u üile aǰillaγ-a
  "home.offerHeading": "ᠪᠢᠳᠠᠨ\u202Fᠤ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ\u180Eᠠ",
  // Үнэгүй номын сан  ·  üne ügei nom+un sang
  "home.offerLibraryTitle": "ᠦᠨᠡ ᠦᠭᠡᠢ ᠨᠣᠮ\u202Fᠤᠨ ᠰᠠᠩ",
  // Манай хамт олны хандивласан номоос захиалж, үнэ төлбөргүй аваарай.
  // manu qamtu olan+u qandiblaγsan nom+ača ǰakiyalaǰu, üne tölübüri ügei abuγarai.
  "home.offerLibraryText": "ᠮᠠᠨᠤ ᠬᠠᠮᠲᠤ ᠣᠯᠠᠨ\u202Fᠤ ᠬᠠᠨᠳᠢᠪᠯᠠᠭᠰᠠᠨ ᠨᠣᠮ\u202Fᠠᠴᠠ ᠵᠠᠬᠢᠶᠠᠯᠠᠵᠤ᠂ ᠦᠨᠡ ᠲᠥᠯᠦᠪᠦᠷᠢ ᠦᠭᠡᠢ ᠠᠪᠤᠭᠠᠷᠠᠢ᠃",
  // Хүүхдэд зориулсан үлгэрийн цаг  ·  keüked+tü ǰoriγuluγsan üliger+ün čaγ
  "home.offerStoryTitle": "ᠬᠡᠦᠬᠡᠳ\u202Fᠲᠦ ᠵᠣᠷᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠦᠯᠢᠭᠡᠷ\u202Fᠦᠨ ᠴᠠᠭ",
  // Сайн дурын үлгэрчид хүүхдүүдэд үлгэр уншиж, тоглоом тоглуулж, воркшоп хийдэг.
  // sayin dur-a+yin üligerčid keüked+tü üliger ungsiǰu, toγlaγam toγlaγulǰu, worKšop kideg.
  // Note: воркшоп kept as a loanword; surγalta is a native alternative
  "home.offerStoryText": "ᠰᠠᠶᠢᠨ ᠳᠤᠷ\u180Eᠠ\u202Fᠶᠢᠨ ᠦᠯᠢᠭᠡᠷᠴᠢᠳ ᠬᠡᠦᠬᠡᠳ\u202Fᠲᠦ ᠦᠯᠢᠭᠡᠷ ᠤᠩᠰᠢᠵᠤ᠂ ᠲᠣᠭᠯᠠᠭᠠᠮ ᠲᠣᠭᠯᠠᠭᠤᠯᠵᠤ᠂ ᠸᠣᠷᠺᠱᠣᠫ ᠬᠢᠳᠡᠭ᠃",
  // Ном хандивлах  ·  nom qandiblaqu
  "home.offerDonateTitle": "ᠨᠣᠮ ᠬᠠᠨᠳᠢᠪᠯᠠᠬᠤ",
  // Танд хэрэггүй болсон ном байна уу? Манай номын санд шинэ амьдрал бэлэглээрэй.
  // tan+du kereg ügei boluγsan nom bayin-a uu? manu nom+un sang+du sin-e amidural beleglegerei.
  "home.offerDonateText": "ᠲᠠᠨ\u202Fᠳᠤ ᠬᠡᠷᠡᠭ ᠦᠭᠡᠢ ᠪᠣᠯᠤᠭᠰᠠᠨ ᠨᠣᠮ ᠪᠠᠶᠢᠨ\u180Eᠠ ᠤᠤ? ᠮᠠᠨᠤ ᠨᠣᠮ\u202Fᠤᠨ ᠰᠠᠩ\u202Fᠳᠤ ᠰᠢᠨ\u180Eᠡ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠪᠡᠯᠡᠭᠯᠡᠭᠡᠷᠡᠢ᠃",
  // Дараагийн арга хэмжээ  ·  daraγ-a+yin arγ-a kemǰiy-e
  "home.nextEventHeading": "ᠳᠠᠷᠠᠭ\u180Eᠠ\u202Fᠶᠢᠨ ᠠᠷᠭ\u180Eᠠ ᠬᠡᠮᠵᠢᠶ\u180Eᠡ",
  // Бүх арга хэмжээг үзэх  ·  bükü arγ-a kemǰiy-e+yi üǰekü
  "home.allEvents": "ᠪᠦᠬᠦ ᠠᠷᠭ\u180Eᠠ ᠬᠡᠮᠵᠢᠶ\u180Eᠡ\u202Fᠶᠢ ᠦᠵᠡᠬᠦ",
  // Бидний тухай  ·  bidan+u tuqai
  "home.aboutHeading": "ᠪᠢᠳᠠᠨ\u202Fᠤ ᠲᠤᠬᠠᠢ",

  // event card and empty state (shown on the home page)
  // Одоогоор удахгүй болох арга хэмжээ байхгүй байна.
  // edüge+ber udaqu ügei bolqu arγ-a kemǰiy-e bayiqu ügei bayin-a.
  "events.empty": "ᠡᠳᠦᠭᠡ\u202Fᠪᠡᠷ ᠤᠳᠠᠬᠤ ᠦᠭᠡᠢ ᠪᠣᠯᠬᠤ ᠠᠷᠭ\u180Eᠠ ᠬᠡᠮᠵᠢᠶ\u180Eᠡ ᠪᠠᠶᠢᠬᠤ ᠦᠭᠡᠢ ᠪᠠᠶᠢᠨ\u180Eᠠ᠃",
  // Сайн дурын үлгэрчээр бүртгүүлэх  ·  sayin dur-a+yin üligerči+ber büridkegülkü
  "eventCard.volunteer": "ᠰᠠᠶᠢᠨ ᠳᠤᠷ\u180Eᠠ\u202Fᠶᠢᠨ ᠦᠯᠢᠭᠡᠷᠴᠢ\u202Fᠪᠡᠷ ᠪᠦᠷᠢᠳᠬᠡᠭᠦᠯᠬᠦ",
  // Энэ арга хэмжээний үлгэрчийн суудал дүүрсэн байна.
  // ene arγ-a kemǰiy-e+yin üligerči+yin saγudal dügürügsen bayin-a.
  "eventCard.leadTaken": "ᠡᠨᠡ ᠠᠷᠭ\u180Eᠠ ᠬᠡᠮᠵᠢᠶ\u180Eᠡ\u202Fᠶᠢᠨ ᠦᠯᠢᠭᠡᠷᠴᠢ\u202Fᠶᠢᠨ ᠰᠠᠭᠤᠳᠠᠯ ᠳᠦᠭᠦᠷᠦᠭᠰᠡᠨ ᠪᠠᠶᠢᠨ\u180Eᠠ᠃",
  // Огноо  ·  oγnoγ-a
  "eventCard.date": "ᠣᠭᠨᠣᠭ\u180Eᠠ",
  // Цаг  ·  čaγ
  "eventCard.time": "ᠴᠠᠭ",
  // Байршил  ·  bayirisil
  "eventCard.location": "ᠪᠠᠶᠢᠷᠢᠰᠢᠯ",
} satisfies Partial<Translations>;

const mnMong: Translations = { ...mn, ...drafted };

export default mnMong;
