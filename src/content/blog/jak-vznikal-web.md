---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORKU5JD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T091340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCIvRDyVCI%2BEwdfQHs2MEV2IINFhc04yEt89ctHlPqjAIgGpWW5UJUASbCBckp5x45muw3sOOVQDFLMd%2Bxcn%2F402QqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNySX8%2F5Ryu9gKZD6ircA%2FBIe3QUaMXk0xtGXmvbRxrEIBvcv7QmZNyKNENamdNti85wLgF5ilyDiWYFix3m4%2BuCGHn88icaw9jA%2FEuj03vZ5hLphxkVEULjScRz4Z%2FroRDHe7Oe6kyDW8oJhlOfFsLtiUXhY%2FxljwVv%2BG%2BkXZ74cjT%2FmFvEy7Rufsz5Id%2BCL957FTYPKfPYuNvB7xaq7F%2BjcZ9e7ai4NnBOH0JTIIezSZcmxwu7EPW6%2FTpySRBogTsNiKgmVso77%2F%2Fmi%2F5C9wS1HS7D%2FjoJDLRawl9Hl0dsWbM02zb7m8WrWrPCFgbXD0Hw5t%2F8nSAK%2Ft64piPUZQT8Gb2w8o0FJG8bJ9Ak%2BE%2Fp3L8%2BZIuxUz%2F2xS7mVR29m8l7geEzokQqnkqjNoq4w48gbKaSU%2BpwqGCTH1GMd6ZN%2BhMwZTsbVmXGKfBCxgGsp1rpKyiDeViQVARqKPiDTPko0jhRnn2zsxID5WPnFHgJFCKj68uxx6JM1lqGXXjUEbGtCNjR12SoxUSX6vOiBUG5TZyAx%2Fhc4oGX0ZKkjd22WhN6gOkOKLEvtpRxl0OfBh5M5fBYqF53YtOLmvn%2B8i6ZZaUhsz7GMSaG%2FXrNXQcA1l64RPrDGjKg9FGWrrMjttoKYbcHroO4A1BhMPLq8csGOqUBe6URwESi1cRpQvAf4Vmy7cBge9RCalgOgr9nB3ArxthFOqfdYWDFG3j29gKzWL%2F7rQRPoCNVvE3ZN2R1z2woQH5nAhIWGmbpkrzBNKoKZeqIiebgvL%2FLb24K9mvaQ1EVzBRJzorFG3dV7o5SPfYc%2FDE109QAjWS4vQGQNv5yiQwwzRhIIqSJazOPhWQ5OlyByf%2B%2B7RDqKSB8HQs24561AHMfHl5q&X-Amz-Signature=9c8b1293e07b45b4494e1baf0f3b83cb33feda69786e80d89ce954081efa2b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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