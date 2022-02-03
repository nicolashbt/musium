CREATE TABLE [dbo].[Playlist]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [name] NVARCHAR(50) NOT NULL, 
    [createdBy] INT NOT NULL, 
    CONSTRAINT [FK_Playlist_User] FOREIGN KEY ([createdBy]) REFERENCES [User]([id])
)
