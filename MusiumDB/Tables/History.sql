CREATE TABLE [dbo].[History]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [songId] INT NOT NULL, 
    [datePlayed] DATETIME2 NOT NULL
)
