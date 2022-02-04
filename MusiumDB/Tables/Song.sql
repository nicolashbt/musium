CREATE TABLE [dbo].[Song]
(
	[id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [name] NVARCHAR(50) NOT NULL, 
    [isActive] BIT NOT NULL, 
    [filePath] NVARCHAR(250) NULL, 
    [duration] INT NULL, 
    [genreId] INT NULL, 
    CONSTRAINT [FK_Song_Genre] FOREIGN KEY ([genreId]) REFERENCES [Genre]([id])
)
