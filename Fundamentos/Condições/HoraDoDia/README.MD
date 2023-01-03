# Hora do DIA

## 🚀 Descrição

Site que conforme a hora da máquina, ele estiliza uma imagem no HTML bem como um formato de estilo específico.

## 🔧 Funcionamento Técnico (for DEVs)

A essência desse código é o Javascript, ele pega o horário da máquina que está rodando, no campo abaixo

```
const hora = data.getHours()
```

* Caso queira testar em outros horários, pode fazer um clone do repositório;
* Comentar a const acima com o //;
* Inserir:
```
const hora = "digitar seu horário"
```
* O script tem essas condições de horários?
```
(hora >= 0 && hora < 12) 
        img.src  = './img/fotomanha.png'
        document.body.style.backgroundColor = '#e2cd9f'

(hora >= 12 && hora <= 18) 
        img.src = './img/fototarde.png'
        document.body.style.backgroundColor = '#b9846f'

        img.src = './img/fotonoite.png'
        document.body.style.backgroundColor = '#515154'
```

## ⚙️ Executando os testes

Testes foram aplicados antes da publicação.

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* HTML5
* CSS3
* JavaScript

## 📌 Versão

* Commit Inicial - 02/01/2023.
* Melhoria - 02/01/2023
> Inserido texto no HTML para informar ao usuário como funciona.

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Rodrigo Menezes** 
