drop database CWC;
create database CWC;
use CWC;
create table batsmen(ID int primary key,PlayerName varchar(255),Country varchar(5),Matches int,Runs int);
create table bowler(ID int primary key,PlayerName varchar(255),Country varchar(5),Matches int,Wickets int);
create table games(ID int,Team1 varchar(5),Team2 varchar(5),Team1Score int,Team2Score int);
insert into batsmen values(1,"Rohit Sharma","IND",2,120),
(2,"David Warner","AUS",2,98),
(3,'Shakib Al Hasan','BAN',1,82),
(4,'Kane Williamson','NZ',1,10),
(5,'Joe Root','ENG',2,45),
(6,'Jonny Bairstow','ENG',2,11),
(7,'Aaron Finch','AUS',2,100),
(8,'Babar Azam','PAK',1,82),
(9,'Ben Stokes','ENG',2,110),
(10,'Jason Roy','ENG',2,55),
(11,'Virat Kohli','IND',2,99),
(12,'Steve Smith','AUS',2,100),
(13,'Alex Carey','AUS',2,32),
(14,'Eoin Morgan','ENG',2,11);
insert into batsmen value(15,'Bumrah','IND',2,4);
insert into bowler values
(16,'Lockie Ferguson','NZ',2,6),
(17,'Jofra Archer','ENG',2,11),
(18,'Mustafizur Rahman','BAN',1,8),
(19,'Jasprit Bumrah','IND',2,9),
(20,'Mark Wood','ENG',2,4),
(21,'Trent Boult','NZ',2,10),
(22,'Mohammad Amir','PAK',1,2),
(23,'Shaheen Afridi','PAK',1,5),
(24,'Chris Woakes','ENG',2,2),
(25,'Jimmy Neesham','NZ',2,1),
(26,'Matt Henry','NZ',2,0),
(27,'Pat Cummins','AUS',2,10),
(28,'Mohammad Shami','IND',2,4),
(29,'Mohammad Saifuddin','BAN',2,7),
(30,'Mitchel Starc','AUS',2,3);
insert into games values
(1,'IND','ENG',321,312),
(2,'ENG','AUS',411,389),
(3,'PAK','IND',325,327),
(4,'BAN','AUS',245,247);
#Selecting top 5 run scorers
select PlayerName,Runs from batsmen order by runs desc limit 5;
#Selecting top 5 wicket takers
select PlayerName,Wickets from bowler order by wickets desc limit 5;
#Calculating average scores of teams
create table scores(country varchar(5),runs int);
insert into scores select team1,team1score from games;
insert into scores select team2,team2score from games;
select country,runs/count(runs) as Average from scores group by country;
#Updating the scores of batsmen in the team with least average
update batsmen set runs=runs+10 where country in (select t.country from (select country,runs/count(runs) as Average from scores group by country) t where t.Average=(select min(Average) from (select country,runs/count(runs) as Average from scores group by country) q));
DELIMITER $$
CREATE PROCEDURE HighestScore(IN Nation varchar(5)) 
begin
	select max(runs) from scores where country=Nation;
END$$
DELIMITER ;
CALL HighestScore('AUS');