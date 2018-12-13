USE [Student]
GO

CREATE TABLE [dbo].[SC](
	[Sno] [nvarchar](8) NOT NULL,
	[Cno] [nvarchar](8) NOT NULL,
	[Grade] [int] NULL,
 /*CONSTRAINT PK_SC PRIMARY KEY (Sno),
 FOREIGN KEY (Sno) REFERENCES S(Sno),
 FOREIGN KEY (Cno) REFERENCES C(Cno)*/
 )

