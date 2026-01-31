---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLH6PWK%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T234718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsU%2BxnhTc21hvkM6ptPCt3hSkhGU70opHsRTk7vXthjgIhAIve5oWoFoVjfHqYEA%2BXikxOjr0lZepevhqt84WXcetYKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpBjw9i4g65KZSy7cq3AP3Ro8oj7PW4ElXEqsVI1QIyObePy%2FddbOQcQLLCephTbWnO8%2B3tfFVxAOVjH6pyJKXB2MQzfCRy%2FcO1UT9GM7fpACieuROeKu9tcdbtsP51UxJxgkhlBNQ1A7IZzdQyapLB6q%2FZhvpSkE5n5RpUbrW241MiOLPCtMXigEaYxoGJh%2BE5Eua9G2ojlrt%2BWVSeziMYeDiqYYuw859Bb5Jb6v8j1jtn5JxUkgNTB44a3TWsGR2DJMplDqUygs0nOaWWhV4zgmy3YTQLBAvQ9IQOeOFGAUAeVhnYgUMADxGJEiLGUGWF91AueV86AkuqNeOoWIzlKDxyUlrl%2F9bUihFbBC6Ejt1WK8phmHWZpYblm0iqmm6iRykf674AInEUjpU2LRngx%2FeX7NJ8Y%2FhEWQBfbBR6h5ON3SbnvyJsOOAqQWiLlTcOxOA2T2Nm82O1TxL9HuSIFF%2BvDZFrYu2g%2Fets5OvrCKAhFpjkiFBhw5A8jHIMiMNfBhyRChr6Y7CTQm4LX8%2FD7%2FJZ86rUw6l1%2FnY9tavyhwPE6tABVX8oCwcDx21yYOZQrIRGC8Bg7FHiJ4sK5h5GIrVMnwU5eBOGc9ZAEdc2SZqShf5ChqLrmffJMWXGDfsz%2F2YtmRxfT1jgDCbn%2FnLBjqkAS8WXXL2QM10lIlPTf3%2BPlMCbIhj75J6mb0CGVR1yKrKp%2Bwb%2Boks4ldhn5xQEBk6TjLOoKUTRm9ptFXD5r8AX%2F3wurjVYRMi%2BhicYmbpotHDoil0HYqTfy%2B4pnxdcP61GgC8JyZnmU99%2FwlR6Cl31d8AVTqaWTf5je5o1zqJK73gcuJWp81l8Du8zALlx84L3e%2BMExZTLe6hHXWmGUe5yW8UZkEJ&X-Amz-Signature=4b53606d04bd7c47dcee33e04a8a7e259e6077e4a63ff605bce86417b8a84874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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