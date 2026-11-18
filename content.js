/* =====================================================================
   ВЕСЬ ТЕКСТ І ВСІ КРЕО САЙТУ — ТУТ.
   Редагуєш цей файл → оновлюєш сторінку → бачиш зміни.

   Як додати креатив: скопіюй будь-який блок { src: ..., title: ... }
   у потрібну групу й заміни значення.

   src може бути:
     • файл з папки media:        "media/betterme/hook-01.mp4"  (або .jpg / .png / .webp)
     • YouTube (у т.ч. Shorts):    "https://youtube.com/shorts/XXXXXXXX"
     • Vimeo:                      "https://vimeo.com/123456789"
     • Google Drive (не радимо):   "https://drive.google.com/file/d/XXXX/view"
     • порожньо ""                 → показується акуратна заглушка

   Необов'язкові поля креативу:
     poster  — обкладинка (jpg), якщо не задана — береться перший кадр
     format  — "UGC", "talking head", "static", "motion"…
     angle   — кут / гіпотеза
     hook    — перші 3 секунди
     note    — будь-що: результат, що тестували, чому спрацювало
     ratio   — "9:16" (за замовчуванням), "4:5", "1:1", "16:9"

   Рядки з позначкою TODO — перевір / заміни на свої.
   ===================================================================== */

window.PORTFOLIO = {
  meta: {
    name: "Yuliia Medvetska",
    role: "creative strategist",
    pageTitle: "Yuliia Medvetska — Creative Strategist · Portfolio",
    description:
      "Performance creative strategist for subscription apps. 30–40 ad concepts a week, tested, iterated and scaled. Plus the automations that keep that volume sane.",
    ogImage: "media/og-cover.jpg", // TODO: картинка-прев'ю для LinkedIn/Telegram, 1200×630
    year: "2026",
  },

  hero: {
    badge: "2026 · open to work",
    titleLines: ["creative", "strategist"],
    stickers: [
      { text: "30–40 concepts / week", color: "lilac" },
      { text: "tests → 3 new products", color: "orange" },
    ],
    intro:
      "I build performance creative for subscription apps in health, wellness and fitness, plus gaming and e-commerce. High volume, sharp angles, and a test log that actually tells the team what to make next.",
    ctaPrimary: { label: "see the work", href: "#work" },
    ctaSecondary: { label: "how I work", href: "#process" },
  },

  // Рядки під hero (стиль "the menu" з PDF)
  stats: [
    { value: "30–40", label: "concepts a week", note: "new concepts + iterations on winners" },
    { value: "3–5", label: "variations per concept", note: "every concept goes to test as a set" },
    { value: "3", label: "new products", note: "born from my creative tests" },
    { value: "4", label: "verticals", note: "mental health · fitness · gaming · e-commerce" },
  ],

  // Блок одразу під цифрами: продукти, що народились з крео-тестів
  products: {
    kicker: "impact",
    title: "3 products born from creative tests",
    intro:
      "When a creative angle wins hard enough, it stops being just an ad and becomes a product. At BetterMe this happened three times.",
    items: [
      {
        title: "chakra test & chakra activation plan",
        tag: "BetterMe · mental health",
        text: "The theme launched in 2019 and took off on statics that offered the test right inside the creative. The company turned it into a product: a chakra test and a personal chakra activation plan.",
        href: "#betterme-mental",
      },
      {
        title: "meditation for childhood trauma",
        tag: "BetterMe · mental health",
        text: "The childhood trauma angle kept outperforming in creative tests, so the company built a dedicated product around it: meditation for people with childhood trauma.",
        href: "#betterme-mental",
      },
      {
        title: "wall pilates",
        tag: "BetterMe · fitness",
        text: "Wall pilates creatives proved the demand before the product existed. Then it became one.",
        href: "#betterme-fitness",
      },
    ],
  },

  volume: {
    kicker: "high volume",
    title: "30–40 concepts a week, without the chaos",
    text: [
      "Every week: 30–40 concepts. Part of them are new concepts, fresh angles, pain points and hypotheses. The rest are iterations on winners, so what already works keeps scaling before it fatigues.",
      "Each concept always goes to test with 3–5 variations: different hooks, voiceovers, visuals, lengths or formats. That's roughly 90–200 ads in testing every week, and it only works with a system.",
    ],
    tree: {
      concept: "1 concept",
      conceptNote: "new idea or iteration on a winner",
      branches: ["hook", "voiceover", "visual", "format", "length"],
      caption: "3–5 variations each × 30–40 concepts a week",
    },
    pillars: [
      { title: "briefs that don't need a call", text: "Storyboard, references, on-screen copy and timestamps. Editors build exactly what I meant." },
      { title: "one naming convention", text: "Product · angle · format · variation. Results can be read in seconds on Monday." },
      { title: "a test log, not a feeling", text: "Every hypothesis is closed as confirmed or invalidated before new ideas go in." },
      { title: "automate the routine", text: "Naming, tracking and reporting run on their own, so my time goes to ideas.", link: { label: "see automations", href: "#automations" } },
    ],
  },

  // =========================== КЕЙСИ ===========================
  cases: [
    {
      id: "betterme-mental",
      brand: "BetterMe",
      tag: "mental health",
      sticker: { text: "test → new product", color: "orange" },
      title: "mental health: chakras & childhood trauma",
      summary:
        "Two themes in BetterMe's mental health direction: chakras and childhood trauma. Both started as creative angles and both grew into products.",
      tags: ["mental health", "chakras", "childhood trauma", "angle testing"],
      story: [
        { label: "context", text: "Mental health is a crowded space where every ad promises calm. We needed angles that felt personal, not generic." },
        { label: "what we tested", text: "I tested new themes: chakras and childhood trauma. Both kept outperforming." },
        { label: "what happened", text: "The signal was strong enough to build products around them: a chakra test with a chakra activation plan, and meditation for people with childhood trauma." },
      ],
      highlight: {
        label: "result",
        value: "2 new products",
        note: "chakra test & activation plan · meditation for childhood trauma",
        sticker: { text: "ads → roadmap", color: "lilac" },
      },
      groups: [
        {
          title: "chakras",
          note: "Launched in 2019 and took off on statics. What worked best: the test was offered right inside the creative. We also created our own characters for the theme, chakra girls with flower heads.",
          items: [
            {
              src: "media/betterme/chakras/which-chakra-line-art.jpg",
              title: "Which chakra is blocked?",
              format: "static",
              angle: "self-diagnosis: find your blocked chakra",
              hook: "“Which chakra is blocked?”",
              note: "The test is offered right in the creative: one clear “Take test” button.",
            },
            {
              src: "media/betterme/chakras/which-chakra-chart.jpg",
              title: "Which chakra is blocked? · chakra chart",
              format: "static · infographic",
              angle: "self-diagnosis through symptoms of each chakra",
              hook: "“Which chakra is BLOCKED?”",
              note: "A chart to read like a checklist, then “Take test”.",
            },
            {
              src: "media/betterme/chakras/chakra-flower-girls.jpg",
              title: "Chakra girls with flower heads",
              format: "static · own characters",
              angle: "balanced vs blocked, for each chakra",
              hook: "“Which chakra is blocked”",
              note: "Our own characters, created for the chakra theme: a girl with a flower head for each chakra.",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-05.jpg",
              title: "How to read auras · ES",
              format: "static · infographic",
              angle: "aura colours reveal personality and imbalances",
              hook: "“Cómo leer auras” (How to read auras)",
              note: "Localised for Spanish-speaking markets",
            },
            {
              src: "media/betterme/chakras/chakra-incoming-call.jpg",
              title: "2-min free chakra test · incoming call",
              format: "static · fake UI",
              angle: "a free 2-minute test, framed as a call you can't ignore",
              hook: "“Incoming call… 2-Min Free Chakra Test”",
              note: "The test is offered right in the creative, styled as an incoming call screen.",
              ratio: "4:5",
            },
          ],
        },
        {
          title: "childhood trauma",
          note: "For the first launches we created our own unique characters in black & white style. In 2024–25 we came up with a new format, animated illustration, that worked really well for the theme. The angle then scaled into attachment styles and new markets.",
          items: [
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-08.jpg",
              title: "Childhood trauma · B&W scribbles",
              format: "static · own B&W characters",
              angle: "childhood trauma quietly holds you back",
              hook: "“Childhood trauma: what prevents you from living from childhood”",
              note: "First launches: our own B&W characters + the test right in the creative",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-01.jpg",
              title: "Trauma patterns · B&W scribbles",
              format: "static · infographic · own B&W characters",
              angle: "seven hidden trauma patterns that hold you back",
              hook: "“Childhood trauma: what prevents from living from childhood”",
              note: "Variation with a list of patterns: false self, overthinking, self-doubt…",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-06.jpg",
              title: "Where trauma shows up · B&W figures",
              format: "static · infographic · own B&W characters",
              angle: "trauma affects emotions, health, relationships and behaviour",
              hook: "“Childhood trauma: what prevents from living from childhood”",
              note: "B&W patterned human figures, our own characters",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-04.mp4",
              poster: "media/betterme/childhood-trauma/childhood-trauma-04.jpg",
              title: "Inner child · animated illustration",
              format: "animated illustration",
              angle: "women who hid their feelings struggle with closeness",
              hook: "“Women who learned to keep their feelings inside may find closeness difficult.”",
              note: "2024–25 format; 3-minute test offered at the end",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-02.mp4",
              poster: "media/betterme/childhood-trauma/childhood-trauma-02.jpg",
              title: "Green flags vs red flags · PL",
              format: "animated illustration · testimonial",
              angle: "with anxious attachment, green flags feel like red flags",
              hook: "“4 green flags that can look like red flags early on, if you have an anxious attachment style” (Polish)",
              note: "2024–25 format, localised for Poland",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-03.mp4",
              poster: "media/betterme/childhood-trauma/childhood-trauma-03.jpg",
              title: "Anxious attachment “translation” · CZ",
              format: "illustrated doodles · text-on-screen",
              angle: "decoding a relationship complaint as anxious attachment",
              hook: "“It drives me crazy that I always have to be the one who starts everything…” → “Translation” (Czech)",
              note: "Same hand-drawn template, localised for Czechia; ends on “Take test”",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-09.mp4",
              poster: "media/betterme/childhood-trauma/childhood-trauma-09.jpg",
              title: "Why am I so attached? · JP",
              format: "3D · text-on-screen",
              angle: "an attachment-style test for an idealised partner",
              hook: "“Why am I so attached to this person?” (Japanese)",
              note: "Localised for Japan",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-07.jpg",
              title: "Emotions stored in the body",
              format: "static · infographic",
              angle: "negative emotions live in the organs",
              hook: "“Clears the internal organs of any negative emotions and physical toxins”",
            },
          ],
        },
      ],
    },

    {
      id: "betterme-fitness",
      brand: "BetterMe", // TODO: якщо фітнес був в іншій компанії — зміни тут
      tag: "fitness",
      sticker: { text: "pilates season", color: "lilac" },
      title: "wall pilates & pilates",
      summary:
        "Creatives for the fitness product, built around two formats people were searching for: wall pilates and classic pilates.",
      tags: ["wall pilates", "pilates", "fitness"],
      story: [
        { label: "approach", text: "Challenges with a start date or a deadline, age targeting (45+), before/after and “reminder” hooks, UGC stories and app UI to show the plan." },
        { label: "variations", text: "Every concept went out with several hooks on the same body: AI-stylised opening vs exercise grid, motion graphics vs before/after." },
        { label: "outcome", text: "Wall pilates proved the demand in tests and became a separate product." },
      ],
      highlight: {
        label: "result",
        value: "new product",
        note: "wall pilates became a product after creative tests",
        sticker: { text: "pilates season", color: "orange" },
      },
      groups: [
        {
          title: "wall pilates",
          note: "",
          items: [
            {
              src: "media/betterme/wall-pilates/wall-pilates-01.mp4",
              poster: "media/betterme/wall-pilates/wall-pilates-01.jpg",
              title: "Day 22 · busy mom story",
              format: "UGC · workout demo",
              angle: "3 short workouts a day fit any schedule",
              hook: "“3 weeks ago I didn't even have time to change into workout clothes…”",
            },
            {
              src: "media/betterme/wall-pilates/wall-pilates-02.mp4",
              poster: "media/betterme/wall-pilates/wall-pilates-02.jpg",
              title: "Until February 1st · exercise grid",
              format: "UGC · workout demo",
              angle: "do this 3× a week to see results by a deadline",
              hook: "“Do this workout three times per week until February 1st”",
              note: "Concept A, hook 1",
            },
            {
              src: "media/betterme/wall-pilates/wall-pilates-03.mp4",
              poster: "media/betterme/wall-pilates/wall-pilates-03.jpg",
              title: "“Baby girl” · AI hook",
              format: "AI-stylised opening · UGC",
              angle: "sexy back & lean legs by a deadline",
              hook: "“Baby girl if you want to build a sexy back & lean legs by February 1st, this is all you have to do”",
              note: "Concept A, hook 2: same body, AI-stylised first frames",
            },
            {
              src: "media/betterme/wall-pilates/wall-pilates-05.mp4",
              poster: "media/betterme/wall-pilates/wall-pilates-05.jpg",
              title: "Leg shape · motion hook",
              format: "motion graphics · workout demo",
              angle: "28 days reshape legs, pelvic floor and belly",
              hook: "“28-day wall pilates challenge”",
              note: "Concept B, hook 1: illustrated legs",
            },
            {
              src: "media/betterme/wall-pilates/wall-pilates-06.mp4",
              poster: "media/betterme/wall-pilates/wall-pilates-06.jpg",
              title: "Legs transformation · before/after",
              format: "before/after · workout demo",
              angle: "wall pilates smooths and tones legs",
              hook: "“Watch my legs transformation with Wall Pilates”",
              note: "Concept B, hook 2: same body, before/after opening",
            },
            {
              src: "media/betterme/wall-pilates/wall-pilates-08.mp4",
              poster: "media/betterme/wall-pilates/wall-pilates-08.jpg",
              title: "Reminder · July",
              format: "workout demo · text-on-screen",
              angle: "start now, see the difference within a month",
              hook: "“🔔Reminder🔔 If you start Wall Pilates now, you'll notice the difference by the end of July”",
              note: "Concept B, re-edit: new reminder hook and script",
            },
            {
              src: "media/betterme/wall-pilates/wall-pilates-07.mp4",
              poster: "media/betterme/wall-pilates/wall-pilates-07.jpg",
              title: "Women over 45",
              format: "workout demo · text-on-screen",
              angle: "low impact, no jumping, no equipment for 45+",
              hook: "“Wall pilates challenge for women over 45”",
              ratio: "4:5",
            },
            {
              src: "media/betterme/wall-pilates/wall-pilates-04.jpg",
              title: "January 6th challenge",
              format: "static",
              angle: "a beginner challenge with a start date",
              hook: "“Girls! On Monday January 6th we're starting the Wall Pilates Challenge for beginners.”",
            },
          ],
        },
        {
          title: "pilates",
          note: "",
          items: [
            {
              src: "media/betterme/pilates/pilates-03.mp4",
              poster: "media/betterme/pilates/pilates-03.jpg",
              title: "“This is Lessie”",
              format: "UGC · story · workout demo",
              angle: "four weeks of home pilates to get summer-ready",
              hook: "“This is Lessie”",
            },
            {
              src: "media/betterme/pilates/pilates-01.mp4",
              poster: "media/betterme/pilates/pilates-01.jpg",
              title: "Out of survival mode",
              format: "UGC · talking head · workout demo",
              angle: "a 28-day somatic plan to get out of survival mode",
              hook: "“If you want to get out of survival mode by yourself…”",
            },
            {
              src: "media/betterme/pilates/pilates-02.jpg",
              title: "Pilates kit at home · PT",
              format: "static",
              angle: "pilates at home with the right equipment",
              hook: "“Meninas,” (Girls, in Portuguese)",
              note: "Localised for Brazil/Portugal",
            },
          ],
        },
      ],
    },

    {
      id: "aura",
      brand: "Aura",
      tag: "lab tests",
      sticker: { text: "found the angle", color: "orange" },
      title: "the vagus nerve angle",
      summary:
        "The question was how to sell lab tests. I pre-tested 5 topics to find the answer. The vagus nerve won, and every next round of creatives was built on it.",
      tags: ["topic pre-testing", "lab tests", "winning angle", "scaling formats"],
      story: [
        { label: "pre-test", text: "I pre-tested 5 topics to understand how lab tests should be sold: which theme makes people care enough to order one." },
        { label: "breakthrough", text: "The vagus nerve topic took off and clearly beat the rest." },
        { label: "scale", text: "All the next creatives were tested on that topic: new formats, hooks and creators, so the angle could scale without burning out." },
      ],
      highlight: {
        label: "5 topics pre-tested → winner",
        value: "vagus nerve",
        note: "the topic every next creative was built on",
        sticker: { text: "pre-test → scale", color: "lilac" },
      },
      groups: [
        {
          title: "vagus nerve · different creative types",
          note: "Same angle, different executions.",
          items: [
            { src: "", title: "Vagus nerve · UGC", format: "UGC", angle: "", hook: "" },
            { src: "", title: "Vagus nerve · expert", format: "talking head", angle: "", hook: "" },
            { src: "", title: "Vagus nerve · explainer", format: "motion", angle: "", hook: "" },
            { src: "", title: "Vagus nerve · static", format: "static", angle: "", hook: "", ratio: "4:5" },
          ],
        },
      ],
    },

    {
      id: "gaming",
      brand: "MeChat",
      tag: "gaming · new niche",
      sticker: { text: "from zero", color: "orange" },
      title: "gaming: a new niche, boosted",
      summary:
        "MeChat is an interactive story app: swipe, match and chat with anime characters in romance roleplay. Gaming was a completely new niche for the business, with no history, no proven angles and no past winners to iterate on. We still managed to boost it.",
      tags: ["gaming", "interactive stories", "new niche", "testing from zero"],
      story: [
        { label: "context", text: "A brand-new niche for the business. Nothing to lean on: no historical data, no creative library, no proven angles." },
        { label: "approach", text: "Tested a wide mix: fake gameplay with story choices, fake UI chats and notifications, 2D character animation, memes and UGC reactions." },
        { label: "outcome", text: "Despite starting from zero, the direction was boosted and scaled." },
      ],
      highlight: {
        label: "result",
        value: "new niche, scaled",
        note: "a direction that didn't exist for the business, boosted from zero",
        sticker: { text: "from zero", color: "orange" },
      },
      groups: [
        {
          title: "MeChat creatives",
          note: "",
          items: [
            {
              src: "media/gaming/gaming-06.mp4",
              poster: "media/gaming/gaming-06.jpg",
              title: "Secret level choices",
              format: "fake gameplay · 2D animation",
              angle: "your choices unlock secret story levels",
              hook: "“I'm so addicted to you, it ruins my life...”",
              note: "Choice buttons right in the ad, then “Tap to see more”",
            },
            {
              src: "media/gaming/gaming-02.mp4",
              poster: "media/gaming/gaming-02.jpg",
              title: "Match & chat story",
              format: "fake UI · gameplay",
              angle: "swipe on characters, then chat out a romance story",
              hook: "Swiping on a character profile card",
              note: "The “It's a match!” moment carries the ad",
            },
            {
              src: "media/gaming/gaming-05.mp4",
              poster: "media/gaming/gaming-05.jpg",
              title: "“There's an app for that?!”",
              format: "UGC · talking head",
              angle: "an app that lets you romance fictional characters",
              hook: "“Wait, so you're telling me there's an app that allows you to talk to fictional characters and ROMANCE THEM?!”",
            },
            {
              src: "media/gaming/gaming-03.mp4",
              poster: "media/gaming/gaming-03.jpg",
              title: "She sent you two photos",
              format: "2D animation · fake UI",
              angle: "characters send you private photos",
              hook: "“She sent you two photos. See now on MeChat”",
              note: "Fake push notification as the hook",
            },
            {
              src: "media/gaming/gaming-04.mp4",
              poster: "media/gaming/gaming-04.jpg",
              title: "Good or naughty?",
              format: "2D animation · fake UI",
              angle: "companions chat 24/7, send photos and voice messages",
              hook: "“Do you like good?” “Or naughty?”",
            },
            {
              src: "media/gaming/gaming-07.mp4",
              poster: "media/gaming/gaming-07.jpg",
              title: "Expectation vs reality",
              format: "2D animation · meme",
              angle: "sweet-looking characters turn spicy in the story",
              hook: "“Expectation”",
            },
            {
              src: "media/gaming/gaming-01.jpg",
              title: "AI companion meme",
              format: "static · meme",
              angle: "roleplay and photos make the app irresistible",
              hook: "“Hey, wanna install this AI companion app?”",
              ratio: "1:1",
            },
          ],
        },
      ],
    },

    {
      id: "ecom",
      brand: "BetterMe",
      tag: "e-commerce · activewear",
      sticker: { text: "ads that sell products", color: "lilac" },
      title: "e-commerce: activewear",
      summary: "BetterMe's own activewear line: the Performance menswear collection, the Catline women's collection and seasonal sales. Physical products, where the ad has to show it, prove it and sell it in seconds.",
      tags: ["e-commerce", "activewear", "try-on", "product demo"],
      story: [
        { label: "context", text: "A physical product inside an app company: new collections and sales to sell, not subscriptions." },
        { label: "approach", text: "Split-screen product demos with flat-lay cards, creator try-ons, studio try-ons with a scarcity hook, and sale statics." },
        { label: "outcome", text: "TODO: результат" },
      ],
      highlight: null,
      groups: [
        {
          title: "activewear creatives",
          note: "",
          items: [
            {
              src: "media/ecom/ecom-02.mp4",
              poster: "media/ecom/ecom-02.jpg",
              title: "Catline try-on",
              format: "UGC · try-on",
              angle: "contour seams that flatter curvy bodies",
              hook: "“Contour seams that shape in all the right places”",
              note: "Creator try-on split with a product card",
            },
            {
              src: "media/ecom/ecom-04.mp4",
              poster: "media/ecom/ecom-04.jpg",
              title: "Catline drop",
              format: "studio try-on · product demo",
              angle: "new drop, selling fast",
              hook: "“New hot CATLINE DROP selling fast!”",
              note: "Scarcity hook; details shown up close",
            },
            {
              src: "media/ecom/ecom-01.mp4",
              poster: "media/ecom/ecom-01.jpg",
              title: "Performance collection",
              format: "product demo · split screen",
              angle: "activewear built for strength and focus",
              hook: "“Performance collection”",
              note: "Flat-lays and fabric close-ups next to the model",
            },
            {
              src: "media/ecom/ecom-05.jpg",
              title: "Black Friday up to −30%",
              format: "static",
              angle: "seasonal sale on activewear",
              hook: "“Black Friday up to −30%”",
            },
          ],
        },
      ],
    },
  ],

  // ===================== ФОРМАТИ, ЯКІ Я ПРИДУМАЛА =====================
  // Показується в розділі "the work" після кейсів. examples — як звичайні креативи.
  formats: {
    after: "betterme-fitness", // id кейсу, після якого показувати цей блок
    kicker: "BetterMe",
    title: "formats I authored",
    intro: "Not just concepts inside existing formats. At BetterMe I created formats that the team then scaled.",
    items: [
      {
        title: "the 5-card feed format",
        sticker: { text: "looks like a post", color: "orange" },
        text: "Five cards that mimicked the Facebook feed interface. It looked native to the feed, and it performed really well.",
        examples: [
            {
              src: "media/betterme/formats/5-card-feed/formats-5-card-feed-04.jpg",
              title: "Intermittent fasting by age",
              format: "5-card collage · illustration",
              angle: "pick the fasting schedule that fits your age",
              hook: "“Intermittent fasting according to the age”",
              ratio: "1:1",
            },
            {
              src: "media/betterme/formats/5-card-feed/formats-5-card-feed-01.jpg",
              title: "Intermittent fasting by age · 3D",
              format: "5-card collage · 3D",
              angle: "fasting schedule and meal plan for your age",
              hook: "“Intermittent fasting according to the age”",
              ratio: "1:1",
            },
            {
              src: "media/betterme/formats/5-card-feed/formats-5-card-feed-03.jpg",
              title: "Belly types",
              format: "5-card collage · illustration",
              angle: "your belly type tells you which fasting plan to follow",
              hook: "“Stressed belly”",
              ratio: "1080:912",
            },
            {
              src: "media/betterme/formats/5-card-feed/formats-5-card-feed-02.jpg",
              title: "Keto diet by age",
              format: "5-card collage · illustration",
              angle: "keto meal plan and exercises for men by age",
              hook: "“Keto diet”",
              ratio: "1:1",
            },
        ],
      },
      {
        title: "fast 3D character pipeline",
        sticker: { text: "2022–23 · no UGC needed", color: "orange" },
        text: "I came up with a fast pipeline for creating 3D characters. It worked great in 2022–23 and let the company test new directions without bringing in UGC creators.",
        examples: [
            {
              src: "media/betterme/formats/3d-characters/formats-3d-characters-01.mp4",
              poster: "media/betterme/formats/3d-characters/formats-3d-characters-01.jpg",
              title: "How much should I walk?",
              format: "3D characters · fake UI",
              angle: "personal daily walking target from your stats",
              hook: "“How much I should walk for weight loss”",
              ratio: "4:5",
            },
            {
              src: "media/betterme/formats/3d-characters/formats-3d-characters-02.jpg",
              title: "28-day wall pilates by age",
              format: "3D characters · infographic",
              angle: "a wall pilates plan for your age group",
              hook: "“28-day wall pilates according to the age”",
              ratio: "1:1",
            },
            {
              src: "media/betterme/formats/3d-characters/formats-3d-characters-03.jpg",
              title: "28-day chair workout for seniors",
              format: "3D characters · infographic",
              angle: "an easy chair workout plan for seniors",
              hook: "“28-day chair workout for seniors”",
              ratio: "4:5",
            },
        ],
      },
      {
        title: "AI stylisation of the first frames",
        sticker: { text: "hook = first frames", color: "lilac" },
        text: "I came up with stylising the opening frames with AI. The hook lives in the first seconds, so they get a look that stands out in the feed.",
        examples: [], // TODO: додати приклади,
      },
      {
        title: "illustrated cartoons",
        sticker: { text: "2024–25", color: "orange" },
        text: "A new format we came up with in 2024–25: animated illustrations. It worked especially well for the childhood trauma theme.",
        examples: [
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-04.mp4",
              poster: "media/betterme/childhood-trauma/childhood-trauma-04.jpg",
              title: "Inner child · animated illustration",
              format: "animated illustration",
              angle: "women who hid their feelings struggle with closeness",
              hook: "“Women who learned to keep their feelings inside may find closeness difficult.”",
              note: "2024–25 format; 3-minute test offered at the end",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-02.mp4",
              poster: "media/betterme/childhood-trauma/childhood-trauma-02.jpg",
              title: "Green flags vs red flags",
              format: "animated illustration · testimonial",
              angle: "with anxious attachment, green flags feel like red flags",
              hook: "“4 green flags that can look like red flags early on, if you have an anxious attachment style”",
              note: "2024–25 format",
            },
            {
              src: "media/betterme/childhood-trauma/childhood-trauma-03.mp4",
              poster: "media/betterme/childhood-trauma/childhood-trauma-03.jpg",
              title: "Anxious attachment “translation”",
              format: "illustrated doodles · text-on-screen",
              angle: "decoding a relationship complaint as anxious attachment",
              hook: "“It drives me crazy that I always have to be the one who starts everything…” → “Translation”",
              note: "Same hand-drawn template; ends on “Take test”",
            },
        ],
      },
    ],
  },

  // =========================== ПРОЦЕС ===========================
  process: {
    kicker: "my process",
    title: "a weekly loop, not a one-off",
    intro:
      "Every week runs the same cycle. Data in, ideas out, results back in. That loop is what makes 30–40 concepts a week possible.",
    phases: [
      {
        title: "research & analysis",
        question: "what scaled, what fatigued?",
        points: [
          "Weekly performance report: spend, ROAS, CPA by product. Read before the meeting, not during.",
          "Market & competitor ad analysis: which angles are winning right now.",
          "Test log review: every last-week hypothesis is closed as confirmed or invalidated.",
        ],
        output: "a clear picture of what's working, what's dying and what's still open",
      },
      {
        title: "ideation & planning",
        question: "what do we make next, and why?",
        points: [
          "Weekly action plan: every creative task in one place. Editors and designers take priorities from it.",
          "ICE scoring: each idea scored on impact, confidence and ease. High score gets made, low score waits.",
          "Product & audience check: every angle maps to a real pain point. If it's generic, it's dead.",
        ],
        output: "a prioritised plan with a reason behind every concept",
      },
      {
        title: "production & oversight",
        question: "is it being built the way I imagined it?",
        points: [
          "Storyboards: references, exact on-screen copy and timestamped notes. Every skipped detail becomes the editor's guess.",
          "Footage requests early in the week, so production windows don't get squeezed.",
          "Naming: product · angle · format · variation, so Monday's analysis takes minutes.",
        ],
        output: "near-final videos and statics built to spec",
      },
      {
        title: "review & feedback",
        question: "can I explain why this ad exists?",
        points: [
          "Every ad goes to review with a short strategic note: the angle or hook being tested and the data behind it.",
          "Good feedback is specific: the hook, the pacing, a mismatch with the landing page. Vague feedback means I ask a sharper question.",
        ],
        output: "an approved batch ready to launch; anything rejected goes back with exact notes",
      },
      {
        title: "monitoring & funnel",
        question: "scale, hold or kill?",
        points: [
          "Thumbstop rate (first 3 seconds): is the hook doing its job?",
          "Hold rate: if people stop but drop before the CTA, it's messaging or pacing.",
          "Full funnel: ad → landing page → checkout. If the ad converts and the page doesn't, the creative isn't the problem.",
        ],
        output: "weekly observations that feed straight back into step 01",
      },
    ],
    // TODO: залиш тільки те, чим реально користуєшся
    stack: [
      { group: "AI for research & writing", items: ["ChatGPT", "Claude", "Gemini", "Perplexity"] },
      { group: "creative research & analytics", items: ["Foreplay", "Motion", "Meta Ads Manager"] },
      { group: "team & production", items: ["Asana", "ClickUp", "Slack", "Notion"] },
      { group: "automation", items: ["Make", "Zapier", "Google Apps Script"] },
    ],
  },

  // =========================== АВТОМАТИЗАЦІЇ ===========================
  // TODO: заміни на свої реальні автоматизації. image — скрін/схема (media/automations/...)
  automations: {
    kicker: "automations",
    title: "systems I built so the team can ship more",
    intro:
      "Volume is only possible when the routine runs itself. These are the tools I built around the creative workflow.",
    items: [
      {
        title: "brief generator",
        problem: "Briefs took too long to write and still came back with questions.",
        solution: "TODO: what you built: e.g. a template + AI step that turns an idea into a storyboard-ready brief.",
        impact: "TODO: time saved / briefs per week",
        tools: ["TODO"],
        image: "",
      },
      {
        title: "auto naming & tracking",
        problem: "Hundreds of variations a month, impossible to read results by hand.",
        solution: "TODO: e.g. names are generated from the brief and every ad lands in a tracking table automatically.",
        impact: "TODO",
        tools: ["TODO"],
        image: "",
      },
      {
        title: "weekly performance digest",
        problem: "Monday analysis meant hours of copying numbers between dashboards.",
        solution: "TODO: e.g. a scheduled report that pulls winners, fatigue signals and open hypotheses into one doc.",
        impact: "TODO",
        tools: ["TODO"],
        image: "",
      },
    ],
  },

  // =========================== КОНТАКТ ===========================
  contact: {
    sticker: "let's talk",
    title: ["looking for a", "creative strategist?"],
    text: "I'm open to full-time and contract roles. Message me and I'll reply fast.",
    // TODO: встав свої посилання
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yuliia-medvetska-676ab7124/" },
      { label: "yuliia.medvetska@gmail.com", href: "mailto:yuliia.medvetska@gmail.com" },
    ],
  },
};
