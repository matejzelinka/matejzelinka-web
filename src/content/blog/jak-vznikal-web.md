---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPF5KF7T%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T105319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzwxym4qV%2F6mwA6g%2FtzRPujbg71Q8ToB%2F4%2FAtC60MNBwIhAJnqskXnlLGuJAOQTANln9vHj1dHaAYQ3%2BXJzp%2By40gBKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7Qm%2BeXjQWwzR%2Fbgq3APPBE7VbOldFgbdCa%2B3oBEjM1n2frzkK3G1BWyJtyo1pO6eldYLTPwYZLH9fd9lu%2BTp1lm2hGkyjl0utTY5sXkcHDnB2e2kl6kABK%2FJGVhkeeaUwWVgtYOBQ9LqqbXec1hyXPLB4Od%2FdX63phz12fgspUIkiLtfDpuoKitBlPPUPgW422o30ex208lmdWlQ8ZgXv8P5klumYSeJV%2BVNTYz8iFVPvi4F0k9avLBhYPclXANa3OVzF2w7TGdgVVAoZGTeWI3udiSN%2FEyFo00q4ZCyJPIgE7gVwlsSc2eySsv2H7nVJgZiKW9Hj0Dsh5rldngz9lD1RstQXEATsDH%2BbA5sWJ6AlNIWLVai%2F6JrBmN7lyBMaTAzrKbmO8Mi0omSGYmM16YL7%2F7DcQt69%2Fkwpbwbxl1RwvD294%2F3i1Nc0U1A4IpDkxvMjWpB6%2Fchg1eSXjcuWLVuFv3OLi0N00q9R1NbZKCZgelm97uTPUAOq%2BNXXlUPyKQPhUbkjgc4A%2FJ1KOtxeiBJ6AdMTC8e0y7FOJulg2%2Bdm5Q%2FqerYPebAYfKPtIPAXxwke68nbTokeRkrMWE%2FUGACe5k7RszaXL%2FXsY%2FEWJGVMP8%2F2MtQTyEA7Stgpsevwq6D2Qdb7cjgQDDKnvbLBjqkAQg8p%2BdApxAcXrTOF94Sqo8IokSZoObcfSML4J1gT%2F5PVzYPbIuJfoUCtn%2BOJfXeE%2Bqs3L4hnxG%2B0qmgB7neqdshWxx17G0cfnPrlVdnl8JZtF536ZsSApy5KB5T7Fq8EQwGRtBmv5xu2p96eSc%2FCAzrCsI0QZPzXzyie8tro8j46c%2FUpjhLOpd4cSoPKmZ7ia5WmYgu%2FavAJUrU4XQZbeqFuJ3I&X-Amz-Signature=e07caac3451b148b4759f7b8a5fe970dfd6bbd81a5e71451ed4739b19e5714a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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