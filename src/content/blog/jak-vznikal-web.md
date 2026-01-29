---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQMIGOT%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T104009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F6%2BRhVE5kxX%2B1SqrDDhIKFF4XA6p2VLECDwatm3vLXAiBOlteQDZMnLx5cu5n%2F8K1Oh%2FeMxuUX61xP8G25AI%2B0xyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUFadvQ%2BjNj6GLzkAKtwDNYkB3B9ixq%2Bg3kG9W0EccDZeqIBMIHOABT6a3fLdS7pyqpo0NFAPGLwJZGed2JCMSQ8CkLLlUvNUQRXBMWyeuU5VEXPZ9E6T%2FIC9K2wmIVuJb9mnXVgGE%2Bc4LeqCd553zl50nOVN3NpHn5%2FSzgvobACa5vRo%2FZIckPvRo5G%2Bl%2Fs1BRqB8YO%2BgBZRacx5r021knvQvTzMrLZXdm7yoppSgRugMyNFnJm%2F0DBTtnou97xbBcHUVg2Ipn6lGekdhMWh6dWe2H7Q31d9IazIhQJ0baa2wgft%2Blx6A9ARf1WlCJ7KYBxZf5sVJ1VC6dkNCoTC%2BiMc%2BUTK3FaYaDKhNWbX%2BQfx4pMHUzxVzCAXTa8bbLvjl2oVytQqcawDZCU2Mf6RvA2qcRLfaURXntMAT0%2BLrdwq0XPff1RQSKJfFeZtYxqamL6gVSFpNUCBegGK%2FiOLTfo7rjb59BLzP4291p8BOWtufMp6KwdIt1xpMHPRw6Do6MwEIc7QB6LoyzHgsrib7Va0OpXEdCQtC0qZNO%2FzIFUiOjuNDwUvBod411Sk%2FQ8bgiEBc1IVba10dhoDU1eFs1RSBGCU0LNSKrtEk7RaPS2OgZFzrm3y2CXXeuuRkLwFd4%2Fbed0OuNVmQhAw0OPsywY6pgHV58OTq4o3hY96a1uV%2F4i2Xq5HFp1GJ9bHO35cMKu5mTZyoTtqrx6eLF6LNH6UnuBr8Z9yvJKK1Nk%2FcEIDQPsDnLIw%2FEwK%2Fnkf%2F1yemmx%2Ba1nuIUHMGhovly%2Fa1uY0GX37ayyWgE3sjWPcXd8KouG8biPl1j5SYyY%2FBLwlCWZ1LIBArFsbB6kqQllHb0R0yxkx5ZNzef64v5GwJ0P5yi%2BpR7NwHIW6&X-Amz-Signature=555051b5d192f2d3f126f7e7f18336e4c52fb4ff5e961d1f2a91f916283af943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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