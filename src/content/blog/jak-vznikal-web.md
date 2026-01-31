---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZGJQE4%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T212526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGG4XYMVbblIip9Yb3z2f80d8fqpoUEAvITSd2s9ZZ0AiA23MRQnrr%2FZiQSoYDJM7sf1JsrNn79PfnndUyRZL%2FIjSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI9gg2pf8A%2Fbb%2BUUgKtwDB92Goco3yqYd66gru%2FI9Sd8IsmHfuYY9qvnL1NLupV3MsWrbXR07rQxV7dbKTkpeEnLJafItg0PnCCIdJkJjyH9v9Gd0ITUjPOMtnFc%2BLcVI%2BaYNpXjePtOEFaWq8LZ7SuZO2ShY44G%2FTU1wHTeVuCcSxIr0ui60p64%2FsXdcrL7FMP0prKyoL5QTUnydWVNssibm2dZa6VFm2hA7W5wsjIkmB3AlspyogXIGUevPDJ6ZpTIeXrVherC%2FpLiUh80l4w9VB0sgDw1hl%2FjYkb7%2BpwkBdvWsnCkYPkTRweszY5eXqNrTt%2FgGhJ5SskWUr2FwQDT9GChDFWMDBa4CArAe3FvKrGoqEXwhkRWacx7%2B3EHmhUofxy6IEAD5IYz%2F5ahJpZWkZ3u0prIB9wRbWHntsni%2FA74wTPwSZ8Bf5CkLCcvR6pKNVGnTpg3I1QDG2JYyQlqf8TawTrwWZ5XhU9AqfhrjAiUaQByF%2FiRfuXJOyc4IF2BPs7FckyS9LDQVhl5%2Fmfcty5fcLQRWxvf2NBZCEWCqPECqHMsJphB52Jkew5%2BnGbKi7pFfQyJIfOkaOviO8cIt%2B8iGB%2BwZXpTVxnuSJB1i4etiWAly3MG7XJps4ftUQja%2FX%2FiTEBEvcTowm5%2F5ywY6pgEq63cFVixLCmymNilx4nuslrSbygvHeB7nCzS8CGXybSZVjiyDzY82Yoa2OAuOrxWtITJ%2BDhdL581zxuney%2BtEL%2BKCoAJ3JwK3XNtj2hjeYuSesYlLxCsUvF71VPd1DR1pRAqZoIeLn%2BIgmJvRDOi5fcy85Mi8ayXso0liWq%2FNEIVP3iAchMs4MTmtlDdm2jn9jOuqo9pV5QaVf9dKwi3THZm32GnR&X-Amz-Signature=388bf0b1f2136bf37bab38df02e11d84bf1155a4a957d12e6cdb0237b6189b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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