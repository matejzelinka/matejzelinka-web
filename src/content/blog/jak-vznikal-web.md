---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-28
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXC2XAJY%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzaay7wku0lhCV%2Ftrmpp%2FWMODGAuvrDmiKVDEIR4Qe6AiBpeJUVzbUSUv9slsF%2BFlGtjf%2FuOsS3MXM0eF%2BtcfpZ5CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH5UfoF%2BFemrmmjvEKtwDa5Oo140s1iqsf86YiZQIvtWqgfgeALzC7dxvG6%2FPQlp%2Fh1G9074V50PbpowOXOCxl0wczvcb4Ew2DnKeHNOfRf1kV1EBPn48kMJ%2B%2BtpgOKgIYRJDf3Ao8W3Dca4pTP7439rf7Tl%2FYyFwBGtYGW9Q3qGDOL0MQ7OUjxErBbt9%2F9ohR80fJLo7I4uoy%2FfznaxK1NZgqvcq9btBsIEy5J%2BhjP7VIk2jTok%2FTX4CT67DayYe9D068Y7QrvQqTamMM%2BHwARCJbblZZdbcfn49rDndLzmW1PNangnfM3eZ1EDNtIboZ2CfSCs%2BnkHktfnbkH7inVpVWM4ItTj843pryBfXTTJazqIhViJwn6sQ8hOnQkfg79EIv%2BONc4vsoB4rmWlRMKlQwsePtzS4EmlLlhrjqdMGtrsAb770u%2BIdy3BL4mPpxpidI0X17mqxqnpO5gxAb2yHPLqjk9rQ4%2FNGEVNsAqV64mrQcy%2BryzbQ0cH%2FbKjNztCzS5BK4NsXS%2Bre0TrttHG9%2BCRkVR3qeZzomH6GjVFUrNfFTEmY97aGxIfElAXsD5M2txfAdSTgFE9GnLcA%2BzX9t2dro0zCq6MSaqaN18dBjqadcb%2B9HJDJVvJaMwhES8LwiMR9jaXcT1owlKnsywY6pgFHPBdtgeik0koR4CXemk6JW0xbNPQhVbu8KfOkAvdHYiSradq1u77DcjMd1S1UjAmDE2qVi9w88K%2Fu4KlMiATE3c8VlHnHFGYzgSyiUdGb2O64yW1jABu21yMnydBBRuaj6HXxn6l9Fx47Mb6AkEsvql94pNU9RUA3HwOMhnsp7GZxYM2AQ8u6FATYgkLEPNxZUv4QIrKtQAYGEMbtPmRsH%2F9J4KM4&X-Amz-Signature=8af9ecfd88d92924659e3004f3815338b1d838e7d6e58bb2781f3b393e36057f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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