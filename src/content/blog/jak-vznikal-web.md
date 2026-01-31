---
title: "Jak vznikal web www.matejzelinka.cz?"
excerpt: "Byla to poměrně dlouhá a strastiplná cesta. Nebýt dnešních AI možností, tak do toho asi nejdu. Ale s výsledkem jsem spokojený. Doufám, že i vy. A pokud se do něčeho podobného chcete pustit, "
date: 2026-01-25
tags:
  - name: "Projekty"
    color: "yellow"
cover: "https://prod-files-secure.s3.us-west-2.amazonaws.com/bad4ce80-6d38-815e-b21d-0003cc2daa50/adff74a8-d173-485d-9beb-fac13b8fd588/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIVNDCBG%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T192247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYw%2BNBWP8mzgVlvK5oP%2Fl1U4ZeoJuq8Q0Rl1dQWT101AiEA%2BQoPTp7YeYm1et7ulA%2Fgf0D8q1TOhs6rzJnFDl6%2Bai8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmOm%2BUWdhpcwLHGfyrcAw2%2F7Z%2B6PkNQ%2BhQE5X2b09GeSzAdu8H6UyYLf0ltulYVf%2FoF%2FOqOOmh8dF2JCW%2F9V4BvLN%2Bw4aBWefjTxhOSWtzFhcvvVRnUYwjxtaHzkg6NnHAf8oVoAU1NZuq%2Fqn0cHBSIlCFEGjhz22f0I%2FEx6AX5zf1fi1zZjCBvE9Ih%2BW1KOuY7v3oSTvw7e5RgBqtbD92A7jdhwycC4ToYf1yRS3Y465G4VXH5QaMqVac6T1dcifPwI2FU2%2BfUy5cKH0loLJC2bXx58j46t1paFFhTDi7MMa1bRprw9hP0dsa6LJY%2F3k3pdK7dgezFWhOgGmO19okn22L%2F%2BhIg3LtSDwFmtT%2BzVgw5AZnqzhUfcFNcR5AzwQdpgk4A2%2BCjOYEWh7YzuFfFKkWmLyJ%2B%2BT4X3ybIEDVxmU1rxOt082OD1jrxSvF02yE34yqcjeKFzNBdnyVA4l1rRXlZMCwssY9TTdnzFSzgIAaVk7HuUqEUqStZpBY%2Fuut9A7rgXuKUZiLrbmLGCr66iulKYbC6Nfjuxvw6Lz%2FWxnzvXrgHUr8TxNAUOwo1ZtLBPBqp7nkWHUnM1Ya6kqGnYhriU0sSERaU%2BZVa01A83xyw6ZuVPM3rRmGBArNF7O48wHyQYhjRiIRIMN2i%2BcsGOqUB0hd3l2t0HKCy976YQpesGf9FvKgaADAmi3Aq7mrvrDiGmEOoJLzmZ9S%2Fik50Lynhtb%2FRKG7vGECXo6gMKKEiPL%2FOWv5HPWtBfTllOGsMaaLLBCy76vPj0gObCQHsFZ7N7tUk3neYY4iJ3iEq1Bkuz%2BPzY9d19nNDHoS96%2BX9CoMD9u8dzAGxdy02RW9qBCxlfwMdC%2F35nux3z%2F%2FhYDAZVHuwVd36&X-Amz-Signature=8bb347f101faa77289ec1f381c592d8fac61de74e65e169e611ff52b9248d4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
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