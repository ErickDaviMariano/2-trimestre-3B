<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz de IA</title>
    <style>
        .caixa-principal, .caixa-resultado {
            display: none;
        }
        .caixa-principal.active, .caixa-resultado.active {
            display: block;
        }
    </style>
</head>
<body>
    <div class="caixa-principal active">
        <div class="perguntas"></div>
        <div class="caixa-alternativas"></div>
        <button id="btn-anterior" onclick="navegar(-1)">Anterior</button>
        <button id="btn-proximo" onclick="navegar(1)">Próximo</button>
    </div>
    <div class="caixa-resultado">
        <div class="texto-resultado"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
