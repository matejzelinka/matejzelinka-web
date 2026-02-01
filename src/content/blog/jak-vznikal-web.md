---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4QNVUPD%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T203039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICLMeX%2BpjX%2FijORtAzZYtk3Xc8csyyZeL%2BwiDFDHeSyQAiB79WsGjxG0tKPkBMANN8deN0H7%2FDAXzsRTrO88lUb4yyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDrPF4QbhF1sbNT5YKtwD3PD96EMRzzAmu3FA13jo0GcnS8oI8ZVu4pzGeScj7FCnVy9Z4cdsbrSAHWOB5AsN3rzpJJ4%2Fam2IBFyEqMlKpu%2FDNcgVQKe12mCi8%2B5VN7DKY%2BM3Ma7%2Fdt3MmmkfQVJX1xCKBEzFhxgonaYWw%2BObJn5ucDDymfWoqqnRoDk%2Bef0Tp23cSSOAmwr1NsAODD743RRZ3MKkv0vQt%2FWlqtC1ZOBcWHM4ZXre%2B90NxMzrI9vcC1%2FcgkjNbzFP7PLNn%2B2fg2lik8uypoEzJrfkInzHhWDPNmjo6e7lmtCWBjEZgw%2BW0oONoFMMPrubY0gXt1XJGjnmygw7%2BAn6O38c1W3aJ4aQ16mLm8f2vYBPZ0Qf545S4g6NWX50nfkgSP5xSHtUPRtXVg0RVyvm%2B6dFfSSJKsQ8%2BmahHduiQ0WHitGFBFPUU7etDfQ9%2BDpsTuLV5z3t5u04lY24FkO7Xb2VZ8ekM8bpw34XYZXgIYZzGOVLd%2F4ga1ZqEVpd1gqEajBcJIG5KwVsQ1K1%2BxdhyrW7V8DfiPBPo2oLceUmIUDGCjQrnxMakR1X%2F4bb%2FXKy9zqVOarhf3lw7uG6rTp5Nb7IZ0UKqxzyhfLbFabnvWGWfn72Bp%2Bx5Ple%2Fu%2FlwmC9FcIwmKr%2BywY6pgFEwc2wMhjkDgUqmKL%2B2cCLJtfucCFvE4%2FNXZhvIHl5mI1G4%2Fba0qIJqFoHkyMDzbywjWPh0CFSU317EgKJrAUGgrIJeqBMg5HPVJoC5Lp%2BPENkmBC3q%2BIvQpCzS9zoSJbnD7dryONndmNBvM8rnG79ZkajaOqWvLTQ68QX5xgpe2GoPNj52zXJ%2B4y%2BrC5O%2BASW3ucgb%2F7aUio8uI7P3L62VWSAgmVQ&X-Amz-Signature=2aedfec7ec8b31f307e96a343d3dfab1e9d233b9d13aee446cf08e9f73568a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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