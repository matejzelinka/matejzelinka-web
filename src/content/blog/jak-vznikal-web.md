---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGZ2IAX%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm8fLDYqRbp91q5mmuBSyVjgiPB1QF7p2SLX%2B%2FtSbZqAiEAppmH07urPuFuSgBWW4opulTdmE6txEYnwXYmZsok%2BbIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwokG7GySodt5BryircA27a%2FV8IUIG6o3Mos5Y828n0fQpg63hOxsKv0YTQ4kzgK03lRfcy7oQ%2Body26StAzy2%2Fkiuk87Tc5kVSSl3yzbnj%2FsQFAF%2F%2BkAMiRvQ1NPRUcBF8fkMZgP4vOBxTO1pT4Plg%2BlaFps9HLzKPHwqT0Bk7uxRqTRMy%2FGJ5ojlBNqc5Zu%2BzB06Rhq4VEV6fBNfZto6brW9f1YJKREVqFfHPaf3gPbosSRvhPljqZSR5K29Ekk7vkD6fklO9VgWDQgQ6M9KhoNYKuuHzRcNcTNzpAxRwqTnOiXtv7yTbVPVpIBSqxn6t0i7BtNKIki%2F%2FbSLM9fMcfVWVcYUr2fmq9QnkcixqZwPUufnEIm11WeOXKYeYkNmK1UQ1hoDliOW7k9Urk136%2BZ9XPXz0FaPcaCnn49g7N%2B8xr0B1ZD42JBGXxXq5WCRBQF6Vxs4%2BPir0yXQ9TIUe15k9fkPqjiodHKKkeXkDx3C0meH1CCbMb5%2Bzvo0qaHdZUE53smIpesY2ahjiHdoO3gZO18pKQZhDI9ROQY8PU0TmwUf20Ip8GcKNGZl9XfUlYOk1kAZU%2BSOOEJ9K3cDNsikOSM5QrAkWaMgOxYhgQF%2FQNfTeQ0pH9OZ5gH0b3qqBwXwYEFXEIsbSMJrA%2BssGOqUBwmWH%2FXx3tlEL37C0XadjPrnrkOvUNf1%2BTmrzPnikFltvNsEiD0t2LQkpV6nrILnBubTOjPqHnyl5tVOoXVVpn0K10xC2rpImglCIqt9SIYvhcC9Ja7Kj6s68LOuSNXdnPv91Hqr7YKHNBVkX8MAT%2BWsh1bGX6PGD4kwSNu0b%2FSntAvQ0xLY5RJJHCzejc9vtSK%2FP6H5YeA5qCjCEUHwqqoJMdWWY&X-Amz-Signature=c554faec20433c00bbe42a497763c3eba1fa0f9d11b20f1b8cdc15e17af797a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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