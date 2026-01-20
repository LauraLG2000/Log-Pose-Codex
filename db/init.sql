use pirates;

Create table pirates(
    id int unsigned auto_increment primary key,
    nombre varchar(100) not null,
    bounty int unsigned default 0,
    armarHaki boolean default false
);

Insert into pirates(nombre, bounty, armarHaki) 
    values ('Monkey.D.Luffy', 3000, true);