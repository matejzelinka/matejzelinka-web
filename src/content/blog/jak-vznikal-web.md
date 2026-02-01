---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMRWKDP%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T232813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHtTIZGk4tr3a8cg%2BlCOoJHlQj0BY%2Fe59AT%2Fcu3xe%2FeTAiEA7O8Jn4n%2B%2F8lrG86JunSF8HoV1CSRxAWrOWL1kK3%2B3d8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp4tDkuODlaji5jQCrcAx%2Bml%2Ba%2FfS0jj04tW6ZjOa2%2F5ucaNHXNPn7ZyuPW2ogsmUPqKth6X3rtzWncS2XtwpbGoaoT2ApL0yaNj2zeN6RxcCUCiOLw8eO1xr%2FCnxFZqP3LWFk8HiUMuNmCL%2BATzIIRJ1RsQmIErgDriblthyG06slXEvmCRIeSbiFleZD5rjaa8e2uk%2BMl1%2FgEK353Cd88BQfxSXufGMou5Zk%2FsQjdvLS4mgOrr7aJIZK4Y%2F1UriovByakicaCmOyihtMpsMMtDIQ7AT%2BmzdhoXbVSqiEdNEbcK4G9KoJpOIGG11q4cSWQO1Vdq9oDoCpkJ48e2%2BqTx1B82ev8O2MkA82nW23K9IkpOTpHTF7SV7UgRzkZl76cEZerbwStz205Qd5JVmP5VjRHwdE1DNEMmbsvOn6F33nlPZu1DmVekAiQE4Z2Rq%2B8r96ea%2Feuy%2BpuCxBUfyGCimidVf6fP15eTvy1AVAIQMeoKGXu7w5LOdeoWH53rD8exhKjNtWBLSOg9vNvg5dLwKxFcpTERpH0vGcD8IopxcMHniDFKq4rRyZNU0vjmNdB%2ByKSYbaTgf3d7n6%2Fe8fpjyUtpZ7VpyNJWGTv5MIFEvfFvz3OdLkE6g8RmNin5r2ccci0bHNKs2zHMIS0%2F8sGOqUBj0erGatTe9T1xiQRIr8G9snI7aCPjohOHRHFWaGoyuuDaFwJh1uF%2FplqFc3bMiBMZLE8udIZMCvFLTXmb0Oa8Vb7rhb4IczFmB2IK%2FyUhYnKtCNF6sJyW1IR5PaCjJ5wY7bbain%2FQSnq%2FHlp%2FZ6%2BpayKdt3%2FUbzAocdbwyakpjEZDTe92nZxkDsYYHGJshYyPidN%2BqbfngcBc7v4mM7jYJiCzl%2FF&X-Amz-Signature=228bbdee2a37da9d79f2eaea5bebbf8e60c36dbdfbc825f20db24dbee9ff473d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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