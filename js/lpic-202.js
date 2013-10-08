// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "202",
        "main":    "<p>last update: 04/10/2013</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "boa, pode fazer a prova que você passa.",
        "level2":  "melhor estudar um pouco mais",
        "level3":  "vixi, volte para os livros",
        "level4":  "triste",
        "level5":  "ta ruim manow."
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
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> options</p>" 
        },

        { 
            "q": "O comando ________ tem a finalidade de controlar a operaçao de um daemon named em execuçao.",
            "a": [
                {"option": "rndc",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> MX</p>" 
        },

        { 
            "q": "num arquivo de zona, a entrada ___________ mapeia um número IP para um nome",
            "a": [
                {"option": "ptr",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> o servidor DNS opera num ambiente isolado do restante do sistema</p>" 
        },

        { 
            "q": "O comando _______ tem a finalidade de gerar chaves criptográficas para troca segura de zonas entre servidores DNS",
            "a": [
                {"option": "dnssec-keygen",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> o número mínimo de threads ociosos disparados pelo Apache</p>" 
        },

        { // 3
            "q": "O comando __________ tem a finalidade de controlar o servidor Apache 2.x em execucao",
            "a": [
                {"option": "apache2ctl",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> VirtualHost</p>" 
        },

        { // 7 
            "q": "O comando __________ é utilizado para gerar as chaves de um certificado SSL",
            "a": [
                {"option": "operanssl",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
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
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> controlar o acesso por http de uma ACL</p>" 
        },

    // 209 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "O compartilhamento genérico que permite um usuáiro acessar diretamente seu diretório pessoal via Samba é o",
            "a": [
                {"option": "[users]",      "correct": false},
                {"option": "[global]",     "correct": false},
                {"option": "[personal]",      "correct": false},
                {"option": "[homes]",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> [homes]</p>" 
        },

        { // 2
            "q": "Quais sao os principais daemons de serviço do Samba? Marque ",
            "a": [
                {"option": "sambad",      "correct": false},
                {"option": "smbd",     "correct": true},
                {"option": "cifs",      "correct": false},
                {"option": "nmbd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>smbd nmbd</p>" 
        },


        { // 3
            "q": "O comando _________ pertmite testar as configuracao do Smaba e informa sobre possíveis falhas no arquivo de configuracao",
            "a": [
                {"option": "testparm",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4
            "q": "O comando que cria uma conta de usuario do Samba é o:",
            "a": [
                {"option": "useradd",      "correct": false},
                {"option": "adduser",     "correct": false},
                {"option": "smbuser",      "correct": false},
                {"option": "smbpasswd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> smbpasswd</p>" 
        },

        { // 5
            "q": "No Samba, como o arquivo /var/lib/samba/users.map pode ser definido como arquivo de correspondeencia entre nomes de usuários remotos e locais?",
            "a": [
                {"option": "users map = /var/lib/samba/users.map",      "correct": false},
                {"option": "username map = /var/lib/samba/users.map",     "correct": true},
                {"option": "names map = /var/lib/samba/users.map",      "correct": false},
                {"option": "homes = /var/lib/samba/users.map",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> username map = /var/lib/samba/users.map</p>" 
        },

        { // 6
            "q": "O comando _________  -L  192.168.1.77 exibirá os compartilhamentos Samba disponíveis no servidor 192.168.1.77.",
            "a": [
                {"option": "smbclient",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 7
            "q": "Quais servicos ou daemons sao necessarios para que o servico NFS funcione corretamente?",
            "a": [
                {"option": "portmap",      "correct": true},
                {"option": "nfsd",     "correct": true},
                {"option": "inetd",      "correct": false},
                {"option": "tcpwrapper",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> portmap nfsd</p>" 
        },

        { // 8
            "q": "Em qual arquivo sao definidos os compartilhamentos NFS? Informe o caminho completo.",
            "a": [
                {"option": "/etc/exports",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 9
            "q": "Após definir um compartilhamento NFS, o comando _______ =a deve ser executado para torná-lo ativo.",
            "a": [
                {"option": "exportfs",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 10 
            "q": "Com qual comando é possível flistar os compartilhamentos NFS da máquina 192.168.1.5?",
            "a": [
                {"option": "showmount",      "correct": true},
                {"option": "mount",     "correct": false},
                {"option": "nmap",      "correct": false},
                {"option": "exportfs",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> showmount</p>" 
        },

    // 210 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "A entrada option ___________ 208.67.222.222, 208.67.220.220 no arquivo dhcpd.conf define os servidores de DNS para os clientes na rede",
            "a": [
                {"option": "domain-name-servers",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 2
            "q": "No arquivo dhcpd.conf, quais entradas podem ser utilizadas para atribuir um número IP fixo para uma interface específica?",
            "a": [
                {"option": "mac-address e fixed-ip",      "correct": false},
                {"option": "mac address e ip",     "correct": false},
                {"option": "hardware-ethernet e fixed address",      "correct": false},
                {"option": "hardware ethernet e fixed-address",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> hardware ethernet e fixed-address</p>" 
        },

        { // 3
            "q": "O comando ___________ redireciona requisiçoes DHCP para outro servidor",
            "a": [
                {"option": "dhcrelay",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4
            "q": "Atribuiçoes de endereços IP para os clientes da rede podem ser consultados no arquivo __________ no servidor DHCP. informe o caminho completo.",
            "a": [
                {"option": "/var/log/daemon.log",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 5
            "q": "Quais dos tipos de autenticaçao PAM citados sao válidos? Marque todos os corretos.",
            "a": [
                {"option": "getty",      "correct": false},
                {"option": "math",     "correct": false},
                {"option": "auth",      "correct": true},
                {"option": "account",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> auth account</p>" 
        },

        { // 6
            "q": "Qual controle do PAM nega uma autenticaçao, independente da respota de outros módulos para o mesmo tipo de autenticaçao",
            "a": [
                {"option": "requisite",      "correct": true},
                {"option": "required",     "correct": false},
                {"option": "sufficient",      "correct": false},
                {"option": "optional",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> requisite</p>" 
        },

        { // 7
            "q": "O módulo __________ determina a configuraçao de limites como definidos no arquivo /etc/security/limits.conf",
            "a": [
                {"option": "pam_limits.so",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 8
            "q": "Qual é a finalidade do comando ldapsearch?",
            "a": [
                {"option": "procurar registros num servidor LDAP",      "correct": true},
                {"option": "procurar máquinas que sejham servidores LDAP",     "correct": false},
                {"option": "verificar a configuraçao de um cliente LDAP",      "correct": false},
                {"option": "Localizar um cliente LDAP na rede",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> procurar registros num servidor LDAP</p>" 
        },

        { // 9
            "q": "O principal arquivo de configuraçao do daemon servidor LDAP é o:",
            "a": [
                {"option": "ldap.conf",      "correct": false},
                {"option": "ldif.conf",     "correct": false},
                {"option": "ldaprc",      "correct": false},
                {"option": "slapd.conf",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> slapd.conf</p>" 
        },

        { // 10 
            "q": "A senha de acesso a um recurso do LDAP é definida ou alterada com o comando __________.",
            "a": [
                {"option": "ldappasswd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },


    // 211 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "Qual desses servidores é utlizado para envio de mensagens por SMTP? Marque todas as opçoes corretas",
            "a": [
                {"option": "Exim",      "correct": true},
                {"option": "Dovecot",     "correct": false},
                {"option": "Courier",      "correct": false},
                {"option": "Postfix",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span> Exim Postfix</p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 2
            "q": "Qual é o principal arquivo de configuraçao do Postfix? Informe apenas o nome sem o caminho.",
            "a": [
                {"option": "main.cf",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 3 
            "q": "Qual entrada de configuraçao do Postfix determina para quais dominios será feito relay de email?",
            "a": [
                {"option": "relay_domains",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4 
            "q": "Qual entrada de configuraçao do Postfix sao definidos os domínios virtuais aceitos pelo Postfix?",
            "a": [
                {"option": "virtual",      "correct": true},
                {"option": "domains",     "correct": false},
                {"option": "remote-domains",      "correct": false},
                {"option": "local-domains",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> virtual</p>" 
        },

        { // 5
            "q": "Em qual arquivo do Procmail sao definidos os filtros pessoais do usuario?",
            "a": [
                {"option": "~/.Mail",      "correct": false},
                {"option": "~/.procmail",     "correct": false},
                {"option": "~/.procmailrc",      "correct": true},
                {"option": "~/Mail",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> /.procmailrc</p>" 
        },

        { // 6
            "q": "O filtro de Procmail a seguir <br>:0<br>* ^To.*lsiqueira@.*<br>| cat > /dev/null<br>Causará qual resultado?",
            "a": [
                {"option": "As mensagens locais serao descartadas",      "correct": false},
                {"option": "As mensagens sem campo assunto serão descartadas",     "correct": false},
                {"option": "As mensagens destinadas ao usuário lsiqueira serão descartadas",      "correct": true},
                {"option": "As mensages enviadas pelo usuário lsiqueira serão descartadas",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> as mensagens destinadas ao usuário lsiqueira serao descartadas</p>" 
        },

        { // 7
            "q": "O arquivo ___________ contém as definições globais para o Procmail. Informe o caminho completo.",
            "a": [
                {"option": "/etc/procmailrc",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 8
            "q": "Qual desses servidores destina-se ao tráfego de mensagens por IMAP?",
            "a": [
                {"option": "Exim",      "correct": false},
                {"option": "Dovecot",     "correct": true},
                {"option": "Courier",      "correct": true},
                {"option": "Postfix",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> Dovecot Courier</p>" 
        },

        { // 9
            "q": "Qual definição de configuração do Courier determina o carregamento do servidor POP?",
            "a": [
                {"option": "POP=YES",      "correct": false},
                {"option": "POP3=YES",     "correct": false},
                {"option": "POP3START=YES",      "correct": false},
                {"option": "POP3DSTART=YES",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> POP3DSTART=YES</p>" 
        },

        { // 10 
            "q": "Qual opção do servidor Dovecot define a localização padrão para o armazenamento de mensagens?",
            "a": [
                {"option": "mbox",      "correct": false},
                {"option": "maildir",     "correct": false},
                {"option": "mail_location",      "correct": true},
                {"option": "mail_dir",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> mail_location</p>" 
        },


    // 212 --------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "Qual é a principal finalidade do NAT em um gateway de rede privada?",
            "a": [
                {"option": "Permitir a comunicação entre os computadores na rede interna.",      "correct": false},
                {"option": "Bloquear o acesso externo aos computadores da rede interna",     "correct": false},
                {"option": "Permitir que os computadores da rede interna acessem endereços externos.",      "correct": true},
                {"option": "Permitir a identificação dos endereços da rede interna",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> Permitir que os computadores da rede interna acessem endereços externos</p>" 
        },

        { // 2
            "q": "Em qual tabela do iptables são definidas as regras de NAT?",
            "a": [
                {"option": "filter",      "correct": false},
                {"option": "nat",     "correct": true},
                {"option": "mangle",      "correct": false},
                {"option": "forward",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> nat</p>" 
        },

        { // 3
            "q": "De que forma todos os pacotes chegando a máquina local podem ser bloqueados?",
            "a": [
                {"option": "iptables -P INPUT -j DROP",      "correct": false},
                {"option": "iptables -P INPUT DROP",     "correct": true},
                {"option": "iptables -I INPUT DROP",      "correct": false},
                {"option": "iptables -F INPUT",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> iptables -P INPUT DROP</p>" 
        },

        { // 4
            "q": "O comando iptables -t nat -A PREROUTING -p tcp --dport 80 -j ______ --to-destination 192.168.2.2:80 redireciona as conexões para a porta 80 da máquina local para a porta 80 da máquina 192.168.2.2.",
            "a": [
                {"option": "dnat",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 5
            "q": "O comando _______ é utilizado para ativar as regras salvas com o comando iptables-save",
            "a": [
                {"option": "iptables-restore",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 6
            "q": "Na configuraçoa do vsftpd, qual opção libera a gravação de arquivos em sessões anônimas?",
            "a": [
                {"option": "anon_write_enable=YES",      "correct": false},
                {"option": "anon_rw_enable=YES",     "correct": false},
                {"option": "anon_login_enable=YES",      "correct": false},
                {"option": "anon_upload_enable=YES",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> anon_upload_enable=YES</p>" 
        },

        { // 7
            "q": "Na opção ___________ no arquivo /etc/ssh/sshd_conf bloqueia o login direto via ssh para o usuário root.",
            "a": [
                {"option": "permitrootlogin no",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 8
            "q": "Qual é a finalidade do comando ssh-agent?",
            "a": [
                {"option": "Armazenar a autorização de acesso a chave do usuário.",      "correct": true},
                {"option": "Reestabelecer uma conexão ssh perdida",     "correct": false},
                {"option": "Gerar a chave criptográfica pública.",      "correct": false},
                {"option": "Gerar a chave criptgráfica privada",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> Armazenar a autorizaçao de acesso a chave do usuário</p>" 
        },

        { // 9
            "q": "O __________ deve ser utilizado pelo inetd para consultar as regras de TCP Wrapper e liberar a solicitação de acesso a um serviço. Informe apenas o nome, sem o caminho.",
            "a": [
                {"option": "tcpd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 10 
            "q": "Quais das referências a seguir informam sobre falhas em sistemas e alertas de segurança? Marque todas as corretas.",
            "a": [
                {"option": "Cert",      "correct": true},
                {"option": "IANA",     "correct": false},
                {"option": "Bugtraq",      "correct": true},
                {"option": "TCP Wrapper",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> Cert Bugtraq</p>" 
        },

    // 213--------------------------------------------------------------------------------------------------------
    // do livro Luciano Antonio Siqueira

        { // 1
            "q": "Durante a inicialização do sistema, o sistema trava logo após o kernel invocar o comando init. Das listadas, qual a causa mais provável para a falha?",
            "a": [
                {"option": "O kernel não foi corretamente instalado.",      "correct": false},
                {"option": "O Grub não pôde encontrar o kernel.",     "correct": false},
                {"option": "O teclado não foi localizado",      "correct": false},
                {"option": "O arquivo /etc/inittab foi editado incorretamente",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> O arquivo /etc/inittab foi editado incorretamente</p>" 
        },

        { // 2
            "q": "Em caso de falha na execução de um serviço de interrompa o carregamento, qual procedimento deve ser tomado?",
            "a": [
                {"option": "Formatar o disco e reinstalar o sistema",      "correct": false},
                {"option": "Pressionar [F1] durante o carregamento do sistema",     "correct": false},
                {"option": "Aguardar até que o sistema se atualize",      "correct": false},
                {"option": "Entrar no runlevel 1 e corrigir o script do serviço em questão",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> Entrar no runlevel 1 e corrigir o script do serviço em questao</p>" 
        },

        { // 3
            "q": "Dos comandos abaixo, quais podem ser utilizados para inspecionar os itens de harware do computador? Marque todas as opções corretas.",
            "a": [
                {"option": "lsdev",      "correct": true},
                {"option": "modprobe",     "correct": false},
                {"option": "lspci",      "correct": true},
                {"option": "strace",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>lsdev lspci</p>" 
        },

        { // 4
            "q": "Após compilar e instalar o kernel versão 2.6.32, onde deverão ser localizados seus respectivos módulos?",
            "a": [
                {"option": "/usr/lib/2.6.32",      "correct": false},
                {"option": "/lib/2.6.32",     "correct": false},
                {"option": "/lib/modules/2.6.32",      "correct": true},
                {"option": "/lib/2.6.32/modules",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> /lib/modules/2.6.32</p>" 
        },

        { // 5
            "q": "Qual comando é utilizado para rastrear os recursos utilizados por um programa? Marque todas as alternativas corretas.",
            "a": [
                {"option": "pidof",      "correct": false},
                {"option": "ps",     "correct": false},
                {"option": "lsof",      "correct": true},
                {"option": "strace",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> lsof strace</p>" 
        },

        { // 6 
            "q": "A variável global PATH incorretamente definida deve ser c orrigida no arquivo ________. Informe o caminho completo.",
            "a": [
                {"option": "/etc/profile",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },


        { // 7 
            "q": "Em qual arquivo ficam os caminhos para os diretórios com bibliotecas compartilhadas?",
            "a": [
                {"option": "/etc/ld.so.cache",      "correct": false},
                {"option": "/etc/ld.so.conf",     "correct": true},
                {"option": "/etc/ldconfig",      "correct": false},
                {"option": "/etc/ldd",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> /etc/ld.so.conf</p>" 
        },

         { // 8
            "q": "Após alterar o conteúdo do arquivo /etc/ld.so.conf, qual comando deve ser executado?",
            "a": [
                {"option": "ldd",      "correct": false},
                {"option": "ldconfig",     "correct": true},
                {"option": "update",      "correct": false},
                {"option": "lilo",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> ldconfig</p>" 
        },

        { // 9
            "q": "Para evitar a corrupção dos dados, o comando _________ deve ser utilizado para editar o arquivo /etc/passwd",
            "a": [
                {"option": "vipw",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 10 
            "q": "Configurações de tempo de execução feitas pelo programa sysctl podem ser armazenadas no arquivo ___________. Informe o caminho completo.",
            "a": [
                {"option": "/etc/sysctl.conf",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

// ------------------------------------------- andré sato filho
// 207 ----------------------------------------------------------------------

        { // 1
            "q": "Como especificar em seu arquivo de zona de DNS que é zona administrada por hostmaster@foo.com?",
            "a": [
                {"option": "Você pode especificar isso quando registrar o domínio",      "correct": false},
                {"option": "Coloque 'hostmaster.foo.com' no segundo campo do registro SOA",     "correct": true},
                {"option": "Cria um registro 'MAIL TO hostmaster@foo.com' no arquivo de zona.",      "correct": false},
                {"option": "Coque 'hostmaster@foo.com no segundo campo do registro SOA",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Coloque 'hostmaster.foo.com' no segundo campo do registro SOA</p>" 
        },

        { // 2
            "q": "Seu sistema é um servidor primário de nomes para o domínio example.com. Devido ao crescimento da sua rede, você deve delegar autoridade para engr.example.com ao host server.engr.example.com. Qual das seguintes linhas deverá ser adicionada ao arquivo de zona?",
            "a": [
                {"option": "engr IN PTR server.engr.example.com.",      "correct": false},
                {"option": "server IN NS server.engr.example.com.",     "correct": false},
                {"option": "server IN NIS server.engr.example.com.",      "correct": true},
                {"option": "server IN PTR engr.example.com.",     "correct": false},
                {"option": "server IN A engr.example.com.",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>server IN NIS server.engr.example.com.</p>" 
        },

        { // 3
            "q": "O que você usa para gerar uma chave RSA para que um DNS consiga transferir zona de um primário?",
            "a": [
                {"option": "Você pode usar as chaves criadas pelo ssh-keygen",      "correct": false},
                {"option": "dnskeygen",     "correct": true},
                {"option": "named -keygen",      "correct": false},
                {"option": "Você pode usar PGP -generated chaves.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>dnskeygen</p>" 
        },

        { // 4
            "q": "Você é o servidor primário para uma corporação internacional. Você acha que o seu cache DNS está utilizando 1 GB do total de memória do sistema e isso está afetando seriamente o sistema. Qual é a diretiva correta para limitar a quantidade de memória para 256 MB?",
            "a": [
                {"option": "memlimit {256M};",      "correct": false},
                {"option": "datasize {256};",     "correct": true},
                {"option": "cache-limit {(246* 1024)};",      "correct": false},
                {"option": "cachesize {256;};",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>datasize {256};</p>" 
        },

        { // 5
            "q": "Você foi convidado para configurar um servidor DNS para seu departamento. Você deseja permitir que o servidor DNS princpal da empresa atualize o seu. Qual a entrada correta em named.conf?",
            "a": [
                {"option": "allow-transfer { IP_ADDRESS; };",      "correct": true},
                {"option": "allow-update { IP_ADDRESS; };",      "correct": false},
                {"option": "allow-access { IP_ADDRESS; };",      "correct": false},
                {"option": "allow-access { IP_ADDRESS; };",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>allow-transfer { IP_ADDRESS; };</p>" 
        },

        { // 6
            "q": "Qual porta deverá ser aberta no firewall para permitir a um DNS server receber consultas?",
            "a": [
                {"option": "53",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 7 
            "q": "De acordo com a configuração a seguir, qual é o endereço do email do administrador para este domínio?<br><br>$TTL 86400<br>$ORIGIN dominio.com<br>@ IN SOA master.dominio.com. hostmaster.dominio.com (<br>20101220<br>10800<br>3600<br>604800<br>86400)<br>",
            "a": [
                {"option": "hostmaster@dominio.com",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 8
            "q": "Quais dessas formas podem ser usadas para permitir apenas acesso a um servidor de DNS específico networks/hosts?",
            "a": [
                {"option": "Usar o limit { ...; }; declarado no arquivo de configuração do named.",      "correct": false},
                {"option": "Usar o allow-query { ...; }; declarado no arquivo de configuração do named.",      "correct": true},
                {"option": "Usar o answer only { ...; }; declarado no arquivo de configuração do named.",      "correct": false},
                {"option": "Usar o answer { ...; }; declarado no arquivo de configuração do named.",      "correct": false},
                {"option": "Usar o query Access { ...; }; declarado no arquivo de configuração do named.",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Usar o allow-query { ...; }; declarado no arquivo de configuração do named.</p>" 
        },

        { // 9
            "q": "De acordo com a configuração do bind exemplificada, qual das seguintes opções é verdadeira?<br><br> options {<br>directory '/var/named';<br>allow-query { any; };<br>allow-recursion { 127.0.0.1; 10.0.0.0/24; };<br>forwarders { 192.168.0.4; };<br>forward firs;<br>};<br>zone '.' {<br>type hint;<br> file named.ca;<br>};",
            "a": [
                {"option": "Qualquer host, de qualquer rede, poderá usar este servidor DNS principal.",      "correct": false},
                {"option": "Se o servidor não souber a resposta de uma consulta, ele enviará a consulta para o DNS 192.168.0.4.",     "correct": true},
                {"option": "Se o servidor não sourber a resposta de uma consulta, ele enviará a consulta para os root servers.",      "correct": false},
                {"option": "Hosts na rede 10.0.0.0/24 serão capazes de transferir zonas.",     "correct": false},
                {"option": "Se o servidor não souber a resposta de uma consulta, ele enviará uma consulta recursiva para 192.168.0.4, e se isso falhar, ele retornará uma falha.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Se o servidor não souber a resposta de uma consulta, ele enviará a consulta para o DNS 192.168.0.4.</p>" 
        },

        { // 10
            "q": "Qual dessas maneiras seria uma forma simples de configurar o BIND para retornar um número diferente de versões para consultas?",
            "a": [
                {"option": "Compilar o BIND com a opção -blur-version=my version.",      "correct": false},
                {"option": "Configure verison-string 'versão' no arquivo de configuração do BIND.",     "correct": false},
                {"option": "Configure version 'versão' no arquivo de configuração do BIND.",      "correct": true},
                {"option": "Configure version-bind 'versão' no arquivo de configuração do BIND.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Configure version 'versão' no arquivo de configuração do BIND.</p>" 
        },

        { // 11
            "q": "Realizando uma consulta reversa DNS com o dig, retorna o resultado a seguir:<br>;; QUESTION SESSION:<br>;5.123.168.192.in-addr.arpa. IN PRT<br><br>;; ANSWER SECTION:<br>5.123.168.192.1in-addr.arpa. 600 IN PTR lunuserv.example.net<br>.123.168.192.in-addr.arpa.<br>;; AUTHORITY SECTION:<br>123.168.192.in-addr.arpa.600 IN NS linuserv.example.net.<br><br>;; ADDITIONAL SECTION:<br>linuserv.example.net.600 IN A 192.168.123.5<br><br>O que pode estar errado?",
            "a": [
                {"option": "Nada, parece que está tudo ok.",      "correct": false},
                {"option": "Não há '.' após linuserv.example.net no registro PTR na zona de pesquisa direta.",     "correct": false},
                {"option": "Não há '.' após linuserv no registro PTR na zona de presquisa direta.",      "correct": false},
                {"option": "Não há '.' paós linuserv.example.net no registro PTR na zona de pesquisa reversa.",      "correct": false},
                {"option": "Há um '.' na definição NS na zona de pesquisa reversa que deverá ser removido.",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Há um '.' na definição NS na zona de pesquisa reversa que deverá ser removido.</p>" 
        },

        { // 12
            "q": "Qual o propósito do registro PTR?",
            "a": [
                {"option": "Providenciar resolução de nome para IP.",      "correct": false},
                {"option": "Providenciar resolução de IP para nome.",     "correct": true},
                {"option": "Direcionar email para um específico host.",      "correct": false},
                {"option": "Providenciar informações adicionais.",      "correct": false},
                {"option": "Direcionar clientes para outro servidor de nomes.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Providenciar resolução de IP para nome.</p>" 
        },

        { // 13
            "q": "DNSSEC é usado para qual finalidade?",
            "a": [
                {"option": "Criptografar consultas entre servidores de nomes.",      "correct": false},
                {"option": "Criptografar autenticação entre zonas de DNS.",     "correct": true},
                {"option": "Para o secundário fazer consultas para as zonas de DNS.",      "correct": false},
                {"option": "Tornar segura a seção de segurança de DNS.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Criptografar autenticação entre zonas de DNS.</p>" 
        },

        { // 14
            "q": "Qual tipo de registro DNS define para qual servidor(es) de email do domínio deverão ser enviadas as mensagens?",
            "a": [
                {"option": "MX",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 15
            "q": "uma diferença significativa entre chaves de host de zonas geradas pelo dnssec-keygen é:",
            "a": [
                {"option": "Não há diferença.",      "correct": false},
                {"option": "Ambos os arquivos de chaves da zona (.key/..private) contêm as chaves públicas e privada.",     "correct": true},
                {"option": "Ambos os arquivos de chaves de hosts (.key/.private) contêm as chaves públicas e privada.",      "correct": false},
                {"option": "Chaves de hosts sempre devem ser geradas se o DNSSEC é usado, chaves de zonas são opcionais ",     "correct": false},
                {"option": "Chaves de zonas sempre precisam ser geradas no caso delas serem usadas, chaves de hosts são opcionais.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Ambos os arquivos de chaves da zona (.key/..private) contêm as chaves públicas e privada.</p>" 
        },

        { // 16
            "q": "Em qual arquivo de configuração pode-se definir o uso (habilitar) de DNS seguro (DNSSEC) para a transferência de zonas?",
            "a": [
                {"option": "named.conf",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 17
            "q": "Qual dessas ferramentas pode fornecer mais informações sobre consultas DNS?",
            "a": [
                {"option": "dig",      "correct": true},
                {"option": "nslookup",     "correct": false},
                {"option": "host",      "correct": false},
                {"option": "named-checkconf",     "correct": false},
                {"option": "named-checkzone",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>dig</p>" 
        },

        { // 18
            "q": "Um servidor de email atualmente é chamado de fred, enquanto o registro MX primário aponta para mailhost.example.org. O que precisa ser feito para direcionar emails de example.org para o fred?",
            "a": [
                {"option": "Adicionar um registro A para o mailhost com endereço IP de fred.",      "correct": false},
                {"option": "Adicionar um registro CNAME de mailhost para fred.",     "correct": false},
                {"option": "Adicionar outro registro MX apontando para o IP de fred.",      "correct": true},
                {"option": "Adicionar um registro PTR de mailhost para fred.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Adicionar outro registro MX apontando para o IP de fred.</p>" 
        },

        { // 19
            "q": "Os usuários de uma rede local reclamam que a resolução de nomes é lenta. Digite o comando, sem o caminho ou opções, que exibirá o tempo para uma consulta DNS.",
            "a": [
                {"option": "dig",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 20 
            "q": "Para utilizar atualizações dinâmicas de DNS, o uso de TSIG é recomendado. Quais as duas opções verdadeiras sobre TSIG?",
            "a": [
                {"option": "TSIG é usado para criptografia de dados de zona.",      "correct": false},
                {"option": "TSIG é usado para iniciar um up-date de zona.",     "correct": false},
                {"option": "TSIG é usado somente em arquivos de zona.",     "correct": false},
                {"option": "TSIG é usado somente na configuração do servidor.",      "correct": true},
                {"option": "Servidores usando TSIG precisam estar em sincronia (fuso-horário).",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>TSIG é usado somente na configuração do servidor.</p>" 
        },


// 208 ----------------------------------------------------------------------

        { // 1
            "q": "Você está tentando deixar o Apache seguro após ter sucesso em configurá-lo e executá-lo num ambiente chroot. você está tentando executá-lo com um usuário não root, e verifica que o servidor httpd não inicia. Qual a causa mais provável?",
            "a": [
                {"option": "O Apache precisa iniciar como root para usar a porta 80.",      "correct": true},
                {"option": "O Apache não consegue ler o index.html porque ele não foi movido para o diretório do chroot.",     "correct": false},
                {"option": "A linha de LoadModule para o mod_chroot precisa ser adicionada em httpd.conf.",      "correct": false},
                {"option": "O Apache requer uma diretiva de Virtual-Host, quando executando num ambiente chroot.",      "correct": false},
                {"option": "A configuração mod_chroot precisa do caminho absoluto para o ambiente chroot.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>O Apache precisa iniciar como root para usar a porta 80.</p>" 
        },

        { // 2
            "q": "Seu website está exibindo um grande número de arquivos não encontrados no log, como erros 404. Você quer selecionar tais visitantes e enviá-los para um arquivo específico. A diretiva do Apache que deverá ser usada é:",
            "a": [
                {"option": "Errorbounce",      "correct": false},
                {"option": "Redirect",     "correct": false},
                {"option": "MissingPage",      "correct": false},
                {"option": "ErrorDocument",      "correct": true},
                {"option": "Bounceuser",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>ErrorDocument</p>" 
        },

        { // 3
            "q": "Qual o nome da ferramenta do Apache para criação e manutenção de arquivos de autenticação de usuários?",
            "a": [
                {"option": "htpasswd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 4
            "q": "Quais das seguintes diretivas instruem o Apache a responder requisições na porta 8080 (selecione duas)?",
            "a": [
                {"option": "Active 8080",      "correct": false},
                {"option": "Port 8080",     "correct": true},
                {"option": "Bind 8080",      "correct": false},
                {"option": "Listen 8080",      "correct": true},
                {"option": "Remap 80 8080",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Listen 8080 Port 8080</p>" 
        },

        { // 5
            "q": "Você está executando um DNS e um HTTP Server. Você vê mensagens reclamando que o Apache não consegue resolver qualquer entrada de Virtual Host quando o sistema é iniciado. O que pode estar causando isso?",
            "a": [
                {"option": "A rede ainda não está configurada, então o Apache não é capaz de verificar o DNS.",      "correct": true},
                {"option": "A rede está configurada, mas o servidor DNS ainda não está sendo executado, logo o Apache não consegue fazer a verificação de nomes.",     "correct": false},
                {"option": "A diretiva Virtual Hosts para os hosts está incorreta no arquivo de configuração do Apache",      "correct": false},
                {"option": "O processo do Apache morreu antes do Virtual HOst deve estar propriamente configurado.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>A rede ainda não está configurada, então o Apache não é capaz de verificar o DNS.</p>" 
        },

        { // 6 
            "q": "Visando evitar a paralisação desnecessária do Apache após a alteração do arquivo de configuração, como podemos proceder para verificar a sintaxe deste arquivo?",
            "a": [
                {"option": "http-check",      "correct": false},
                {"option": "apachectl verify",      "correct": false},
                {"option": "Executar em ambiente de teste o httpd com a configuração do arquivo alterado.",     "correct": false},
                {"option": "httpd-reload.",      "correct": false},
                {"option": "apachectl configtest",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>apachectl configtest</p>" 
        },

        { // 7
            "q": "Quais das diretivas a seguir permitem ao Apache usar um arquivo de configuração externo passado pela diretiva AccessFileName?",
            "a": [
                {"option": "AllowExternalConfig",      "correct": false},
                {"option": "AllowAccessFile",     "correct": false},
                {"option": "AllowConfig",      "correct": false},
                {"option": "IncludeAccessFile",      "correct": false},
                {"option": "AllowOverride",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>AllowOverride</p>" 
        },

        { // 8
            "q": "Escreve a diretiva de configuração do Apache que define onde os arquivos de Log dfe Erros serão armazenados.",
            "a": [
                {"option": "ErrorLog",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 9 
            "q": "Qual arquivo de sistema, e visualizado pelo cliente, quando acessar, por exemplo, [http://servidor/~joao/index.html] e a diretiva no servidor 'UserDir site/html' está habilitado no Servidor? Dado o usuário joao e seu diretório pessoal em /home, informe o caminho completo do arquivo:",
            "a": [
                {"option": "/home/joao/site/html/index.html",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },


        { // 10 
            "q": "Qual diretiva do Apache é usada para configurar o diretório principal das páginas?",
            "a": [
                {"option": "ServerRoot",      "correct": false},
                {"option": "UserDir",     "correct": false},
                {"option": "Location",     "correct": false},
                {"option": "DirectoryIndex",      "correct": false},
                {"option": "DocumentRoot",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>DocumentRoot</p>" 
        },

        { // 11
            "q": "Quando o Apache é configurado para usar nomes baseados em VirtualHosts",
            "a": [
                {"option": "Também é necessário configurar diferentes endereços IP para cada host virtual.",      "correct": false},
                {"option": "A diretiva Listen é ignorada pelo servidor.",     "correct": false},
                {"option": "Ele inicia múltiplos daemons (um para cada host virtual).",     "correct": false},
                {"option": "É também necessário criar um bloco de configurações para Virtual Host.",      "correct": true},
                {"option": "Somente a diretiva ServerName e DocumentRoot podem ser usadas dentro de um bloco.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>É também necessário criar um bloco de configurações para Virtual Host.</p>" 
        },

        { // 12
            "q": "Existe uma área restrita no site Apache que exige que os usuários sejam autenticados a partir de um arquivo em /srv/www/security/site-passwd. Qual comando é usado para alterar a senha de usuários existentes, sem que ocorram perdas de dados, quando a autenticação básica está sendo usada?",
            "a": [
                {"option": "htpasswd -c /srv/www/security/site passwd user",      "correct": false},
                {"option": "htpasswd -m /srv/www/security/site-passwd user",      "correct": true},
                {"option": "htpasswd -n /srv/www/security/site-passwd user",      "correct": false},
                {"option": "htpasswd -D /srv/www/security/site-passwd user",      "correct": false},
                {"option": "Nenhuma das alternativas",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>htpasswd -m /srv/www/security/site-passwd user</p>" 
        },

        { // 13
            "q": "Qual das afirmações sobre as diretivas Alias e Redirect no arquivo de configuração do Apache são verdadeiras?",
            "a": [
                {"option": "Redirect é tratado do lado do cliente.",      "correct": true},
                {"option": "Alias é tratado do lado do servidor",     "correct": true},
                {"option": "Alias nãoi é uma diretiva de configuração válida.",      "correct": false},
                {"option": "Redirect trabalha com expressões regulares.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Redirect é tratado do lado do cliente. Alias é tratado do lado do servidor</p>" 
        },

        { // 14
            "q": "Baseando-se no arquivo /srv/www/default/html/restricted/.htaccess, e considerando que o DocumentRoot está configurado em /srv/www/default/html, quais duas opções são verdadeiras?<br><br>AuthType Basic<br>AuthUserFile /srv/www/security/site-passwd",
            "a": [
                {"option": "O Apache irá permitir acesso ao http://server/restricted somente para usuários autenticados conectados de clientes na rede 10.1.2.0/24.",      "correct": false},
                {"option": "Esta configuração somente irá funcionar se o diretório /srv/www/default/restricted estiver configuragado com AllowOverride AuthConfig Limit.",     "correct": true},
                {"option": "O Apache irá requisitar autenticação para qualquer cliente que solicitar conexão para http://server/restricted.",     "correct": false},
                {"option": "Usuários conectados da rede 10.1.2.0/24 não necessitarão autenticar para acessar http://server/restricted",      "correct": true},
                {"option": "A diretiva poderia ser removida do Apache que não alteraria o comportamento para este diretório",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Esta configuração somente irá funcionar se o diretório /srv/www/default/restricted estiver configuragado com AllowOverride AuthConfig Limit.</p>" 
        },

        { // 15
            "q": "Quais das seguintes linhas no arquivo de configuração do Apache permitem apenas clientes com certificados?",
            "a": [
                {"option": "SSLCA conf/ca.crt",      "correct": false},
                {"option": "AuthType ssl",     "correct": false},
                {"option": "ifModules libexec/ssl.c",     "correct": false},
                {"option": "SSLRequire",      "correct": false},
                {"option": "SSLVerifyClient Require",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>SSLVerifyClient Require</p>" 
        },

        { // 16
            "q": "Verifique as linhas a seguir:<br><br>1. ServerAdmin admin9@server.example.org<br>2. DocumentRoot /home/http/admin<br>3. ServerName admin.server.example.org<br>4. DirectoryIndex index.php default.php<br>5. ErroLog logs/admin.server.example.org.erro_log<br>6. CustomLog logs/admin.server.example.org.access_log common<br><br>Quais das linhas estão com a sintaxe incorreta?",
            "a": [
                {"option": "1",      "correct": false},
                {"option": "1 e 4",     "correct": false},
                {"option": "1, 4 e 6",      "correct": false},
                {"option": "1 e 5",      "correct": false},
                {"option": "Nenhuma. Todas as opções são válidas",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Nenhuma. Todas as opções são válidas</p>" 
        },

        { // 17
            "q": "Usuários de um recém-instalado servidor de Proxy Cache Squid estão reclamando que após acessar um determinado site que solicita nome de usuário e senha individuais, o sistema do site retorna erro para outros usuários conectados. Porém, quando o Proxy é desativado do browser, tudo funciona perfeitamente. Qual a causa mais provável desse programa?",
            "a": [
                {"option": "As configurações de Proxy do browser estão incorretas.",      "correct": false},
                {"option": "O Proxy está fazendo cache de cookies.",     "correct": false},
                {"option": "O Proxy não é compatível com o website.",      "correct": false},
                {"option": "O cache do Proxy não está atualizando e deverá ser apagado.",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>O cache do Proxy não está atualizando e deverá ser apagado.</p>" 
        },

        { // 18
            "q": "Ao se configurar um Proxy Server Squid, qual seria a razão para limitar o valor de entrada com reply_body_max_size?",
            "a": [
                {"option": "Previnir sobrecarga no cache_men.",      "correct": false},
                {"option": "Previnir usuários de fazer streaming de arquivos, vídeos ou áudios muito grandes.",     "correct": false},
                {"option": "Previnir ataques na porta de acesso do servidor Proxy.",      "correct": false},
                {"option": "Previnir usuários de fazer downloads de arquivos acima de um determinado tamanho.",      "correct": true},
                {"option": "Definir limite para o número de solicitações de um único site, por um único usuário.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Previnir usuários de fazer downloads de arquivos acima de um determinado tamanho.</p>" 
        },

        { // 19
            "q": "A lista a seguir é uma entrada do arquivo de configuração do Squid:<br><br>[...]<br>acl all src 0.0.0.0/0.0.0.0<br>acl manager proto cache_object<br>acl localhost src 127.0.0.1/255.255.255.255<br>acl to_localhost dst 127.0.0.0/8<br>acl SSL_ports port 443<br>acl Safe_ports port 80 443 1025-65535<br>acl CONNECT method CONNECT<br>acl localnet src 10.0.0.0/24<br><br>http_access allow manager localhost<br>http_access deny manager<br>http_access deny !Safe_ports<br>http_access deny CONNECT !Safe_ports<br>http_access allow localnet<br>[...]<br><br>Quais das opções são verdadeiras?",
            "a": [
                {"option": "Usuários conectados de localhost estarão aptos a acessar websites sobre o Proxy.",      "correct": false},
                {"option": "É necessário incluir, no fim das regras, uma regra http_access negando acesso para todos.",     "correct": false},
                {"option": "É possível usar este Proxy para acessar sites SSL utilizando qualquer porta.",      "correct": false},
                {"option": "Este Proxy não pode ser usado para acessar servidores FTP na porta padrão.",     "correct": true},
                {"option": "Este Proxy está mal configurado e nenhum usuário estará apto a acessar sites através dele.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Este Proxy não pode ser usado para acessar servidores FTP na porta padrão.</p>" 
        },

        { // 20 
            "q": "Um gateway de internet conecta clientes na internet usando um Proxy Squid. Somente clientes da rede 192.169.1.0/24 deveriam estar habilitados a usar o Proxy. Qual das seguintes opções de configuração está correta?",
            "a": [
                {"option": "acl local src 192.168.1.0/24 http_allow local",      "correct": false},
                {"option": "acl local src 192.168.1.0/24 http_access allow local",      "correct": true},
                {"option": "acl local src 192.168.1.0/24 http access allow local",      "correct": false},
                {"option": "acl local src 192.168.1.0/24 http_access_allow=local",      "correct": false},
                {"option": "acl local src 192.168.1.0/24 httpd local allow",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>acl local src 192.168.1.0/24 http_access allow local</p>" 
        },

        { // 21 
            "q": "Qual diretiva de configuração do Squid permite usar um método de autenticação?",
            "a": [
                {"option": "auth_param",      "correct": true},
                {"option": "auth_method",     "correct": false},
                {"option": "auth_program",      "correct": false},
                {"option": "auth_mechanism",      "correct": false},
                {"option": "proxy_auth",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>auth_param</p>" 
        },

        { // 22 
            "q": "Qual das opções é remendada para reduzir o consumo de recursos em disco pelo Squid?",
            "a": [
                {"option": "Desabilitar o uso de lista de acesso.",      "correct": false},
                {"option": "Reduzir o tamanho do cache_dir no arquivo de configuração.",     "correct": false},
                {"option": "Rotacionar logs regularmente.",      "correct": false},
                {"option": "Desabilitar nomes qualidades (FQDN) nos logs.",      "correct": true},
                {"option": "Reduzir o número de processos filhos na configuraçào do arquiv, para quando da inicialização do Proxy.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Desabilitar nomes qualidades (FQDN) nos logs.</p>" 
        },

        { // 23 
            "q": "No arquvio /var/squid/url_blacklist contém uma lista de URLS não permitidas para os usuários. Qual a entrada correta no arquivo de configuraçào do Squid para a criação de uma acl - chamada blacklist - baseada neste arquivo?",
            "a": [
                {"option": "acl blacklist urlpath_regex /var/squid/url_blacklist",      "correct": false},
                {"option": "acl blacklist file /var/squid/url_blacklist",     "correct": false},
                {"option": "acl blacklist '/var/squid/url_blacklist'",      "correct": false},
                {"option": "acl blacklist urlpath_regex '/var/squid/url_blacklist'",      "correct": true},
                {"option": "acl urlpath_regex blacklist '/var/squid/url_blacklist'",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>acl blacklist urlpath_regex '/var/squid/url_blacklist</p>" 
        },

        { // 24 
            "q": "Qual tipo de acl no arquivo de configuração do Squid é usado com o propósito de autenticação?",
            "a": [
                {"option": "proxyAuth",      "correct": false},
                {"option": "proxy_auth",      "correct": true},
                {"option": "proxy_passwd",     "correct": false},
                {"option": "auth",      "correct": false},
                {"option": "auth_required",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>proxy_auth</p>" 
        },

        { // 25
            "q": "Qual das seguintes opções, quando configurada no squid, NÃO é uma acl válida?",
            "a": [
                {"option": "src",      "correct": false},
                {"option": "source",     "correct": true},
                {"option": "dstdomain",      "correct": false},
                {"option": "url_regex",      "correct": false},
                {"option": "time",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>source</p>" 
        },

        { // 26
            "q": "Um servidor web está lidando com aproximadamente 200 conexões simultâneas em uso nomral, mas quando ocorre um pico de atividade, o desempenho dele cai tornando-o lento. Qual das diretivas no arquivo de configuração precisa ser ajustada?",
            "a": [
                {"option": "MinSpareServers & MaxSpareServers",      "correct": false},
                {"option": "MinSpareServers, MaxSpareServers, StartServers & MaxClients",     "correct": true},
                {"option": "MinServers, MaxServers & MaxClients.",      "correct": false},
                {"option": "MinSpareServers, MaxSpareServers, StartServers, MaxClients & KeepAlive",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>MinSpareServers, MaxSpareServers, StartServers & MaxClients</p>" 
        },

        { // 27
            "q": "Uma acl chamada sales_net precisa permitir acesso a internet em horários especificados em uma para uma acl chamada sales_time. Qual das opções está correta?",
            "a": [
                {"option": "http_access deny sales_time sales_net",      "correct": false},
                {"option": "http_access allow sales_net sales_time",     "correct": true},
                {"option": "http_access allow sales_net and sales_times",      "correct": false},
                {"option": "allow http_access sales_net sales_time",      "correct": false},
                {"option": "http_access sales_net sales_time",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>http_access allow sales_net sales_time</p>" 
        },

        { // 28 
            "q": "Digite o comando completo de criação de um novo arquivo de senhas para autenticação básica http (/home/http/web_passwd> para o usuário john:",
            "a": [
                {"option": "htpasswd -c /home/http/web_passwd john",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },


        { // 29 
            "q": "Considerando o texto em uma configuração no httpd.conf, selecione as respostas corretas:<br><br>[Limit...]<br>AllowOverride AuthConfig Indexes<br>[/Limit]",
            "a": [
                {"option": "A diretiva indexes permite o uso de outras diretivas relacionadas ao index, como DirectoryIndex.",      "correct": false},
                {"option": "As diretivas - AuthConfig e Indexes - encontradas no arquivo. htaccess no servidor serão sobreescritas pelas mesmas diretivas encontradas no arquivo httpd.conf.",     "correct": false},
                {"option": "A configuração AuthConfig permite o uso de outras diretivas relacionadas à autenticação, como AuthType.",      "correct": false},
                {"option": "A configuração está incorreta, pois Indexes não podem ser usados com AllowOverride.",      "correct": false},
                {"option": "O trecho está incorreto, porque Allow override não pode ser usado em uma seção Location.",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>O trecho está incorreto, porque Allow override não pode ser usado em uma seção Location.</p>" 
        },

        { // 30 
            "q": "Usuários do seu website reclamam que em horário de pico, eles só conectam em seu servidor com extrema dificuldade e recebem erros de tempo esgotado. Você verificou no sistema que a carga é mínima, que existe memória suficiente e que a banda está disponível. Não há problemas de hardware e ainda não existem erros logados. Qual é a causa mais provável para o problema?",
            "a": [
                {"option": "O valor de 'MinSpareServers' é muito baixo.",      "correct": false},
                {"option": "O valor de 'MaxClients' é muito baixo.",     "correct": false},
                {"option": "O valor de 'MaxRequestPerChild' é muito baixo.",      "correct": false},
                {"option": "O valor de 'MaxKeepAliveRequest' é muito baixo.",      "correct": false},
                {"option": "O valor de 'StartServers' é muito baixo.",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>O valor de 'StartServers' é muito baixo.</p>" 
        },

// 209 ----------------------------------------------------------------------

        { // 1
            "q": "Qual dos seguintes parâmetros no arquivo smb.conf especifica um relacionament entre usuários Windows/SMB e usuários Linux/Unix?",
            "a": [
                {"option": "smb usernames = /etc/smbusers",      "correct": false},
                {"option": "username map = /etc/smbusers",     "correct": true},
                {"option": "map usernames = lowercase nospace",      "correct": false},
                {"option": "smb usernames = map to same unix name",      "correct": false},
                {"option": "usernames map = /etc/windows-usernames.map",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>username map = /etc/smbusers</p>" 
        },

        { // 2
            "q": "Para que alterações feitas no arquivo de configuração smb.conf de um Samba primário tenham efeito, o que é necessário fazer?",
            "a": [
                {"option": "Reiniciar os processos smbd e nmbd",      "correct": true},
                {"option": "Enviar um sinal HUP para os processos smbd e nmbd.",     "correct": false},
                {"option": "Nada.",      "correct": false},
                {"option": "Reiniciar o Sistema.",      "correct": false},
                {"option": "Reiniciar o subsistema do Samba.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Reiniciar os processos smbd e nmbd</p>" 
        },

        { // 3
            "q": "Para permitir que mais do que um usuário de cliente compartilhe uma conta no Servidor Samba, quais das seguintes diretivas de configurações podem ser usadas?",
            "a": [
                {"option": "users",      "correct": false},
                {"option": "force user",     "correct": false},
                {"option": "client map",      "correct": false},
                {"option": "map users",      "correct": false},
                {"option": "username map",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>username map</p>" 
        },

        { // 4
            "q": "Um usuário solicitou um compartilhamento oculto denominado 'confidencial', similar ao Compartilhamento Administrativo do Windows. Como isso pode ser configurado?",
            "a": [
                {"option": "[ confidencial ]<br>Comment = hidden share<br>path = /srv/smb/hidden<br>write list = user<br>create mask = 0700<br>directory mask = 0700",      "correct": false},
                {"option": "[ $confidencial$ ]<br>Comment = hidden share<br>path = /srv/smb/hidden<br>write list = user<br>create mask = 0700<br>directory mask = 0700",      "correct": false},
                {"option": "[ $confidencial ]<br>Comment = hidden share<br>path = /srv/smb/hidden<br>write list = user<br>create mask = 0700<br>directory mask = 0700",      "correct": false},
                {"option": "[ %confidencial ]<br>Comment = hidden share<br>path = /srv/smb/hidden<br>write list = user<br>create mask = 0700<br>directory mask = 0700",      "correct": false},
                {"option": "[ confidencial$ ]<br>Comment = hidden share<br>path = /srv/smb/hidden<br>write list = user<br>create mask = 0700<br>directory mask = 0700",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>[ confidencial$ ]<br>Comment = hidden share<br>path = /srv/smb/hidden<br>write list = user<br>create mask = 0700<br>directory mask = 0700</p>" 
        },

        { // 5
            "q": "Como o Samba deve ser configurado para que pessoa verificar as senhas nos arquivos /etc/passwd e /etc/shadow?",
            "a": [
                {"option": "Configurar o parâmetro 'encrypt passwords = Yes' e 'password file = /etc/passwd'",      "correct": false},
                {"option": "Configurar o parâmetro 'encrypt passwords = Yes', 'password file = /etc/passwd' e 'password Algorithm = crypt'",      "correct": false},
                {"option": "Apagar o arquivo smbpasswd e criar um link simbólico para as senhas no arquivo shadow.",     "correct": false},
                {"option": "Não é possível para o Samba usar /etc/passwd e /etc/shadow",      "correct": true},
                {"option": "Executar o smbpasswd para converter /etc/passwd e /etc/shadow para o arquivo de senhas do Samba.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Não é possível para o Samba usar /etc/passwd e /etc/shadow</p>" 
        },

        { // 6
            "q": "O parâmetro do path não está configurado para um compartilhamento no smb.conf, o compartilhamento irá fazer referência para qual dos seguintes diretórios?",
            "a": [
                {"option": "/tmp",      "correct": false},
                {"option": "/var/spool/samba",     "correct": false},
                {"option": "~/.samba",      "correct": true},
                {"option": "/var/samba",      "correct": false},
                {"option": "/var/smb/tmp",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>~/.samba</p>" 
        },

        { // 7 
            "q": "Qual das seguintes opções é usada no arquivo de configuração do Samba para definir quais arquivos e diretórios são visíveis e acessíveis para o usuário?",
            "a": [
                {"option": "hide files",      "correct": false},
                {"option": "veto files",     "correct": true},
                {"option": "hide special files",      "correct": false},
                {"option": "hide dot files",      "correct": false},
                {"option": "mangle names",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>veto files</p>" 
        },

        { // 8
            "q": "O arquivo de configuração do Samba está usando o parâmetro 'read only = Yes'. Quais das opções são equivalentes?",
            "a": [
                {"option": "browsable = no",      "correct": false},
                {"option": "read write = no",      "correct": false},
                {"option": "writable = no",     "correct": true},
                {"option": "write only = no",      "correct": false},
                {"option": "write access = no",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>writable = no</p>" 
        },

        { // 9
            "q": "Qual comando pode ser usado para checar o arquivo de configuração do Samba?",
            "a": [
                {"option": "testconfig",      "correct": false},
                {"option": "testsmbconfig",     "correct": false},
                {"option": "smbtestcfg",      "correct": false},
                {"option": "smbtestparm",      "correct": false},
                {"option": "testparm",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>testparm</p>" 
        },

        { // 10
            "q": "Qual das seguintes opções é necessária para sincronizar a senha do Linux com as senhas do Samba, quando as senhas encriptografadas do Samba no arquivo smbpasswd forem alteradas?",
            "a": [
                {"option": "Nada, porque isto não é possível",      "correct": false},
                {"option": "Executar o netvamp regularmente para converter as senhas.",     "correct": false},
                {"option": "Executar o winbind -sync para sincronizar as senhas.",      "correct": false},
                {"option": "Adicionar unix password sync = Yes no smb.conf",      "correct": true},
                {"option": "Adicionar smb unix password = sync no smb.conf",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Adicionar unix password sync = Yes no smb.conf</p>" 
        },

        { // 11
            "q": "Um novo Servidor de Arquivos é membro de um domínio Windows chamado foo. Quais as duas opções de configurações irão permitir que membros grupo all do domínio possam ler, escrever e executar arquivos em /srv/smb/data?",
            "a": [
                {"option": "[ data ]<br>comment = data share<br>path = /srv/smb/data<br>write list = @foo+all<br>force group = @foo+all<br>create mask = 0550<br>directory mask = 0770",      "correct": false},
                {"option": "[ data ]<br>comment = data share<br>path = /srv/smb/data<br>write list = @foo+all<br>force group = @foo+all<br>create mask = 0770<br>directory mask = 0770",      "correct": true},
                {"option": "[ data ]<br>path = /srv/smb/data<br>write list = @foo+all<br>force group = @foo+all<br>create mask = 0770<br>directory mask = 0770",      "correct": true},
                {"option": "[ data ]<br>comment = data share<br>path = /srv/smb/data<br>write list = @foo+all<br>force group = @foo+all<br>directory mask = 0770",      "correct": false},
                {"option": "[ data ]<br>comment = data share<br>path = /srv/smb/data<br>write list = @foo+all<br>force group = all<br>create mask = 0550<br>directory mask = 0770",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>[ data ]<br>comment = data share<br>path = /srv/smb/data<br>write list = @foo+all<br>force group = @foo+all<br>create mask = 0770<br>directory mask = 0770</p>" 
        },

        { // 12
            "q": "Qual parâmetro no arquivo smb.conf pode fazer um compartilhamento ser oculto?",
            "a": [
                {"option": "browseable ou $",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 13
            "q": "Por padrão, qual arquivo do Samba usará para armazenar as senhas dos usuários (coloque apenas o nome do arquivo, sem o caminho)?",
            "a": [
                {"option": "smbpasswd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 14
            "q": "Como você pode procurar todas as opções que não foram usadas no smb.conf e estão habilitadas por padrão?",
            "a": [
                {"option": "testparm -v",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 15
            "q": "Você quer verificar como os compartilhamentos estão configurados para o Sistemas Windows. Qual dos seguintes comandos poderia ser usado para realizar esta tarefa?",
            "a": [
                {"option": "nmblookup",      "correct": false},
                {"option": "showshares",     "correct": false},
                {"option": "smbclient",      "correct": true},
                {"option": "smbstatus",      "correct": false},
                {"option": "listshares",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>smbclient</p>" 
        },

        { // 16
            "q": "Você quer montar em /data um sistema de arquivos de um Servidor NFS (srv1) que não tem suporte a locking. Qual das seguintes opções deveria ser usada?",
            "a": [
                {"option": "mount -a nfs",      "correct": false},
                {"option": "mount -o locking=off srv1:/data /mnt/data",     "correct": false},
                {"option": "mount -o nolocking srv1:/data /mnt/data",     "correct": false},
                {"option": "mount -o nolock srv1:/data /mnt/data",     "correct": true},
                {"option": "mount -o nolock/data@srv1 /mnt/data",     "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>mount -o nolock srv1:/data /mnt/data</p>" 
        },

        { // 17
            "q": "Para listar os sistemas de arquivos disponíveis em um Servidor NFS chamado 'castor', o comando _________ -e castor pode ser usado.",
            "a": [
                {"option": "showmount",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 18
            "q": "Quais dos seguintes daemons são necessários para executar um SErvidor NFS?",
            "a": [

                {"option": "Portmap",      "correct": true},
                {"option": "nfsiod",      "correct": false},
                {"option": "nfsd",     "correct": true},
                {"option": "xinetd",      "correct": false},
                {"option": "mountd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Portmap mountd</p>" 
        },

        { // 19
            "q": "Você adicionou um novo sistema de arquivos em /etc/exports, mas os usuários estão reclamando que eles ainda não estão recebendo a mensagem de 'permissão negada' quando eles tentam montar o novo sistema de arquivos. Qual das seguintes opções é a melhor solução para esse problema?",
            "a": [
                {"option": "Reiniciar o Servidor",      "correct": false},
                {"option": "Adicionar a opção (no_root_squash) na entrada que já existe no arquivo de configuração.",     "correct": false},
                {"option": "Reiniciar o NFS",     "correct": false},
                {"option": "Executar o comando exportfs -a",      "correct": true},
                {"option": "Executar o comando export -nfs",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Executar o comando exportfs -a</p>" 
        },

        { // 20
            "q": "Você precisa configurar um servidor NFS. Mas é necessário bloquear tudo, menos o acesso ao NFS. Qual das seguintes ações deveria ser feita para alcançar isso?",
            "a": [
                {"option": "Verificar se o xinetd está desligado",      "correct": false},
                {"option": "Colocar ALL:ALL' no arquivo /etc/hosts.deny e 'NFS:ALL' no arquivo hosts.allow.",     "correct": false},
                {"option": "Adicionar uma regra de ipchains para negar tudo que chega, exceto pacotes para o portmapper.",      "correct": false},
                {"option": "Colocar 'ALL:ALL' no arquivo hosts.deny e ' portmap:ALL' no arquivo hosts.allow.",      "correct": true},
                {"option": "Verificar se o m'odulo nfs-access est'a configurado no kernel e utilizar o comando 'nfs-ctl-allow' [RANGE DE IP] para liberar o acesso.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Colocar 'ALL:ALL' no arquivo hosts.deny e ' portmap:ALL' no arquivo hosts.allow.</p>" 
        },

        { // 21
            "q": "Quais das seguintes linhas de configura'c~ao irão exportar /usr/local/share para nfsclients como leitura e escrita, garantindo que todas as alterações sejam gravadas diretamente no disco?",
            "a": [
                {"option": "/usr/local/share nfsclient(rw)",      "correct": false},
                {"option": "nfsclient:/usr/local/share/:rw,sync",      "correct": false},
                {"option": "/usr/local/share nfsclient:rw:sync",     "correct": false},
                {"option": "/usr/local/share nfsclient(rw, sync)",      "correct": true},
                {"option": "nfsclient(rw, sync) /usr/local/share",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>/usr/local/share nfsclient(rw, sync)</p>" 
        },

        { // 22
            "q": "Em um Servidor NFS, os daemons portmap, nfsd e ________ oprecisam estar em execução.",
            "a": [
                {"option": "mountd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 23
            "q": "Como é possível habilitar autenticação kerberos com NFS?",
            "a": [
                {"option": "sec=krb5",      "correct": true},
                {"option": "nfs -k",     "correct": false},
                {"option": "nfsiod",      "correct": false},
                {"option": "nfsd -kerberos",     "correct": false},
                {"option": "portmap -k",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>sec=krb5</p>" 
        },

        { // 24
            "q": "Você alterou alguns sistemas de arquivos no Servidor NFS, mas os usuários ainda não conseguem acessar os arquivos. O que deve ser feito para resolver esse problema? Você terá que escolher 2 (duas) opções.",
            "a": [
                {"option": "exportfs -t",      "correct": false},
                {"option": "exportfs -a",      "correct": true},
                {"option": "exportfs -f",     "correct": false},
                {"option": "reiniciar o cliente",      "correct": false},
                {"option": "reiniciar o Daemon NFS",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>exportfs -a</p>" 
        },

        { // 25
            "q": "Você quer exportar um sistema de arquivo local em /data, e permitir acesso de leitura e escrita para todos os usuários no host A. Além disso, a conta do root deve ter acesso até o nível raiz. Todos os outros hosts deverão ter acesso de apenas leitura. Qual das seguintes opções no /etc/exports deverá ser usada?",
            "a": [
                {"option": "/data hostA(rw,no_root_squash) (ro)",      "correct": true},
                {"option": "/data hostA(allow_root) -ro",     "correct": false},
                {"option": "/data -ro,rw=hostA(root)",      "correct": false},
                {"option": "/data hostA=ew,root *=ro",      "correct": false},
                {"option": "/data hostA(rw,all_squash,anonid=0) @all(ro)",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>/data hostA(rw,no_root_squash) (ro)</p>" 
        },

        { // 26
            "q": "Quais as duas opçòes abaixo são opções válidas, em um arquivo /etc/exports?",
            "a": [
                {"option": "rw",      "correct": true},
                {"option": "ro",      "correct": true},
                {"option": "rootsquash",      "correct": false},
                {"option": "norootsquash",      "correct": false},
                {"option": "uid",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>rw ro</p>" 
        },

// 210 ----------------------------------------------------------------------

        { // 1
            "q": "Qual das seguintes opções pode ser passada para uma máquina cliente DHCP usando um DHCP Server?",
            "a": [
                {"option": "Configuraçòes de segurança do iptables",      "correct": false},
                {"option": "A tabela de roteamento",      "correct": false},
                {"option": "A máscara de sub-rede.",     "correct": true},
                {"option": "Servidor NIS",      "correct": false},
                {"option": "A ordem de resolução de nomes.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>A máscara de sub-rede.</p>" 
        },

        { // 2
            "q": "Você deseja atribuir endereços IP dinamicamente a partir de uma rede de classe C para os seus clientes bootp. O que você deve adicionar ao dhcpd.conf?",
            "a": [
                {"option": "bootp-dynamic 192.168.0.0/24",      "correct": false},
                {"option": "range dynamic bootp 192.168.0.2 192.168.0.255",      "correct": false},
                {"option": "range dynamic-bootp 192.168.0.2 192.168.0.255",     "correct": true},
                {"option": "assign range 192.168.0.0/24 bootp",      "correct": false},
                {"option": "bootp { range: 192.168.0.0/24; }",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>range dynamic-bootp 192.168.0.2 192.168.0.255</p>" 
        },

        { // 3
            "q": "Foi solicitada a alocação de um endereço IP específico e de um DNS específico via DHCP para um determinado cliente. Qual das seguintes linhas deverá ser adicionada para o host no dhcpd.conf?",
            "a": [
                {"option": "hardware use-mac-addr FF:FF:FF:FF:FF:FF; fixed-dns IP_ADDRESS; option domain-name-server DNS_IP;",      "correct": false},
                {"option": "hardware ethernet FF:FF:FF:FF:FF:FF; fixed-dns IP_ADDRESS; option domain-name-server DNS_IP;",      "correct": true},
                {"option": "hardware ethernet FF:FF:FF:FF:FF:FF; dns-server IP_ADDRESS; option domain-name-server DNS_IP;",      "correct": false},
                {"option": "hardware use-mac-addr FF:FF:FF:FF:FF:FF; default-dns IP_ADDRESS; option domain-name-server DNS_IP;",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>hardware ethernet FF:FF:FF:FF:FF:FF; fixed-dns IP_ADDRESS; option domain-name-server DNS_IP;</p>" 
        },

        { // 4
            "q": "Qual das seguintes opções podem ser passadas para um computador cliente DHCP via servidor DHCP?",
            "a": [
                {"option": "Nome de domínio NIS",      "correct": true},
                {"option": "A ordem de resolução de nomes no /etc/resolv.conf",      "correct": false},
                {"option": "A ordem de prioridade em /net/nsswitch",     "correct": false},
                {"option": "As configuração de segurança do iptables/ipchains.",      "correct": false},
                {"option": "O conteúdo do hosts.allow e hosts.deny",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Nome de domínio NIS</p>" 
        },

        { // 5
            "q": "Qual das seguintes sentenças é verdadeira sobre o ISC DHCP?",
            "a": [
                {"option": "Não pode ser configurado para atribuir endereços para cliente BOOTP.",      "correct": false},
                {"option": "Por padrão envia pacotes DHCPNAK para clientes que estiverem requisitando endereço de rede inapropriado.",     "correct": false},
                {"option": "Não pode ser usado para atribuir endereços para terminais X",      "correct": false},
                {"option": "Ele não pode ser configurado para atribuir endereços para clientes conhecidos.",      "correct": true},
                {"option": "Nenhuma das opções",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Ele não pode ser configurado para atribuir endereços para clientes conhecidos.</p>" 
        },

        { // 6 
            "q": "Escolha a opção do dhcpd.conf que define qual endereço(s) de DNS que será enviado via DHCP?",
            "a": [
                {"option": "domainname",      "correct": false},
                {"option": "domain-name-servers",     "correct": true},
                {"option": "domain-nameservers",      "correct": false},
                {"option": "domain-server",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>domain-name-servers</p>" 
        },

        { // 7 
            "q": "Um host chamado 'servidor' com um MAC address '08:00:2b:4c:59:23' deveria sempre receber o endereço IP 192.168.1.2 via DHCP. Qual das opções de configuração alcançou este objetivo?",
            "a": [
                {"option": "host servidor {<br>hardware-ethernet 08:00:2b:4c:59:23;<br>fixed-address 192.168.1.2;<br>}",      "correct": true},
                {"option": "host servidor {<br>mac=08:00:2b:4c:59:23;<br>ip=192.168.1.2;<br>}",      "correct": false},
                {"option": "host servidor 08:00:2b:4c:59:23 192.168.1.2",      "correct": false},
                {"option": "host servidor {<br>hardware ethernet 08:00:2b:4c:59:23;<br>fixed-address 192.168.1.2;<br>}",      "correct": false},
                {"option": "host servidor {<br>hardware-address 08:00:2b:4c:59:23;<br>fixed-ip 192.168.1.2;<br>}",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>host servidor {<br>hardware-ethernet 08:00:2b:4c:59:23;<br>fixed-address 192.168.1.2;<br>}</p>" 
        },

        { // 8
            "q": "De acordo com o arquivo dhcpd.conf, qual o nome do domínio que será utilizado pelos clientes, via DHCP, na rede 172.16.87.0/24?<br><br>default lease-time 1800;<br>default-lease-time 7200<br>option domain-name 'lpi.org';<br><br>subnet 172.16.87.0 netmask 255.255.255.0 {<br>range 172.16.87.128 172.16.87.254;<br>option broadcast-address 172.16.87.255;<br>option subnet-mask 255.255.255.0;<br>option domain-name-servers 172.16.87.1;<br>option domain-name 'lab.lpi.org';<br>}<br>subnet 172.16.88.0 netmask 255.255.255.0 {<br>range 172.16.88.128 172.16.88.254;<br>option broadcast-address 172.16.87.255;<br>option subnet-mask 255.255.255.0;<br>option domain-name-servers 172.16.88.1;<br>}",
            "a": [
                {"option": "lab.lpi.org",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 9
            "q": "Qual comando deveria fazer release do corrente endereço IP que foi adquirido via DHCP server?",
            "a": [
                {"option": "ipconfig /release",      "correct": false},
                {"option": "ifconfig releaseall",     "correct": false},
                {"option": "dhclient -r",      "correct": true},
                {"option": "ifconfig release",      "correct": false},
                {"option": "pump release",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>dhclient -r</p>" 
        },

        { // 10
            "q": "Qual daemon é requerido para que um cliente ethernet obtenha um endereço IP de um servidor central?",
            "a": [
                {"option": "dhcp",      "correct": false},
                {"option": "dhcpcd",     "correct": true},
                {"option": "bootpd",      "correct": false},
                {"option": "ethd",     "correct": false},
                {"option": "dhcpd",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>dhcpcd</p>" 
        },

        { // 11
            "q": "Uma rede tem muitas impressoras de rede conectadas, e elas deveriam obter endereços IP via DHCP. Qual informação de cada impressora é necessária para que elas obtenham sempre o mesmo IP quando usarem o DHCP Server?",
            "a": [
                {"option": "MAC Address.",      "correct": true},
                {"option": "Host name.",     "correct": false},
                {"option": "Número serial.",      "correct": false},
                {"option": "Endereço IP de fábrica.",      "correct": false},
                {"option": "Tipo de placa de rede embutida.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>MAC Address.</p>" 
        },

        { // 12
            "q": "Qual comando pode ser usado para alterar a senha para uma entrada LDAP?",
            "a": [
                {"option": "ldappasswd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 13
            "q": "Ao configurar um serviço LDAP para a empresa LPI Ltda, quais das seguintes entradas deveriam ser adicionadas no slapd.conf, na diretiva de seção de banco de dados, para configurar o rootdn, onde o common name é manager e o domínio é lpi.org?",
            "a": [
                {"option": "rootdn cn=manager dc=lpi dc=org",      "correct": false},
                {"option": "rootdn 'cn=manager,dc=lpi,dc=org'",     "correct": true},
                {"option": "rootdn cn=lpi,dc=org,dc=org,dc=manager",      "correct": false},
                {"option": "rootdn 'cn=lpi,dc=org,dc=manager'",      "correct": false},
                {"option": "rootdn 'cn=manager dc=lpi dc=org'",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>rootdn 'cn=manager,dc=lpi,dc=org'</p>" 
        },

        { // 14
            "q": "A autenticação baseada em novo servidor LDAP instalado não está funcionando corretamente. O arquivo /etc/pam.d/login inclui as configurações em questão. Qual delas está incorreta?",
            "a": [
                {"option": "password required /lib/security/pam_ldap.so",      "correct": false},
                {"option": "auth sufficient /lib/security/pam_ldap.so use_first_pass",     "correct": false},
                {"option": "account sufficient /lib/security/pam_ldap.so",      "correct": false},
                {"option": "password required /lib/security/pam_pwdb.so",      "correct": false},
                {"option": "auth required /lib/security/pam_ldap.so",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>auth required /lib/security/pam_ldap.so</p>" 
        },

        { // 15
            "q": "Qual a vantagem de usar autenticaçào SASL com OpenLDAP?",
            "a": [
                {"option": "Ela pode evitar a transmissão de senhas em texto puro pela rede.",      "correct": true},
                {"option": "Ela desabilita acesso anônimo para o servidor LDAP.",      "correct": false},
                {"option": "Ela permite a utilização de Access Control List.",     "correct": false},
                {"option": "Ela permite o uso de LDAP para autenticaçào os usuários do sistema através da rede.",      "correct": false},
                {"option": "Todas as opções acima.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Ela pode evitar a transmissão de senhas em texto puro pela rede.</p>" 
        },

        // { // 16
        //     "q": "Qual das seguintes sentenças é verdadeira se considerarmos o arquivo /etc/pam.d/login?<br>#%PAM-1.0<br>auth required /lib/security/pam_securetty.so<br>auth required /lib/security/pam_nologin.so<br>auth sufficient /lib/security/pam_unix.so shadow nullok md5 use_authok<br>auth required /lib/security/pam_ldap.so use_first_pass<br>account sufficient /lib/security/pam_unix.so<br>account required /lib/security/pam_ldap.so<br>password required /lib/pam/cracklib.so<br>password sufficient /lib/security/pam_unix.so nullok use_authok md5 shadown<br>password required /lib/security/pam_ldap.so use_first_pass<br>session optional /lib/security/pam_console.so<br>session sufficient /lib/security/pam_unix.so<br>session required /lib/security/pam_ldap.so",
        //     "a": [
        //         {"option": "Todos os usuários serão autenticados no diretório LDAP",      "correct": false},
        //         {"option": "Este é o único arquivo necessário para configurar a autenticação LDAP no Linux.",     "correct": false},
        //         {"option": "Apenas os usuários locais serão capazes de se logarem quando o arquivo /etc/nologin existir.",     "correct": false},
        //         {"option": "Os usuários comuns serão capazes de alterarem suas senhas para ficarem em branco.",      "correct": false},
        //         {"option": "Se as flags de controle de autenticação (auth) forem  alteradas para required, usuários locais não serão capazes de se logarem.",     "correct": false} 
        //     ],
        //     "correct": "<p><span>correto!</span></p>",
        //     "incorrect": "<p><span>Uhh no.</span></p>" 
        // },

        // { // 17
        //     "q": "No arquivo de configuração do PAM, qual das opções é verdadeira sobre a flag de controle required?",
        //     "a": [
        //         {"option": "Se o módulo retornar não sucesso, nenhum módulo do mesmo tipo será invocado.",      "correct": false},
        //         {"option": "Se ele retornar succeed, uma falha de controle é retornada à aplicação que o chamou.",     "correct": false},
        //         {"option": "Se ele retornar succeed, todos os módulos restantes do mesmo tipo serão invocados.",      "correct": false},
        //         {"option": "O módulo não é crítico, então, se ele retornar falha ou sucesso, não é importante.",     "correct": false} 
        //     ],
        //     "correct": "<p><span>correto!</span></p>",
        //     "incorrect": "<p><span>Uhh no.</span></p>" 
        // },

        { // 18
            "q": "O acesso remoto a um dispositivo CDRW em uma máquina na rede precisa ser restrito a um grupo selecionado de usuários. Selecione DUAS alternativas que possivelmente solucionariam esse problema:",
            "a": [
                {"option": "O acesso remoto a este dispositivo poderá ser permitido para usuários que alterarem a configuraçào do display manager, e permitido através do sudo que esses usuários façam login remotamente.",      "correct": false},
                {"option": "O módulo pam_console permite a configuraçào de acesso a esse dispositivo via console, incluindo acesso simultâneo por qualquer usuário.",     "correct": false},
                {"option": "O módulo pam_console pode ser usado para consotrlar o acesso a esse dispostivo via console, permitindo ou negando o acesso.",      "correct": true},
                {"option": "Se o módulo pam_console é usado, ele precisará checar com o required, porque é essencial para o uso de autenticaçào.",      "correct": true},
                {"option": "Através do arquivo de configuraçào do sudo é possível definir os usuários que terão o poder do usuário root, para que eles possam acessar o dispositivo. Além disso, é importante configurar o arquivo /etc/pam.d/su para garantir a segurança do serviço.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>O módulo pam_console pode ser usado para consotrlar o acesso a esse dispostivo via console, permitindo ou negando o acesso. Se o módulo pam_console é usado, ele precisará checar com o required, porque é essencial para o uso de autenticaçào.</p>" 
        },

        { // 19
            "q": "Selecione a alternativa que mostra corretamente uma forma de desabilitar o login dos usuários, exceto para o root.",
            "a": [
                {"option": "O uso do módulo pam_nologin justo com o serquivo de configuração /etc/login.",      "correct": false},
                {"option": "O uso do módulo pam_deny junto com o arquivo de configuração /etc/deny",     "correct": false},
                {"option": "O uso do módulo pam_pwdb junto com o arquivo de configuração /etc/pwdb.conf.",     "correct": false},
                {"option": "O uso do módulo pam_console junto com o arquivo de configuração /etc/security/console.perms.",      "correct": false},
                {"option": "O uso do módulo pam_nologin junto com o arquivo de configuração /etc/nologin",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>O uso do módulo pam_nologin junto com o arquivo de configuração /etc/nologin</p>" 
        },

        { // 20 
            "q": "No arquivo de configuração do PAM, um controle sufficient permite o acesso:",
            "a": [
                {"option": "Imediatamente após sucesso, se não houver falha em um controler anterior required ou requisite.",      "correct": false},
                {"option": "Imediatamente após sucesso, indepententemente dos outros controles",     "correct": false},
                {"option": "Depois de esperar se todos os outros controles retornaram sucesso.",      "correct": false},
                {"option": "Imediatamente, mas somente se o usuário for o root.",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Imediatamente, mas somente se o usuário for o root.</p>" 
        },

        { // 21
            "q": "Você instalou um serviço que autentica via PAM, e colocou a sua configuração em local apropriado em /etc/pam.d/servico, mas você não consegue autenticar. Qual a melhor local para verificar por problemas?",
            "a": [
                {"option": "Reinstalar libpam e reiniciar o sistema. A biblioteca não foi inicializada.",      "correct": false},
                {"option": "Remover /etc/pam.d/service, alterar as entradas de módulos do /etc/pam.d/other de pam_deny.o para pam_accept.o e tentar novamente.",     "correct": false},
                {"option": "Alterar todos os controles para optional e tentar novamente.",      "correct": false},
                {"option": "Verificar por pistas no arquivo de log, onde mensagens de auth e authpriv são logadas.",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Verificar por pistas no arquivo de log, onde mensagens de auth e authpriv são logadas.</p>" 
        },

        { // 22 
            "q": "Em uma configuração de arquivo PAM, qual a diferença entre os controles required e requisite?",
            "a": [
                {"option": "Nenhuma, ambos permitem ou negam acessos com base no resultado do teste.",      "correct": false},
                {"option": "Uma falha no controle required é executada imediatamente.",     "correct": false},
                {"option": "Uma falha no controle requisite é executada imediatamente, enquanto uma falha do required é ignorada até que outro módulo a valide.",      "correct": true},
                {"option": "Somente o controle requisite pode logar no syslog quando existirem falhas.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Uma falha no controle requisite é executada imediatamente, enquanto uma falha do required é ignorada até que outro módulo a valide.</p>" 
        },

        { // 23 
            "q": "Você está usando o PAM para autenticar sshd e quer habilitar senhas vazias para login. Qual opção você deve adicionar no arquivo /etc/pam.d/sshd para permitir isso?",
            "a": [
                {"option": "auth required /lib/security/pam_unix.so shadow nodelay passwd-no-req",      "correct": false},
                {"option": "auth required /lib/security/pam_unix.so shadow nodelay no-passwd",      "correct": false},
                {"option": "auth required /lib/security/pam_unix.so shadow nodelay nullpass",      "correct": false},
                {"option": "auth required /lib/security/pam_unix.so shadow nodelay nullok",      "correct": true},
                {"option": "auth required /lib/security/pam_unix.so shadow nodelay null-allowed",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>auth required /lib/security/pam_unix.so shadow nodelay nullok</p>" 
        },

        { // 24 
            "q": "Você usa o módulo pam_lastlog.so para se certificar de que uma entrada é feita no lastlog durante o logon. Em que tipo de gerenciamento de controle deverá o módulo ser listado?",
            "a": [
                {"option": "auth",      "correct": false},
                {"option": "account",     "correct": false},
                {"option": "password",      "correct": false},
                {"option": "session",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>session</p>" 
        },

        { // 25 
            "q": "Em qual diretório os módulos pam são armazenados?",
            "a": [
                {"option": "/lib/security",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 26 
            "q": "Qual das seguintes opções é verdadeira, quando um servidor usa autenticação PAM e ambos /etc/pam.conf e /etc/pam.d existirem?",
            "a": [
                {"option": "/etc/pam.conf será ignorado.",      "correct": true},
                {"option": "/etc/pam.d será ignorado.",     "correct": false},
                {"option": "Ambos serão usados, mas o /etc/pam.d tem maior prioridade",      "correct": false},
                {"option": "Ambos serão usados, mas o /etc/pam.conf tem maior prioridade",      "correct": false},
                {"option": "Irá causar uma mensagem de erro.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>/etc/pam.conf será ignorado.</p>" 
        },

// 211 ----------------------------------------------------------------------

        { // 1
            "q": "Qual arquivo no servidor Postfix modifica o endereço do remetente dos emails de saída (indique apenas o nome do arquivo sem o caminho)?",
            "a": [
                {"option": "genericstable",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 2
            "q": "Quando configurado um alias no Sendmail para enviar mensagens de email para um domínio diferente do local, qual a sintaxe de entrada para o arquivo /etc/aliases?",
            "a": [
                {"option": "bob@domain.com : robert@newdomain.com",      "correct": false},
                {"option": ". bob: domain.com : robert@newdomain.com",     "correct": false},
                {"option": "bob: robert@newdomain.com",      "correct": true},
                {"option": "bob:redirect:robert@newdomain.com",      "correct": false},
                {"option": "bob robert@newdomain.com.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>bob: robert@newdomain.com</p>" 
        },

        { // 3
            "q": "Você investiga uma denúnica e procura por um usuário mal-intencionado que enviou para centenas de usuários de email com 20MB. Você também localizou que este job está na fila de saída. Qual comando deveria ser usado para limpar a fila?",
            "a": [
                {"option": "sendmail -q",      "correct": false},
                {"option": "sendmail --flush -outbound",     "correct": false},
                {"option": "rm /var/spool/mqueue/*",     "correct": true},
                {"option": "sendmail --purge=all",      "correct": false},
                {"option": "sendmail -dq",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>rm /var/spool/mqueue/*</p>" 
        },

        { // 4
            "q": "Quais os passos necessários para ativar as alterações efetuadas no arquivo de aliases do Sendmail?",
            "a": [
                {"option": "Executar newaliases ou sendmail -bi",      "correct": true},
                {"option": "Reiniciar o daemon do Sendmail",     "correct": false},
                {"option": "Finalizar o processo com kill e opção SIGHUP.",     "correct": false},
                {"option": "Iniciar o Sendmail com hoststat.",      "correct": false},
                {"option": "Executar mkdb -f aliases",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Executar newaliases ou sendmail -bi</p>" 
        },

        { // 5
            "q": "O que você adicionaria no /etc/aliases para que todos os emails enviados para foo fossem enviados para um processo em /usr/local/bin/fooread?",
            "a": [
                {"option": "foo: ':run:usr/local/bin/fooread'",      "correct": false},
                {"option": "foo: '|include:/usr/local/bin/fooread'",     "correct": true},
                {"option": "foo: 'include:/usr/local/bin/fooread'",      "correct": false},
                {"option": "foo: ':/usr/local/bin/fooread'",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>|include:/usr/local/bin/fooread</p>" 
        },

        { // 6
            "q": "Sesus usuários requisitam que você processe os emails duplicados, excluindo um deles. Qual dos comandos poderá realizar essa tarefa?",
            "a": [
                {"option": "fetchmail",      "correct": false},
                {"option": "mqueue",     "correct": false},
                {"option": "procmail",      "correct": true},
                {"option": "elm",      "correct": false},
                {"option": "rmail",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>procmail</p>" 
        },

        { // 7 
            "q": "Qual arquivo pode ser usado para fazer com que o procmail filtre mensagens de entrada?",
            "a": [
                {"option": "${HOME}/.procmail",      "correct": false},
                {"option": "${HOME}/.forward",     "correct": true},
                {"option": "${HOME}/.bashrc",      "correct": false},
                {"option": "/etc/procmailrc",     "correct": false},
                {"option": "/etc/aliases",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>${HOME}/.forward</p>" 
        },

        { // 8
            "q": "Um filtro procmail é necessário para deletar todas as mensagens marcadas como spam. Complete o filtro<br><br>:0:<br>*X-Spam-Status: Yes",
            "a": [
                {"option": "/dev/null",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 9
            "q": "Qual comando você usa para investigar a fila de saída de mensagens?",
            "a": [
                {"option": "mailq",      "correct": true},
                {"option": "sendmail -q",     "correct": false},
                {"option": "mqueue",      "correct": false},
                {"option": "qm",      "correct": false},
                {"option": "lpq",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>mailq</p>" 
        },

        { // 10
            "q": "Um aplicativo específico de email processa filtros de entrada com o Procmail para verificar o cabeçalho das mensagens. Se o usuário tem a linha 'X-No-Archive: yes' no cabeçalho, então a mensagem deverá ser enviada para /dev/null. Complete a seguinte regra para implementar essa função:<br><br>:o<br>__________<br>/dev/null",
            "a": [
                {"option": "MATCH='X-NO-ARCHIVE:*YES'",      "correct": false},
                {"option": "/X-No-Archived: yes/",     "correct": false},
                {"option": "^x-no-archive: yes",      "correct": false},
                {"option": "X-No-Archived: yes",      "correct": false},
                {"option": "*^x-no-archive: yes",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>*^x-no-archive: yes</p>" 
        },

        { // 11
            "q": "Uma rede interna (192.168.1.0-192.168.1.255) precisa estar habilitada para fazer relay através do servidor Sendmail local. Qual linha precisa ser adicionada em /etc/mail/access para permitir isso?",
            "a": [
                {"option": "192.168.1.0/24 RELAY",      "correct": false},
                {"option": "192.168.1 RELAY",     "correct": true},
                {"option": "192.168.1.0/24 OK",      "correct": false},
                {"option": "192.168.1 OK",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>192.168.1 RELAY</p>" 
        },

        { // 12
            "q": "Você precisa recuperar um email num servidor de email remoto e então redistribuir as mensagens para os usuários locais em seu sistema. Entre as opções seguintes, escolha que poderiam ser usadas para realizar essa tarefa.",
            "a": [
                {"option": "elm",      "correct": false},
                {"option": "pine",     "correct": false},
                {"option": "fetchmail",      "correct": true},
                {"option": "rmail",      "correct": false},
                {"option": "Procmail",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>fetchmail</p>" 
        },

        { // 13
            "q": "Qual entrada no arquivo .procmailrc enviará uma cópia do email para outro endereço de email?",
            "a": [
                {"option": ":0 c",      "correct": true},
                {"option": ":0 copy",      "correct": false},
                {"option": ":c",     "correct": false},
                {"option": ":copy",      "correct": false},
                {"option": ":s",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>:0 c</p>" 
        },

        { // 14
            "q": "Qual dos seguintes serviços ou protocolos de rede é usado pelo Sendmail para RBLs (Realtime Blackhole Lists)?",
            "a": [
                {"option": "RBLP",      "correct": false},
                {"option": "SMTP",     "correct": false},
                {"option": "FTP",      "correct": false},
                {"option": "HTTP",      "correct": false},
                {"option": "DNS",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>DNS</p>" 
        },

        { // 15
            "q": "Onde é armazenado o arquivo de configuração do Procmail para o usuário foo, se o diretório home é armazenado em /home (entre com o caminho completo)?",
            "a": [
                {"option": "/home/foo/.procmailrc",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

// 212 ----------------------------------------------------------------------

        { // 1
            "q": "Você acabou de instalar uma segunda interface de rede no seu sistema Linux. Ambas, a eth0 e eth1 tiveram suas configurações e conexões testadas. No entando, o encaminhamento de tráfego entre as duas redes não está funcionando corretamente. Qual das seguintes opções irá resolver o problema?",
            "a": [
                {"option": "Atualizar rotas do seu sistema manualmente.",      "correct": false},
                {"option": "echo 1 > /proc/sys/net/ipv4/ip_forward",     "correct": true},
                {"option": "Executar route-enable eth0 eth1",      "correct": false},
                {"option": "Executar ifconfig-route on",      "correct": false},
                {"option": "Configurar /proc/sys/net/route/redirect_count",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>echo 1 > /proc/sys/net/ipv4/ip_forward</p>" 
        },

        { // 2
            "q": "O comando netstat -r exibiu a seguinte saída:<br><br>192.168.1.0 * 255.255.255.0 U 40 0 0 eth1<br>O que descreve esta linha?",
            "a": [
                {"option": "192.168.1.0 é o gateway default.",      "correct": false},
                {"option": "O host 192.168.1.0 pode ser alcançado através da interface de rede confgiurada em /dev/eth1",     "correct": false},
                {"option": "A rede 255.255.255.0 pode ser alcançadocada através do roteador 192.168.1.0 na interface de saída.",      "correct": false},
                {"option": "A rede 192.168.1.0/24 é acessível através da interface local configurada em eth1",     "correct": true},
                {"option": "O roteador em 192.168.1.0, com o valor (U), está recebendo e enviando pacotes de informações de roteamentos de protocolos.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>A rede 192.168.1.0/24 é acessível através da interface local configurada em eth1</p>" 
        },

        { // 3
            "q": "Qual o comando é usado para visualizar a tabela de roteamento do kernel?",
            "a": [
                {"option": "route print",      "correct": false},
                {"option": "route enumarate",     "correct": false},
                {"option": "route show",     "correct": false},
                {"option": "route list",      "correct": false},
                {"option": "route",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>route</p>" 
        },

        { // 4
            "q": "Executando o comando route -n, foi exibida a seguinte saída:<br>Destination Gateway Genmask Flags Metric Ref Use Iface<br>10.0.0.0 0.0.0.0 255.0.0.0 U 0 0 0 eth0<br>127.0.0.0 0.0.0.0 255.0.0.0 U 0 0 0 lo<br><br>Qual comando poderia ser usado para adicionar a rota para rede 10.0.0.0 com roteador 10.0.0.254?",
            "a": [
                {"option": "route add net default gw 10.0.0.254 netmask 255.0.0.0",      "correct": false},
                {"option": "route add net 10.0.0.0 netmask 255.0.0.0 gw 10.0.0.254",      "correct": true},
                {"option": "route add net gw 10.0.0.254",      "correct": false},
                {"option": "route add default 10.0.0.254 netmask 255.0.0.0",      "correct": false},
                {"option": "route add net 10.0.0.0 gw 10.0.0.254",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>route add net 10.0.0.0 netmask 255.0.0.0 gw 10.0.0.254</p>" 
        },

        { // 5
            "q": "Sua organização abriu um novo escritório em um andar diferente, e os computadores serão instalados na rede 192.168.1.0/24. O gateway Linux tem o endereço IP 192.168.0.2, que estará habilitado para encaminhar pacotes. Qual comando route deverá ser executado para que alcance a sua nova rede?",
            "a": [
                {"option": "route add 192.168.1.0/24 192.168.0.2",     "correct": false},
                {"option": "route add -net 192.168.1.0 netmask 255.255.255.0 gw 192.168.0.2",     "correct": true},
                {"option": "route add 192.168.1.0 netmask 24 gw 192.168.0.2",     "correct": false},
                {"option": "route add -net 192.168.1.0/24 192.168.0.2/32",     "correct": false},
                {"option": "route add 192.168.1.0/255.255.255.0 gw 192.168.0.2",     "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>route add -net 192.168.1.0 netmask 255.255.255.0 gw 192.168.0.2</p>" 
        },

        { // 6
            "q": "Você decidiu fazer uma política padrão FORWARD para rejeitar pacotes. Qual das opções é a regra que você precisa usar?",
            "a": [
                {"option": "iptables -t mangle -A FORWARD -j REJECT",      "correct": false},
                {"option": "iptables -P FORWARD -j REJECT",     "correct": false},
                {"option": "iptables -P FORWARD REJECT",      "correct": false},
                {"option": "REJECT is not a valid policy",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>REJECT is not a valid policy</p>" 
        },

        { // 7 
            "q": "Você tem um servidor WEB executando, rodando atrás de um firewall, com endereço IP 192.168.0.5 e você quer torná-lo público. O endereço ip externo do firewall é 10.0.0.10. Determine qual(is) regra(s) é(são) necessária(s) para a execução desse trabalho (sua política padrão é ACCEOT para todas as cadeias).",
            "a": [
                {"option": "iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-destination 192.168.0.5:80",      "correct": false},
                {"option": "iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.0.5:80",     "correct": true},
                {"option": "iptables -t nat -A POSTROUTING -m multiport 80,443 -s 10.0.0.10 DNAT --to-destination 192.168.0.5:80",      "correct": false},
                {"option": "O Iptables não pode fazer o encaminhamento, você precisa do ipmasqadm",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.0.5:80</p>" 
        },

        { // 8
            "q": "Alguns ataques de rede usam pacotes IP com o SYN, ACK, PSH, URG, FIN e RST ativados em um só pacote (procedimento conhecido como: 'Chernobyl1 packet', 'xmas tree packect' ou crashes em alguns sistemas operacionais) Para registar todos os pacotes desse padrão recebido, você usaria:",
            "a": [
                {"option": "iptables -A INPUT -s 0.0.0.0/0 -d 192.168.0.44/33 - protocol tcp -xmas-pkt -j LOG",      "correct": false},
                {"option": "iptables -A INPUT -s 0.0.0.0/0 -d 192.168.0.44/32 - protocol tcp -cher-pkt -j LOG",      "correct": false},
                {"option": "iptables -A INPUT -s 0.0.0.0/0 -d 192.168.0.44/32 - protocol tcp -cher-pkt -log",      "correct": false},
                {"option": "iptables -A INPUT -s 0.0.0.0/0 -d 192.168.0.44/32 - protocol tcp --tcp-flags SYN,ACK,HSK,PSH,URG,FIN -log",      "correct": false},
                {"option": "iptables -A INPUT -s 0.0.0.0/0 -d 192.168.0.44/32 - protocol tcp -tcp-flags ALL SYN,ACK,PSH,URG,RST,FIN -j LOG",      "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>iptables -A INPUT -s 0.0.0.0/0 -d 192.168.0.44/32 - protocol tcp -tcp-flags ALL SYN,ACK,PSH,URG,RST,FIN -j LOG</p>" 
        },

        { // 9
            "q": "Para acessar um servidor com endereço IP 10.12.34.56 usando HTTPS, uma regra no iptables tem de ser escrita. Dado o endereço de host de origem do cliente 192.168.43.12, qual das seguintes regras está correta?",
            "a": [
                {"option": "iptables -A FORWARD -p tcp -s 0/0 -d 10.12.34.56 --dport 80 -j ACCEPT",      "correct": false},
                {"option": "iptables -A FORWARD -p tcp -s 192.168.43.12 -d 10.12.34.56:443 -j ACCEPT",      "correct": false},
                {"option": "iptables -A FORWARD -p tcp -s 192.169.43.12 -d 10.12.34.56 --dport 443 -j ACCEPT",      "correct": true},
                {"option": "iptables -A FORWARD -p tcp -s 0/0 -d 10.12.34.56 -d -j ACCEPT 10.12.34.56:80",      "correct": false},
                {"option": "iptables -A FORWARD -p tcp -s 0/0 -d 10.12.34.56 --dport 443 -j ACCEPT",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>iptables -A FORWARD -p tcp -s 192.169.43.12 -d 10.12.34.56 --dport 443 -j ACCEPT</p>" 
        },

        { // 10
            "q": "Quando uma política padrão para o iptables é DROP na cadeia INPUT, por que devemos executar uma regra permitindo o tráfego para localhost?",
            "a": [
                {"option": "Todo tráfego localhost precisa sempre ser permitido.",      "correct": false},
                {"option": "Não importa. O iptables nunca afeta pacotes endereçados a localhost",      "correct": false},
                {"option": "Sendmail envia email por localhost.",     "correct": false},
                {"option": "Algumas aplicações usam a interface localhost para se comunicarem com outras aplicações.",      "correct": true},
                {"option": "O syslogd recebe mensagens via localhost",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Algumas aplicações usam a interface localhost para se comunicarem com outras aplicações.</p>" 
        },

        { // 11
            "q": "Para permitir que conexões X sejam encaminhadas sobre um servidor SSH, qual linha deve existir no arquivo de configuração do sshd?",
            "a": [
                {"option": "X11Forwarding Yes",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 12
            "q": "O que lista o conteúdo do arquivo /etc/ftpusers?",
            "a": [
                {"option": "Lista os usuários permitidos a usar o cliente ftp",      "correct": false},
                {"option": "Lista os usuários permitidos a usar servidor ftp",      "correct": false},
                {"option": "Lista os usuários não permitidos a usar o cliente ftp",     "correct": false},
                {"option": "Lista os usuários não permitidos a usar o servidor ftp",     "correct": false},
                {"option": "Lista os usuários não permitidos a fazer upload via ftp",     "correct": false},
                {"option": "Lista os usuários não permitidos a usar o servidor ftp",     "correct": true}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Lista os usuários não permitidos a usar o servidor ftp</p>" 
        },

        { // 13
            "q": "Qual deveria ser a razão para iniciar o vsftpd através do (x)inetd?",
            "a": [
                {"option": "xinetd possui maior capacidade de controle de acesso.",      "correct": false},
                {"option": "Isto não é uma boa ideia, porque inetd não é tão seguro quanto vsftpd.",     "correct": true},
                {"option": "xinetd é necessário para executar vsftpd em um ambiente chroot.",      "correct": false},
                {"option": "vsftpd não pode ser iniciado no modo standalone",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Isto não é uma boa ideia, porque inetd não é tão seguro quanto vsftpd.</p>" 
        },

        { // 14
            "q": "Um administrador de segurança consciente mudaria quais das DUAS seguintes linhas encontradas em um arquivo de configuração SSH?",
            "a": [
                {"option": "Protocol 2,1",      "correct": true},
                {"option": "PermitEmptyPasswords no",     "correct": false},
                {"option": "Port 22",     "correct": false},
                {"option": "PermitRootLogin yes",      "correct": true},
                {"option": "IgnoreRhosts yes",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Protocol 2,1 PermitRootLogin yes</p>" 
        },

        { // 15
            "q": "Quando conectando em um SErvidor SSH pela primeira vez, você envia uma fingerprint que fica armazenada em:",
            "a": [
                {"option": "~/.ssh/fingerprints",      "correct": false},
                {"option": "~/.ssh/id_dsa",      "correct": false},
                {"option": "~/.ssh/known_hosts",     "correct": true},
                {"option": "~/.ssh/id_dsa.pub",      "correct": false},
                {"option": "~/.ssh/gpg.txt",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>~/.ssh/known_hosts</p>" 
        },

        { // 16
            "q": "Uma entrada correta foi adicionada no /etc/hosts.allow para permitir que clientes se conectem em um serviço, mas não teve muito efeito. O que pode ter ocorrido?",
            "a": [
                {"option": "tcpd precisa receber um sinal de HUP",      "correct": false},
                {"option": "O serviço precisa ser reiniciado",      "correct": false},
                {"option": "A máquina precisa ser reiniciada",     "correct": false},
                {"option": "Há um conflito de entradas em /etc/hosts.deny",      "correct": true},
                {"option": "O serviço não suporta tcpwrappers",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Há um conflito de entradas em /etc/hosts.deny</p>" 
        },

        { // 17
            "q": "Qual o comando necessário para criar um par de chaves SSH (escreva somente o comando, sem caminho e sem opção ou parâmetro)?",
            "a": [
                {"option": "ssh-keygen",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },


// 213 ----------------------------------------------------------------------

        { // 1
            "q": "Qual arquivo contém as variáveis de ambiente padrão quando o Shell usado for o Bash?",
            "a": [
                {"option": "~/.profile",      "correct": false},
                {"option": "/bash",     "correct": false},
                {"option": "/etc/profile",      "correct": true},
                {"option": "~/.bash",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>/etc/profile</p>" 
        },

        { // 2
            "q": "O seguinte comando foi executado: useradd -m bobm. Entretanto, o usuário não consegue logar. Qual o problema?",
            "a": [
                {"option": "É necessário atribuir uma senha para a conta bobm através do comando passwd",      "correct": true},
                {"option": "Você precisa criar o diretório home de bobm e configurar as permissões apropriadas.",     "correct": false},
                {"option": "Você precisa editar o arquivo /etc/passwd e configurar o Shell para a conta de bobm.",      "correct": false},
                {"option": "O username precisa ter pelo menos 5 caracteres",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>É necessário atribuir uma senha para a conta bobm através do comando passwd</p>" 
        },

        { // 3
            "q": "Você criou uma nova conta de usuário adicionando a seguinte linha no seu arquivo /etc/passwd:<br><br>Bobm:baddog:501:501:Bob Morris:/home/bobm:/bin/bash<br>Bob lhe contata para informar que ele não consegue fazer logon. Você verifica que ele está usando usuário e senha corretos. Qual o problema?",
            "a": [
                {"option": "O UID e GID não podem ser idênticas.",      "correct": false},
                {"option": "Você não pode deixar espaços nas linhas, a menos que estejam entre aspas duplas.",     "correct": false},
                {"option": "Você não pode colocar a senha diretamente, entretanto você deve usar o comando passwd.",      "correct": true},
                {"option": "O nome de usuário é muito curto, deve ter pelo menos 6 caracteres.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Você não pode colocar a senha diretamente, entretanto você deve usar o comando passwd.</p>" 
        },

        { // 4
            "q": "Você acabou de instalar uma segunda placa de rede em seu sistema Linux. Ambas, eth0 e eth1, estão configuradas e têm conectividade testada. De qualquer forma, o tráfego de roteamento entre as duas redes não está funcionando. Quais das seguintes opções irá resolver o problema?",
            "a": [
                {"option": "Atualizar rotas de seu sistema manualmente.",      "correct": false},
                {"option": "echo 1 > /proc/sys/net/ipv4/ip_forward",     "correct": true},
                {"option": "Executar route-enable eth0 eth1",      "correct": false},
                {"option": "Executar ifconfig-route on",      "correct": false},
                {"option": "Configurar /proc/sys/net/route/redirect_count",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>echo 1 > /proc/sys/net/ipv4/ip_forward</p>" 
        },

        { // 5
            "q": "Que campo no arquivo /etc/passwd é usado para definir o Shell padrão do usuário?",
            "a": [
                {"option": "command",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 6
            "q": "Existem 7 campos no arquivo /etc/passwd. Qual das opções irá lista os campos na ordem correta?",
            "a": [
                {"option": "username, UID, password, GID, home directory, command, comment",      "correct": false},
                {"option": "username, password, UID, GID, comment, home directory, command",     "correct": true},
                {"option": "UID, username, GID, home directory, password, comment, command",      "correct": false},
                {"option": "Username, password, UID, group name, GID, home directory, comment",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>username, password, UID, GID, comment, home directory, command</p>" 
        },

        { // 7 
            "q": "Ao verificar o aruqivo /etc/passwd, você percebe que todos os campos de senha contêm um x. O que isso significa?",
            "a": [
                {"option": "A senha está criptografada",      "correct": false},
                {"option": "Que você está usando shadow.",     "correct": true},
                {"option": "Que todas as senhas estão em branco",      "correct": false},
                {"option": "Que todas as senhas expiraram.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Que você está usando shadow.</p>" 
        },

        { // 8
            "q": "Objetivando agendar uma tarefa no cron, a primeira tarefa é criar um arquivo de texto contendo os trabalhos a serem executados junto com o horário da execução. Qual das opções irá executar o script chamado MyScript diariamente às 23:45?",
            "a": [
                {"option": "* 23 45 * * MyScript",      "correct": false},
                {"option": "23 45 * * * MyScript",      "correct": false},
                {"option": "43 23 * * * MyScript",      "correct": true},
                {"option": "* * * 23 43 MyScript",      "correct": false}
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>43 23 * * * MyScript</p>" 
        },

        { // 9
            "q": "Você percebe que a carga do servidor está excepcionalmente elevada durante o horário das 10 às 12 horas,. Ao investigar a causa, você suspeita que possa ser o agendamento de tarefas no cron de um de seus usuários. Que comando pode ser utilizado para a verificaçào de suas suspeitas, levando em conta que você já está logado e utilizando a conta deste usuário?",
            "a": [
                {"option": "crontab -u",      "correct": false},
                {"option": "crond -u",     "correct": false},
                {"option": "crontab -l",      "correct": true},
                {"option": "crond -l",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>crontab -l</p>" 
        },

        { // 10
            "q": "Bob, um de seus usuários, criou um script para reindexar um banco de dados. Agora ele agendou para executar todos os dias às 10.30 horas. Qual comando você deverá usar para deletar essa tarefa?",
            "a": [
                {"option": "crontab -ru bob",      "correct": true},
                {"option": "crontab -u bob",     "correct": false},
                {"option": "crontab -du bob",      "correct": false},
                {"option": "crontab -lu bob",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>crontab -ru bob</p>" 
        },

        { // 11
            "q": "Como administrador do sistema, você precisa verificar os Jobs agendados através do cron do usuário bobo. Qual comando você pode usar?",
            "a": [
                {"option": "crontab -lu bob",      "correct": true},
                {"option": "crontab -u bob",     "correct": false},
                {"option": "crontab -l",      "correct": false},
                {"option": "cronq -lu bob",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>crontab -lu bob</p>" 
        },

        { // 12
            "q": "Quando o comando useradd é usado para criar uma nova conta de usuário, quais das seguintes tarefas não são feitas automaticamente?",
            "a": [
                {"option": "Atribuir um UID.",      "correct": false},
                {"option": "Atribuir um Shell padrão.",     "correct": false},
                {"option": "Criar um diret'rio home do usuário.",      "correct": true},
                {"option": "Definir o diretório home do usuário.",     "correct": false} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>Criar um diret'rio home do usuário.</p>" 
        },

        { // 13
            "q": "O valor inicial de atribuição da identificaçào do usuário é definido no arquivo ________.",
            "a": [
                {"option": "/etc/passwd",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 14
            "q": "A fim de evitar que um usuário se autentique, você pode adicionar um _______ no início do arquivo /etc/passwd",
            "a": [
                {"option": "asterisco",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

        { // 15
            "q": "A fim de melhorar a segurança do seu sistema, você decide implementar a password shadow. Qual comando deve ser usado para converter seu arquivo de usuários e senha para o tipo shadow?",
            "a": [
                {"option": "pwconv",     "correct": true} 
            ],
            "correct": "<p><span>correto!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },

    ]
};
