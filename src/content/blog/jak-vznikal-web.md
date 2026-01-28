---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOOM2UHZ%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T225214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7zuMR7XjHl4vAKNFfGzXg%2FUvzq7%2Fqd7L2ubd8aYGXYgIhAOqsHNc8cs8J69aKKiYYscEm%2BA9gQaSLzpoK2kJS8M6TKv8DCHMQABoMNjM3NDIzMTgzODA1IgyIxebQ%2B70sOML5ikEq3APMo%2BAKq442ltSNgq2bjIDlrKWafCZrwMt6MzncrRwyUgcjFeg2bdcOfNlEu4UTtoe5orhP3artroVu1Arhya0AeBvPGnDHa%2By094OeNU1XLbFTMRsiBt9%2FhLVNZJiQhhfinDTHg3lQyH0W3QVofRy1nT%2FYUzNYBXbFPfhu2M0VgAg8QzwD4WdIFT7ripoImMWM0MttRHiWASQF6c%2FeM%2FtrL1WoO%2FXlm6mVcAgLH5gNmYMU17ZKORBbc0Ty4P2Txu%2FtuIRgM3HovN4%2FQguMONgx9kBEPOzE3VL%2FpmQKAAjwsO5PwiVdRBJkvH3hbizvow7xXwb%2BRrnS71UFfrxfWFieb8EJ0rHjgjD3wlEueu5FmtCjyvbiM507YptRRh80EM0WOQQUgOclpLu4NGwS1f9nuF%2BocBQg5KIo%2BgF7ewMUUy9uhYl%2BsXBaQinjpkQfOGczctF%2FuRRnXjBZDmnPtLQ1BhVP2DWSWRgUICU4UaEGx5NMfrgy5edKuJsE3EXEmm40clMdgJh%2BoudjkIZlTlSv6VIc3Y8TA6IO5TR8kN4ra6oNa6c62Voh3KYAQC0bJa9v78j3nD%2BlIvCiVPA4jojjaM6hNEr2HufpgGGxYR8QpGOn3EEN6ZKCf5z6ZTDbmunLBjqkASx5GhxGkUgVLvEA7lyKWusteIvmrV67ZTHuGSPh54WO55Vch5Rl%2Fnw1GMw0R1d4Ol9jhk%2F5xWpwE8ie8625DsQIcK5WCjM1UKwUuU2TSHBWTi8ZJMU4fmdJokDM2EoK4tdOX%2FUKVBR9DD5DlTGz1T%2FIbEr7ODtkDZS4yUw1xsVghr8hwt39LwohrTN8po9SmWf6i2ZFQHsyvZgW4ztVHLUYGetN&X-Amz-Signature=37a4e3bc45e64f6a36bf82308c5b75fd5294073871e17ee745dec32e9cd02900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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