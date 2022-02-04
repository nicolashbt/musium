CREATE TABLE [dbo].[History]
(
	[id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [songId] INT NOT NULL, 
    [datePlayed] DATETIME2 NOT NULL
)
