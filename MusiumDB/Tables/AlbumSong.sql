CREATE TABLE [dbo].[AlbumSong]
(
	[albumId] INT NOT NULL, 
    [songId] INT NOT NULL, 
    CONSTRAINT [FK_AlbumSong_Song] FOREIGN KEY ([songId]) REFERENCES [Song]([id]),
    CONSTRAINT [FK_AlbumSong_Album] FOREIGN KEY ([albumId]) REFERENCES [Album]([id]) 
)
