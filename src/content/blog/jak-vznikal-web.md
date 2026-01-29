---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KDO5RK%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T160236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAM%2FchcJa9VAHCRWvnw9lv%2FL03HxrVx8KaR%2By%2FKrvUbmAiEAjuY3%2BuHRDtENhjjV3drik18Nr5%2Btnv39fCyD92RL4AYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEBQzlIUs4v3Eo73SrcA04BfIg6SBkoEqUn1HKRZdYiGWtL3AcT2B%2Bgjrivw6%2FTbJV6H9mdxYttsv%2BHEohWDa%2FgIKIaEdl60jTw%2Fn3Es736KW2CuJVMBxH82m%2FLWkiSYC4wV%2FFDj2%2BDP5Mb%2BALKxislWrE0yxtDRFHxth7tbdfuSXdmntxxPLTju14jjwHqSnCrbPc9eM3Vkq6l6JwKcRLBL9qBEiDGjh5tvMrFcNeB0DhA5lIsug%2BDCtynaHdtPUoIVcEDuJI8Cb9fVW84B4KxpVl4QedW7TPhKwUwRVARlZ8oKUyOzy2l6T2abLXjr1bKE2UIfvfa5uYj7Bi%2BOy7DyDK%2FyqMyaRjKg%2FA3EGL1WfGsj7ptUiCtmog2peO92jhlHrauvFcrIQGk7V%2BVYnlc19ER%2FoOX3enNw8%2FMVYw1yQG%2B%2BC%2FM5%2BoAp3a6ZqBI504ecpP9ymBX51Uru0v2r22JFZ2CRAVR0YL7UAGZDO2Su6%2FNvXN8DypN3WMVjKvfAEx7hl5AZYyj2dVioJb1L3rfYYKgj%2FPgOE7orij5jQ%2BHA2veE2evcr6OQG4yFecsK8SwFlPyyM8f9LcWOgsdw5JVuK8xilYznTmmJBgstKQaetTe%2BpzO%2F4QFoQTnKoLz96U%2FrymMI%2FNRtIwDMIv47csGOqUB2hGW80OgAcxCpkFPFjgNqCmf5Aai8zRzSWLnjztEyvIXdaSxwfHJw6xXKHj5dgz8Q3KOBdYrXLaDY8pUI20VKmDTCkxTmdBdvOCkTcA93%2FtYAbEHJuAF0XZdxyDTvVmHMA0KA69dmvpwP7uBwN9YxlMjEqKieYKitpayqmXzgzEkNncGrfDWVdR7G1DzyW6xLHCHPTv3lLpcKVHp6oXLYsQthCc2&X-Amz-Signature=b17e61554c77a2a0c4d39914479b45e1130751c6388c3a6199d78a1bd4368c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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