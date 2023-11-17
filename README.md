# Details

Frontend and Backend ReadME for Coding challenge

## Frontend

Pagina principala contine lista cu planete.
Fiecare planeta are nume, descriere, un status (TODO, En route, Ok, !Ok), si o echipa de exploratori formata dintr-un capitan si mai multi roboti.
Se pot adauga planete prin butonul Add Planet, unde sunt disponibile campurile nume si calea catre imagine. Restul detaliilor se vor completa ulterior la Update Planet, initial planeta fiind nevizitata (TODO).

Daca se atinge o planeta din lista, se intra pe pagina de Update. 
Daca statusul initial este TODO sau En route si se doreste mutarea in OK sau !OK, este nevoie de completarea tuturor campurilor.
Pentru adaugarea de roboti, se selectaza un robot din lista si se apasa Add. Robotii care deja sunt inclusi in aceasta echipa sunt disabled din lista.
Daca statusul initial este OK sau !OK, nu se mai poate schimba in TODO sau En route.

Design-ul este responsive, functioneaza atat pe dispozitive mobile, tablete, laptop-uri cat si pe monitoare.

## Backend

Backend-ul este in .Net Core si folosesc Entity Framework pentru a mapa modelele la baza de date.
Baza de date este in Microsoft SQL Server.
Am 2 entitati, Planet si Explorer. Explorer are un type (Captain si Robot). Fiecare planeta are o lista de exploratori iar un explorator poate apartine mai multor planete.
Este realizata o mapare many-to-many intre cele 2 cu ajutorul clasei PlanetExplorer.

Este de tipul REST API si include 2 controllere, unul pentru Exploreri si unul pentru Planete.

Se face o populare initiala a bazei de date cu planete si exploratori, in clasele PlanetConfiguration si ExplorerConfiguration.
Este nevoie de update-ul bazei de date ca sa cuprinda si aceasta migratie ca se creeze baza de date populata.


