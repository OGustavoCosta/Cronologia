# Estruturação SASS

## Arquitetura de Diretorios e Arquivos (Padrão 7-1)
[Sobre a padronização 7-1](https://sass-guidelin.es/#architecture)

```md
sass/
|
|– abstracts/
|   |– _variables.scss    # Variáveis do Sass
|   |– _functions.scss    # Funções do Sass
|   |– _mixins.scss       # Mixins do Sass
|   |– _placeholders.scss # Placeholders do Sass
|
|– base/
|   |– _reset.scss        # Reset/normalização
|   |– _base.scss         # Estilos padrão
|   |– _typography.scss   # Regras de tipografia
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Botões
|   |– _carousel.scss     # Carrossel
|   |– _cover.scss        # Capa
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navegação
|   |– _grid.scss         # Sistema de grid
|   |– _header.scss       # Cabeçalho
|   |– _footer.scss       # Rodapé
|   |– _sidebar.scss      # Barra lateral
|   |– _forms.scss        # Formulários
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Estilos específicos da página inicial
|   |– _contact.scss      # Estilos específicos da página de contato
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Tema padrão
|   |– _admin.scss        # Tema do painel administrativo
|   …                     # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Arquivo principal do Sass


