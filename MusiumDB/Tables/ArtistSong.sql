CREATE TABLE [dbo].[ArtistSong]
(
	[artistId] INT NOT NULL, 
    [songId] INT NOT NULL, 
    CONSTRAINT [PK_ArtistSong] PRIMARY KEY ([songId],[artistId]),
    CONSTRAINT [FK_ArtistSong_Artist] FOREIGN KEY ([artistId]) REFERENCES [Artist]([id]) ,
    CONSTRAINT [FK_ArtistSong_Song] FOREIGN KEY ([songId]) REFERENCES [Song]([id])
)
