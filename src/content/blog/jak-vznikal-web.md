---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IGLWNZ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T063316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE6GI%2FlLCmF%2BRbZdhddH47Pyp2aMqGm%2Bl2oW%2BaTsZ80AiEAy2BsAc0mPKNSO9PB4J5InUWubGsa72vlIdRdGp4Bee8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDP3RpQrsKpG2I4U7jyrcA0T9uDFmekgqeWyewNA%2F5uICdRRqoKOfTvrxq0T5UUE8hqgHTxl1Pzn2XLgLqI6k3Uvzd%2BTAha%2F94vn8uTGJ8XMN%2BhJTGuidHRCFGFbKlHVJxIY8xwpx9C6QWdFMB5cdNBLzWgA3eILu%2FfsR%2ByKkV8j%2B%2Bo5cAqwcZFUrrs8jjF%2B9mehlPXLvNJq7z8%2BFIrlV%2FWcQ0ue8UEVQ2A5mKkWLFhuunfw8TnwNu7StVFgBzx2Qej0c%2BMO9R8d9R%2BAllUyBp%2Bf0xE4274wmjx37LtCOiphwf5PhWtTr%2FfEQSAipBam9pOeAKix3ixCP5Gz1z%2B18nCuppRr16UZSHA7TnTZfJS86CZKl8jR92iC01wn%2B8rCtKYW952Jlhz5lB%2ByGz92kNdh4j1QsJgviFzJ%2BAOYaGhNoQ45QjblT1QXKBzFhMYfyXUUD5f8Bcsjf0R3Wp095j6yNovna8QtJXu4kDCHpgrvfF8zh2HNy7nHm1a2ISONnya%2F6QxnsIuALXO1BuKLrb9E5NfBV%2BgDQF4hJAPv2ejNuWxlHDGbqudbQIMshfxj2%2FhlMBmkd8Ykh7odOH47PS7ucLOODkAg93nS2GCgi%2BX%2B7KCbhOangqhKnX29UCSeYPPWmWMXv1OpQ4t1jMKDn68sGOqUBP8Q3lljrLOqE7K14VqaAczmJY1tacEeWqtkzy8lt9OZpJsB6OeD2SbwHwFb4MVlc6%2FPq8eHctW%2FO847Soh7eWSlwn7xx0v5dY9p%2FGGGsMc5zRyKoj%2Buia4Ef3%2FDcmUqw7rhKP%2BD3eY58uaN5gwvO%2Ft0Q7GwIZ2Cc9VyDIx9efRZnQ80axolGoQxFV6NHZ3Iy5s%2BISUWvet1BTb1su6CX8z3Lu9uX&X-Amz-Signature=63270c28db25d93c0863f7931bc0ecad067b569ca44e59f07143abd98adf8a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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