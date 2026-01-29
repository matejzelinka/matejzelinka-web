---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tag: "Projekty"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z57CFYKC%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T062653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzMt4jCeeLvAX7%2FFkO%2B4VtuQUYsW6HxEpeYIrcTg4oBwIgSKV20h%2Fb6hTrOFrZ1Hz8m1QOxbxtnGquHRbx%2FIELFxwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN0q0Wxkf7a8D1wJEircA74VJJwDYsEEwVA6G2O%2BhH%2B%2Bvm5qAA71Uz6OGSZV%2F%2BaaXIc35F4HGGXR%2BPYUmZH3KNPOR3f4rBwSuJ%2FqZWtiCElhlNR1rGbju%2BdU1aKtd7H4ithmihhgCE9xv8kSc%2B6MrHa4EkT06EyiP0p4iEA6q8Dd8wxSRjqPrxFUVNQuC%2FpCgNjQYpUevF3bzCYhs%2B69UHo9Vjyi6kp7od8jbZZOkBT1A5SeXjDarxEbPsyTR099A1Lq7IjuU3mlZM6G754rMS3bQuJgvpj%2F78lIXq2ND02VGDlx89LaoVdARA3eJFLgzfSv%2FoybYfpu4bzWI8cO2aFFMMKqLhBF0qYE%2FxWZir%2BNYWk3AY%2B6ojoyTATVakWF1PqxzirmjAh4OzljimO%2F%2BjuJuJNxQPg%2BJ0AC7UKoem1DiIhbFKcKR9W7sMpXXW1hh4bAp8uiobKktGAAj0z9rDNaH5woiiym0M33RCKo7H3aq7o2Hep1a0hVgv3s89Xk7hHMpUqOMpNEM7b3ADgYzxyKXX4%2F80x7nL3FiisDOoj%2F8NNMVWFIIzP4SErhCaocUKtSNP0yuSVnAv8eATyKF15wzhnDp0VuV43ey6ZauQFqsA%2BMfajsOYou6Mf6ukYiyzW7wVi%2F%2F%2B28HO6tMMPn68sGOqUBysvtl9DMNuJcpKfcUjM5BQRDlXSc4M16QGre1BQqMCkpQ8n9s61ttk4ob06c8KB9PTclh6PHRIcSK3rZeggyOxqIk2ixfMbE4xB4RQVDKb2RNnqFBfGVyPmTbOx3PxMSdSeAfgNdM81s6hlN4SSZ6EMixkwySJ3tV3Q7rv6tJoswJnWOOv2JXjMDJE7EOIKkQo9ySwOfPuemVM06%2BEnWAkFY1qGu&X-Amz-Signature=bc8fd9071ecc24125f7eb6f97c03b04f4e73943603252bac9d72c1346e68f3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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