/* Renders the portfolio from window.PORTFOLIO (content.js).
   You normally don't need to edit this file — edit content.js instead. */
(function () {
  "use strict";

  const C = window.PORTFOLIO;
  if (!C) {
    document.body.insertAdjacentHTML("afterbegin", "<p style='padding:2rem'>content.js failed to load — check it for a syntax error (missing comma or quote).</p>");
    return;
  }

  /* ---------- tiny DOM helper ---------- */
  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null || v === false) continue;
        if (k === "class") el.className = v;
        else if (k === "style") el.style.cssText = v;
        else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? "" : v);
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false || c === "") continue;
      el.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return el;
  }
  const has = (s) => typeof s === "string" && s.trim() !== "" && !/^TODO\b/i.test(s.trim());
  const pad = (n) => String(n).padStart(2, "0");
  const sticker = (s, extra) =>
    s && h("span", { class: `sticker sticker--${s.color || "orange"} ${extra || ""}` }, s.text || s);

  /* ---------- media source detection ---------- */
  function parseSource(src) {
    if (!has(src)) return { kind: "empty" };
    const s = src.trim();
    let m;
    if ((m = s.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/)|youtu\.be\/)([\w-]{6,})/))) {
      return {
        kind: "iframe",
        embed: `https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&rel=0&playsinline=1`,
        thumb: `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg`,
      };
    }
    if ((m = s.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      return { kind: "iframe", embed: `https://player.vimeo.com/video/${m[1]}?autoplay=1&title=0&byline=0&portrait=0` };
    }
    if ((m = s.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/))) {
      return {
        kind: "iframe",
        embed: `https://drive.google.com/file/d/${m[1]}/preview`,
        thumb: `https://drive.google.com/thumbnail?id=${m[1]}&sz=w800`,
      };
    }
    if (/\.(jpe?g|png|webp|gif|avif)(\?.*)?$/i.test(s)) return { kind: "image", src: s };
    return { kind: "video", src: s };
  }

  const ratioCss = (r) => (r || "9:16").replace(":", " / ");

  /* ---------- meta ---------- */
  document.title = C.meta.pageTitle || document.title;
  document.querySelectorAll("[data-bind=brand]").forEach((el) => (el.textContent = C.meta.name));
  document.querySelectorAll("[data-bind=footer]").forEach(
    (el) => (el.textContent = `${C.meta.name} · ${C.meta.role} · ${C.meta.year}`)
  );

  /* ---------- hero ---------- */
  (function hero() {
    const H = C.hero;
    const root = document.getElementById("hero");
    root.append(
      h("div", { class: "hero__top" }, h("p", { class: "hero__name" }, C.meta.name), has(H.badge) && h("span", { class: "pill" }, H.badge)),
      h(
        "h1",
        { class: "hero__title" },
        H.titleLines.map((l) => h("span", null, l))
      ),
      h("div", { class: "hero__stickers", "aria-hidden": "true" }, H.stickers.map((s, i) => sticker(s, `tilt-${i}`))),
      h(
        "div",
        { class: "hero__bottom" },
        h("p", { class: "lead" }, H.intro),
        h(
          "div",
          { class: "hero__cta" },
          h("a", { class: "btn btn--dark", href: H.ctaPrimary.href }, H.ctaPrimary.label),
          h("a", { class: "btn btn--ghost", href: H.ctaSecondary.href }, H.ctaSecondary.label)
        )
      )
    );
  })();

  /* ---------- stats (menu-style rows) ---------- */
  (function stats() {
    const root = document.getElementById("stats");
    root.append(
      h(
        "ol",
        { class: "menu" },
        C.stats.map((s, i) =>
          h(
            "li",
            { class: "menu__row" },
            h("span", { class: "menu__num" }, pad(i + 1)),
            h("span", { class: "menu__label" }, s.label),
            h("span", { class: "menu__note" }, s.note),
            h("span", { class: "menu__value" }, s.value)
          )
        )
      )
    );
  })();

  /* ---------- impact: products born from tests ---------- */
  (function impact() {
    const P = C.products;
    const root = document.getElementById("impact");
    if (!P) return root.remove();
    root.append(
      h(
        "div",
        { class: "section-head" },
        h("span", { class: "pill" }, P.kicker),
        h("h2", { class: "h1" }, P.title),
        h("p", { class: "lead" }, P.intro)
      ),
      h(
        "ol",
        { class: "products" },
        P.items.map((it, i) =>
          h(
            "li",
            { class: "product" },
            h("span", { class: "product__num", "aria-hidden": "true" }, pad(i + 1)),
            h("span", { class: "product__tag" }, it.tag),
            h("h3", { class: "h3" }, it.title),
            has(it.text) && h("p", null, it.text),
            it.href && h("a", { class: "link", href: it.href }, "see the creatives →")
          )
        )
      )
    );
  })();

  /* ---------- volume ---------- */
  (function volume() {
    const V = C.volume;
    const root = document.getElementById("volume");
    const T = V.tree;
    root.append(
      h(
        "div",
        { class: "split" },
        h(
          "div",
          null,
          h("span", { class: "pill" }, V.kicker),
          h("h2", { class: "h2" }, V.title),
          V.text.map((p) => h("p", { class: "body" }, p))
        ),
        h(
          "figure",
          { class: "tree", "aria-label": "One concept splits into many variations" },
          h("div", { class: "tree__concept" }, h("strong", null, T.concept), h("span", null, T.conceptNote)),
          h("div", { class: "tree__lines", "aria-hidden": "true" }),
          h("div", { class: "tree__branches" }, T.branches.map((b, i) => h("span", { class: `tree__leaf tilt-${i % 3}` }, b))),
          T.caption && h("figcaption", null, T.caption)
        )
      ),
      (V.pillars || []).length > 0 &&
      h(
        "div",
        { class: "pillars" },
        V.pillars.map((p, i) =>
          h(
            "article",
            { class: "pillar" },
            h("span", { class: "pillar__num" }, pad(i + 1)),
            h("h3", null, p.title),
            h("p", null, p.text),
            p.link && h("a", { class: "link", href: p.link.href }, p.link.label + " →")
          )
        )
      )
    );
  })();

  /* ---------- work / cases ---------- */
  const galleries = []; // for lightbox navigation

  function creativeCard(item, galleryIndex, itemIndex, captions = true) {
    const src = parseSource(item.src);
    const ratio = ratioCss(item.ratio);
    let thumb;
    if (src.kind === "empty") {
      thumb = h(
        "div",
        { class: "thumb thumb--empty" },
        h("span", { class: "thumb__fmt" }, item.format || "creative"),
        h("span", { class: "thumb__soon" }, "coming soon")
      );
    } else if (src.kind === "image") {
      thumb = h("img", { class: "thumb", src: src.src, alt: item.title || "", loading: "lazy" });
    } else if (src.kind === "video") {
      thumb = item.poster
        ? h("img", { class: "thumb", src: item.poster, alt: item.title || "", loading: "lazy" })
        : h("video", { class: "thumb", src: src.src + "#t=0.1", preload: "metadata", muted: true, playsinline: true, "aria-hidden": "true" });
    } else {
      const t = item.poster || src.thumb;
      thumb = t
        ? h("img", { class: "thumb", src: t, alt: item.title || "", loading: "lazy" })
        : h("div", { class: "thumb thumb--empty" }, h("span", { class: "thumb__fmt" }, item.format || "video"));
    }
    if (thumb.tagName === "VIDEO") thumb.muted = true; // attribute alone isn't enough in some browsers

    const playable = src.kind !== "empty";
    const isVideo = src.kind === "video" || src.kind === "iframe";
    const frame = h(
      playable ? "button" : "div",
      {
        class: "card__frame",
        style: `aspect-ratio:${ratio}`,
        type: playable ? "button" : null,
        "aria-label": playable ? `Open ${item.title || "creative"}` : null,
        onclick: playable ? () => openLightbox(galleryIndex, itemIndex) : null,
      },
      thumb,
      playable && isVideo && h("span", { class: "card__play", "aria-hidden": "true" }),
    );

    return h(
      "li",
      { class: "card" },
      frame,
      captions && h(
        "div",
        { class: "card__meta" },
        playable && has(item.format) && h("span", { class: "card__tag" }, item.format),
        h("h4", null, item.title),
        has(item.angle) && h("p", null, h("b", null, "angle "), item.angle),
        has(item.hook) && h("p", null, h("b", null, "hook "), item.hook)
      )
    );
  }

  (function work() {
    const root = document.getElementById("work");
    const total = C.cases.length;
    root.append(
      h(
        "div",
        { class: "wrap work__intro" },
        h("span", { class: "pill" }, "selected work"),
        h("h2", { class: "h1" }, "the work"),
        h(
          "nav",
          { class: "work__jump", "aria-label": "Cases" },
          C.cases.map((c, i) =>
            h("a", { href: `#${c.id}` }, h("span", null, pad(i + 1)), `${c.brand} · ${c.tag}`)
          )
        )
      )
    );

    C.cases.forEach((c, ci) => {
      const story = (c.story || []).filter((s) => has(s.text));
      const hl = c.highlight;
      const section = h(
        "article",
        { class: "case", id: c.id },
        h(
          "div",
          { class: "wrap" },
          h(
            "div",
            { class: "case__head" },
            h(
              "div",
              null,
              h("span", { class: "pill" }, `${pad(ci + 1)} / ${pad(total)} · ${c.brand}`),
              h("h3", { class: "h1" }, c.title),
              h("p", { class: "lead" }, c.summary),
              h("div", { class: "chips" }, (c.tags || []).map((t) => h("span", { class: "chip" }, t)))
            ),
            hl
              ? h(
                  "div",
                  { class: "result" },
                  hl.sticker && sticker(hl.sticker, "result__sticker"),
                  h("span", { class: "result__label" }, hl.label),
                  h("strong", { class: "result__value" }, hl.value),
                  h("span", { class: "result__note" }, hl.note)
                )
              : c.sticker && h("div", { class: "case__sticker" }, sticker(c.sticker))
          ),
          story.length > 0 &&
            h(
              "ol",
              { class: "story" },
              story.map((s, i) =>
                h("li", null, h("span", { class: "story__label" }, `${pad(i + 1)} · ${s.label}`), h("p", null, s.text))
              )
            ),
          (c.groups || []).map((g) =>
            h(
              "div",
              { class: "group" },
              h(
                "div",
                { class: "group__head" },
                h("h4", { class: "h3" }, g.title),
                has(g.note) && h("p", null, g.note)
              ),
              gallery(g.items)
            )
          )
        )
      );
      root.append(section);
    });
  })();

  function gallery(items, captions = true) {
    const gi = galleries.push(items) - 1;
    return h("ul", { class: "grid" }, items.map((it, ii) => creativeCard(it, gi, ii, captions)));
  }

  /* ---------- formats I authored + gaming / e-com (inside #work) ---------- */
  (function extras() {
    const root = document.getElementById("work");
    const F = C.formats;
    if (F) {
      const anchor = F.after && document.getElementById(F.after);
      (anchor ? (n) => anchor.after(n) : (n) => root.append(n))(
        h(
          "div",
          { class: "extra", id: "formats" },
          h(
            "div",
            { class: "wrap" },
            h("span", { class: "pill" }, F.kicker),
            h("h3", { class: "h1" }, F.title),
            h("p", { class: "lead" }, F.intro),
            h(
              "ol",
              { class: "formats" },
              F.items.map((f, i) =>
                h(
                  "li",
                  { class: "format" },
                  h(
                    "div",
                    { class: "format__text" },
                    h("span", { class: "format__num" }, pad(i + 1)),
                    h("h4", { class: "h3" }, f.title),
                    f.sticker && sticker(f.sticker, `tilt-${i % 3}`),
                    h("p", null, f.text)
                  ),
                  (f.examples || []).length > 0 && gallery(f.examples, false) // без підписів під картками
                )
              )
            )
          )
        )
      );
    }
    const A = C.also;
    if (A) {
      root.append(
        h(
          "div",
          { class: "extra", id: "also" },
          h(
            "div",
            { class: "wrap" },
            h("span", { class: "pill" }, A.kicker),
            h("h3", { class: "h1" }, A.title),
            h("p", { class: "lead" }, A.intro),
            h(
              "div",
              { class: "also" },
              A.items.map((it) =>
                h(
                  "article",
                  { class: "also__item" },
                  h("h4", { class: "h3" }, it.title),
                  has(it.text) && h("p", null, it.text),
                  has(it.details) && h("p", null, it.details),
                  (it.examples || []).length > 0 && gallery(it.examples)
                )
              )
            )
          )
        )
      );
    }
  })();

  /* ---------- process ---------- */
  (function process() {
    const P = C.process;
    const root = document.getElementById("process");
    root.append(
      h(
        "div",
        { class: "section-head" },
        h("span", { class: "pill" }, P.kicker),
        h("h2", { class: "h1" }, P.title),
        h("p", { class: "lead" }, P.intro)
      ),
      h(
        "ol",
        { class: "phases" },
        P.phases.map((p, i) =>
          h(
            "li",
            { class: "phase" },
            h("div", { class: "phase__num" }, pad(i + 1)),
            h(
              "div",
              { class: "phase__main" },
              h("h3", { class: "h3" }, p.title),
              h("span", { class: `sticker sticker--${i % 2 ? "lilac" : "orange"} tilt-${i % 3}` }, p.question)
            ),
            h("ul", { class: "phase__points" }, p.points.map((pt) => h("li", null, pt))),
            h("p", { class: "phase__out" }, h("b", null, "output → "), p.output)
          )
        )
      ),
      h("p", { class: "loop" }, h("span", { "aria-hidden": "true" }, "↻ "), "then back to 01 — every week"),
      P.ai &&
        h(
          "div",
          { class: "ai" },
          h("h3", { class: "h2" }, P.ai.title),
          has(P.ai.intro) && h("p", { class: "body" }, P.ai.intro),
          h(
            "div",
            { class: "pillars" },
            P.ai.steps.map((st, i) =>
              h(
                "article",
                { class: "pillar" },
                h("span", { class: "pillar__num" }, `${pad(i + 1)} · ${st.label}`),
                h("h3", null, st.title),
                h("p", null, st.text),
                (st.tools || []).length > 0 && h("div", { class: "chips" }, st.tools.map((t) => h("span", { class: "chip" }, t))),
                st.link && h("a", { class: "link", href: st.link.href }, st.link.label + " →")
              )
            )
          )
        ),
      P.stack &&
        h(
          "div",
          { class: "stack" },
          h("h3", { class: "h3" }, "stack"),
          h(
            "div",
            { class: "stack__groups" },
            P.stack.map((g) =>
              h("div", null, h("span", { class: "stack__label" }, g.group), h("div", { class: "chips" }, g.items.map((t) => h("span", { class: "chip" }, t))))
            )
          )
        )
    );
  })();

  /* ---------- automations ---------- */
  (function automations() {
    const A = C.automations;
    const root = document.getElementById("automations");
    if (!A || !root) return;
    root.append(
      h(
        "div",
        { class: "section-head" },
        h("span", { class: "pill" }, A.kicker),
        h("h2", { class: "h1" }, A.title),
        h("p", { class: "lead" }, A.intro)
      ),
      h(
        "div",
        { class: "autos" },
        A.items.map((a, i) => {
          const img = parseSource(a.image);
          return h(
            "article",
            { class: "auto" },
            h(
              "div",
              { class: "auto__visual" },
              img.kind === "image"
                ? h("img", { src: img.src, alt: `${a.title}: screenshot`, loading: "lazy" })
                : h("span", { class: "auto__num", "aria-hidden": "true" }, pad(i + 1))
            ),
            h(
              "div",
              { class: "auto__body" },
              h("h3", { class: "h3" }, a.title),
              has(a.problem) && h("p", null, h("b", null, "problem "), a.problem),
              has(a.solution) && h("p", null, h("b", null, "what I built "), a.solution),
              has(a.impact) && h("span", { class: "sticker sticker--lilac" }, a.impact),
              (a.tools || []).some(has) && h("div", { class: "chips" }, a.tools.filter(has).map((t) => h("span", { class: "chip" }, t)))
            )
          );
        })
      )
    );
  })();

  /* ---------- contact ---------- */
  (function contact() {
    const K = C.contact;
    const root = document.getElementById("contact");
    root.append(
      h(
        "div",
        { class: "wrap" },
        h("span", { class: "sticker sticker--lilac contact__sticker" }, K.sticker),
        h("h2", { class: "contact__title" }, K.title.map((l) => h("span", null, l))),
        h("p", { class: "lead" }, K.text),
        h(
          "div",
          { class: "contact__links" },
          K.links.map((l) =>
            h("a", { class: "btn btn--dark", href: l.href, target: l.href.startsWith("http") ? "_blank" : null, rel: "noopener" }, l.label)
          )
        )
      )
    );
  })();

  /* ---------- lightbox ---------- */
  const lb = document.getElementById("lightbox");
  const lbMedia = lb.querySelector(".lightbox__media");
  const lbInfo = lb.querySelector(".lightbox__info");
  let cur = null;
  let lastFocus = null;

  function playableIndexes(gi) {
    return galleries[gi].map((it, i) => (parseSource(it.src).kind !== "empty" ? i : -1)).filter((i) => i >= 0);
  }

  function render() {
    const item = galleries[cur.g][cur.i];
    const src = parseSource(item.src);
    lbMedia.replaceChildren();
    const [rw, rh] = (item.ratio || "9:16").split(":").map(Number);
    lbMedia.style.setProperty("--r", rw && rh ? rw / rh : 0.5625);
    if (src.kind === "video") {
      const v = h("video", { src: src.src, controls: true, autoplay: true, playsinline: true, poster: item.poster || null });
      lbMedia.append(v);
    } else if (src.kind === "image") {
      lbMedia.append(h("img", { src: src.src, alt: item.title || "" }));
    } else if (src.kind === "iframe") {
      lbMedia.append(h("iframe", { src: src.embed, allow: "autoplay; fullscreen; picture-in-picture; encrypted-media", allowfullscreen: true, title: item.title || "video" }));
    }
    lbInfo.replaceChildren(
      ...[
        has(item.format) && h("span", { class: "chip chip--light" }, item.format),
        h("h3", null, item.title),
        has(item.angle) && h("p", null, h("b", null, "angle "), item.angle),
        has(item.hook) && h("p", null, h("b", null, "hook "), item.hook),
        has(item.note) && h("p", null, item.note),
      ].filter(Boolean)
    );
    const idx = playableIndexes(cur.g);
    const multi = idx.length > 1;
    lb.querySelectorAll(".lightbox__nav").forEach((b) => (b.hidden = !multi));
  }

  function openLightbox(g, i) {
    lastFocus = document.activeElement;
    cur = { g, i };
    render();
    lb.hidden = false;
    document.body.classList.add("no-scroll");
    lb.querySelector(".lightbox__close").focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    lbMedia.replaceChildren(); // stops playback
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }
  function step(d) {
    const idx = playableIndexes(cur.g);
    const pos = idx.indexOf(cur.i);
    cur.i = idx[(pos + d + idx.length) % idx.length];
    render();
  }

  lb.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
  lb.querySelector(".lightbox__nav--prev").addEventListener("click", () => step(-1));
  lb.querySelector(".lightbox__nav--next").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.classList.contains("lightbox__body")) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
  });

  /* ---------- reveal on scroll ---------- */
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".menu__row, .product, .pillar, .case__head, .story li, .card, .format__text, .also__item > h4, .phase, .auto").forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
