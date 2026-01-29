---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMWGC24%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T190934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOBVmg1Wn8NrTDm9aFbzLAt84cqaYK0hSHcBd%2BChHBSQIgF4N4Gz46hFM%2BGt5x2mLXSSc0HuFno4bSdVPnKljgmkAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaR4EcYW0hE5qispSrcA15l2xgm47utpa1neQhfrvZgTbODW%2Fa4cUXgcthuwe3Cr5GhQ%2F39cHjZ50LW%2BN4%2FmWq6s2scVF7L0OJ7VEBm39DCNhdgmSdx%2BfAmJa1f%2Fde4TN5zag6ulOfIwxi71JwQoBJO%2Fg3OhATzF3%2FJ%2FsPCnisw1QCPoE1HhcQFh5oMf5kcN3hVd%2BVuDj5P00n75wrHpOGsTvnT7rg%2BP%2BZi6bmtF1jHQzam3vO177aofhCWMtIO2Twh3mPSiV50lTm1i2E9TmXKhZpZnRcCljZQNqiNrlra4%2B8b7palkeMs8tHqO%2FepUABOEx2lJKaNcWXgs7683esfc%2Bqse3iozm12S7qjheUlDEFh%2B%2B%2BJYS5UjYG2iFhkHqQoPlh0LjUuKRYqyX26SjN2VDgSBpICSSIVlxKypSFMwTFaTh%2FIlzhfAjcrswosJFIyMRsMibzz276%2BfdFaRvqFL2giROXGq7QIq6SbNHt%2BgAu4P%2FjL4BV%2BbYfIVQfoiyYHN1WKDk5dIooVNvOPzHqPVqjG8GEXnKUFeVH%2FE1O%2BTVgJIMBYVyV9cvPlp%2Bab6Nkknul1CYgboqHivi5t3FAQe0Jlk4e1n4tURJb9BOvFZEviEFf36JD0XQS37bkw%2F5pJLUVRl1ot1%2FVMMMzJ7ssGOqUBdYtJ3EK8JaGBRmXJHmjc4lwrSUaAXDEgc1jfJDsAicsFL4eCjsMhZCG%2FhYAjmFNrjJp5HBQc9kZUwmySvRc98jLseh2YBE61g4oQnV35dhsj7A0elJa1m0fefgu8WhuY0ddcIrefe8McfUJFyWLB2mewU85aQpZXa48FxexS37EU4fUF7eQAavD2uOtAIIDssEjK6OlBmaRYNspXfc040%2BQvTtVY&X-Amz-Signature=034c43c52571ae0d7350c9f06259c45f3454b9d7abcaa8d7252b58c8abdac2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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