---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBWZMS6%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T141039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BqsVxWmkEmNQdpmQhoqhkf0SjSMB%2BSYjhfSH8RRJdsAiAcsOqJ73YK8C1lWnOZ8JfHfoohHDv2y%2FScIqkj%2BuJ5NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMevdMVb8qD93s1rIkKtwDpFMaZ4l%2BA3VcFzir6p91dRXUdVg0SKY2nbkuN533SuI2l0T4Dga6SPrydKMtXaQXyVA%2FceaDjLoDfKGJUFKkhVoloNuaZNc7f7JgWFr%2BZkgRDj3%2FoVw%2Bvi8NPzPVn8%2FmeQC71DN2EIFk5CvSDCcVbLEqyvmrmDrBzqB2zYz%2FAqOaOeHuCgaN3eDsY%2BLDhr78IsscHyofcyA1nK244DbWxTN95BmFscP3fCAEfCaikusfsTWwHY3TkfztLNTPam5ipZNwj971snUpxjpOLVUYpjPFNHErfET46XbGfF%2FujttvkR3wHfYHTR0ahGyiif%2BEXe%2BabmfLXV050Ryyvf0zqJXt7So%2Bv2WIMQ0UEu2OtxOxxPbFvi1MX%2Fb%2FupBHmJ5PnF9LAvcWWiGB17Kt50hXnAoTeX7225zzIipsa2FIXX0Ti1CrFOA4wrDm60HXq7IUouWktSXsNCO7mMgw1t6cAn%2F2wiZRen%2B%2BZGnEWiFDQlSYmjSP3k5hw4lf%2FR5UaDXqynUBrVeWlp%2F%2BBEb3LVUIFoYi%2FtnkHV0XaVAbrWqzoAphoFrhYJmdob2d4IAuLVdaqzvC0bxKthKSwzyM2oGFGptfQLXLIgVCvbweqRwIHLHUPOCV8KRpFRJF6sQw5bntywY6pgE6QnJ1XRqSBwKRL%2FaKMuQlzRqNllyRPrvhtiseCIp5KnqwprJkHhgHniq4e%2BQmAX28CKW99J7hOk0B%2F6TmSQBo99WWeyVWsW3tSxuVAKGp5TiAbLaFNuMX%2F6HNnYdzQeA3U46LuMZySQKqjXW0EwBWHXVMsHd6byPKE5bJtp8PfnlyO8LRK9z2B2bq39Nd62zKXa%2Fz6t6RCBXDC3N5qhcyMotPnYGx&X-Amz-Signature=51cd9d7200845732bdc718a2b6310ca1e5a08be6490f05e6d3d3a259cdd20b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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