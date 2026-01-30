---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2M5YGD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T155908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZk4DNpq6IS2Yl1NfAX0wMrKJ5Z%2BAZC765HNtTeHyyeAIhAL6xUTD%2FwdF8JnXB3WnCEWDE7lW59C1B%2FNvHVc0myH56KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP3fevMkNRYQN0Vygq3AOjjEy20F%2F7Mug6ebglOpOg1rFJ6TFWXm0Wo9y0ZSnuqSDBGmp1%2Fg%2BWr9RNJccJYcLA90f7mWsDZYIJLz%2FPUhmed6ukRUv9tZ%2B%2BNk1XG3AkqkXVVbBHb%2FrJ%2FETAeFojct7GV3ab%2BZgjy4iu2QcjK2EGaI4ECTIr4iPBEB96csQuDNSuCTJUzjwsQlkC07BqNYgB7DnbVet0yVpH3c%2BrBiFfgiCP%2F0KKzWV4TtgJAdrmoY55v7IQoLcsFxglyziub%2BmbqM6SDl%2FiN85tTEbMApeygm0gyxe0KNgc6J0SXQRqdR%2F%2Fp0wn%2FIcm8qsGN%2B0VyRN4p%2F6Eg6rMt9JMjgk1CLk6Da6blN8D5fefcAsGClaQubNXyIhKpwHP%2BsGvA9NGmVtpiqH%2FMYJf%2Bwo%2BbV4MxFDKHsalHdDQcWYVOOqyj6vhnCAEhXqXcoXcQqVjFA3%2Ff%2F874j%2BHVod1es7BuhfW%2Bi3pA4v8%2BeWuBlQk5NYuSN97KNiwtAlx4SRRAQkDv0GolkCJyOKNYRGrdpNxWrk6t2s2L%2B%2BeJF77yVYAeHCf3IydfwWIncv5XirGRS6gys5x02bnyYTw8IUCtDuQ81LwKGPr6plvhZBy8pDqrS17Bg0NLrmFbw5EkKwqVhTy3TD6jvPLBjqkAak0SqicFnAQEK%2BPAes1GzFOMaeXjtlkd2PIFBWV3Tz7uCfyYAZvtmAEnc6xLuYKN8C6HMojKAgeSeHSM9wgNAp%2B%2BXFufODVKfehAg5K%2FHFmzJc18czN8Jzfxgj1w05KfNc2xrG8XV9O%2FqHZVFc%2F4TR61mJOnDuJ766nW1SouQReW10Y85I4sVMpo6PY%2Br%2FcV18oAaq4ly9GDYVRcA58Wq60TAM%2F&X-Amz-Signature=5e1259a19cebc2b43f8d348d2d4c595d3df0b5f0fb10b09dd336f4f22e6ae71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
seoTitle: ""
seoDescription: ""
---

Tento web nevznikl jako hotová šablona za jedno odpoledne, ale jako výsledek postupného a iterativního procesu s cílem vytvořit funkční, udržitelný a dlouhodobě rozšiřitelný nástroj. Hlavní filozofií bylo, že technologie mají sloužit obsahu, nikoliv se předvádět, a že web není cíl, ale nástroj.

Zde je podrobný přehled postupu, použitých technologií a ponaučení z vývoje:

### 1. Strategie: Nejdřív obsah, pak technologie

Úplně na začátku nestál framework, ale otázka, co má web vlastně dělat. Cílem byla prezentace projektů, přehledná timeline a blog. Zásadním rozhodnutím bylo, že obsah musí jít psát přirozeně, ideálně v Notionu, bez nutnosti sahat do kódu při každém novém článku.

### 2. Zvolený technologický stack

Pro realizaci byla vybrána kombinace, která sází na rychlost a jednoduchost:

- Astro: Zvoleno pro generování statického webu, který je rychlý, levný na provoz a bez zbytečné „magie“ nebo JavaScriptového balastu.

- Tailwind CSS: Použit pro layout a typografii s cílem udržet konzistentní design, ale bez „utility class hell“ – tedy s důrazem na čitelnost kódu.

- Notion: Slouží jako redakční systém (CMS). Články se píší v Notionu, odkud se pomocí skriptu exportují do Markdownu a validují přes Astro Content Collections.

### 3. Design a uživatelská zkušenost (UX)

Cílem byl prémiový „editorial“ vzhled, nikoliv klasický blog z roku 2018.

- Hero sekce: První dojem tvoří jemné animace, ambientní světlo a gradientní text. Technickým ponaučením bylo, že gradienty patří do vnitřních prvků (span), zatímco animace na obalové elementy, aby nedocházelo k vizuálním chybám.

- Projekty a blog: Sekce projektů byla pojata jako horizontální carousel s jemnými maskami na okrajích a šipkami místo scrollbarů. Pro přehled článků byl nakonec zvolen formát „jeden řádek = jeden článek“ s důrazem na silný titulek, což působí více magazínově než klasický grid karet.

- Detaily, které dělají rozdíl: Pro zvýšení kvality byly přidány prvky jako scroll progress bar, odhadovaná doba čtení a ikony sociálních sítí (Tabler Icons) vložené jako inline SVG pro plnou kontrolu nad vzhledem.

### 4. Technické výzvy a „porodní bolesti“

I když byl plán jasný, realita přinesla několik komplikací:

- Notion Sync a tagy: Objevil se problém, kdy se všechny tagy zobrazovaly jako „ostatní“. Příčinou byl nesoulad mezi typem pole v Notionu (Select vs. Multi-select) a očekáváním skriptu. Řešením bylo přestat vymýšlet fallbacky a zobrazovat přesně to, co je v datech.

- Deploy a Git: Během nasazování se stalo, že web i po buildu ukazoval starý vzhled. Problém byl v nejednotné lokální kopii projektu a špatně commitnutém kódu. Ponaučením je, že Git je skvělý sluha, ale nemilosrdný pán.

- Vizuální ladění: Design se ladil tak dlouho, dokud „nepřestal bolet oči“, nikoliv dokud nebyl co nejefektnější. Ukázalo se, že méně animací znamená více důvěryhodnosti.

### 5. Závěr a co dál

Aktuálně je web postavený na pevných základech: má funkční automatický build a deploy, obsah se snadno spravuje přes Notion a design je klidný a čitelný. Dalším krokem je ladění jemné typografie, rytmu textu a mikrointerakcí.

Hlavní ponaučení z celého procesu:

1. Architektura je důležitější než efekty.

1. Konzistence vítězí nad originalitou za každou cenu.

1. Web není hotový projekt, ale neustálý proces.