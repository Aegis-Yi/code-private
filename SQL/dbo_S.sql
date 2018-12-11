USE [Student]
GO

CREATE TABLE [dbo].[S](
	[Sno] [nvarchar](8) NOT NULL,
	[Sname] [nvarchar](10) NOT NULL,
	[Sage] [int] NULL,
	[Ssex] [nvarchar](2) NOT NULL,
	[Sdept] [nvarchar](20) NOT NULL,
 CONSTRAINT PK_S PRIMARY KEY (Sno) 
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[S]  WITH CHECK ADD  CONSTRAINT [CK_S] CHECK  (([Sage]>=(0) AND [Sage]<=(100)))
GO

ALTER TABLE [dbo].[S] CHECK CONSTRAINT [CK_S]
GO