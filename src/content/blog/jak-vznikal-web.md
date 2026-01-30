---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVZLGTS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T222857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGg1b2Xe4oK0Js%2FC%2BsUfx3OR3OiMIUbpEaNFicKSmGUiAiEA3JcY0yTAUBoEy4fVfWmvCN6qmqAkHTzVhoLP8I%2FJO7oqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4pTUBYI25WTcaXIyrcA9hoH7eqlE0uKBkrK9wSo1mM6G1rhXFNNWX1WLCw2zBF9rq4mKj4RWFhHB585bXosrsqpKb7KxO1dPMwtEciu3CYOxBJW6BMi5hnacsGbAksZuswduAtrv1TnClfHwjrVzIMytb5SbWOvkQYSTXCepb6hJTDnhq512q%2BMPRCUiT9v0voCAnP%2BSCi1p8gu2aHQ7ebYhVKdROjWQ9E%2BK8Hv4%2FH0Pl7q9hwXZmkNYq6k1B8RxEJJa43q3Vu5smHoDdjlQU8R%2BsxHCkKsPaX%2BTLPzKEWT4uBFSqXo34MkF5u9R0YzsRlDfBvgAJ0ISQHrppc4elPOpm3S7g2NAxTlG1oH4W7zF2Vg1LtsSQ0tZnoEmO8mm0k0PM3XdZpj4k5PacyjjRX%2Fa0yfRc0p6q3taD9GPpSqyVnim97EiSXtNRjunJovBLUPQSX%2FjlqhexdHz%2By%2F7kF4rhloUmmKUDfnLLHWO7dm8%2FunUAE3iTl1VGfhZETATNk%2BZhlGSV4Li4Zg6uEnp2MmDAcFhSE0oFZAL8ivxdOtOMtfiDfKgoSLfWki3qo%2FYgDxKLrGoOaGmCUvy%2FH4ghBOsAr%2B9gdkcgzP4Yr5n8lIkU%2B7Sevg3jjbEwviANiy4fdaHJmXvrokRrEMNHb9MsGOqUBMy1qL%2FQRGPYdIL18iFvNrDPNBcS94Gu8Wq4PmbIuB6FS%2FeIZXb6H7lD9zsP4XmLV8K0rkTIDAJuu5r8EYeAiEuazT0WVaZh%2Fpn9Coytwhse1WSwP7tDt3SdIbMvu38ZJDxjf7nb9Xi8zt7y0rHffdOovzbkQXW6la9bc4%2Fi%2BPSAX3VejNmhlPVeDnxC72WMK1GPJ772%2F03DtzfA%2BpEOf4z1UmKbo&X-Amz-Signature=dd8726f76bf45ed9b627b68a122be46bbb05a816a1c4b75e946de4705134fd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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