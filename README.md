
# Pub/Sub Pattern


Implementação do patter Pub/Sub
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/ThiagoBxK/message-serivce/
```

Entre no diretório do projeto

```bash
  cd message-service
```

Abra o arquivo index.html no seu navegador ou instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VSCode.

## Stack utilizada

Typescript

##
Projeto desenvolvido para fins educacionais, incentivando a aprendizagem.
Caso use meu codigo por favor dar os devidos direitos a [@ThiagoBxK](https://github.com/ThiagoBxK)
## Uso/Exemplos


Se inscrever em um canal
```javascript
const userA = new User(1, "Thiago");
chatService.subscribe("Conversas 1", userA);
```

Se desinscrever em um canal
```javascript
chatService.unsubscribe("Conversas 1", userA);
```

Enviar mensagem para um canal
```javascript
chatService.sendMessage("Conversas 1", userB, "Olá");

// Output: Thiago: Recebeu uma mensagem "Olá" enviada por Maria no canal Conversas 1
```
