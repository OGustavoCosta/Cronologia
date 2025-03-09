# Estruturação SASS

## Arquitetura de Diretorios e Arquivos (Padrão 7-1)
[Sobre a padronização 7-1](https://sass-guidelin.es/#architecture)

```md
sass/
|
|– abstracts/
|   |– _variables.scss      # Variáveis do Sass
|   |– _functions.scss      # Funções do Sass
|   |– _mixins.scss         # Mixins do Sass
|   |– _placeholders.scss   # Placeholders do Sass
|
|– base/
|   |– _reset.scss          # Reset/normalização
|   |– _base.scss           # Estilos padrão
|   |– _typography.scss     # Regras de tipografia
|
|– components/
|   |– _button.scss         # Botões
|   |– _card.scss           # Cards
|   |– _form.scss           # Formulários
|   |– _modal.scss          # Caixa de diálogo
|   |– _navigation.scss     # Barra de navegação
|   |– _table.scss          # Tabelas
|   |– _article.scss        # Artigos
|
|– layout/
|   |– _grid.scss           # Sistema de grid
|   |– _header.scss         # Cabeçalho
|   |– _footer.scss         # Rodapé
|   |– _sidebar.scss        # Barra lateral
|   |– _section.scss        # Seções
|   |– _article.scss        # Artigos
|   |– _main-content.scss   # Conteúdo principal
|
|– pages/
|   |– _home.scss           # Estilos específicos da página inicial
|   |– _main-menu.scss      # Estilos específicos da página do menu do jogo
|   |– _game.scss           # Estilos específicos da página do menu do jogo
|
|– themes/
|   |– _theme.scss          # Tema padrão
|   |– _dark-theme.scss     # Tema escuro
|   |– _light-theme.scss    # Tema claro
|
|– vendors/
|   |– _tailwindcss.scss      # Bootstrap
|
`– main.scss                # Arquivo principal do Sass