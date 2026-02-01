---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2R522SR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T105539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYJjZHKefrZ6RK%2B0v5hlS7MxlMEbp%2FiM4PQd74siLr9wIgItOqqN%2FwbvapkKWxH9QutXskh%2FEl%2BIXXr8W2IuOYYkgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQoTlFzPfmhyZS2YSrcA25zxPdRm1BtKhcff5GPXqBddvbIhHqf93oeOIEIWkL%2BK2UTVJiiX%2BDwWr0bFPUyCx5ILo21aPX4EcQElEC97j%2BfNlQSgfxuizzxwq63PhPkMetfWtgMNjEmD8TbeaHno6pPPfCk1pJc4Zd7zC18uHNle6dwCCeknRiU41iCWsMS6bNU%2FixR3ULbVsOQMyKHjCUU8AYaNPFCfBInyrOwZgcgwdnVAaHMNquXLrMLH3Y2Za1%2BcfEYZMGuasB6BSTPGkOqlFAIz1%2FzyZW%2BkDJs20TFIOF1t%2BJUGo1pejPD16riHSY%2Bxi3N46jNNgivmSgIfYEbhmOcY787RzaF6X9Fa79ZQzGsdlzZeJcFFaM5fdOShjg7hW12I%2FLVZOLlxQ1CMlGn9Ssqbuhbxe8E0K2WFx7iDjhNxLZLjA3ue5FuIxSHI3AQIuqT3U7Am03Knpjs4IDgCUf6YHF9JYLHNOBnaZlKIvQ7ngLqKkUjACYU%2FtCfMvAdEze3hEfvojKl1Fz7eSYsxt0wRri4rKVb8vU4zLfcPe665KtaL2JcGRMnMVrHPt22zXpxTzhN0vFzVLe4kBU37uZQzhAZo2XpgbHSljMsPYztQK3OD%2BknkMIVa0NrVM7hz3SK%2Fa8mdtJjMK%2Fv%2B8sGOqUB595GvTP4BsZ1aM8DoWNwRrTcJgD2jw0Tj67S8qXhTfkXf8qNoLTaJeC7fOhMWhld8HfZxhm8t1B69YGMqdzegV80O3gnym0lMIDP%2BL%2BF6s6%2B4ILC0Nto5d8woqnFFvDxzzGzbCS6ximEXR23D6vQtporSoqp4xdlVcHHgGAK0etQ7GBrRlFwTmLWFHZvxbnXf%2FLrdXpDwEJCbaC05MhwQby%2BKs0I&X-Amz-Signature=1d56d24cf19974294d7dd8d37f425036f1f7bf9d4ecee8e10c24229c5d5b8a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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