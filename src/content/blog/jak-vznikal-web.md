---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXQYV6I%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T092551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCVWX%2FH59V8sQm1g2b%2Fs9S9ukJLuDZYdCw1AqWiv4YcwIgfTwiYreKGAGZOcYEWXQTvOLA%2FBhRURtR6bTnCDq6d4wqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGY%2FdVFPifaBzkmkCrcAxnx1WNQVn0ydbScs%2FbAuYZUVElrjQ%2FJwK2GMqfhuP8MsLMkfqa1xLNEAPdwSp6KZEMM9IMZ%2BfRCO6EuK2DOCBx4yxghk7ir3cW34U5M25B5ib3H2hN953OnInYNUfGny7FIwS2s6GjiNzDQ1mjp7sxsH0jE%2BOIjXoMXD7nuHiMCESu8yrmpa04QOQyeBZqoqBTL584X3Io5YA5BCMk1uBs%2F3VOH40O2efmvYKOBLfKEnG0Hy%2F5mtDHXSnMexVK8uVBJk8ATbyDF4Ev7fSVEeBYjCDfztAT3s3qBbux0mY6uRcdE0z%2F0D9fEPDHAaKe%2FgqN0HVqDtC%2Ft2X53maNqSl%2FuGqS0z87gZ7FmqcvTmchgQeamE35jHlL4EJuAe9AiRwhy80ZhWVXBKoitlhbDr7Ndw1JLUkuYrGXKP5VuN6dRG8zuIqgiQKPqML37vQwt6a8DshGCzzCWhWTR16IDh40VaJ90%2BFBxSSj6iQAZ5vrO1QO79woY%2BPKD0YA%2ByQbNjB093sKJUF2QBUyn3v8yxFdK%2FSJ3QauYoTj5Ci84kuhVkfJuq9JBIC9CsJ7jg8ejzOj2peO8Z%2B3NcMZlCQlxOF01k1ctDsTM2d5fIdSUH2laBMpSkT%2BOMtyHB65vMJWp7MsGOqUBXppS%2FhfuPsK993Mx0bMv7zZKpnQz%2BbWXiQiT59HY6BKLpdGCyewcPBsRDoPtCUctfq7jeWz6add7vuchcLWfcZguvIo0gpAT9QeZGzlRQHygZhefdXqAe%2FGijgYz4h%2FhQeuY8Ti3s0mbziPo94bA2oLll%2FjwzcGpXsOzNFn03ayjN81VKXf8%2FJevuMr3iOv21U%2Fk1CkyjNYBmIrHGeA%2Bgd2OPO65&X-Amz-Signature=1e315d643ee9c473587b478e7f984e6ac17af216f5fe26f500c795122f272e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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