// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." 
    },
    "questions": [

    // 207 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { 
            "q": "O principal arquivo de configuraçao do servidor DNS bind é o:",
            "a": [
                {"option": "bind.conf",      "correct": false},
                {"option": "named.conf",     "correct": true},
                {"option": "bind.cf",      "correct": false},
                {"option": "named.cf",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> named.conf</p>" 
        },

        { 
            "q": "A entrada que determina uma zona caching-only é:",
            "a": [
                {"option": "type cache;",      "correct": false},
                {"option": "type name;",     "correct": false},
                {"option": "type root;",      "correct": false},
                {"option": "type hint;",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> type hint;</p>" 
        },

        { 
            "q": "Em qual seçao do arquivo named.conf é definido o diretório dos arquivos de zonas?",
            "a": [
                {"option": "files",      "correct": false},
                {"option": "zones",     "correct": false},
                {"option": "options",      "correct": true},
                {"option": "include",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> options</p>" 
        },

        { 
            "q": "O comando ________ tem a finalidade de controlar a operaçao de um daemon named em execuçao.",
            "a": [
                {"option": "rndc",      "correct": true}
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { 
            "q": "Qual entrada num mapeamento de zona identifica o servidor de email para o domínio em questao?",
            "a": [
                {"option": "MAIL",      "correct": false},
                {"option": "CNAME",     "correct": false},
                {"option": "MX",      "correct": true},
                {"option": "INBOX",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> MX</p>" 
        },

        { 
            "q": "num arquivo de zona, a entrada ___________ mapeia um número IP para um nome",
            "a": [
                {"option": "ptr",      "correct": true}
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { 
            "q": "O termo in-addr.arpa no arquivo named.conf determina que a zona em questao:",
            "a": [
                {"option": "é válida na Internet",      "correct": false},
                {"option": "é válida na rede interna",     "correct": false},
                {"option": "é para resoluçao de DNS reverso",      "correct": true},
                {"option": "está em outro servidor",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> é para resoluçao de DNS reverso.</p>" 
        },

        { 
            "q": "Quais comandos permitem o diagnóstico detalhados de um servidor DNS? Marque todas as opçoes corretas",
            "a": [
                {"option": "nslookup",      "correct": true},
                {"option": "ping",     "correct": false},
                {"option": "dig",      "correct": true},
                {"option": "nmap",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> dig</p>" 
        },

        { 
            "q": "Um DNS Jail (chroot) ou Jaula DNS é o modelo no qual",
            "a": [
                {"option": "o servidor DNS fica numa máquina remota",      "correct": false},
                {"option": "o servidor DNS fica inacessável",     "correct": false},
                {"option": "o servidor DNS identifica o invasor e informa a polícia",      "correct": false},
                {"option": "o servidor DNS opera num ambiente isolado do restante do sistema",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> o servidor DNS opera num ambiente isolado do restante do sistema</p>" 
        },

        { 
            "q": "O comando _______ tem a finalidade de gerar chaves criptográficas para troca segura de zonas entre servidores DNS",
            "a": [
                {"option": "dnssec-keygen",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },


    // 208 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "Qual diretiva define o caminho dos arquivos de configuracao do Apache?",
            "a": [
                {"option": "ConfigDir",      "correct": false},
                {"option": "ServerType",     "correct": false},
                {"option": "ServerRoot",      "correct": true},
                {"option": "DocumentRoot",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> ServerRoot</p>" 
        },

        { // 2
            "q": "A opcao MinSpareServers define",
            "a": [
                {"option": "o número mínimo de processos ociosos disparados pelo Apache",      "correct": true},
                {"option": "o número mínimo de threads ociosos disparados pelo Apache",     "correct": false},
                {"option": "o numero mínimo de domínios virtuais",      "correct": false},
                {"option": "o número de servidores virtuais",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> o número mínimo de threads ociosos disparados pelo Apache</p>" 
        },

        { // 3
            "q": "O comando __________ tem a finalidade de controlar o servidor Apache 2.x em execucao",
            "a": [
                {"option": "apache2ctl",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4
            "q": "Qual comando do Apache é utilizado para criar uma conta de autenticaçao HTTP?",
            "a": [
                {"option": "passwd",      "correct": false},
                {"option": "htpasswd",     "correct": true},
                {"option": "htaccess",      "correct": false},
                {"option": "apache2ctl",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> htpasswd</p>" 
        },

        { // 5 
            "q": "Um registro personalizado de log pode ser criado no arquivo de configuracao do apache com as instrucoes",
            "a": [
                {"option": "Syslog e LogFormat",      "correct": false},
                {"option": "Log e Access",     "correct": false},
                {"option": "LogError e Directory",      "correct": false},
                {"option": "LogFormat e CustomLog",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> LogFormat e CustomLog</p>" 
        },

        { // 6 
            "q": "Qual secao de configuracao do Apache define um domínio virtual?",
            "a": [
                {"option": "ServerHost",      "correct": false},
                {"option": "RootServer",     "correct": false},
                {"option": "VirtualHost",      "correct": true},
                {"option": "NmaeHost",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> VirtualHost</p>" 
        },

        { // 7 
            "q": "O comando __________ é utilizado para gerar as chaves de um certificado SSL",
            "a": [
                {"option": "operanssl",      "correct": true}
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 8 
            "q": "A porta de comunicacao padrao do protocolo HTTPS é",
            "a": [
                {"option": "80",      "correct": false},
                {"option": "8080",     "correct": false},
                {"option": "143",      "correct": false},
                {"option": "443",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> 443</p>" 
        },

        { // 9
            "q": "Um certificado de segurança é considerado válido quando",
            "a": [
                {"option": "for emitido por uma CA - Autoridade Certificadora - reconhecida pelo nevagador",      "correct": true},
                {"option": "o certificado possui mais de 128 bits de criptografia",     "correct": false},
                {"option": "a conexao for estabelecida com um site conhecido",      "correct": false},
                {"option": "o navegador informa sobre a segurança do site",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> for emitido por uma CA - Autoridade Certificadora - reconhecida pelo navegador</p>" 
        },

        { // 10
            "q": "Na configuraçao do proxy do Squid, a entrada http_access tem a finalidade de",
            "a": [
                {"option": "informar qual é o servidor de acesso HTTP",      "correct": false},
                {"option": "definir a port ade acesso do proxy.",     "correct": false},
                {"option": "controlar o acesso por http de uma ACL",      "correct": true},
                {"option": "liberar o acesso de usuários",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

    // 209 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "O compartilhamento genérico que permite um usuáiro acessar diretamente seu diretório pessoal via Samba é o",
            "a": [
                {"option": "[users]",      "correct": false},
                {"option": "[global]",     "correct": false},
                {"option": "[personal]",      "correct": true},
                {"option": "[homes]",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 2
            "q": "Quais sao os principais daemons de serviço do Samba? Marque ",
            "a": [
                {"option": "",      "correct": false},
                {"option": "",     "correct": false},
                {"option": "",      "correct": true},
                {"option": "",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 3
            "q": "O comando _________ pertmite testar as configuracao do Smaba e informa sobre possíveis falhas no arquivo de configuracao",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4
            "q": "O comando que cria uma conta de usuario do Samba é o:",
            "a": [
                {"option": "useradd",      "correct": false},
                {"option": "adduser",     "correct": false},
                {"option": "smbuser",      "correct": true},
                {"option": "smbpasswd",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 5
            "q": "No Samba, como o arquivo /var/lib/samba/users.map pode ser definido como arquivo de correspondeencia entre nomes de usuários remotos e locais?",
            "a": [
                {"option": "users map = /var/lib/samba/users.map",      "correct": false},
                {"option": "username map = /var/lib/samba/users.map",     "correct": false},
                {"option": "names map = /var/lib/samba/users.map",      "correct": true},
                {"option": "homes = /var/lib/samba/users.map",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 6
            "q": "O comando _________  -L  192.168.1.77 exibirá os compartilhamentos Samba disponíveis no servidor 192.168.1.77.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 7
            "q": "Quais servicos ou daemons sao necessarios para que o servico NFS funcione corretamente?",
            "a": [
                {"option": "portmap",      "correct": false},
                {"option": "nfsd",     "correct": false},
                {"option": "inetd",      "correct": true},
                {"option": "tcpwrapper",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 8
            "q": "Em qual arquivo sao definidos os compartilhamentos NFS? Informe o caminho completo.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 9
            "q": "Após definir um compartilhamento NFS, o comando _______ =a deve ser executado para torná-lo ativo.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 10 
            "q": "Com qual comando é possível flistar os compartilhamentos NFS da máquina 192.168.1.5?",
            "a": [
                {"option": "showmount",      "correct": false},
                {"option": "mount",     "correct": false},
                {"option": "nmap",      "correct": true},
                {"option": "exportfs",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

    // 210 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "A entrada option ___________ 208.67.222.222, 208.67.220.220 no arquivo dhcpd.conf define os servidores de DNS para os clientes na rede",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 2
            "q": "No arquivo dhcpd.conf, quais entradas podem ser utilizadas para atribuir um número IP fixo para uma interface específica?",
            "a": [
                {"option": "mac-address e fixed-ip",      "correct": false},
                {"option": "mac address e ip",     "correct": false},
                {"option": "hardware-ethernet e fixed address",      "correct": true},
                {"option": "hardware ethernet e fixed-address",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 3
            "q": "O comando ___________ redireciona requisiçoes DHCP para outro servidor",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4
            "q": "Atribuiçoes de endereços IP para os clientes da rede podem ser consultados no arquivo __________ no servidor DHCP. informe o caminho completo.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 5
            "q": "Quais dos tipos de autenticaçao PAM citados sao válidos? Marque todos os corretos.",
            "a": [
                {"option": "getty",      "correct": false},
                {"option": "math",     "correct": false},
                {"option": "auth",      "correct": true},
                {"option": "account",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 6
            "q": "Qual controle do PAM nega uma autenticaçao, independente da respota de outros módulos para o mesmo tipo de autenticaçao",
            "a": [
                {"option": "requisite",      "correct": false},
                {"option": "required",     "correct": false},
                {"option": "sufficient",      "correct": true},
                {"option": "optional",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 7
            "q": "O módulo __________ determina a configuraçao de limites como definidos no arquivo /etc/security/limits.conf",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 8
            "q": "Qual é a finalidade do comando ldapsearch?",
            "a": [
                {"option": "procurar registros num servidor LDAP",      "correct": false},
                {"option": "procurar máquinas que sejham servidores LDAP",     "correct": false},
                {"option": "verificar a configuraçao de um cliente LDAP",      "correct": true},
                {"option": "Localizar um cliente LDAP na rede",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 9
            "q": "O principal arquivo de configuraçao do daemon servidor LDAP é o:",
            "a": [
                {"option": "ldap.conf",      "correct": false},
                {"option": "ldif.conf",     "correct": false},
                {"option": "ldaprc",      "correct": true},
                {"option": "slapd.conf",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 10 
            "q": "A senha de acesso a um recurso do LDAP é definida ou alterada com o comando __________.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },


    // 211 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "Qual desses servidores é utlizado para envio de mensagens por SMTP? Marque todas as opçoes corretas",
            "a": [
                {"option": "Exim",      "correct": false},
                {"option": "Dovecot",     "correct": false},
                {"option": "Courier",      "correct": true},
                {"option": "Postfix",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 2
            "q": "Qual é o principal arquivo de configuraçao do Postfix? Informe apenas o nome sem o caminho.",
            "a": [
                {"option": "",      "correct": true}
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 3 
            "q": "Qual entrada de configuraçao do Postfix determina para quais dominios será feito relay de email?",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4 
            "q": "Qual entrada de configuraçao do Postfix sao definidos os domínios virtuais aceitos pelo Postfix?",
            "a": [
                {"option": "virtual",      "correct": false},
                {"option": "domains",     "correct": false},
                {"option": "remote-domains",      "correct": true},
                {"option": "local-domains",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 5
            "q": "Em qual arquivo do Procmail sao definidos os filtros pessoais do usuario?",
            "a": [
                {"option": "~/.Mail",      "correct": false},
                {"option": "~/.procmail",     "correct": false},
                {"option": "~/.procmailrc",      "correct": true},
                {"option": "~/Mail",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 6
            "q": "O filtro de Procmail a seguir <br>:0<br>* ^To.*lsiqueira@.*<br>| cat > /dev/null<br>Causará qual resultado?",
            "a": [
                {"option": "As mensagens locais serao descartadas",      "correct": false},
                {"option": "As mensagens sem campo assunto serão descartadas",     "correct": false},
                {"option": "As mensagens destinadas ao usuário lsiqueira serão descartadas",      "correct": true},
                {"option": "As mensages enviadas pelo usuário lsiqueira serão descartadas",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 7
            "q": "O arquivo ___________ contém as definições globais para o Procmail. Informe o caminho completo.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 8
            "q": "Qual desses servidores destina-se ao tráfego de mensagens por IMAP?",
            "a": [
                {"option": "Exim",      "correct": false},
                {"option": "Dovecot",     "correct": false},
                {"option": "Courier",      "correct": true},
                {"option": "Postfix",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 9
            "q": "Qual definição de configuração do Courier determina o carregamento do servidor POP?",
            "a": [
                {"option": "POP=YES",      "correct": false},
                {"option": "POP3=YES",     "correct": false},
                {"option": "POP3START=YES",      "correct": true},
                {"option": "POP3DSTART=YES",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 10 
            "q": "Qual opção do servidor Dovecot define a localização padrão para o armazenamento de mensagens?",
            "a": [
                {"option": "mbox",      "correct": false},
                {"option": "maildir",     "correct": false},
                {"option": "mail_location",      "correct": true},
                {"option": "mail_dir",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },


    // 212 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "Qual é a principal finalidade do NAT em um gateway de rede privada?",
            "a": [
                {"option": "Permitir a comunicação entre os computadores na rede interna.",      "correct": false},
                {"option": "Bloquear o acesso externo aos computadores da rede interna",     "correct": false},
                {"option": "Permitir que os computadores da rede interna acessem endereços exsternos.",      "correct": true},
                {"option": "Permitir a identificação dos endereços da rede interna",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 2
            "q": "Em qual tabela do iptables são definidas as regras de NAT?",
            "a": [
                {"option": "filter",      "correct": false},
                {"option": "nat",     "correct": false},
                {"option": "mangle",      "correct": true},
                {"option": "forward",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 3
            "q": "De que forma todos os pacotes chegando a máquina local podem ser bloqueados?",
            "a": [
                {"option": "iptables -P INPUT -j DROP",      "correct": false},
                {"option": "iptables -P INPUT DROP",     "correct": false},
                {"option": "iptables -I INPUT DROP",      "correct": true},
                {"option": "iptables -F INPUT",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4
            "q": "O comando iptables -t nat -A PREROUTING -p tcp --dport 80 -j ______ --to-destination 192.168.2.2:80 redireciona as conexões para a porta 80 da máquina local para a porta 80 da máquina 192.168.2.2.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 5
            "q": "O comando _______ é utilizado para ativar as regras salvas com o comando iptables-save",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 6
            "q": "Na configuraçoa do vsftpd, qual opção libera a gravação de arquivos em sessões anônimas?",
            "a": [
                {"option": "anon_write_enable=YES",      "correct": false},
                {"option": "anon_rw_enable=YES",     "correct": false},
                {"option": "anon_login_enable=YES",      "correct": true},
                {"option": "anon_upload_enable=YES",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 7
            "q": "Na opção ___________ no arquivo /etc/ssh/sshd_conf bloqueia o login direto via ssh para o usuário root.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 8
            "q": "Qual é a finalidade do comando ssh-agent?",
            "a": [
                {"option": "Armazenar a autorização de acesso a chave do usuário.",      "correct": false},
                {"option": "Reestabelecer uma conexão ssh perdida",     "correct": false},
                {"option": "Gerar a chave criptográfica pública.",      "correct": true},
                {"option": "Gerar a chave criptgráfica privada",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 9
            "q": "O __________ deve ser utilizado pelo inetd para consultar as regras de TCP Wrapper e liberar a solicitação de acesso a um serviço. Informe apenas o nome, sem o caminho.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 10 
            "q": "Quais das referências a seguir informam sobre falhas em sistemas e alertas de segurança? Marque todas as corretas.",
            "a": [
                {"option": "Cert",      "correct": false},
                {"option": "IANA",     "correct": false},
                {"option": "Bugtraq",      "correct": true},
                {"option": "TCP Wrapper",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

    // 213--------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "Durante a inicialização do sistema, o sistema trava logo após o kernel invocar o comando init. Das listadas, qual a causa mais provável para a falha?",
            "a": [
                {"option": "O kernel não foi corretamente instalado.",      "correct": false},
                {"option": "O Grub não pôde encontrar o kernel.",     "correct": false},
                {"option": "O teclado não foi localizado",      "correct": true},
                {"option": "O arquivo /etc/inittab foi editado incorretamente",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 2
            "q": "Em caso de falha na execução de um serviço de interrompa o carregamento, qual procedimento deve ser tomado?",
            "a": [
                {"option": "Formatar o disco e reinstalar o sistema",      "correct": false},
                {"option": "Pressionar [F1] durante o carregamento do sistema",     "correct": false},
                {"option": "Aguardar até que o sistema se atualize",      "correct": true},
                {"option": "Entrar no runlevel 1 e corrigir o script do serviço em questão",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 3
            "q": "Dos comandos abaixo, quais podem ser utilizados para inspecionar os itens de harware do computador? Marque todas as opções corretas.",
            "a": [
                {"option": "lsdev",      "correct": false},
                {"option": "modprobe",     "correct": false},
                {"option": "lspci",      "correct": true},
                {"option": "strace",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4
            "q": "Após compilar e instalar o kernel versão 2.6.32, onde deverão ser localizados seus respectivos módulos?",
            "a": [
                {"option": "/usr/lib/2.6.32",      "correct": false},
                {"option": "/lib/2.6.32",     "correct": false},
                {"option": "/lib/modules/2.6.32",      "correct": true},
                {"option": "/lib/2.6.32/modules",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 5
            "q": "Qual comando é utilizado para rastrear os recursos utilizados por um programa? Marque todas as alternativas corretas.",
            "a": [
                {"option": "pidof",      "correct": false},
                {"option": "ps",     "correct": false},
                {"option": "lsof",      "correct": true},
                {"option": "strace",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 6 
            "q": "A variável global PATH incorretamente definida deve ser c orrigida no arquivo ________. Informe o caminho completo.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },


        { // 7 
            "q": "Em qual arquivo ficam os caminhos para os diretórios com bibliotecas compartilhadas?",
            "a": [
                {"option": "/etc/ld.so.cache",      "correct": false},
                {"option": "/etc/ld.so.conf",     "correct": false},
                {"option": "/etc/ldconfig",      "correct": true},
                {"option": "/etc/ldd",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

         { // 8
            "q": "Após alterar o conteúdo do arquivo /etc/ld.so.conf, qual comando deve ser executado?",
            "a": [
                {"option": "ldd",      "correct": false},
                {"option": "ldconfig",     "correct": false},
                {"option": "update",      "correct": true},
                {"option": "lilo",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 9
            "q": "Para evitar a corrupção dos dados, o comando _________ deve ser utilizado para editar o arquivo /etc/passwd",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 10 
            "q": "Configurações de tempo de execução feitas pelo programa sysctl podem ser armazenadas no arquivo ___________. Informe o caminho completo.",
            "a": [
                {"option": "",     "correct": true} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { 
            "q": "",
            "a": [
                {"option": "",      "correct": false},
                {"option": "",     "correct": false},
                {"option": "",      "correct": true},
                {"option": "",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following best represents your preferred breakfast?",
            "a": [
                {"option": "Bacon and eggs",               "correct": false},
                {"option": "Fruit, oatmeal, and yogurt",   "correct": true},
                {"option": "Leftover pizza",               "correct": false},
                {"option": "Eggs, fruit, toast, and milk", "correct": true} 
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" 
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Where are you right now? Select ALL that apply.",
            "a": [
                {"option": "Planet Earth",           "correct": true},
                {"option": "Pluto",                  "correct": false},
                {"option": "At a computing device",  "correct": true},
                {"option": "The Milky Way",          "correct": true} 
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" 
        },
        { // Question 4
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} 
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" 
        },
        { // Question 5
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} 
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" 
        } 
    ]
};
