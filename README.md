# React Native LTR Labs

## Uruchomienie

**Uwaga**: Upewnij się, że wykonałeś instrukcję [Konfiguracja środowiska](https://reactnative.dev/docs/set-up-your-environment) przed kontynuacją.

## Krok 1: Uruchom Metro

Najpierw musisz uruchomić **Metro**

Aby uruchomić Metro, wykonaj poniższe polecenie w katalogu głównym projektu React Native:

```sh
# Przy użyciu npm
npm start

# Lub przy użyciu Yarn
yarn start
```

## Krok 2: Zbuduj i uruchom aplikacje

Z działającym metro otwórz nowy terminal i użyj podanej komendy:

### Android

```sh
# Przy użyciu npm
npm run android

# Lub przy użyciu Yarn
yarn android
```

## Funkcjonalność

- Ekran logowania z walidacją email i hasła
- Po zalogowaniu łączy się do WebSocket
- Subskrybuje kanał (Phoenix Channels)
- Odbiera wiadomość i wyświetla ją na ekranie
- Obsługa błędów i loader przy logowaniu

---

## Użyte technologie

- React Native
- react-hook-form
- axios
- phoenix channels (JS client)
