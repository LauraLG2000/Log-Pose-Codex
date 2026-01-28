use pirates;

Create table pirates(
    id int unsigned auto_increment primary key,
    nombre varchar(100) not null,
    bounty int unsigned default 0,
    armarHaki boolean default false,
    birthDate date
);

Insert into pirates(nombre, bounty, armarHaki, birthDate) 
    values ('Monkey.D.Luffy', 3000, true, '1999/05/05');
Insert into pirates(nombre, bounty, armarHaki, birthDate) 
    values ('Roronoa Zoro', 111000, true, '1997/11/11');