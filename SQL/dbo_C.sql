USE [Student]
GO

CREATE TABLE [dbo].[C](
	[Cno] [nvarchar](8) NOT NULL,
	[Cname] [nvarchar](10) NOT NULL,
	[Cpno] [nvarchar](50) NULL,
	[Ccredit] [float] NULL,
 CONSTRAINT PK_C PRIMARY KEY (Cno) 
)
GO
