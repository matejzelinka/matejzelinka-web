---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QFSC6J%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T194908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2FrbVHImYl38XdaGY6NKx5DG9zhmH%2FUK5zQBWRhoctAiEAqjxHtEO%2BEX5vB4ZapjhgXNrtq%2BfP%2BzzvENOmVTMeW2oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBJTncAfB2cLMeF8gircAycoXpInSWsAUgfL4pzRy0k1n%2FMkX34IhDCgUks%2BShU3%2FfYYZqrKrNuKDwJsm2JSM2zd8wgykYke%2FMQSv9xFCAtLk6TeuDdY818DH7bm%2BMIo%2FLsl6JERBPJfp2%2BsXHaqU5ZUE2CZJpMmXsKB5F8J2wB%2B5odbNpdKE9i0VF1QafO24hGozKEA8UgzgXPMs6XmeXLJOX2H0d6gprFBRsgvqMUia%2F%2Fh%2F%2BJi7pcGC7wd7SIzHGuoDmvGz0LdjZbSbVhEgIWeuuiFMsZAHSpfA3a%2FMd3nhdgy8OumxGYPxMkoirX5OutzQHjPqJci7sRCbkiBU%2BStTu5SJhLqhfRHvc2%2FDJeTnCr40qOCfcaQJdjLAR8Brv9K67wNMVNZSX1QgPGrG8W9crqmVV37EXUqYqlJAboomSDyDqVi95BL0AgRhMyNgnXKXDu8vKuk28PB9plATz1KKB6APhxhBoMKspbTpb5UgLrFcefQ4BLSYWXoWgnYcz1DzmVebr6DzYWvr3gZKHpG5kx66Tz%2FQRMyoF1RGoHtQzTxdApqft1u6juhZ5F6yxb2FjDWexGIfRT6Vv0oA4WUNGt8r8Qw0HkdPRq2XDrSikmL6i8RInfA9VtC4hduFlP8xijJOqwjqRugMN%2Ba6csGOqUBdhD%2B1TNes4HTVn7vE8bXakh%2F0SgAFeSeuSwn9c4Kqa%2B1mVGgVwJW3E2m0n5acRC9egQMveOvPFMDe7jBF0Jzgm3Fg2txo1jXgE%2Fd4DNB6cMJP7fCLAB1gn%2FbpCN3AOFjsq8%2BEdZsc7PFQD2bMpzYkTO5obHyCUFnmXr0EWFKUSe9b4R4oAsq%2FyX3B9PjNaST2hSkqFNUrFcAhQL5gNACnKDTFLas&X-Amz-Signature=ca4c4e8c57e1453e0e2d063ef05eee4189cee14fd56abb4be3ead00f940d08ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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