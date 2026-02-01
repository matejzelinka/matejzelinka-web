---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAVHCOT%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T114547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCxPt%2B7p%2BtnfVw6w%2BjAq02ijRUevtPgft09NTUGaQDrqQIgReP5waEbKhGl4iVLZJr6bdLOO%2FuboQIoXGdiQCrwkUsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJb8KT65GQRnmHWiUyrcAykl2WEv8L%2BdyewfGT8R8rj73fq%2FkqyTSuoA8DwfUAbnXkdhqXqnWmPLYBCESBsRJAji6UsHIB6kHemGOjMRpHiEaLfdJiL5No%2F62omUSj5X2mOMS6F8hF5gGgBeDtAh6lbrquOwWxZQaRiYUOQibws5oFLulD026I2Zd%2B52GOIveAyxGmsFOEDZINznWaH6Xkv%2FjuYDMaUHctH7HF63sa%2BMfQeF35p%2FxrKOqtmsynaXzNO3PZ8hqshja%2BpQvmEbYZKbYdKjiw3jm9Ct5r6TwxgN7deMZIUyNg8eTAr98J7LkqLVm00tWprntbdrdDZw6LNzMqKJr41h2LkxsbxQSyfUAX5bPEsNkL%2BLSVu%2BJjimhvsThPSrNNsQg2Ob%2BLkW5wKeXt4xoRJVqNH4qI1T3t%2BT7jIzcBvPesLJ7PB0Lk7%2Btw3aZOCjiWGvNR4joprzlMcc5iMSfmqm%2BPAWMVrG2Gd2cVLR6E7YDT2tjKP7BwvZ1qZ2Re2TnfQHij2glxkXXO6q0EZndZGXh1nBU4Y4dH65udfIVwPdxrTEBkyvpacrXp2GVJs5Aade18L7b8GrTpRwS5ijFeyZP4UU1zUMt2sKOHLEQra6rn2oUm1nGzf6oY8bftASHuyjGJ0RMITt%2FMsGOqUBVTGcByP5NKkmElCkoWLjMdwrcQqrDNrzDe2%2F8jbpe8C2kYahsEsQyJidgdxAhBd2A2FQHZC8H3Wd0zuOr1GjxqvmZWT8nm%2BsNPRjxh2i4sdmhRjptbvL%2FSx4OtpPJ86S8RzOwJoE1aSklCIaCHCu7La%2BcxC%2BnHDRIuBtu0TpgV84oR%2FhnsFuMhQbqzanQNCIKSNdYVK0OCEXtnTeWOiuvgtUMGZx&X-Amz-Signature=c3c663ac4e44121f510a9c465ab880c4aeee7f5427b274eb74af693d18c50575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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