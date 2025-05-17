# User Management Client

## Requisitos Iniciais

Antes de começar, certifique-se de ter instalado:
- Node.js (versão 18 ou 19)
- npm ou yarn
- Git

## Configuração do Projeto

1. Clone o repositório:
```
git clone https://github.com/marco-duart/user_management_client.git
cd nome-do-projeto
```

2. Instale as dependências:
```
npm install
```

3. Configure as variáveis de ambiente:
- Crie um arquivo `.env` na raiz baseado no `.env.example`
- Defina `VITE_BASE_URL` com a URL da sua API backend

4. Execute a aplicação:
```
npm run dev
```

## Estrutura do Projeto
src/  
├── assets/ # Recursos estáticos e estilos globais  
├── components/ # Componentes reutilizáveis  
├── config/ # Configurações da aplicação  
├── contexts/ # Contextos React  
├── hooks/ # Hooks customizados  
├── pages/ # Componentes de página  
├── routes/ # Configuração de rotas  
├── schemas/ # Esquemas de validação  
└── services/ # Chamadas à API  


## Principais Funcionalidades

### Autenticação
- Login com email/senha
- Login com Google OAuth
- Registro de novos usuários
- Proteção de rotas privadas
- Controle de acesso por roles (user/admin)

### Gerenciamento de Usuários
- Perfil do usuário logado
- Listagem de usuários (apenas admin)
- Controle de sessão e token JWT

## Decisões de Arquitetura

### 1. Gerenciamento de Estado
- **Auth Context**: Contexto global para estado de autenticação
- **Hooks Customizados**: Como `useAuthContext` para acesso facilitado
- **Local Storage**: Armazenamento seguro do token JWT

### 2. Roteamento
- **Rotas Privadas**: Componente `PrivateRoute` para proteção
- **Layout Base**: Componente `BaseLayout` para estrutura comum (header e outlet)

### 3. Estilização
- **Styled Components**: Para estilos
- **Tema Global**: Cores, tipografia e espaçamentos padronizados
- **Responsividade**: Media queries para diferentes tamanhos de tela

### 4. Formulários
- **React Hook Form**: Para gerenciamento eficiente
- **Zod**: Para validação de schemas

### 5. Integração com API
- **Serviços Organizados**: Separação por domínio (auth, user)
- **Axios**: Para requisições HTTP

## Bibliotecas Principais
- React + Vite
- React Router DOM
- Styled Components
- Styled Icons
- Axios
- React Hook Form + Zod
- React Hot Toast
- Tanstack React Table
- Qs

## Variáveis de Ambiente
| Variável                    | Descrição                  | Exemplo                      |
|-----------------------------|----------------------------|------------------------------|
| VITE_BASE_URL               | URL base da API            | http://localhost:3001/api/v1 |
| VITE_LOCALSTORAGE_TOKEN_KEY | Chave para armazenar token | user-management-token        |

## Detalhes Adicionais de Implementação
### 1. Fluxo de Autenticação:

O token JWT é armazenado no localStorage com chave configurável
Todas as requisições subsequentes incluem o token no header
Rotas protegidas verificam autenticação e permissões

### 2. Principais Componentes:

PrivateRoute: Controla acesso a rotas
GoogleLoginButton: Botão estilizado para login com Google
UserTable: Exibe lista de usuários com paginação. Renderiza cards na versão mobile
Forms: Implementados com react hook form e zod. Possuem validações dos campos

### 3. Tratamento de Erros:

Toasts para feedback visual

## **Deploy**  
`Aplicação`  
http://34.31.28.30:5173   

### Problema no OAuth
- **Erro 400** do Google: bloqueia IPs brutos (`34.31.28.30`)  
- Exige **domínio válido** (ex: `.com`, `.br`)  
- Para o deploy, não é possível realizar a dinâmica de OAuth2.0 

## Licença
Apache License Version 2.0