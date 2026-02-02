---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCFNERH%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T130555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDm0RBr8r2ZQX549qlJbAbiA9GRJFWqcCpE%2FnG9OtDxgwIgOWReGFFqsh7BdEMSMet7TKgrbgcD4NoT3CaFhj2ZDu4qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhwuTUYNwBvnTalySrcA8BD9ElmHhPTI0qJMxIZ7ccPgpzZIqqt5knbsUgEUsNTf5B1Pl92rdoiatxUJBRWmPbqmTftUEw12e4IkdEbePu3Q%2BR461VprI%2FJUhxLX2r4cwaepKC6HUQ1%2BJPXfX4YrYx%2FPb%2Bpl74cKjU4clQt%2BxNwt1UTAgS78FllPMNSByfEuZTrWExa0xWrWmdWZg3AUDO8x6%2FqR1nTBjyYNy06AKrN1nxaxTL6bIO5KPpgvzvoKZ6yYfj%2F2YollcuheAYIQTcPH3ATHZ0deMnyIRF70jhdXs0y694sZ9qPVZ6S1UlSf9pecbv70CEWW8Ix%2Fd3lcxEY0d1NVTsKz5Xn%2F6tW4tMwwkGLAmZVCTbNdRyy3nOHy8fr080TzVl1ItvsHjI4qtzcJXRGQMUfiVvBUmpHJdApjKBd2weSEOj%2Bq6CvNK9pOKv1RAL3MQWNGBlRRMPCXJOLxsnfHUhFghgLehiIedKUQOog0JdY19yE7iF4BARXW%2BpRcd2kPhkqqa0Zuru2IGg4rMFlacRp5XeE93ktf9%2Fkw5jcfufGGqABPA6%2FvUHx%2FdFGxz9y5zKPPBLJz96xiRArlhdnMNtBVdQg54TZJqSsfHzc94cSKgtHRPqqtDCq%2Fs%2FmnOmrZKtBEaHhMK%2BdgswGOqUBSaaUMKkq9AmI%2FlPbxaPaBjb%2BvX7eDUdIVcKpITIWTseYF7ebTpSbuNxWls1sU3CK13XXtSvK0%2FE7PEfCwxtQyucfRD%2B0YpPkm2ahLShvRrOSjqdCuSy1xc5vT4c2dt1akBPPP7r7PEY83%2Bk%2FYyFxsAhYA4BqotRILWXoOT%2FolJOzTIZRKmVlM90hBCjAjdvOmS1IhZkB7tYN%2FbD9jcz%2FYktV97RJ&X-Amz-Signature=e483b71cfff6e04977955c235fd9165c5798e2163c860ae16a48464ecae0340d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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