---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZAJDE72%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T074850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMTVyHhWg0A%2BgtfXdLu1VD3sgF5y2YcsEh8OwNxw1dxAIhAKWdlfjNxz0UZ3ldnimEQ9gYNEYHhmQB8DT1zx%2B6hypQKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyyn3UcKwCVHu%2BCfh0q3AM0rfeDMNVEo%2Fo7N76HwOpYJsxuSpMh2X80uJcxP%2BeEB0VsgYQz%2F0qJOR13PmKLuR3s9xWRhS7TDrhKUrcxb%2B%2FII1Dl4kjKFJ7RmZ9IFdxWEmroC2k8yA%2Blw%2FE7aK7LVg1u6YSo5fp79nuixyBIHUDm3LC3Uu%2BLQIpqgo1QZrnEWKr9ToHa%2FbKFdftqMnKZlEfJ89yprx%2B%2BWcxy5Lk4qsesvEneX%2BOHAzY0Zt2k5dBBTZ7TntRUdE8GffumDGNO4SFQKV8TICbOdNxxXeYxZ4sO8fr3K7ZmGQiLmglmgW%2BJnhAHtLQYSVDVgM2Zmu3%2Fb0tiNhQahTnVwhfBJTVlnhUPSv9qfiXOwr9lI9dNUQXApluF8%2B7zUf9YHn3%2FUfgUtX7e010s9TWw1%2BgMuZ%2BnewBOwsEy%2F4JERR0kI6etoDiN03x0GvhFwQQ2PmpVScQS5cN%2Fo7TicjN%2FSYVEhadImpOf62wKQSIY3RaVeRefaBUafx%2Bc%2BYxR6j8rdJ95i8L1I8Cq%2Bal2VHTxQbh7Uma62zJ4Fb6IWLUOtyczCou2rAYeEX6627xdZHsNJ7LP%2FBysdxrYM6HPj5vlYahuwrWrHGv9VBTpvy6gBAANf0m%2Bcjribz%2B1vBYpULwh0%2Fn49TDKnvbLBjqkAQppRlK8vAxWPimNsuoTsZGVu5VkWEyfMFFCbb6XE%2BJDzPetVj9YFh27ptIUqDekXJagbPGZgCzXFVY13QU4sYhLprP1YT5slUtPYzVV9wkY0sQ1wkiEx9rZ2bZWxF6K1Fazn0mZxrs6tOP81e5hUPqXyMd5CxwjlgaygDGh%2FrcZFDy%2B7XwRi%2ByK6W9ApUTQtM8IZemfEIA%2B0uGK4S%2F00z41XsCf&X-Amz-Signature=ec2c729b0e451bfeb61c0520d475f662b11a0cad884f55fa65996b0b23d9b8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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