CREATE VIEW [dbo].[V_ActiveSongs]
	AS SELECT Song.name AS SongName, Artist.name AS ArtistName FROM [Song] 
	INNER JOIN ArtistSong ON Song.id = ArtistSong.songId 
	INNER JOIN Artist ON ArtistSong.artistId = Artist.id	
	WHERE isActive = 1
