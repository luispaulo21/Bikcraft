# SEO e Head

## Tag title
Sempre defina um nome completo para a tag title, como por exemplo:

    <title>Bikcraft - Bicicleta personalizadas</title>

Deve possuir no máximo __70 caracteres__.

## Meta tags

    <meta name="description" content="">

É descrição do site que aparece abaixo da tag `title` quando pesquisada no google.  
Deve possuir no máximo __140 caracteres__.

## Meta tags og
Saiba mais em [clicando aqui](https://ogp.me/)  
Cria uma formatação para o compartilhamento do seu site.

    <meta property="og:type" content="website" />

Específica do que se trata o seu site.

    <meta property="og:title" content="" />

O título que irá aparecer na formatação do compartilhamento do site.

    <meta property="og:description" content="" />

A descrição que irá aparecer na formatação do compartilhamento do seu site.

    <meta property="og:url" content="" />

Você deve colocar a url do site, depois de ter colocado em um servidor de hospedagem.

    <meta property="og:image" content="" />

Adiciona uma imagem que irá aparecer na formatação ao compartilhar o seu site.  
Crie uma imagem no tamanho 300 x 300. Você deve colocar a url da imagem depois de upada no servidor de hospedagem.

## Favicon

    <link rel="shortcut icon" href="favicon.ico">

#### Gerando o favicon

1. Crie uma imagem no tamanho 200x200.
2. Salve como png
3. Entre no site [Favicon & app icon generator](https://www.favicon-generator.org/)
4. Vai ser gerado uma extensa lista de códigos. Alguns referentes a icones do android, outros do IOS, outros para escolher as cores da barra de navegação.
5. Faça o download os ícones. Eles virão em uma pasta zipada.
6. Cole os ícones na raiz do site, sem ser dentro de pasta.
5. Cole os códigos dentro da tag `<head>`.