# Esse é um projeto simples para testar a  partição de tabelas

## Primeiro criamos uma tabela no nosso banco e suas partições 
  CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(250) NOT NULL,
    "ano" INTEGER NOT NULL,
    CONSTRAINT "NovoCliente_pkey" PRIMARY KEY ("id","ano")
  ) PARTITION BY RANGE ("ano");

  CREATE TABLE "Cliente_2022" PARTITION OF Cliente
    FOR VALUES FROM (2022) TO (2023);

  CREATE TABLE "Cliente_2023" PARTITION OF Cliente
    FOR VALUES FROM (2023) TO (2024);

   CREATE TABLE "Cliente_2024" PARTITION OF Cliente
    FOR VALUES FROM (2024) TO (2025);
    
### Após isso foi criado um projeto nestjs utilizando o prisma
  Note que no getAll utilizo o ano para poder aproveitar das partições

#### Vantagens da partição:
  Desempenho de consulta melhorado: Se a maioria das linhas de dados mais acessadas estiver em uma única partição ou em um pequeno número de partições, o desempenho da consulta pode ser drasticamente melhorado. Isso ocorre porque o sistema precisa ler apenas a partição relevante, em vez de toda a tabela.

  Manutenção de dados mais rápida: Operações de manutenção ou retenção de dados podem ser executadas mais rapidamente em uma ou mais partições. Isso pode ser particularmente útil para operações de backup e recuperação.

  Acesso eficiente a subconjuntos de dados: O particionamento permite que você acesse ou transfira subconjuntos de dados de forma rápida e eficaz, mantendo a integridade de uma coleção de dados.

  Melhoria do desempenho do sistema: Em sistemas onde os sistemas de arquivos menores são mais eficientes, o particionamento pode aumentar o desempenho geral do sistema

  ##### PS
  Obviamente o efeito da partição de tabelas só sera sentido com enormes quantidades de dados
  
