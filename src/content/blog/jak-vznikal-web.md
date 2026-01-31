---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBOIGUB%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T060019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzZTsHdztLMENi3uI2pmHTgnLuyDO8AEAA1sbXkgAxnAiAyuzQkzbfvTg%2BRAL0%2BuDFjAxTCKEVZ6LE%2FRNcLdhHH0iqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJLPjgByxOU87ye4tKtwDqhx2t%2FvyQ8HffKMVJhxHbfTTvL7xidrn0oFOtaJEWSUmnhtfsn050pbNcjKYrRsYF005ZDXFfXsG7%2FH0NFL30iO7Z0k%2Bz5i94jqTbDxf0D7Qvx5khHP5P9ToLuC5N545Fd9a6PTUyWHqkHs6%2FswsJh1HwcPLjtvK4nf7Y0uxnRPCeE9svk6BUuCKOJeLKiyKEydhns8XSyyuhY0hPQk79HUI5YYSfBiJ2BNHVRZOSzGwz%2F42A0Z8Ukl1ZLei3tByRVjtyfdSQKFuqbZzXu1cCGXgOdnjW8FpooAMtv39qQCVz1dq2C17etoY20pPcYb7%2Bs%2BvOZD8e9OPU3TNWvqgBmAdYtvpaYvlkVmygCpaQYPh1qPo%2BVY60sa10C0Lf0s93j6Ls6hHfMVZz55PE%2B0wu%2Bt3BK%2BCgyDVLGtNsrTkUWzwmLyzs4amTeMlTCFV2A3P2IMTRlVgsPOBp99Vbk0wA%2BaoVeALjaCCDZsMdKEOh0NqxlYNWR7JYpdMdQgO8MGbDsAiM%2FSAPmYAah2amKnlF6D4Mwzp454lb9AWFIGeVOK0%2Brt0aPN6oy6YWb2SYKuBj4ay97evk0TUry9uuo0JryA3EpKgychqJ9UOG4SbHVI49pV5h28huuf%2Bs5MwzJ72ywY6pgH3ufSs4uI5TZUVPEpUsT30kXbZrdFWZu%2BlYpOw60cJia1Kyhj%2BPJZhkiH5ZHz7ByYo5BvGEk4HCUY253Oj8Nul8G1zF75QAH2H%2FXL4IIe6KyVwM9zL30%2F1beIl9fZX5idyQ280Ph%2B8tzQ9YXjF0UMey3ZXz28NZCqpM49zEi4%2FWdT48yygy70YOATR2bYStjvBMF%2Fzunl%2BExn4xY0e%2BTVqDvP6RT0R&X-Amz-Signature=43ea71a577f0a34623cefd95b809ca9394da4e7428c1df494af3ea6f931febc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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