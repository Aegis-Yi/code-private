use Student
GO
--alter TABLE SC add CONSTRAINT PK_SC PRIMARY KEY (Sno)
ALTER TABLE SC ADD CONSTRAINT FK_SC_S FOREIGN KEY (Sno) REFERENCES S(Sno)
ALTER TABLE SC ADD CONSTRAINT FK_SC_C FOREIGN KEY (Cno) REFERENCES C(Cno)