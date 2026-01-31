---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6DKM5W%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T154849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMd4MU7Ry3Ql%2BVLDxOD24ozqI1RVAgxe1G7WmyiwTbZAIhAMF5B8fAj%2BxwJnnAfXxVaTV7wAn4zDIaK7GY9d0uJAtaKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOwZaswbSNKrqT7k0q3AMA0HMuuB4msTlsqBbrHnnzfGIPEL%2Fp927A%2FQKzNbnPCloVTk8ky1ApkMAHGT8caJTZ2uL0Y86jRKXmAXziKX2nhnW%2BTWsLDt%2FmEL9huBGh%2F2x4T7aW5E1ml%2FQW99P%2F5QOOXYRvPx4Dhv2Ia%2FjA6aIlgp3V9AHHZyneYh0squQzKIDDQmyJ7jGER4On4%2BgAsR54PMMpEYaJiqj5hi%2Br7YMjzw9EcaTgFYvLg%2FICRQSK5xMrnriKSM%2FDQrugaYvfCQS%2FSxytjQupiGyWzULf7T7VOULsVWjh6lpo0KmPFK4i7bFXXfW4ZKtCQBrKoYHDL1jfk%2FESIFYLJODrvwTeCxQ45lf4sORGeegGHlDm4TTAuOYQ06%2BPuAK3gri9S0Lsk1Za62ExdJN8sGcgPP%2B0PewiWTh7wAtSZJ%2BpJeLta6RjyeuM4IhDzWjHcs67vCB%2Ffz8ah4swB%2BfQhmDlNYhzUeFIfSwiDaBLy7VAia2DyBMXZ0mHjkh3PynrO89PhLBMi%2FTZZ93v0gX0CLVRBt2pst6gGzGne%2B1NSi2m7Rw8io3PoXiBTUWOYFat1vtPITXZaWFtPgPREvK4PUiVj%2F2bDIoGmWznxr7u1AUrzpy891GSmmYjLgMzkvfuKRKurDCPgvjLBjqkATB9NXvt92kXq6pCaispNWluLx9R9r7PA2GoyTXQYNTCfh1rv84KrVIq1G5%2Fo5b10fl5m60v2j4Pbj58OFtv0EQF6B%2BT2mCr7NmFKmGy8V8MydVlQGam0HDCx%2FwRLZi6GMQKjqMAxfUgHy%2B8HNOZvSgx0AiiT9bAQliUGyV2yleCdY4AtHHUJZiCinGhqSXLPSooiPu6dmT3DdnT5RJS4rmKRiU%2B&X-Amz-Signature=76401186996a7d5be1a7702de477e2a57104db5d1f75083d24d6f0f05a701ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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