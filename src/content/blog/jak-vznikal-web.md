---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DSPRZJ%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T192144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGnaTvX3tCgC1at3cUtY8d1Qs29aX19We4OpewiE0d3AiEAzieXHEiZ31BHGJGHHy24nxMY9WzGK0hbBGc7DQgAN9Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDElZlvXRG8xyQQUbDCrcAyZzgZrT3AFbOuBVLEoQKyH4EsODxb1FXmySwMS8xcvDB5IXQM0W0NQYsx49w7nM2%2BMqNkO8CWygkUJVxCyrAMl%2FQJSUIDOq6MnCMz3h6UYMpOW2odoeuFaQTP%2FK4OkzOHkzgoK5zYmzr7I4Q%2F2xMn0Hmx%2B4gIhyAqHEVhUu7maQs%2BodGYR%2BMnKWZ5Xt0DLDO6e7xkLdkRExiRjH58XMGbyR%2BES5leE4EhuhYIUvDqLxxE6m7Ci1GcU2OmVngEB5TCXL1p%2FjbW1ZFzuhB3bo60stryB4ITkLjTda%2FJa6J7iII0scujHK4tIXhWtxNHz4w2Y2UdxoKkvST%2Bhy8OH1cuClc2t2MaWQ3dSGlnsZScLO5Zz%2FBPeheqwGLs9UG9E4OQ%2FOvEc3LcpIS9yr2ULR9RyLYggN2LmZ5UAKV2gm5H3fJfgrol4rYt%2FYDnloEASm14USxoyDAQnKDABUz99dXCoZqyKnaP9ERtNVWt%2BkWZupLrUwFH2LkcUFjG5Uy9SMn0KK1uf%2Fxayl0lLUHQby6eI78FJqUrxrC3kKt2d5GPQEDqprHB8nlScQr3SK6X4mnTCzLRutIB4jdLIiS3x%2BxvIbV%2FSStS9EgqHviZRIlVt5JH%2FZRdU0CTDH3epTMN2a6csGOqUBgquBYbYBZlxz8BAVw7YqqmuaQC%2Bll0VieTBoEAkIQFQy%2FvUlkEwm%2FFvCVmJqBUmoG%2F1dBY5xBVONogb7FqXeL8LAjHtd163Nrp3ZhkG2zTB7YYM8QQ7cjLBSyKdUWuUOkhN1OvhOB9WpCDhF9xgqcZtZT%2FlalGlJj6gZjYre1eKdDaIdVzuyS1afQipSJ1%2BJGDDsN%2Bskxakuw1qC9tTMzmV0vZiA&X-Amz-Signature=2561ccf66f70dc0d876fdf115d37546e1215b87177be3ca55a17547637720482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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