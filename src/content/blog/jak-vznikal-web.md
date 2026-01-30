---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625SAZAVL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T173634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNtLSUP6KZhuvTrXt1gZ0wi9wNkNozVX77GhepP5gFbAIhAKY5vX2i4pP4%2F77vVMIZu%2FSoet6zQa5sY1UQVM%2FqZ2BXKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIylwWOI59AMFkoRoq3AM1xoHygc5gRFg7n4bASseZsO8LHgpo5fqsDJqI8DAA15VZPsmEMEQwqWoD5oYIt2Ajx12l8AQmqqEWkND4tokWhPRtaeGNlbAFjmzEpwxlNakO1XdoTorTesGa46i%2F%2B8i6A1YmDkqpDdMgJL5ae9gSl99pAX428%2Ftbrs9qHZucsVa1BO4%2BE2iFlErp%2FDcLpAPP4wcPtpsTBSSlQ0cN0tffIdldkyVmm1wdADMssK%2FpuFLe3KbcNLsESp6zHII6xNwCw2LXPV3JMHfGdl6iD8bnvDgp3Q9glMD8o45ziP3zyA8zGLEyzuv6mzxkfyG57wze7Ppw7dCl4DrrwAd7LD8CF1WIRr%2FWSQP1CLBWix8JWeTpeKj475md3YC0xgHAaCi7542xUwRfiA2%2BWhwoB6hX%2FbBsJOcO8vxQBmXmKrayXOiqrmD9%2F091%2F4l1vxxk3vsZgSCOjdFTyn7Dq6lELNzEpVemCjx2FgzSUTtMkNv0frtELeeic%2FlcXHDX3jt2ApxVlP07JHQkNOIia8TR95JbHTIreWeXmeInMKj%2BmtThl5%2FDXHEpKdQr%2BcOG5TZd6KPO%2Bfk1ucE3soRIMbdMVqGXv9NFxxVuo4vR8H7JHd9oQJGBhQl5fVx23eCdQDD6jvPLBjqkAR62ND4Ud5huov50S%2BE75c8JMllv7VX6cnz1cMWBBk%2BHjibMEUex5Jx69QqYHuryh4GBbzgV6JyPZpzmTdAgWtr9c9AEk91fz6P2UTB0oXwlL8%2F2krXdIRf7JZK6v6K7%2B4ORnGGRhVvZ%2BG%2Fg3vVCdnWKmvePF%2BvQfGurfB3iLyUtcLZZmakRnUPZfSY9FCNVdiSvBaGtI%2BYX5nkFBRDqgrYasUIr&X-Amz-Signature=6136cdd9c21be11d2e7fb3e2c5b93ce6e8ce59c7a94c9b604a20124a93d22dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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