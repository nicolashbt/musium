CREATE TABLE [dbo].[History]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [songId] INT NOT NULL, 
    [datePlayed] DATETIME2 NOT NULL
)
