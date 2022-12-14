# fdj-test
 
 Je n'avais jamais travaillé avec mongo donc ça m'a pris pas mal de temps de l'installer et de comprend comment ça fonctionne.
 
 Le front est en angular et le back en nestjs le tout dans un mono repo nx.
 
 # fdoc API
 
 
 Get
 /api/leagues
 
 retourne toute les leagues
 
 Get
 /api/teams
 
 retourne toute les équipes

 Get
/teams/{idTeam}

paramètre {idTeam} -> l'id de la team voulue
retourne une équipe pour l'id donné


 Get
/teams/league/{idLeague}

paramètre {idLeague} -> id de la league voulu
retourne toute les équipes par league

 Get
/players
 retourne tout les joueurs

 Get
/players/team/{idTeam}
paramètre {idTeam} -> id de la team voulu
retourne tout les joueurs d'une équipe
