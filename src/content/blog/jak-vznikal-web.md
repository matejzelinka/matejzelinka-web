---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GH2TZV%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5uecA7MxOKkJp2VgYk%2Bv%2B%2F4eb%2BRbmiD6gcjvJWw1PDAiEA%2BLp%2FUXwul%2Bojy42KW4K7Ev0ngxeEc9S4jyVLiagzwpgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1hHJWuOJUCMXsr8ircA65v9hugdlmpLEpVY8PKtSGIhz03Ts3u5h3rmrVY8pllGtskXV5qSJiWoweBakLHPIjFzSOLGdRnQbwZM%2BaMLFPmndBWTXoV%2FKikHR9C6Xs2o2QpD52d2SdU1AMQ%2Fx1SuC0ATepcoaaE97k6VXKLT6CDhSb1loz6DrwhYJ6OidqGLVSY9BIvCgWNnO4UZfjkIM0KBh2xKXCPLAATGCAspkSapXYoCY4Yc9TUuGZh2MDznr%2Fh3w1bys%2FdbTtzJRQBNUZkdm8RnHmqhn6lXXiGkPuwD4zcWColgiKbnJqVE1AaB9BeuZHAnG59l6ROEW7vpGwqSXso2E9JTSeFGtvrEqTFzQFd0oQAUGVLU55gz%2F7sLxpdOTR24Bk%2FsSUGOnp8AQ3ZIn%2Fb%2Bn9AtJLqvtfoE8uXkxbGHT3VXGlmShhu2gtjMFIyMUaQvDuZFIorVsLkdr7WxLiSGk2qoKuR7OafJTCJQUZrhqbah1C3Y5xjMl6DYVQPsKNOAHQVK85UGaJCKB2L4MaIGT0CVaISFz1d9dLXyzmaPcWx8RNNjDRozrxInEbELllglV7%2BEc1mmDYlqDv0xaxlVjje7XCdORzdh4zj7I6tnjGHv0%2FgQnc8cAE7A7LAzzoHEuFLLYvPMM%2BS8ssGOqUBVc%2Bm3d%2FAK%2BORe6UFuzQ1trWO74CFgwwZYZrgTZpR3QdbQpbdIfRV3KOWnHLBn%2FfEAHhBWCmybQo9y0o1HGHLekbfXTTjsYCLaW1BV4aVxmIEZI8qWG2SwONKrGDzjdOTG22c7Jp5gjplzGBmxUcj23ZSjkWCHhGBhAV2YWrBUw3aXktuvUEp2mkhsOpjqPbfv95Htzz0YRR48rmg47kdD2CNKPzP&X-Amz-Signature=b16958668d18380c350e61f0585bcadbdf18a60c90dbc535baef18f22bcdde69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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