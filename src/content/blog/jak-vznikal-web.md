---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags: ["Projekty"]
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TRF7AZT%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T080141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEHJnzkF6%2BJ%2BniV0Kp87s1onAE%2FD1%2FDvN5P2ZZdltrjAiEA7jYRQkXUWWaLmVgmckr3%2BdnO%2BVWrDXLrlqxRHnFNkmsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjn6qgsYfhHdmQH5yrcAwGOboXCHRuwWV4WuuEIkcYkup8EkCTNnRdv7WxFFWF6K9RWG2N7Z0mMBFxpnJigvXh2sq6zHTTlpsNwX82tKsnSibzb560%2BbtYcspeX5yGUEtk9Gks7aVpyaDs8jb2CLEm8za%2FcspuHdXq96NFL5TI4iu8fwMQZo%2BnHRclBobPHskChYH9ET%2Bq2bkH7eIFRjTUP67t8G%2BPT0yoKklfa2LlcFo3C5KMVEG%2FqiYXerQcsoJW9IDOTiFNYRBFGbslW1c3Bp04yh2dXU7%2BeOp7efAhxR5M%2BW0MgFNYleY%2Bax7w8CiK5twEcqbK%2BhzzothWM%2B%2B%2BzFf1BOwk%2FxaGSoof8SUKdg9lV3cVb2%2BYaG60taAt%2BrjQ9vhY7Lxo8MAFBpNk%2B98Dz5WTvBLrUa%2FfahSmhPn7tt9VfY%2BNaeGu3%2FrAVLo2kqK7v4PG1OEPnEOQyj%2FdiizXIts5IiXbAdvoG%2BkNmS8UERInlrCurEjBku%2B76BYsDE1UImLT2oyrCW2PqyMUV2E1sj9vuO%2FRQgO0E2DTl2xd%2B2OtzLGZZCRQq01XmcY3HI8ogK%2BuyowxAHN%2FYisOTBOPxu%2FbwCOlOorWItMbGuDcI62UsCUMjrXTlSBL8O0jJlFET42vQ684jtztbMOmH7MsGOqUBIIiFfQHZpTb%2BUN4mEewwk%2B8dYiQ63xwpUKZ7WvZSbgw7wWRYzGiCVJHQKX2QWQOpHTJr%2FlVil9t5X1OofsPlWr%2BnuSMXNH2%2F49ANEmgjq%2B6%2BB727ahfvtITMITYVQEcY0oZwb6X4EXDhSeWYIFKPKXonnBx2xeeH5K3fpsBq%2FbB3obmQyrf0g0Gh3yF4ntIFnKK3gfcBMVTQ5sPC%2FJLvaomuQ%2Fd0&X-Amz-Signature=b017bacae01e1a4984c2a1337d8d080d1b711cfdc6fb171677f86b5aa18cd503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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