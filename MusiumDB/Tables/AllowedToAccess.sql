CREATE TABLE [dbo].[AllowedToAccess]
(
	[playlistId] INT NOT NULL, 
    [userId] INT NOT NULL, 
    CONSTRAINT [FK_AllowedToAccess_User] FOREIGN KEY ([userId]) REFERENCES [User]([id]) ,
    CONSTRAINT [FK_AllowedToAccess_Playlist] FOREIGN KEY ([playlistId]) REFERENCES [Playlist]([id])
)
