Aby uruchomic apikacje wystarczy ja sklonowac i w katalogu projektu utworzy kontener, na ktorym bedzie ona pracowala. 


Nalezy uzyc polecenia :
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose up --build


nalezy w tym celu miec zainstalowanego docker compose w wersji 2, ktore korzysta z silnika buildkit
na podstawie pliku docker compose utorzy ono kontener i korzystajac ze zdefiniowanych obrazow uruchomi na nim aplikacje.
