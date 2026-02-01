---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURUGCP2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T152817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDl69lVJrXmf8l6mfXzbDX7Dnq6W88sAJBEfyyE%2BvG1CQIhANgI0XGs6KNj7NNKRg8DkuNgQCDRkPJZxFrQaS8EDG58KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDE3ypjD14RiuKspsq3AOfnNK6aT9kYnBHkrXZ5kZ%2F07OW%2BkCsLvNdfuy6UNLm6neM5lRmm2ahD3qkGdc5LL6qHwFT67xKMKvaSY9dmMAPbtDNDY69USA0QMwnGJkj9RIfCKRzYe3SfxuprwX%2BXRZU%2BEagRHAKIrrCUnipQFAzvYhuwe9up4W5Vk9TWRr2AJv2rDzvkrwRL206vU8C0%2BrOQdWBeuK8EkIatTmpEZM1L2wo410eBvOtxKdsxbVZw6Aj%2BFaOpyJQUAZafjYZtSUXLz5yM282SZoicH%2FBljd5q0nmVP8y2IwMnbqJ84xnt6N0qv7od6kihAeQngWVu3eQFcSTQ6EEz%2FcRHcWgWPEiH2whbn%2Fb33tT2UIY4Z6AujEmb5Vlyy67rkI5VuZ0x18c%2FTIK1snfpit6o%2B2KaUCyLs8y27InrRxy1USbrbIaqYRrT7H%2Fvo2PO2ogwntn4dt92mw8jXIIUDiBgFu1L8nRbicQAY1sag0kwfbb62YyJmc1eSwn7NepaJG0ZYBO71gD%2B66t7dIRXB5O1rcVeDgJi8rBJTnBkE9GW0RsL1GfGzFg18lUg8b4eh9WpWlmcYCE4Yfisrna0bJo0TfQYPtunG14UHGMbQV32O5S1NbKOBGEtuGW7KhWCKdoKzCE7fzLBjqkAQT5rlvvK5xry3mq5EFLzdRfCh1fsaPPwye0xJZzmy5XstUXHCg3QNbxNmEi74NX2uUfBO2suusV68w08MZnEcsF9p2RsPnVntRwqCrxhERv9AC2keypUa776SUyWlZek9ogJQP%2BcYHA7j4f%2Bwvlowbe7vSS1CYGfcvUBmaxTuSUykkpP%2BlCVvj7Votx0loJK480eOV36YqhFEte85BOrY7XxhTU&X-Amz-Signature=943408e03de0f683d282edb8f8372b586ddcf27b92ec0e2daa5ac9688c5dbaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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