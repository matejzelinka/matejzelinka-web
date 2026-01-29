---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SIJC5SF%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T150604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFGiI%2BvK7tlQcL3JqMum2wgLtPAUw1zmQYqPnYRnIzDgIgcqnIhv%2BB5TFddW4Z7fZkNEm8k%2BwY8gRK3p9iEGPOoC4qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInA9dDbc1%2F1SFp95SrcA7aQDCXh2VJbEWHS%2BMFr6n5aLSc6tnSvmvxpH836AOyOxl7RLcLgljJaGbRXIKZHI6hZnxpYV5k8H36gB9EeVS8uSe0Rp7bBj4l4R%2BbqblV5%2F39cqRZs4csda3sq3uuUlryqX5%2F4JORLzxlyh1z2I7U1IXo6fN32I0w52xTxp8GtEIYGosZTZHCU6WDHjvQhanQ2Gr%2Bb3HpSnhm2ivYyqd8Yn1bZ5Ai5VM2QDUfkdUJX6ardJK5isVdwHUmCKsChPj0W%2F5p%2Fpk1zpxKVCCXb4c5Lwb3fOLdREuFtoWtzgWOLCpf6H%2FtMrWSChvYGkg9e9r0W1%2B309zbSLd0LPYSWV%2B6iPHUT3wODTUyfWtWtkww4NzHr1oaPZSQy%2BnbQkzIzidje2KGVkklbn5M%2F2Fv%2F6UQxzY0n7DNzU%2FGwfQq9aE1ydpC%2Fx33dhDjzsZdyLLGl7d5ZWmwdNll%2FmEHgLfrNfhg%2BW%2FqDU9EZOre%2BVv6tN%2F6NvhhG0kdA70brXSYRabu5FqIHVc4sklcIEZVjLvk8q6ijVk90uGbxmFdkE5ux8OSkzcEuOqN20DU5Ok%2F12modM3iRnhZv42lGZuBhCjLk9uPlp%2FVknGb875cnOPWqtIp%2BeMdXdzi8421y31lxMMTd7csGOqUBa07ccChIcx%2Frq9gUvbkVkSYqDN5E4FuL1J9V7KEia8wydKjblPrmFaQ1htMHlewFgEXGGBl5wzcWPpE54T%2BJCLnAyCD9nO4gxw%2BEiA6oRpsSaEFdtWpbKFPARmv3uEl1UqrHHH5jP613l%2BeP2SX%2FhGF1FVBjG96tUpdrkWNlyUWDlvRn%2BnkMox4GbDomP4EO8JiKpYYiDQ8bN6KBvoI2qDDbgUoz&X-Amz-Signature=2424590643be89cefbdc0e695a4b505701b28cb7634bd8d981e54ce1319a6ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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