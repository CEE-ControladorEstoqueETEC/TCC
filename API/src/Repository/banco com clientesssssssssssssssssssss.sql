create database controle_estoques;




use controle_estoques;





create table clientes(
	id_cliente int auto_increment primary key,
    nome_cliente varchar(100) not null,
    email_cliente varchar(50) not null,
    contato_cliente varchar(50) not null,
	telefone_cliente varchar(10) not null,
    celular_cliente varchar(11) not null,
	endereco_cep varchar(8) not null,
    endereco_numero varchar(5),
    endereco_complemento varchar(50),
    tipo_cliente enum('PJ','PF') not null,
    data_cadastro datetime default now()
);
#select * from clientes;



create table cliente_juridico(
	FK_id_cliente int unique not null,
    razao_social varchar(150) not null,
    cnpj_cliente varchar(14) not null,
    inscricao_estadual varchar(9) not null,
    
    constraint FK_id_clienteJ 
		foreign key (FK_id_cliente) 
        references clientes(id_cliente)
);

create table cliente_fisico(
	FK_id_cliente int unique not null,
    cpf_cliente varchar(11) not null,
    rg_cliente varchar(9),
    
    constraint FK_id_clienteF
		foreign key (FK_id_cliente)
        references clientes(id_cliente)    
);













create table fornecedores(
	id_fornecedor int auto_increment primary key,
    razao_social varchar(100) not null,
    nome_fornecedor varchar(100) not null,
    email_fornecedor varchar(50) not null,
    contato_fornecedor varchar(50) not null,
	telefone_fornecedor varchar(11) not null,
	cnpj_fornecedor varchar(14) not null,
    inscricao_estadual varchar(10),
	linha_produto varchar(50) not null,
    endereco_cep varchar(8) not null,
    endereco_numero varchar(5) not null,
    endereco_complemento varchar(50),
    data_cadastro datetime default now()
);
#select * from fornecedores;

create table produto(
	id_produto int auto_increment primary key not null,
    nome_produto varchar(50),
    FK_id_fornecedor int,
    categoria_produto varchar(50),
    preco_unitario decimal(10,2),
    quantidade_produto int,
    quantidade_minima int,
	quantidade_maxima int,
    data_cadastro datetime default now(),
    constraint FK_id_fornecedor foreign key(FK_id_fornecedor) references fornecedores(id_fornecedor)
);
#select * from produto;








#Qual seria a chave primaria da tabela de formulario de vendas?
#Uma venda precisa do ID?
create table tbl_vendas(
	id_venda int auto_increment primary key,
    data_venda datetime not null,
    total_produtos int,
    valor_total decimal(13,2),
    prazo_pagamento date not null,
    prazo_entrega date not null,
    forma_entrega enum('Responsabilidade própria', 'Responsabilidade do Cliente'),
    forma_pagamento enum('À vista','Cartão Débito','Cartão Crédito','pix') not null,
	FK_id_cli int not null,
	constraint FK_id_cli foreign key(FK_id_cli) references clientes(id_cliente)
);

#select * from tbl_vendas;

create table detalheVenda (
	FK_cod_venda int not null,
	FK_cod_produ int not null,
	qtd int not null,
	valor_unit decimal(10,2) not null,
	constraint FK_cod_venda foreign key(FK_cod_venda) references tbl_vendas(id_venda),
	constraint FK_cod_produ foreign key(FK_cod_produ) references produto(id_produto)    
);





create table tbl_compras(
	id_compra int auto_increment primary key,
	FK_cod_fornecedor int not null,
    valor_total decimal(13,2),
    data_compra datetime default now(),
    prazo_pagamento date not null,
    prazo_entrega date not null,
    forma_entrega enum('Responsabilidade do vendedor', 'Responsabilidade do Cliente'),
    forma_pagamento enum('À vista','Cartão Débito','Cartão Crédito','pix') not null,
    
    constraint FK_cod_fornecedor foreign key(FK_cod_fornecedor) references fornecedores(id_fornecedor)
);
#select * from tbl_compras;


create table detalheCompra (
	FK_cod_compra int not null,
	FK_cod_prod int not null,
    qtd int not null,
	valor_unit decimal(10,2) not null,
	constraint FK_cod_compra foreign key(FK_cod_compra) references tbl_compras(id_compra),
    constraint FK_cod_prod foreign key(FK_cod_prod) references produto(id_produto)
);







#Qual seria a chave primaria da tabela de cadastro de lojas?
create table lojas(
	id_loja int auto_increment primary key,
    nome_loja varchar(50) not null,
	ramo_atividade varchar(50) not null,
    email varchar(50) not null,
    razao_social varchar(50) not null,
    proprietario varchar(50) not null,
    nome_contato varchar(50) not null,
    telefone_contato varchar(10) not null,
    telefone varchar(10) not null,
    pais varchar(50) default 'Brasil',
    endereco_cep varchar(8) not null,
    endereco_numero varchar(5) not null,
    endereco_complemento varchar(50)
);

#select * from lojas;









create table usuarios(
	id_user integer auto_increment primary key,
    nome_usuario varchar(40) not null,
    email varchar(40) not null,
    senha varchar(20) not null,
    data_cadastro datetime default now()
);

#SELECT * FROM usuarios;

#SELECT * FROM usuarios WHERE email = "paulo@paulo" AND senha = "123456";

#SELECT nome_usuario FROM usuarios WHERE email = "paulin.teste@teste" AND senha = "123456";



INSERT INTO clientes(
	nome_cliente, email_cliente, contato_cliente, telefone_cliente, celular_cliente, 
	endereco_cep, endereco_numero, endereco_complemento, tipo_cliente) 
    VALUES	("Rodolfo","rod.olfo@teste.com","Clarisse","1146844281","11958446241","06594214","150","","PJ"),
			("Roberval","rob.erval@teste.com","Joaquim","1146647982","11956428974","06581356","26","Casa 2","PF");

select * from clientes;

INSERT INTO cliente_juridico(
	FK_id_cliente, razao_social, cnpj_cliente, inscricao_estadual)
    VALUES("1","Creatine Rex co.","25696584000165","658965325");
SELECT * FROM cliente_juridico;

INSERT INTO cliente_fisico(
	FK_id_cliente, cpf_cliente, rg_cliente)
	VALUES("2","56984523568","54862449x");
SELECT * FROM cliente_fisico;






INSERT INTO fornecedores(
	razao_social, nome_fornecedor, email_fornecedor, contato_fornecedor, telefone_fornecedor, cnpj_fornecedor, 
	inscricao_estadual, linha_produto, endereco_cep, endereco_numero, endereco_complemento) 
    VALUES("Fornecedor LTDA.","Fornece sem dor","fornece@dor.br","Fernando","1154778564","25498632000161","546821679","N/E","35846210","840", "");
# SELECT * FROM fornecedores;

INSERT INTO produto(
	nome_produto, FK_id_fornecedor, categoria_produto, preco_unitario, quantidade_produto, quantidade_minima, quantidade_maxima) 
    VALUES("Macarrão", "1", "Alimento seco não perecível", 5.20, "150", "30", "300");
# SELECT * FROM produto;

INSERT INTO usuarios(
	nome_usuario, email, senha) 
    VALUES("Teste","teste@teste.com","senhafoda50520");
# SELECT * FROM usuarios;

INSERT INTO lojas(
	nome_loja, ramo_atividade, email, razao_social, proprietario, nome_contato, telefone_contato,
    telefone, pais, endereco_cep, endereco_numero, endereco_complemento) 
    VALUES("Padoca Vila Grande", "Confeitaria", "padoca@teste.com", "Padoquinhão Grande Vila LTDA.",
    "Frantchesco", "Ruth", "1179448562", "1180256133", "Brasil", "56485350", "469", "");
# SELECT * FROM lojas;










INSERT INTO tbl_compras(
	FK_cod_fornecedor, data_compra, valor_total, prazo_pagamento, prazo_entrega, forma_entrega, forma_pagamento	) 
	VALUES("1", "2023-03-15", "0", "2023-03-16", "2023-03-18", "Responsabilidade do Cliente", "Cartão Débito");
# SELECT * FROM tbl_compras;



INSERT INTO detalhecompra(
	FK_cod_compra, FK_cod_prod, qtd, valor_unit) 
    VALUES("1", "1", "15", "2.30");
INSERT INTO detalhecompra(
	FK_cod_compra, FK_cod_prod, qtd, valor_unit) 
    VALUES("1", "1", "10", "2.30");
UPDATE tbl_compras SET 
	valor_total = ( SELECT sum(qtd * valor_unit) FROM detalhecompra WHERE FK_cod_compra = 1) 
    WHERE id_compra = 1;
# SELECT * FROM detalhecompra;










INSERT INTO tbl_vendas(
	FK_id_cli, data_venda, total_produtos, valor_total, prazo_pagamento, prazo_entrega, forma_entrega, forma_pagamento)
	VALUES("1", "2023-03-15", "0", "0", "2023-03-16", "2023-03-18", "Responsabilidade do Cliente", "Cartão Débito");
 SELECT * FROM tbl_vendas;
 

INSERT INTO detalhevenda(
	FK_cod_venda, FK_cod_produ, qtd, valor_unit) 
    VALUES("1", "1", "15", "2.30");
INSERT INTO detalhevenda(
	FK_cod_venda, FK_cod_produ, qtd, valor_unit) 
    VALUES("1", "1", "10", "2.30");
UPDATE tbl_vendas SET 
    total_produtos = ( SELECT sum(qtd) FROM detalhevenda WHERE FK_cod_venda = 1 ),
	valor_total = ( SELECT sum(qtd * valor_unit) FROM detalhevenda WHERE FK_cod_venda= 1 )
    WHERE id_venda = 1;
 
 SELECT * FROM detalhecompra;

