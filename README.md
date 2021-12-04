# Uruchomienie aplikacji
Aby uruchomić apikację wystarczy ją sklonować i w katalogu projektu utworzyć kontener, na którym bedzie ona pracowała. 


W tym celu można użyć polecenia :
`COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose up --build`


należy w tym celu mieć zainstalowanego docker compose w wersji 2, który korzysta z silnika buildkit
na podstawie pliku docker compose polecenie to utowrzy kontener i korzystając ze zdefiniowanych obrazów uruchomi na nim aplikację oraz przeprowadzi testy.
