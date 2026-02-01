---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRLREUZI%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T112536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCqngDPdBZwJsmrWqx6DUl7B4ZM%2Fu%2F52DjI9AMbpd0XeAIhAKePDYCi7b7QOj1EUtZQrkuysmQL0rzqsv9hf6kSqtV3KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx05zv9F%2FHxHPokLLIq3APWXPEDhuYoiOW4IKmkAFLL75DurXoujIyAerk04PHInMnj6y8%2FtZiOHiXfZpxd4uu%2F5T2XB%2FATJEwiaE40Y9afF%2BLb19QTSviDVixz90TLZ8e5n65rdko51f3ZHg%2BdXSw1K6uVZTB2Z639mt7G48ER15XFxwXqYVm5jLTTPEKGvNQep5MVcLNaPcPKgvtsVuxl%2FJZmxWcmMIPrydsA5NJdrYLVPtk1xXIe%2FntjPrVxi3sMj0aWmm%2FuPPVQgurXDR00%2B8wQ4IO8TyLLmyCkTqO4ng%2FN8uCWBTUSTpQ1is2YnujDiqZv3qRwpq0Jh4o8W2cHyQZUdefmXOf%2FM8MG%2Fouhp%2BqIFRtD0Yk3TlAKuSbnKUoi2RV7wP3kg5NO8Wyc36%2FT1NTaiKMu1RiGN0dFx0lUnP45v7e8pRPUT4gnj397J2aFVkiX48ddikGJhHx81eLJjxWBDeaQdIhX1%2FvOTYDKZpnYo%2FFW9Jt1R6qL4FooK4wH9Nqav8yNGrIXYa807YMcJB2CgMu%2BhAnP8l%2BuryiLC4lNtN2t8NnHYTI23NmwuMpfsZBMRIghnUjciWxhIj1jFxzGWaQZhzw%2Fl7%2FRWKroSeLCsdmD%2FZGC75qFwaxehjBBmxWI%2Bxpe7wkaSDCS7PzLBjqkARpLtf3vgJjL1xDR5Q44EFnA%2B4EZ5j5KEL65EQb2CduGljujGn6ISFc52Ff4O9WxplW8w3cBgHzgyEw6hhJUp1dT46mJcUHZKlHiyN4rpftfFZaqad84l3lPuR6j%2BYSq%2BveCTkYV6yr7beCKkNXMZtc07HMTvfXHhfL9FHgNTSztaAFenxdUoa3gj27fhiiH%2FJyFQq09633DrEqOer8YSjKZdtgf&X-Amz-Signature=b06bc2b125bcfa28cbf55eaf4d5d02b1be927780be45a6f8f10508ebed2181e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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