drop table proffesions;

create table proffesions (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    proffesion VARCHAR
);

insert into proffesions (proffesion) values ('Полицейский');
insert into proffesions (proffesion) values ('Стриптизер');