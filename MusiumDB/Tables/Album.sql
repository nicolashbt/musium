CREATE TABLE [dbo].[Album]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [name] VARCHAR(50) NOT NULL, 
    [releaseType] VARCHAR(50) NOT NULL, 
    [releaseDate] DATETIME2 NULL, 
    [releasedOnLabel] VARCHAR(250) NULL
)
