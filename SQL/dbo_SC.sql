USE [Student]
GO

/****** Object:  Table [dbo].[SC]    Script Date: 12/08/2018 00:32:57 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SC](
	[Sno] [nvarchar](8) NOT NULL,
	[Cno] [nvarchar](8) NOT NULL,
	[Grade] [int] NULL,
 /*CONSTRAINT PK_SC PRIMARY KEY (Sno),
 FOREIGN KEY (Sno) REFERENCES S(Sno),
 FOREIGN KEY (Cno) REFERENCES C(Cno)*/
 )

