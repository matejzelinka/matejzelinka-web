---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVEGMK%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T093108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDokc2jze6ukLsaOCkBOOQw8S2sII9gV7Ug1rnyOK%2FjAIgUiD7ezgbWOho1yzzP1%2FHGF8KpPCtMFcUH%2BpGexNzAPUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6YfDslu%2FMPmsCURyrcA8MpmtejSBieZK0lqpouKKlZDkW5XNRBIEp3LcHNlYMi0i95vEYQhfnDokTqTV%2F1ulE2W5aGyv%2FBluyBOZAY4LCTFi%2FeT7vDBxqozICh%2B5xYQc7rlRubG4E37zKCCC%2BQo284B%2B5Vnmrn1RNXok4BD50pgq9E676efJLSszfMxRmo8%2BkMCYnrNtwBuOBXyL3InZ%2B4WmybAZUp%2BINqE%2Bv3I6JxY9h1oX6W%2B4kZdMrefoy%2B4TWamkqaTnFshCFL693we4DAeXtmLuZ09a3tIWqPAMHl5KC8kXUMcHCuxt9B10FLUakIYxK%2B8oZeIlRBYRApaTO7Tu6MQgv7ThsLna5NpukZqqZiFQ8Ry%2F9O%2FOoj8eV7XHvuIF7NEjg9%2BrFOPTjp3QhPJen%2FJNRCXIvwE5cTVZWA%2FRsRvkMwitu7%2BQhy2UBbpWp%2FZ4DBNpm1ud5a8muTWkjR1rRWCxHjNZ%2B5w2i81Nn4qdCId6E24wHCzpvcbpEoQy4RYNFzAg1ol%2B02eEsDovgMUYmIQHugyILUkQ%2BiWiyE5UwJW64dlaT6%2BudjVTTTTkX4QV1G%2BcfCajKyaicf1p%2F1Jq0ackSOcMLQ4uBSO22EPO7cFbKu3Tq8%2FhBpHs1ffUB%2FYKtXGLCKFfhPMM6e9ssGOqUBYUNmM6h6TFOVKKF84wnqP%2BruGtjL43pG1YWF86FPCwWVxKD2ighX%2BjXBf0LHSST5aNwl4HCupOTXtL2CR6tbRCRBKP%2B%2Ffl4Sc8gac4GuMHaCyt1CT7bWBfIVL75At2z0EHTTI4taClJFDnELphGD7d2WQouLDptho9KIwitAaLI2ZJcaiA3UFalHOBSIE3tN5E5i5giQQv7kglrW5CJNctWlTED7&X-Amz-Signature=27151bbed859a92704f00aba337646f0e41d20fc203e0463867cc35d03f029cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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