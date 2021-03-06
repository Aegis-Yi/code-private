
SELECT * FROM S WHERE Sage <= 20

SELECT SC.Sno,S.Sname,Cname FROM SC 
    JOIN C ON SC.Cno=C.Cno
    JOIN S ON S.Sno=SC.Sno
    WHERE SC.Sno='16040014'

SELECT SC.Sno,Sname,Cname,Cpno,Ccredit,Grade FROM SC 
    JOIN C ON SC.Cno=C.Cno
    JOIN S ON SC.Sno=S.Sno
    WHERE SC.Sno='16040014'
    SELECT AVG(Grade) as AVGGRADE FROM SC WHERE SC.Sno='16040014'

INSERT INTO  SC Select Sno, '7',60 from S where Sdept='EA'

UPDATE S
    SET Sname='刘华',Sage=Sage+1
    WHERE Sno='16040014'

UPDATE SC
    SET Grade=NULL WHERE Cno='6' AND Grade<60

UPDATE S
    SET Sage=Sage+1
    WHERE Sno IN (SELECT TOP 4 Sno FROM S [ORDER BY Sno])

UPDATE SC
    SET Grade=NULL
    WHERE Sno IN (SELECT Sno FROM S WHERE Sname='陈景欢') AND Cno='4'

UPDATE SC
    SET Grade=1.05*Grade
    WHERE Sno IN ( SELECT SC.Sno FROM S,SC WHERE S.Sno=SC.Sno GROUP BY SC.Sno HAVING AVG(Grade)<60)

UPDATE SC
    SET Grade=Grade*1.02
    WHERE Grade<=80 AND Cno='2'
UPDATE SC
    SET Grade=Grade*0.99
    WHERE Grade>80 AND Cno='2'

DELETE FROM SC
    WHERE Grade=NULL;

DELETE FROM SC
    WHERE Sno IN (SELECT Sno FROM S WHERE Sname='李思远')

DELETE SC
    FROM SC LEFT JOIN C ON SC.Cno=C.Cno LEFT JOIN S ON SC.Sno=S.Sno
    WHERE SC.Sno IN (SELECT S.Sno FROM S WHERE Sname='李%')
