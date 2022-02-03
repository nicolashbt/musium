CREATE TABLE [dbo].[AllowedToAddSongs]
(
	[playlistId] INT NOT NULL, 
    [userId] INT NOT NULL, 
    CONSTRAINT [FK_AllowedToAddSongs_User] FOREIGN KEY ([userId]) REFERENCES [User]([id]) ,
    CONSTRAINT [FK_AllowedToAddSongs_Playlist] FOREIGN KEY ([playlistId]) REFERENCES [Playlist]([id])
)
