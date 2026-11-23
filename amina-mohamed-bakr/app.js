
    // ---------------- DATA INVENTORY ----------------
    const DUAS_LIST = [
      {
        id: 'd1',
        cat: 'mercy',
        tag: 'الرحمة ونور القبر',
        text: 'اللهم اغفر لأمتك الحاجة أمينة محمد بكر وارحمها، وعافها واعفُ عنها، وأكرم نزلها ووسّع مدخلها، واغسلها بالماء والثلج والبرد، ونقِّها من الخطايا كما يُنقّى الثوب الأبيض من الدنس.'
      },
      {
        id: 'd2',
        cat: 'mercy',
        tag: 'الرحمة ونور القبر',
        text: 'اللهم أنزل على قبر الحاجة أمينة محمد بكر الضياء والنور والفسحة والسرور، واجعل قبرها روضةً من رياض الجنة تفتح لها فيها نافذة إلى مقعدها في الفردوس الأعلى.'
      },
      {
        id: 'd3',
        cat: 'mercy',
        tag: 'الرحمة ونور القبر',
        text: 'اللهم آنس وحشة الحاجة أمينة محمد بكر، وآمن روعتها يوم البعث والنشور، واجعل ملائكة الرحمة تطوف حولها بالبشرى والرضوان يا أرحم الراحمين.'
      },
      {
        id: 'd4',
        cat: 'mercy',
        tag: 'الرحمة ونور القبر',
        text: 'اللهم إنها في ذمتك وحبل جوارك، فقِ أمتك الحاجة أمينة محمد بكر فتنة القبر وعذابه، وأنت أهل الوفاء والحق فاغفر لها وارحمها إنك أنت الغفور الرحيم.'
      },
      {
        id: 'd5',
        cat: 'jannah',
        tag: 'الفردوس الأعلى',
        text: 'اللهم أبدل الحاجة أمينة محمد بكر داراً خيراً من دارها، وأهلاً خيراً من أهلها، وأدخلها الفردوس الأعلى بغير حساب ولا سابقة عذاب، ومتّعها بلذة النظر إلى وجهك الكريم.'
      },
      {
        id: 'd6',
        cat: 'jannah',
        tag: 'الفردوس الأعلى',
        text: 'اللهم اسقِ الحاجة أمينة محمد بكر من حوض نبيك المصطفى ﷺ شربةً هنيئةً مريئةً لا تظمأ بعدها أبداً، واحشرها في زمرة الصديقين والأبرار.'
      },
      {
        id: 'd7',
        cat: 'jannah',
        tag: 'الفردوس الأعلى',
        text: 'اللهم ابْنِ للحاجة أمينة محمد بكر بيتاً عندك في الجنة، واجعل ما قدّمت من خيرٍ وصبرٍ ومودةٍ درجاتٍ عُلى في جنتك ورضوانك.'
      },
      {
        id: 'd8',
        cat: 'jannah',
        tag: 'الفردوس الأعلى',
        text: 'اللهم ظلّ الحاجة أمينة محمد بكر تحت ظل عرشك يوم لا ظل إلا ظلك، وبيّض وجهها يوم تبيضّ وجوه، وثقّل بالصالحات ميزانها.'
      },
      {
        id: 'd9',
        cat: 'family',
        tag: 'من أولادها وأحبابها',
        text: 'اللهم إن عبادك وأولادها وكل من عرف الحاجة أمينة محمد بكر يشهدون بطيب قلبها وحنانها وجبرها للخواطر؛ فاقبل اللهم شهادتنا فيها واجعلها عندك من المرحومين المجبورين.'
      },
      {
        id: 'd10',
        cat: 'family',
        tag: 'من أولادها وأحبابها',
        text: 'اللهم اجزِ الحاجة أمينة محمد بكر عن أولادها وأهلها وكل من وقفت بجانبهم خير الجزاء، واجعل كل دعوةٍ صادقة من محبيها هديةً منيرة تصل إليها في هذه الساعة.'
      },
      {
        id: 'd11',
        cat: 'family',
        tag: 'من أولادها وأحبابها',
        text: 'اللهم اربط على قلوب أولاد الحاجة أمينة محمد بكر وأحبابها بالصبر والسكينة، وبارك في ذريتها، واجمعنا بها جميعاً في مستقر رحمتك على سررٍ متقابلين.'
      },
      {
        id: 'd12',
        cat: 'family',
        tag: 'من أولادها وأحبابها',
        text: 'اللهم كما جمعت الحاجة أمينة محمد بكر شمل أحبابها في الدنيا بالمودة والوجه البشوش، اجمع شملنا بها في جنات النعيم حيث لا فراق ولا حزن.'
      },
      {
        id: 'd13',
        cat: 'short',
        tag: 'أدعية قصيرة ويوم الجمعة',
        text: 'اللهم في كل ساعة استجابة، وفي نفحات يوم الجمعة المبارك، أمطر على قبر الحاجة أمينة محمد بكر سحائب رحمتك ومغفرتك ورضوانك.'
      },
      {
        id: 'd14',
        cat: 'short',
        tag: 'أدعية قصيرة ويوم الجمعة',
        text: 'اللهم ارحم الحاجة أمينة محمد بكر رحمةً تسع السماوات والأرض، واجعل ذكراها الطيبة صدقةً لا ينقطع أجرها.'
      },
      {
        id: 'd15',
        cat: 'short',
        tag: 'أدعية قصيرة ويوم الجمعة',
        text: 'يا حيّ يا قيّوم، برحمتك نستغيث أن تغفر للحاجة أمينة محمد بكر، وترفع درجتها في المهديين، وتفسح لها في قبرها مدّ بصرها.'
      },
      {
        id: 'd16',
        cat: 'short',
        tag: 'أدعية قصيرة ويوم الجمعة',
        text: 'اللهم عامِل الحاجة أمينة محمد بكر بما أنت أهله من الجود والإحسان، واجعل ما لاقت من تعب الدنيا كفّارةً ورفعةً في درجات الجنان.'
      }
    ];

    const MUNAJAT_NAMES = [
      {
        id: 'mn1',
        name: 'يا أرحمَ الراحمين',
        subtitle: 'سعة الرحمة التي وسعت كل شيء',
        body: 'يا مَن سبقت رحمتُك غضبَك، ووسعت مغفرتُك كلَّ عبدٍ أقبل عليك؛ ندعوك باسمك الرحمن الرحيم أن تشمل أمتك الحاجة أمينة محمد بكر برحمةٍ تُغنيها عن رحمة مَن سواك، وتجعل مستقرّها في كنفِ جودك وإحسانك.'
      },
      {
        id: 'mn2',
        name: 'يا جبّارَ الخواطر',
        subtitle: 'جزاء مَن جبرت القلوب في الدنيا',
        body: 'اللهم إنك تعلم كم كانت الحاجة أمينة محمد بكر هيّنةً ليّنةً، تجبر خواطر الناس بطيبتها وجدعنتها ووقفتها الصادقة؛ فاجبرها اليوم يا جبّار جبراً يليق بعظمتك، وافرح روحها ببشائر الرضوان.'
      },
      {
        id: 'mn3',
        name: 'يا وَدودُ يا كريم',
        subtitle: 'سرّ المحبة في قلوب العباد',
        body: 'يا ودود، أنت الذي ألقيتَ محبتها في قلوب أولادها وأهلها وكل مَن عرفها حتى شهدوا لها بالخير والطيبة؛ فاجعل لها وُدّاً وقبولاً في السماوات، وأكرم وفادتها كما كانت تُكرم ضيفها وتفتح بيتها بالمحبة.'
      },
      {
        id: 'mn4',
        name: 'يا نورَ السماواتِ والأرض',
        subtitle: 'ضياء القبر وبهجة اللقاء',
        body: 'يا نور، كما جعلتَ وجه الحاجة أمينة محمد بكر بشوشاً منيراً يبعث السكينة في نفوس أحبابها، أضِئ مرقدها بنورٍ من نورك لا ينطفئ، واجعل لها نوراً يسعى بين يديها يوم القيامة.'
      },
      {
        id: 'mn5',
        name: 'يا عفوُّ يا غفور',
        subtitle: 'صفحٌ جميل وتبديلٌ بالحسنات',
        body: 'اللهم إنك عفوٌّ كريمٌ تحب العفو، فاعفُ عن الحاجة أمينة محمد بكر عفواً كاملاً، وتقبّل صالح عملها، وضاعف لها أجر كل كلمةٍ طيبة ودعوةٍ صادقة خرجت من لسانها، وتجاوز عمّا سواها.'
      },
      {
        id: 'mn6',
        name: 'يا لطيفُ يا سَلام',
        subtitle: 'طمأنينة الروح وبرد الصبر',
        body: 'يا لطيفاً بعباده، الطُف بروح الحاجة أمينة محمد بكر في دار الحق واجعلها في أمانك وسلامك، وأنزل السكينة والرضا على قلوب أولادها وكل محبيها حتى يلقوها في جنات النعيم.'
      }
    ];

    const SAKINA_READINGS = [
      {
        id: 'sk1',
        title: 'محبةُ الناسِ شهادةٌ وبشرى من الله',
        text: 'حين تجتمع القلوبُ بعد الرحيل على ذكر إنسانةٍ بالخير، ويتفق أولادها وأقاربها وكل مَن عرفها على أنها كانت طيبةَ القلب، أصيلةَ المعدن، جدعةً لا تتأخر عن أحد؛ فتلك ليست مجرد ذكريات، بل هي شهادةُ أهل الأرض التي يُحبّها الله ويكتب لصاحبها بها الوجوب في الجنة. فطوبى للحاجة أمينة محمد بكر بما تركت من سيرةٍ عطرة يترحّم عليها كل مَن سمع اسمها.'
      },
      {
        id: 'sk2',
        title: 'هديةُ الدعاءِ تصلُ إليها كنورٍ يُؤنسها',
        text: 'لا ينقطع الوصلُ بين الحاجة أمينة وبين مَن أحبّوها؛ فكلُّ دعوةٍ تخرج من قلب أحد أولادها أو أقاربها، وكلُّ آيةٍ أو تسبيحةٍ تُقرأ بنيتها في هذه الصفحة، تصلُ إلى روحها هديةً من نورٍ وسرور، فتأنسُ بها وتستبشرُ بدعوات أحبابها الذين لم ينسَوْا فضلها وطيبتها.'
      },
      {
        id: 'sk3',
        title: 'الأثرُ الحلو لا يموتُ برحيل صاحبه',
        text: 'الإنسانُ الطيبُ يرحلُ جسدُه ويبقى أثرُه حيّاً في الدنيا؛ في حنان أولادها الذين ربّتهم، وفي الكلمات الحلوة التي زرعتها في قلوب العائلة، وفي كل مجلسٍ تُذكر فيه فيُرفع لها الدعاء بالرحمة. وهذه هي البركة الحقيقية للعمر الطيب.'
      },
      {
        id: 'sk4',
        title: 'موعدُ اللقاءِ الأجمل في دارِ الكرامة',
        text: 'سلوى القلوب المحبّة أن الفراقَ في الدنيا مهما طال فهو أيامٌ معدودة، وأن الله الذي جمعكم بها على المودة والرحمة في الدنيا قادرٌ برحمته أن يجمع شملكم بها في الفردوس الأعلى؛ في دارٍ لا تعبَ فيها ولا مرضَ ولا وداع، بل نعيمٌ مقيمٌ وجوارُ ربٍّ رحيم.'
      }
    ];

    const JAWAMI_PASSAGES = [
      {
        id: 'jw1',
        heading: 'مناجاةُ السكينةِ والرضوان للحاجة أمينة محمد بكر',
        paragraphs: [
          'إلهنا ومولانا وسيدنا، يا مَن لا تضيع عنده الودائع، ها نحن قد استودعناك أمتك الغالية الحاجة أمينة محمد بكر، التي عاشت بيننا بقلبٍ سليمٍ ونفسٍ راضيةٍ ويدٍ ممدودةٍ بالخير والودّ؛ فاحفظها اللهم في ودائع رحمتك التي لا تضيع، واجعل ما هي فيه اليوم خيراً وأجمل وأوسع مما كانت فيه في الدنيا.',
          'اللهم إنها نزلت بساحتك وأنت أكرم الأكرمين، وقد شهد لها عبادُك بالطيبة والحنان وحُسن العِشرة وجبر الخواطر؛ فاجعل اللهم شهادتنا لها شفاعةً مقبولة، واستقبلها عندك بروحٍ وريحانٍ وربٍّ راضٍ غير غضبان، ونادِها نداءَ الكرامة بين عبادك المقربين.',
          'اللهم اجعل القرآن العظيم ربيعَ مرقدها، والذكرَ والتسبيحَ أنيسَ وحدتها، واجعل فوقها نوراً وتحتها نوراً وعن يمينها نوراً وعن شمالها نوراً، وافتح لها باباً إلى الجنة يهبُّ عليها من نسيمها وطيبها بكرةً وعشياً.',
          'اللهم احفظ أولادها وأحبابها بعينك التي لا تنام، واجعلهم لها ذكراً صالحاً وصدقةً جاريةً لا تنقطع، واجمعنا بها جميعاً تحت لواء نبيك المصطفى ﷺ في مقعدِ صدقٍ عند مليكٍ مقتدر، والحمد لله رب العالمين.'
        ]
      }
    ];

    const TASBEEH_ITEMS = [
      { id: 't1', text: 'سبحان الله وبحمده' },
      { id: 't2', text: 'سبحان الله العظيم' },
      { id: 't3', text: 'أستغفر الله العظيم وأتوب إليه' },
      { id: 't4', text: 'لا إله إلا الله وحده لا شريك له' },
      { id: 't5', text: 'الله أكبر والحمد لله كثيراً' },
      { id: 't6', text: 'اللهم صلِّ وسلم على نبينا محمد ﷺ' }
    ];

    const ADHKAR_DATA = {
      morning: [
        { id: 'am1', title: 'سيد التوكل بالصباح', text: 'أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.', target: 1 },
        { id: 'am2', title: 'الرضا بالله رباً', text: 'رضيتُ بالله رباً، وبالإسلام ديناً، وبمحمدٍ ﷺ نبياً ورسولاً.', target: 3 },
        { id: 'am3', title: 'التسبيح المضاعف', text: 'سبحان الله وبحمده، عدد خلقه، ورضا نفسه، وزنة عرشه، ومداد كلماته.', target: 3 },
        { id: 'am4', title: 'التحصين التام', text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.', target: 3 },
        { id: 'am5', title: 'الكفاية والتوكل', text: 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.', target: 7 },
        { id: 'am6', title: 'الاستغاثة بالرحمن', text: 'يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين.', target: 3 }
      ],
      evening: [
        { id: 'pm1', title: 'ذكر المساء الجامع', text: 'أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.', target: 1 },
        { id: 'pm2', title: 'الرضا بالله رباً', text: 'رضيتُ بالله رباً، وبالإسلام ديناً، وبمحمدٍ ﷺ نبياً ورسولاً.', target: 3 },
        { id: 'pm3', title: 'التحصين بالمساء', text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.', target: 3 },
        { id: 'pm4', title: 'الاستعاذة بكلمات الله', text: 'أعوذ بكلمات الله التامات من شر ما خلق.', target: 3 },
        { id: 'pm5', title: 'الكفاية والتوكل', text: 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.', target: 7 },
        { id: 'pm6', title: 'الصلاة على النبي ﷺ', text: 'اللهم صلِّ وسلم وبارك على نبينا محمد وعلى آله وصحبه أجمعين.', target: 10 }
      ]
    };



    const SURAH_NAMES = {
      1: 'سورة الفاتحة',
      18: 'سورة الكهف',
      36: 'سورة يس',
      67: 'سورة الملك',
      112: 'سورة الإخلاص والمعوذتان'
    };

    const FRIDAY_DUAS = [
      {
        id: 'fd1',
        badge: 'نفحات يوم الجمعة',
        text: 'اللهم في يوم الجمعة المبارك، أنزل على قبر الحاجة أمينة محمد بكر نوراً يمتدّ ما بين الجمعتين، وافسح لها في مرقدها مدّ بصرها، وافرح روحها الطيبة ببشائر الجنة والرضوان.'
      },
      {
        id: 'fd2',
        badge: 'ساعة الاستجابة',
        text: 'اللهم في ساعة الاستجابة من يوم الجمعة، نسألك باسمك الأعظم الذي إذا دُعيت به أجبت أن تغفر للحاجة أمينة محمد بكر مغفرةً تامّة، وترفع درجتها في الفردوس الأعلى بلا حساب ولا سابقة عذاب.'
      },
      {
        id: 'fd3',
        badge: 'بركة الذكر والرحمة',
        text: 'اللهم في خير يومٍ طلعت عليه الشمس، اجعل الحاجة أمينة محمد بكر في جوارك الآمن، وأذقها برد عفوك وحلاوة مغفرتك، كما أذاقت مَن حولها حلاوة الطيبة والجدعنة وحُسن الخلق.'
      },
      {
        id: 'fd4',
        badge: 'هدية الجمعة لروحها',
        text: 'اللهم اجعل كل دعوةٍ وصلت إليها في هذا اليوم المبارك، وكل صلاةٍ على نبيك ﷺ، وكل حرفٍ من سورة الكهف، هدايا من نورٍ تسرّ بها روح الحاجة أمينة محمد بكر في مستقر رحمتك.'
      },
      {
        id: 'fd5',
        badge: 'دعاء عصر الجمعة',
        text: 'يا حيّ يا قيّوم، لا تغرب شمس يوم الجمعة إلا وقد غفرتَ لأمتك الحاجة أمينة محمد بكر كل ذنب، وبدّلت سيئاتها حسنات، وكتبتَ لها سعادةً أبدية في دار الكرامة والنعيم المقيم.'
      },
      {
        id: 'fd6',
        badge: 'جمع الأحباب',
        text: 'اللهم في يوم الجمعة الجامع لملائكتك وعبادك، اجمعنا بالحاجة أمينة محمد بكر مع أولادها وأحبابها في جناتٍ ونهر، في مقعد صدقٍ عند مليكٍ مقتدر، على سررٍ متقابلين.'
      }
    ];

    // ---------------- STATE MANAGEMENT ----------------
    const STORAGE_KEY = 'hajjah_amina_sadaqah_v1';
    let state = {
      theme: 'cream_olive',
      activeDuaCat: 'all',
      amenTotal: 0,
      amenByDua: {},
      heroAmenCount: 0,
      familyNote: '',
      munajatTab: 'names',
      readingsDone: {},
      readingsCount: 0,
      activeTasbeehId: 't1',
      tasbeehSession: 0,
      tasbeehTarget: 33,
      tasbeehSound: false,
      tasbeehCounts: { t1: 0, t2: 0, t3: 0, t4: 0, t5: 0, t6: 0 },
      adhkarPeriod: 'morning',
      adhkarDone: {},
      quranFontSize: 24,
      currentSurah: 1,
      reciter: 'ar.alafasy',
      fridayTab: 'duas',
      fridaySalawat: 0,
      kahfRange: 'full',
      kahfReciter: 'ar.alafasy',
      kahfFontSize: 24
    };

    let currentModalDuaId = 'd1';
    let audioCtx = null;
    let quranAudio = null;
    let currentAyahList = [];
    let currentPlayingIdx = -1;
    let isQuranPlaying = false;

    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          state = Object.assign({}, state, parsed);
          state.tasbeehCounts = Object.assign({ t1: 0, t2: 0, t3: 0, t4: 0, t5: 0, t6: 0 }, parsed.tasbeehCounts || {});
          state.amenByDua = parsed.amenByDua || {};
          state.readingsDone = parsed.readingsDone || {};
          state.adhkarDone = parsed.adhkarDone || {};
        }
      } catch (e) {
        // Fallback to in-memory state inside restricted frames
      }
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        // Ignore storage write block
      }
    }

    // ---------------- HELPERS & UI ----------------
    let toastTimer = null;
    function showToast(msg) {
      const el = document.getElementById('app-toast');
      if (!el) return;
      el.textContent = msg;
      el.classList.remove('hidden');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        el.classList.add('hidden');
      }, 2600);
    }

    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) { const header = document.querySelector('header'); const top = el.getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight : 0) - 16; window.scrollTo({top: top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); }
    }

    function copyText(txt) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () {
          showToast('تم نسخ النص بنجاح 🌿');
        }).catch(function () {
          fallbackCopy(txt);
        });
      } else {
        fallbackCopy(txt);
      }
    }

    function fallbackCopy(txt) {
      const ta = document.createElement('textarea');
      ta.value = txt;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast('تم نسخ النص بنجاح 🌿');
      } catch (e) {
        showToast('تعذّر النسخ التلقائي');
      }
      document.body.removeChild(ta);
    }

    function shareWhatsAppText(txt) {
      const url = 'https://wa.me/?text=' + encodeURIComponent(txt);
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    function setTheme(themeName) {
      state.theme = themeName;
      document.documentElement.setAttribute('data-theme', themeName);
      ['cream_olive', 'warm_beige', 'night_navy'].forEach(function (t) {
        const btn = document.getElementById('theme-btn-' + t);
        if (btn) {
          btn.style.transform = (t === themeName) ? 'scale(1.12)' : 'scale(1)';
          btn.style.boxShadow = (t === themeName) ? '0 0 0 2px var(--gold)' : 'none';
        }
      });
      saveState();
    }

    function updateTopStats() {
      const amenEl = document.getElementById('stat-amen-count');
      const tasbeehEl = document.getElementById('stat-tasbeeh-count');
      const readEl = document.getElementById('stat-readings-count');

      const totalTasbeeh = Object.values(state.tasbeehCounts).reduce(function (a, b) { return a + (Number(b) || 0); }, 0);
      const totalReads = Number(state.readingsCount) || Object.values(state.readingsDone || {}).filter(Boolean).length;

      if (amenEl) amenEl.textContent = String(state.amenTotal || 0);
      if (tasbeehEl) tasbeehEl.textContent = String(totalTasbeeh);
      if (readEl) readEl.textContent = String(totalReads);
    }

    // ---------------- HERO & FAMILY TRIBUTE ----------------
    function recordHeroAmen() {
      state.heroAmenCount = (state.heroAmenCount || 0) + 1;
      state.amenTotal = (state.amenTotal || 0) + 1;
      saveState();
      updateTopStats();
      const lbl = document.getElementById('hero-dua-amen-label');
      if (lbl) lbl.textContent = 'اللهم آمين • دعوتَ لها (' + state.heroAmenCount + ')';
      showToast('تقبّل الله دعاءك للحاجة أمينة محمد بكر وجعله في ميزان حسناتك');
    }

    function renderFamilyNote() {
      const wrap = document.getElementById('custom-family-note-wrap');
      const txt = document.getElementById('custom-family-note-text');
      if (!wrap || !txt) return;
      if (state.familyNote && state.familyNote.trim()) {
        txt.textContent = state.familyNote.trim();
        wrap.classList.remove('hidden');
      } else {
        wrap.classList.add('hidden');
      }
    }

    function openEditTributeModal() {
      const modal = document.getElementById('edit-tribute-modal');
      const input = document.getElementById('family-note-input');
      if (input) input.value = state.familyNote || '';
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeEditTributeModal() {
      const modal = document.getElementById('edit-tribute-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function saveFamilyNote() {
      const input = document.getElementById('family-note-input');
      state.familyNote = input ? input.value.trim() : '';
      saveState();
      renderFamilyNote();
      closeEditTributeModal();
      showToast('تم حفظ الكلمة الخاصة في برواز المحبة');
    }

    function clearFamilyNote() {
      state.familyNote = '';
      const input = document.getElementById('family-note-input');
      if (input) input.value = '';
      saveState();
      renderFamilyNote();
      closeEditTributeModal();
      showToast('تمت إزالة الإضافة الخاصة');
    }

    // ---------------- DUAS SECTION ----------------
    function filterDuas(cat) {
      state.activeDuaCat = cat;
      document.querySelectorAll('.dua-cat-btn').forEach(function (btn) {
        const isAct = btn.getAttribute('data-cat') === cat;
        btn.classList.toggle('nav-pill-active', isAct);
        btn.classList.toggle('surface-card', !isAct);
      });
      renderDuasGrid();
    }

    function renderDuasGrid() {
      const grid = document.getElementById('duas-grid');
      if (!grid) return;
      const items = state.activeDuaCat === 'all'
        ? DUAS_LIST
        : DUAS_LIST.filter(function (d) { return d.cat === state.activeDuaCat; });

      grid.innerHTML = items.map(function (d) {
        const count = state.amenByDua[d.id] || 0;
        return (
          '<article class="surface-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-sm">' +
            '<div class="space-y-3">' +
              '<span class="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full gold-badge">' + d.tag + '</span>' +
              '<p class="font-serif-ar text-xl sm:text-2xl leading-loose font-bold">«' + d.text + '»</p>' +
            '</div>' +
            '<div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t" style="border-color: var(--border-col);">' +
              '<button type="button" onclick="amenDua(\'' + d.id + '\')" class="btn-primary px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5">' +
                '<span>آمين • دعوتُ لها' + (count > 0 ? ' (' + count + ')' : '') + '</span>' +
              '</button>' +
              '<div class="flex items-center gap-1.5">' +
                '<button type="button" onclick="copyDuaById(\'' + d.id + '\')" class="px-3 py-2 rounded-full surface-soft text-xs font-semibold">نسخ</button>' +
                '<button type="button" onclick="shareDuaById(\'' + d.id + '\')" class="px-3 py-2 rounded-full surface-soft text-xs font-semibold" style="color:#16a34a;">واتساب</button>' +
              '</div>' +
            '</div>' +
          '</article>'
        );
      }).join('');
    }

    function amenDua(id) {
      state.amenByDua[id] = (state.amenByDua[id] || 0) + 1;
      state.amenTotal = (state.amenTotal || 0) + 1;
      saveState();
      updateTopStats();
      renderDuasGrid();
      showToast('اللهم آمين.. تقبّل الله دعاءك للحاجة أمينة');
    }

    function copyDuaById(id) {
      const item = DUAS_LIST.find(function (d) { return d.id === id; });
      if (item) copyText(item.text);
    }

    function shareDuaById(id) {
      const item = DUAS_LIST.find(function (d) { return d.id === id; });
      if (item) {
        shareWhatsAppText('صدقة جارية عن روح الحاجة أمينة محمد بكر رحمها الله:\n\n«' + item.text + '»');
      }
    }

    function openRandomDuaModal() {
      pickAnotherRandomDua();
      const modal = document.getElementById('random-dua-modal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function pickAnotherRandomDua() {
      const idx = Math.floor(Math.random() * DUAS_LIST.length);
      const item = DUAS_LIST[idx];
      currentModalDuaId = item.id;
      const txtEl = document.getElementById('modal-dua-text');
      if (txtEl) txtEl.textContent = '«' + item.text + '»';
    }

    function amenModalDua() {
      amenDua(currentModalDuaId);
      closeRandomDuaModal();
    }

    function closeRandomDuaModal() {
      const modal = document.getElementById('random-dua-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    // ---------------- IN-SITE READING SANCTUARY (MUNAJAT & SAKINA) ----------------
    function selectMunajatTab(tabName) {
      state.munajatTab = tabName;
      document.querySelectorAll('.munajat-tab-btn').forEach(function (btn) {
        const active = btn.getAttribute('data-mtab') === tabName;
        btn.classList.toggle('nav-pill-active', active);
      });
      saveState();
      renderMunajatSection();
    }

    function markReadingItem(id) {
      if (!state.readingsDone[id]) {
        state.readingsDone[id] = true;
        state.readingsCount = (Number(state.readingsCount) || 0) + 1;
        state.amenTotal = (state.amenTotal || 0) + 1;
        showToast('تقبّل الله قراءتك ودعاءك الصادق للحاجة أمينة 🌿');
      } else {
        state.readingsCount = (Number(state.readingsCount) || 0) + 1;
        showToast('اللهم آمين.. نورٌ ورحمةٌ في ميزانها');
      }
      saveState();
      updateTopStats();
      renderMunajatSection();
    }

    function renderMunajatSection() {
      const area = document.getElementById('munajat-content-area');
      if (!area) return;
      const tab = state.munajatTab || 'names';

      if (tab === 'names') {
        area.innerHTML =
          '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">' +
          MUNAJAT_NAMES.map(function (item) {
            const isRead = Boolean(state.readingsDone[item.id]);
            return (
              '<article class="surface-soft rounded-2xl p-5 flex flex-col justify-between gap-4 border" style="border-color:' + (isRead ? 'var(--gold)' : 'var(--border-col)') + ';">' +
                '<div class="space-y-2.5">' +
                  '<div class="flex items-center justify-between gap-2">' +
                    '<h3 class="font-serif-ar text-2xl font-bold" style="color: var(--accent);">' + item.name + '</h3>' +
                    '<span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full gold-badge">' + item.subtitle + '</span>' +
                  '</div>' +
                  '<p class="font-serif-ar text-lg sm:text-xl leading-loose font-semibold">' + item.body + '</p>' +
                '</div>' +
                '<button type="button" onclick="markReadingItem(\'' + item.id + '\')" class="' + (isRead ? 'surface-card' : 'btn-primary') + ' w-full py-2.5 rounded-xl text-xs font-bold transition">' +
                  (isRead ? '✓ قُرئت بالقلب • اللهم استجب' : 'قرأتُها بقلبي • اللهم آمين') +
                '</button>' +
              '</article>'
            );
          }).join('') +
          '</div>';
      } else if (tab === 'sakina') {
        area.innerHTML =
          '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
          SAKINA_READINGS.map(function (item) {
            const isRead = Boolean(state.readingsDone[item.id]);
            return (
              '<article class="surface-soft rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 border" style="border-color:' + (isRead ? 'var(--gold)' : 'var(--border-col)') + ';">' +
                '<div class="space-y-2.5">' +
                  '<div class="flex items-center gap-2">' +
                    '<span class="w-2.5 h-2.5 rounded-full" style="background: var(--gold);"></span>' +
                    '<h3 class="text-base sm:text-lg font-bold" style="color: var(--accent);">' + item.title + '</h3>' +
                  '</div>' +
                  '<p class="text-sm sm:text-base leading-loose" style="color: var(--text-main);">' + item.text + '</p>' +
                '</div>' +
                '<div class="flex justify-end">' +
                  '<button type="button" onclick="markReadingItem(\'' + item.id + '\')" class="' + (isRead ? 'gold-badge' : 'surface-card') + ' px-4 py-2 rounded-full text-xs font-bold transition">' +
                    (isRead ? '✓ أتممتُ القراءة' : 'أتممتُ قراءتها • رحمها الله') +
                  '</button>' +
                '</div>' +
              '</article>'
            );
          }).join('') +
          '</div>';
      } else {
        const passage = JAWAMI_PASSAGES[0];
        const isRead = Boolean(state.readingsDone[passage.id]);
        area.innerHTML =
          '<div class="rounded-3xl p-6 sm:p-10 surface-soft border-2 space-y-5 max-w-4xl mx-auto" style="border-color: var(--gold);">' +
            '<div class="text-center space-y-1 border-b pb-4" style="border-color: var(--border-col);">' +
              '<span class="text-xs font-bold" style="color: var(--gold);">قراءة متأنية بخشوع</span>' +
              '<h3 class="font-serif-ar text-2xl sm:text-3xl font-bold">' + passage.heading + '</h3>' +
            '</div>' +
            '<div class="space-y-4 font-serif-ar text-xl sm:text-2xl leading-loose font-bold text-right">' +
              passage.paragraphs.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
            '</div>' +
            '<div class="pt-3 text-center">' +
              '<button type="button" onclick="markReadingItem(\'' + passage.id + '\')" class="btn-primary px-7 py-3 rounded-full text-sm font-bold shadow-sm">' +
                (isRead ? '✓ تقبّل الله مناجاتك ودعاءك للحاجة أمينة' : 'اللهم آمين • أتممتُ قراءة المناجاة لها') +
              '</button>' +
            '</div>' +
          '</div>';
      }
    }

    // ---------------- TASBEEH SECTION ----------------
    function renderTasbeehSection() {
      const pillsWrap = document.getElementById('tasbeeh-pills');
      if (pillsWrap) {
        pillsWrap.innerHTML = TASBEEH_ITEMS.map(function (item) {
          const isAct = item.id === state.activeTasbeehId;
          return (
            '<button type="button" onclick="selectTasbeehItem(\'' + item.id + '\')" class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition ' +
            (isAct ? 'nav-pill-active shadow-sm' : 'surface-soft') + '">' +
              item.text +
            '</button>'
          );
        }).join('');
      }

      const activeItem = TASBEEH_ITEMS.find(function (t) { return t.id === state.activeTasbeehId; }) || TASBEEH_ITEMS[0];
      const phraseEl = document.getElementById('tasbeeh-current-phrase');
      const countEl = document.getElementById('tasbeeh-current-count');
      const targetLbl = document.getElementById('tasbeeh-target-label');
      const circle = document.getElementById('tasbeeh-progress-circle');

      if (phraseEl) phraseEl.textContent = activeItem.text;
      if (countEl) countEl.textContent = String(state.tasbeehSession);
      if (targetLbl) targetLbl.textContent = 'من ' + state.tasbeehTarget + ' • اضغط للتسبيح';

      const circumference = 615.75;
      const progress = Math.min(1, (state.tasbeehSession % state.tasbeehTarget) / state.tasbeehTarget);
      const offset = (state.tasbeehSession > 0 && state.tasbeehSession % state.tasbeehTarget === 0)
        ? 0
        : circumference * (1 - progress);
      if (circle) circle.style.strokeDashoffset = String(offset);

      const t33 = document.getElementById('target-33-btn');
      const t100 = document.getElementById('target-100-btn');
      if (t33 && t100) {
        t33.classList.toggle('nav-pill-active', state.tasbeehTarget === 33);
        t33.classList.toggle('surface-soft', state.tasbeehTarget !== 33);
        t100.classList.toggle('nav-pill-active', state.tasbeehTarget === 100);
        t100.classList.toggle('surface-soft', state.tasbeehTarget !== 100);
      }

      const listEl = document.getElementById('tasbeeh-summary-list');
      const totalBadge = document.getElementById('tasbeeh-total-badge');
      const total = Object.values(state.tasbeehCounts).reduce(function (a, b) { return a + (Number(b) || 0); }, 0);
      if (totalBadge) totalBadge.textContent = 'الإجمالي: ' + total;

      if (listEl) {
        listEl.innerHTML = TASBEEH_ITEMS.map(function (item) {
          const cnt = state.tasbeehCounts[item.id] || 0;
          return (
            '<div class="flex items-center justify-between py-1.5 px-2.5 rounded-xl surface-card">' +
              '<span class="font-medium">' + item.text + '</span>' +
              '<span class="font-bold" style="color: var(--accent);">' + cnt + '</span>' +
            '</div>'
          );
        }).join('');
      }
    }

    function selectTasbeehItem(id) {
      state.activeTasbeehId = id;
      state.tasbeehSession = 0;
      saveState();
      renderTasbeehSection();
    }

    function setTasbeehTarget(num) {
      state.tasbeehTarget = num;
      saveState();
      renderTasbeehSection();
    }

    function playSoftBeadClick(isMilestone) {
      if (!state.tasbeehSound) return;
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        if (!audioCtx) audioCtx = new AudioContextClass();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(isMilestone ? 587.33 : 440, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (isMilestone ? 0.28 : 0.09));
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + (isMilestone ? 0.3 : 0.1));
      } catch (e) {
        // Ignore audio API restrictions
      }
    }

    function toggleTasbeehSound() {
      state.tasbeehSound = !state.tasbeehSound;
      const lbl = document.getElementById('sound-toggle-label');
      if (lbl) lbl.textContent = state.tasbeehSound ? 'الصوت هادئ: مفعّل' : 'الصوت هادئ: مغلق';
      if (state.tasbeehSound) playSoftBeadClick(false);
      saveState();
    }

    function incrementTasbeeh() {
      state.tasbeehSession += 1;
      const id = state.activeTasbeehId;
      state.tasbeehCounts[id] = (state.tasbeehCounts[id] || 0) + 1;
      const completedCycle = (state.tasbeehSession % state.tasbeehTarget === 0);

      playSoftBeadClick(completedCycle);

      const btn = document.getElementById('tasbeeh-main-btn');
      if (btn) {
        btn.classList.remove('tasbeeh-pulse');
        void btn.offsetWidth;
        btn.classList.add('tasbeeh-pulse');
      }

      if (completedCycle) {
        showToast('أتممتَ ' + state.tasbeehSession + ' تسبيحة في ميزان حسنات الحاجة أمينة 🌿');
      }

      saveState();
      updateTopStats();
      renderTasbeehSection();
    }

    function toggleResetPopover() {
      const bar = document.getElementById('tasbeeh-reset-bar');
      if (bar) bar.classList.toggle('hidden');
    }

    function confirmResetTasbeeh() {
      state.tasbeehSession = 0;
      saveState();
      renderTasbeehSection();
      const bar = document.getElementById('tasbeeh-reset-bar');
      if (bar) bar.classList.add('hidden');
      showToast('تم تصفير عداد الدورة الحالية');
    }

    // ---------------- QURAN & ADHKAR SECTION ----------------
    function switchSpiritualTab(tab) {
      const qPanel = document.getElementById('panel-quran');
      const aPanel = document.getElementById('panel-adhkar');
      const qBtn = document.getElementById('mode-quran-btn');
      const aBtn = document.getElementById('mode-adhkar-btn');

      const isQuran = tab === 'quran';
      if (qPanel) qPanel.classList.toggle('hidden', !isQuran);
      if (aPanel) aPanel.classList.toggle('hidden', isQuran);
      if (qBtn) qBtn.classList.toggle('nav-pill-active', isQuran);
      if (aBtn) aBtn.classList.toggle('nav-pill-active', !isQuran);
    }

    function adjustQuranFont(delta) {
      state.quranFontSize = Math.min(38, Math.max(18, (state.quranFontSize || 24) + delta));
      const box = document.getElementById('quran-text-box');
      if (box) box.style.fontSize = state.quranFontSize + 'px';
      saveState();
    }

    async function loadSurah(surahNum) {
      stopQuranPlayback();
      state.currentSurah = surahNum;
      saveState();

      document.querySelectorAll('.surah-btn').forEach(function (btn) {
        const isAct = parseInt(btn.getAttribute('data-surah'), 10) === surahNum;
        btn.classList.toggle('nav-pill-active', isAct);
        btn.classList.toggle('surface-card', !isAct);
      });

      const titleEl = document.getElementById('quran-now-title');
      const statusEl = document.getElementById('quran-now-status');
      const box = document.getElementById('quran-text-box');
      if (titleEl) titleEl.textContent = SURAH_NAMES[surahNum] || 'تلاوة قرآنية';
      if (statusEl) statusEl.textContent = 'جاري جلب الآيات والتلاوة الصوتية...';
      if (box) box.innerHTML = '<p class="text-sm font-sans text-center py-8" style="color: var(--text-muted);">جاري تحميل السورة الكريمة...</p>';

      try {
        const surahIds = surahNum === 112 ? [112, 113, 114] : [surahNum];
        const collectedAyahs = [];
        const sectionsHtml = [];

        for (let i = 0; i < surahIds.length; i++) {
          const sId = surahIds[i];
          const resp = await fetch('https://api.alquran.cloud/v1/surah/' + sId + '/' + encodeURIComponent(state.reciter));
          if (!resp.ok) throw new Error('HTTP ' + resp.status);
          const json = await resp.json();
          if (!json || !json.data || !Array.isArray(json.data.ayahs)) throw new Error('Invalid payload');

          const surahTitle = json.data.name || '';
          const ayahSpans = json.data.ayahs.map(function (ay) {
            const globalIdx = collectedAyahs.length;
            collectedAyahs.push({ audio: ay.audio, numberInSurah: ay.numberInSurah, surahName: surahTitle });
            return (
              '<span id="ayah-span-' + globalIdx + '" onclick="playFromAyah(' + globalIdx + ')" class="cursor-pointer hover:opacity-80 transition">' +
                ay.text + ' <span class="text-sm mx-1 font-sans" style="color: var(--gold);">﴿' + ay.numberInSurah + '﴾</span> ' +
              '</span>'
            );
          }).join(' ');

          sectionsHtml.push(
            '<div class="mb-6 last:mb-0">' +
              (surahIds.length > 1 ? '<h4 class="text-center font-bold text-lg mb-3" style="color: var(--gold);">' + surahTitle + '</h4>' : '') +
              '<div>' + ayahSpans + '</div>' +
            '</div>'
          );
        }

        currentAyahList = collectedAyahs;
        if (box) box.innerHTML = sectionsHtml.join('');
        if (statusEl) statusEl.textContent = 'اضغط تشغيل للاستماع للتلاوة أو اضغط على أي آية لسماعها';
      } catch (err) {
        currentAyahList = [];
        if (statusEl) statusEl.textContent = 'تعذّر الاتصال بخادم التلاوة حالياً • يمكنك القراءة وتجربة التحديث عند توفر الإنترنت';
        if (box) {
          box.innerHTML =
            '<div class="font-sans text-center py-6 space-y-3">' +
              '<p class="text-sm font-bold" style="color: var(--accent);">يتعذّر تحميل نص السورة الكامل بدون اتصال بالإنترنت حالياً</p>' +
              '<p class="font-serif-ar text-2xl leading-loose">﴿ رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ ﴾</p>' +
              '<button type="button" onclick="loadSurah(' + surahNum + ')" class="btn-primary px-4 py-2 rounded-full text-xs font-bold">إعادة المحاولة</button>' +
            '</div>';
        }
      }
    }

    function onReciterChange() {
      const sel = document.getElementById('reciter-select');
      if (sel) state.reciter = sel.value;
      saveState();
      loadSurah(state.currentSurah);
    }

    function playFromAyah(idx) {
      if (!currentAyahList.length || idx < 0 || idx >= currentAyahList.length) return;
      stopKahfPlayback();
      if (!quranAudio) {
        quranAudio = new Audio();
        quranAudio.addEventListener('ended', function () {
          if (currentPlayingIdx + 1 < currentAyahList.length) {
            playFromAyah(currentPlayingIdx + 1);
          } else {
            stopQuranPlayback();
            showToast('تمّت تلاوة السورة الكريمة.. تقبّل الله منكم');
          }
        });
        quranAudio.addEventListener('error', function () {
          const statusEl = document.getElementById('quran-now-status');
          if (statusEl) statusEl.textContent = 'تعذّر تشغيل الملف الصوتي حالياً';
          isQuranPlaying = false;
          updatePlayIcon();
        });
      }

      document.querySelectorAll('.ayah-active').forEach(function (el) { el.classList.remove('ayah-active'); });
      currentPlayingIdx = idx;
      const activeSpan = document.getElementById('ayah-span-' + idx);
      if (activeSpan) {
        activeSpan.classList.add('ayah-active');
        activeSpan.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      quranAudio.src = currentAyahList[idx].audio;
      isQuranPlaying = true;
      updatePlayIcon();
      const statusEl = document.getElementById('quran-now-status');
      if (statusEl) statusEl.textContent = 'يُتلى الآن الآية (' + currentAyahList[idx].numberInSurah + ')';

      quranAudio.play().catch(function () {
        isQuranPlaying = false;
        updatePlayIcon();
        if (statusEl) statusEl.textContent = 'اضغط زر التشغيل لبدء الصوت';
      });
    }

    function toggleQuranPlayback() {
      if (!currentAyahList.length) {
        showToast('يرجى الانتظار لتحميل السورة أو التحقق من الاتصال');
        return;
      }
      if (isQuranPlaying && quranAudio) {
        quranAudio.pause();
        isQuranPlaying = false;
        updatePlayIcon();
        const statusEl = document.getElementById('quran-now-status');
        if (statusEl) statusEl.textContent = 'التلاوة متوقفة مؤقتاً';
      } else if (quranAudio && currentPlayingIdx >= 0 && quranAudio.src) {
        isQuranPlaying = true;
        updatePlayIcon();
        quranAudio.play().catch(function () { isQuranPlaying = false; updatePlayIcon(); });
      } else {
        playFromAyah(0);
      }
    }

    function stopQuranPlayback() {
      if (quranAudio) {
        quranAudio.pause();
        quranAudio.currentTime = 0;
      }
      isQuranPlaying = false;
      currentPlayingIdx = -1;
      document.querySelectorAll('.ayah-active').forEach(function (el) { el.classList.remove('ayah-active'); });
      updatePlayIcon();
    }

    function updatePlayIcon() {
      const btn = document.getElementById('quran-play-btn');
      if (!btn) return;
      btn.innerHTML = isQuranPlaying
        ? '<i data-lucide="pause" class="w-5 h-5"></i>'
        : '<i data-lucide="play" class="w-5 h-5"></i>';
      if (window.lucide) window.lucide.createIcons();
    }

    function giftQuranReward() {
      state.amenTotal = (state.amenTotal || 0) + 1;
      state.readingsCount = (Number(state.readingsCount) || 0) + 1;
      saveState();
      updateTopStats();
      showToast('اللهم بلّغ الحاجة أمينة محمد بكر ثواب ما قُرئ ونوّر به مرقدها');
    }

    // ---------------- DEDICATED FRIDAY SECTION & SURAH AL-KAHF ----------------
    let kahfFullAyahs = [];
    let kahfDisplayAyahs = [];
    let kahfAudio = null;
    let kahfPlayingIdx = -1;
    let isKahfPlaying = false;
    let kahfLoadedReciter = '';

    function renderFridayDuas() {
      const grid = document.getElementById('friday-duas-grid');
      if (!grid) return;
      grid.innerHTML = FRIDAY_DUAS.map(function (d) {
        const cnt = state.amenByDua[d.id] || 0;
        return (
          '<article class="surface-soft rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 border" style="border-color: var(--border-col);">' +
            '<div class="space-y-2.5">' +
              '<span class="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full gold-badge">' + d.badge + '</span>' +
              '<p class="font-serif-ar text-xl sm:text-2xl leading-loose font-bold">«' + d.text + '»</p>' +
            '</div>' +
            '<div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t" style="border-color: var(--border-col);">' +
              '<button type="button" onclick="amenFridayDua(\'' + d.id + '\')" class="btn-primary px-4 py-2 rounded-full text-xs font-bold">' +
                'اللهم آمين • دعوتُ لها' + (cnt > 0 ? ' (' + cnt + ')' : '') +
              '</button>' +
              '<button type="button" onclick="copyFridayDua(\'' + d.id + '\')" class="px-3.5 py-2 rounded-full surface-card text-xs font-semibold">نسخ الدعاء</button>' +
            '</div>' +
          '</article>'
        );
      }).join('');
    }

    function amenFridayDua(id) {
      state.amenByDua[id] = (state.amenByDua[id] || 0) + 1;
      state.amenTotal = (state.amenTotal || 0) + 1;
      saveState();
      updateTopStats();
      renderFridayDuas();
      showToast('اللهم استجب دعاء الجمعة للحاجة أمينة محمد بكر 🌿');
    }

    function copyFridayDua(id) {
      const item = FRIDAY_DUAS.find(function (d) { return d.id === id; });
      if (item) copyText(item.text);
    }

    function incrementFridaySalawat() {
      state.fridaySalawat = (Number(state.fridaySalawat) || 0) + 1;
      state.tasbeehCounts.t6 = (Number(state.tasbeehCounts.t6) || 0) + 1;
      const badge = document.getElementById('friday-salawat-count');
      if (badge) badge.textContent = String(state.fridaySalawat);
      playSoftBeadClick(state.fridaySalawat % 10 === 0);
      saveState();
      updateTopStats();
      renderTasbeehSection();
      if (state.fridaySalawat % 10 === 0) {
        showToast('صلّى الله عليك عشراً وبلّغ ثوابها للحاجة أمينة 🌿');
      }
    }

    function switchFridayTab(tab) {
      state.fridayTab = tab;
      const dPanel = document.getElementById('friday-panel-duas');
      const kPanel = document.getElementById('friday-panel-kahf');
      const dBtn = document.getElementById('friday-tab-duas-btn');
      const kBtn = document.getElementById('friday-tab-kahf-btn');

      const isDuas = tab === 'duas';
      if (dPanel) dPanel.classList.toggle('hidden', !isDuas);
      if (kPanel) kPanel.classList.toggle('hidden', isDuas);
      if (dBtn) dBtn.classList.toggle('nav-pill-active', isDuas);
      if (kBtn) kBtn.classList.toggle('nav-pill-active', !isDuas);
      saveState();

      if (!isDuas && (!kahfFullAyahs.length || kahfLoadedReciter !== state.kahfReciter)) {
        fetchSurahKahf();
      }
    }

    function adjustKahfFont(delta) {
      state.kahfFontSize = Math.min(38, Math.max(18, (state.kahfFontSize || 24) + delta));
      const box = document.getElementById('kahf-text-box');
      if (box) box.style.fontSize = state.kahfFontSize + 'px';
      saveState();
    }

    function setKahfRange(rangeKey) {
      stopKahfPlayback();
      state.kahfRange = rangeKey;
      ['full', 'first10', 'last10'].forEach(function (rk) {
        const btn = document.getElementById('kahf-mode-' + rk + '-btn');
        if (btn) {
          btn.classList.toggle('nav-pill-active', rk === rangeKey);
          btn.classList.toggle('surface-card', rk !== rangeKey);
        }
      });
      saveState();
      renderKahfAyahs();
    }

    function onKahfReciterChange() {
      const sel = document.getElementById('kahf-reciter-select');
      if (sel) state.kahfReciter = sel.value;
      saveState();
      fetchSurahKahf();
    }

    async function fetchSurahKahf() {
      stopKahfPlayback();
      const box = document.getElementById('kahf-text-box');
      const statusEl = document.getElementById('kahf-now-status');
      const reciter = state.kahfReciter || 'ar.alafasy';
      if (statusEl) statusEl.textContent = 'جاري تحميل آيات سورة الكهف وتلاوتها...';
      if (box) box.innerHTML = '<p class="text-sm font-sans text-center py-8" style="color: var(--text-muted);">جاري تحميل سورة الكهف الكريمة...</p>';

      try {
        const resp = await fetch('https://api.alquran.cloud/v1/surah/18/' + encodeURIComponent(reciter));
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const json = await resp.json();
        if (!json || !json.data || !Array.isArray(json.data.ayahs)) throw new Error('Invalid Kahf payload');

        kahfFullAyahs = json.data.ayahs.map(function (ay) {
          return { text: ay.text, audio: ay.audio, numberInSurah: ay.numberInSurah };
        });
        kahfLoadedReciter = reciter;
        renderKahfAyahs();
        if (statusEl) statusEl.textContent = 'اضغط تشغيل للاستماع لسورة الكهف أو اضغط على أي آية لسماعها';
      } catch (err) {
        kahfFullAyahs = [];
        kahfDisplayAyahs = [];
        if (statusEl) statusEl.textContent = 'تعذّر الاتصال بخادم التلاوة حالياً • جرّب التحديث عند توفر الإنترنت';
        if (box) {
          box.innerHTML =
            '<div class="font-sans text-center py-6 space-y-3">' +
              '<p class="text-sm font-bold" style="color: var(--accent);">يتعذّر تحميل سورة الكهف كاملة بدون اتصال بالإنترنت حالياً</p>' +
              '<p class="font-serif-ar text-2xl leading-loose">﴿ الْحَمْدُ لِلَّهِ الَّذِي أَنْزَلَ عَلَى عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَلْ لَهُ عِوَجًا ﴾</p>' +
              '<button type="button" onclick="fetchSurahKahf()" class="btn-primary px-4 py-2 rounded-full text-xs font-bold">إعادة المحاولة</button>' +
            '</div>';
        }
      }
    }

    function renderKahfAyahs() {
      const box = document.getElementById('kahf-text-box');
      if (!box || !kahfFullAyahs.length) return;
      const rk = state.kahfRange || 'full';
      if (rk === 'first10') {
        kahfDisplayAyahs = kahfFullAyahs.slice(0, 10);
      } else if (rk === 'last10') {
        kahfDisplayAyahs = kahfFullAyahs.slice(100, 110);
      } else {
        kahfDisplayAyahs = kahfFullAyahs.slice();
      }

      box.innerHTML = kahfDisplayAyahs.map(function (ay, idx) {
        return (
          '<span id="kahf-span-' + idx + '" onclick="playKahfFrom(' + idx + ')" class="cursor-pointer hover:opacity-80 transition">' +
            ay.text + ' <span class="text-sm mx-1 font-sans" style="color: var(--gold);">﴿' + ay.numberInSurah + '﴾</span> ' +
          '</span>'
        );
      }).join(' ');
    }

    function playKahfFrom(idx) {
      if (!kahfDisplayAyahs.length || idx < 0 || idx >= kahfDisplayAyahs.length) return;
      stopQuranPlayback();
      if (!kahfAudio) {
        kahfAudio = new Audio();
        kahfAudio.addEventListener('ended', function () {
          if (kahfPlayingIdx + 1 < kahfDisplayAyahs.length) {
            playKahfFrom(kahfPlayingIdx + 1);
          } else {
            stopKahfPlayback();
            showToast('تمّت تلاوة آيات سورة الكهف.. تقبّل الله منكم ونوّر جمعتكم');
          }
        });
        kahfAudio.addEventListener('error', function () {
          const statusEl = document.getElementById('kahf-now-status');
          if (statusEl) statusEl.textContent = 'تعذّر تشغيل الملف الصوتي حالياً';
          isKahfPlaying = false;
          updateKahfPlayIcon();
        });
      }

      document.querySelectorAll('#kahf-text-box .ayah-active').forEach(function (el) { el.classList.remove('ayah-active'); });
      kahfPlayingIdx = idx;
      const activeSpan = document.getElementById('kahf-span-' + idx);
      if (activeSpan) {
        activeSpan.classList.add('ayah-active');
        activeSpan.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      kahfAudio.src = kahfDisplayAyahs[idx].audio;
      isKahfPlaying = true;
      updateKahfPlayIcon();
      const statusEl = document.getElementById('kahf-now-status');
      if (statusEl) statusEl.textContent = 'يُتلى الآن من سورة الكهف الآية (' + kahfDisplayAyahs[idx].numberInSurah + ')';

      kahfAudio.play().catch(function () {
        isKahfPlaying = false;
        updateKahfPlayIcon();
        if (statusEl) statusEl.textContent = 'اضغط زر التشغيل لبدء تلاوة سورة الكهف';
      });
    }

    function toggleKahfPlayback() {
      if (!kahfDisplayAyahs.length) {
        fetchSurahKahf();
        return;
      }
      if (isKahfPlaying && kahfAudio) {
        kahfAudio.pause();
        isKahfPlaying = false;
        updateKahfPlayIcon();
        const statusEl = document.getElementById('kahf-now-status');
        if (statusEl) statusEl.textContent = 'تلاوة سورة الكهف متوقفة مؤقتاً';
      } else if (kahfAudio && kahfPlayingIdx >= 0 && kahfAudio.src) {
        stopQuranPlayback();
        isKahfPlaying = true;
        updateKahfPlayIcon();
        kahfAudio.play().catch(function () { isKahfPlaying = false; updateKahfPlayIcon(); });
      } else {
        playKahfFrom(0);
      }
    }

    function stopKahfPlayback() {
      if (kahfAudio) {
        kahfAudio.pause();
        kahfAudio.currentTime = 0;
      }
      isKahfPlaying = false;
      kahfPlayingIdx = -1;
      document.querySelectorAll('#kahf-text-box .ayah-active').forEach(function (el) { el.classList.remove('ayah-active'); });
      updateKahfPlayIcon();
    }

    function updateKahfPlayIcon() {
      const btn = document.getElementById('kahf-play-btn');
      if (!btn) return;
      btn.innerHTML = isKahfPlaying
        ? '<i data-lucide="pause" class="w-5 h-5"></i>'
        : '<i data-lucide="play" class="w-5 h-5"></i>';
      if (window.lucide) window.lucide.createIcons();
    }

    // ---------------- ADHKAR LOGIC ----------------
    function selectAdhkarPeriod(period) {
      state.adhkarPeriod = period;
      const mBtn = document.getElementById('adhkar-morning-btn');
      const eBtn = document.getElementById('adhkar-evening-btn');
      if (mBtn && eBtn) {
        mBtn.classList.toggle('nav-pill-active', period === 'morning');
        mBtn.classList.toggle('surface-soft', period !== 'morning');
        eBtn.classList.toggle('nav-pill-active', period === 'evening');
        eBtn.classList.toggle('surface-soft', period !== 'evening');
      }
      saveState();
      renderAdhkarList();
    }

    function renderAdhkarList() {
      const container = document.getElementById('adhkar-list');
      if (!container) return;
      const list = ADHKAR_DATA[state.adhkarPeriod] || ADHKAR_DATA.morning;

      container.innerHTML = list.map(function (item) {
        const done = state.adhkarDone[item.id] || 0;
        const rem = Math.max(0, item.target - done);
        const completed = rem === 0;
        return (
          '<div class="surface-soft rounded-2xl p-4 sm:p-5 flex flex-col justify-between gap-3 border" style="border-color:' + (completed ? 'var(--gold)' : 'var(--border-col)') + ';">' +
            '<div class="space-y-1.5">' +
              '<div class="flex items-center justify-between">' +
                '<span class="text-xs font-bold" style="color: var(--gold);">' + item.title + '</span>' +
                '<span class="text-xs font-semibold" style="color: var(--text-muted);">التكرار: ' + item.target + '</span>' +
              '</div>' +
              '<p class="font-serif-ar text-lg sm:text-xl leading-relaxed font-bold">' + item.text + '</p>' +
            '</div>' +
            '<button type="button" onclick="tapDhikrCard(\'' + item.id + '\',' + item.target + ')" class="' + (completed ? 'surface-card' : 'btn-primary') + ' w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold transition">' +
              (completed ? '✓ اكتمل الذكر في ميزان حسناتها' : 'اضغط عند القراءة • المتبقي (' + rem + ')') +
            '</button>' +
          '</div>'
        );
      }).join('');
    }

    function tapDhikrCard(id, target) {
      const cur = state.adhkarDone[id] || 0;
      if (cur >= target) return;
      state.adhkarDone[id] = cur + 1;
      state.tasbeehCounts.t1 = (state.tasbeehCounts.t1 || 0);
      if (state.adhkarDone[id] === target) {
        showToast('تقبّل الله ذكرك وجعل ثوابه نوراً للحاجة أمينة');
      }
      saveState();
      renderAdhkarList();
    }

    function resetAdhkarProgress() {
      const list = ADHKAR_DATA[state.adhkarPeriod] || [];
      list.forEach(function (item) { delete state.adhkarDone[item.id]; });
      saveState();
      renderAdhkarList();
      showToast('تمت إعادة عدادات الأذكار');
    }

    // ---------------- SHARE MODAL ----------------
    function openShareModal() {
      const modal = document.getElementById('share-modal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeShareModal() {
      const modal = document.getElementById('share-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function getShareInviteMessage() {
      return 'صدقة جارية في محبة الغالية الحاجة أمينة محمد بكر رحمها الله وأسكنها الفردوس الأعلى 🌿\nاذكروا طيبتها وجدعنتها بدعوة صادقة من قلوبكم:\n«اللهم اغفر للحاجة أمينة محمد بكر وارحمها، وعافها واعفُ عنها، واجعل قبرها روضةً من رياض الجنة واجمعنا بها في الفردوس الأعلى.»';
    }

    function copyShareInvitation() {
      copyText(getShareInviteMessage() + '\n' + location.origin + location.pathname);
    }

    function sendShareInvitationWhatsApp() {
      shareWhatsAppText(getShareInviteMessage() + '\n' + location.origin + location.pathname);
    }

    // ---------------- INITIALIZATION ----------------
    function initApp() {
      loadState();
      setTheme(state.theme || 'cream_olive');
      renderFamilyNote();
      renderDuasGrid();
      renderFridayDuas();
      const fSalawatBadge = document.getElementById('friday-salawat-count');
      if (fSalawatBadge) fSalawatBadge.textContent = String(state.fridaySalawat || 0);
      const fridayLiveBadge = document.getElementById('friday-live-badge');
      if (fridayLiveBadge && new Date().getDay() === 5) {
        fridayLiveBadge.classList.remove('hidden');
      }
      const kBox = document.getElementById('kahf-text-box');
      if (kBox) kBox.style.fontSize = (state.kahfFontSize || 24) + 'px';
      const kRecSel = document.getElementById('kahf-reciter-select');
      if (kRecSel) kRecSel.value = state.kahfReciter || 'ar.alafasy';
      setKahfRange(state.kahfRange || 'full');
      switchFridayTab(state.fridayTab || 'duas');

      selectMunajatTab(state.munajatTab || 'names');
      renderTasbeehSection();
      renderAdhkarList();
      updateTopStats();

      const qBox = document.getElementById('quran-text-box');
      if (qBox) qBox.style.fontSize = (state.quranFontSize || 24) + 'px';
      const recSel = document.getElementById('reciter-select');
      if (recSel) recSel.value = state.reciter || 'ar.alafasy';

      loadSurah(state.currentSurah || 1);
      if (window.lucide) window.lucide.createIcons();
    }

    window.addEventListener('DOMContentLoaded', initApp);
  
// Keep modal content accessible on small screens.
document.addEventListener('keydown', function(e) {if(e.key==='Escape'){closeShareModal();}});
