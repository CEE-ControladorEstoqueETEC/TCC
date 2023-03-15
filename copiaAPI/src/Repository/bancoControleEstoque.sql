create database controle_estoques;

use controle_estoques;

create table clientes(
	id_cliente int auto_increment primary key,
    nome_cliente varchar(100) not null,
    email_cliente varchar(50) not null,
    contato_cliente varchar(50) not null,
	telefone_cliente int not null,
    celular_cliente int not null,
    cpf_cliente varchar(20),
	endereco_cep int (8) not null,
    endereco_rua varchar(50)  not null,
    endereco_estado varchar(50),
    endereco_bairro varchar(50),
    endereco_numero int(5),
    data_cadastro datetime default now()
);

create table fornecedores(
	id_fornecedor int auto_increment primary key,
    razao_social varchar(100) not null,
    nome_fornecedor varchar(100) not null,
    email_fornecedor varchar(50) not null,
    contato_fornecedor varchar(50) not null,
	telefone_fornecedor int not null,
	cnpj_fornecedor varchar(20),
    inscricao_estadual int,
	linha_produto varchar(50) not null,
    endereco_cep int (8) not null,
    endereco_rua varchar(50)  not null,
    endereco_estado varchar(50),
    endereco_bairro varchar(50),
    endereco_numero int(5),
    data_cadastro datetime
);
select * from fornecedores;


create table produto(
	id_produto int auto_increment primary key not null,
    nome_produto varchar(50),
    FK_id_fornecedor int,
    categoria_produto varchar(50),
    preco_unitario decimal,
    quantidade_produto int,
    quantidade_minima int,
	quantidade_maxima int,
    data_cadastro datetime,
    constraint FK_id_fornecedor foreign key(FK_id_fornecedor) references fornecedores(id_fornecedor)
);

#Qual seria a chave primaria da tabela de formulario de vendas?
#Uma venda precisa do ID?
create table formulario_vendas(
	id_venda int auto_increment primary key,
    
    nome_cliente varchar(50) not null,
    email_cliente varchar(50) not null,
    telefone_cliente int not null,
    cep_cliente int(8) not null,
    
    data_venda datetime,
    
    cod_produto int not null,
    nome_Produto varchar(50) not null,
    valor_unitario decimal not null,
	quantidade int not null,
    valor_total decimal not null,
    total_produtos int not null,
    
    prazo_pagamento date not null,
    prazo_entrega date not null,
    forma_entrega enum('Responsabilidade própria', 'Responsabilidade do Cliente'),
    forma_pagamento enum('À vista','Cartão Débito','Cartão Crédito','pix') not null,
   
    FK_id_forn int not null,
    FK_id_prod int not null, 
    FK_id_cli int not null,
	constraint FK_id_forn foreign key(FK_id_forn) references fornecedores(id_fornecedor),
    constraint FK_id_prod foreign key(FK_id_prod) references produto(id_produto),
    constraint FK_id_cli foreign key(FK_id_cli) references clientes(id_cliente)
);

#select * from formulario_vendas;
#select fv.id_venda, c.nome_cliente, c.cpf_cliente from formulario_vendas fv inner join clientes c on fv.FK_id_cli = c.id_cliente;

create table formulario_compra(
	id_compra int auto_increment primary key,
    
    cod_fornecedor int not null,
    nome_fornecedor varchar(50) not null,
    
    cod_produto int not null,
    nome_produto varchar(50) not null,
    
	quantidade int not null,
    valor_total decimal not null,

    contato_fornecedor varchar(50) not null,
    
    prazo_pagamento date not null,
    prazo_entrega date not null,
    forma_entrega enum('Responsabilidade própria', 'Responsabilidade do Cliente'),
    forma_pagamento enum('À vista','Cartão Débito','Cartão Crédito','pix') not null,

    FK_cod_forn int not null,
    FK_cod_prod int not null,
    constraint FK_cod_forn foreign key(FK_cod_forn) references fornecedores(id_fornecedor),
    constraint FK_cod_prod foreign key(FK_cod_prod) references clientes(id_cliente)
);
#select * from formulario_compra;
#select fc.nome_comprador, p.nome_produto from formulario_compra fc inner join produto p on p.id_produto = fc.FK_cod_prod where p.id_produto = 1;


#Qual seria a chave primaria da tabela de cadastro de lojas?
create table cadastro_loja(
	id_loja int auto_increment primary key,
    nome_loja varchar(50) not null,
	ramo_atividade varchar(50) not null,
    email varchar(50) not null,
    razao_social varchar(50) not null,
    proprietario varchar(50) not null,
    nome_contato varchar(50) not null,
    telefone_contato int(10) not null,
    telefone int(10) not null,
    pais varchar(50) default 'Brasil',
    endereco varchar(50) not null,
    cidade varchar(20) not null,
    cep int not null
);
#select * from cadastro_loja;


create table usuarios(
	id_user integer auto_increment primary key,
    nome_usuario varchar(40) not null,
    email varchar(40) not null,
    senha int(6)
);