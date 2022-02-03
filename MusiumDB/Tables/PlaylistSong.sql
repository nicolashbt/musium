CREATE TABLE [dbo].[PlaylistSong]
(
	[playlistId] INT NOT NULL, 
    [songId] INT NOT NULL,
	CONSTRAINT [FK_PlaylistSong_Playlist] FOREIGN KEY ([playlistId]) REFERENCES [Playlist]([id]),
	CONSTRAINT [FK_PlaylistSong_Song] FOREIGN KEY ([songId]) REFERENCES [Song]([id])
)
