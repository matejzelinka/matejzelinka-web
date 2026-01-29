---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPCCBF2%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T203440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9DLFxYx98VM0qJwovnK960BwwAzQciasWdO0OU0te2AIgN2ShawTjjI7QsKh9kpL%2Fnkbo0u5udO6tlI7C%2Bd19gNgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjtVgK1r%2FZsGQVnKircA%2FK9FFyXQe1RQrcPJ5QVvs%2BKIUb8HNSdMF7J9HSMVuE6nxdf8DzR%2FixaJBlJUvXsHt889IB8CXz7gm4FCT%2B2y6KQW%2BzT%2Fo0DMGcDl03OBwPE0MWwwSYWcWzgAETKvz52ujeXGV6%2BtDztwJfnQaNrpmxcD5J7%2FkFZutw5UM2yZok0CvDZCKRHfj9CofyHRgGamlZRD5Px0xyNgZfN3n8wHNnTMZYGMbF0l2KEtZF%2BcyJddAEYyYINCmCq0zYRxdKEXVpwi%2B8jyduwCr%2BawdGJKoCGZlTB5xSiXku4WCfthhP1ONWm1kOeTcRTJ%2FQrUaBzJ6qLM%2BgKkQnrK2um8WnpO3WYa%2BNKb49wAfNEYNTKu6T5oRRHOX3pKDON7vg3M2d2i%2BmloIyDj7V9so8EUPycmuVbyj1qtUN0Mgwx1a0TX90ue26PmcsHzisRuWtin9xQt3BbMM%2BnJmGt8FPMUSAal%2FMjbgo025WLA7LnO27VmfmndB0bL4FuvuKpaiz6Agh4Ek8CBCJTAJaXdGeq5waUz3J0GQd0fgCFBIIRCtaYEYuKKpNk6oVy162KNm4%2FGh9%2F775Il7D%2F8yiGTi%2F5wG8HSplTah8laMZXowN28mpNOT2KasrbXEkgBmcn0SqQMMLv7ssGOqUBVfCq3R5Yb%2BVcumDctXl%2FsLuvbGe7UIjKnOWdd%2BxxVCZEtZeCxbIMlpAkxEpUoOPaV%2BUM9vkBjS%2BNtgIdFR6H%2FgHsubzQYXFgqabtwz6tJbveTkNMUwyq%2BJrq6d9gHUl2Mq65hcnVpmkFnz1lIe%2FLjG4nx9hlUU9ZU9JATR37pZgsrhfV5nE3E68ZToTl%2F6rI5lSAPdW8vDq33nAEGwaQXNoUc4TE&X-Amz-Signature=ba6d7f83b7bdd5de8a4b4b5ec2b86f2125d4eef5e30250ac2ecbc5b0ee0cebd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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