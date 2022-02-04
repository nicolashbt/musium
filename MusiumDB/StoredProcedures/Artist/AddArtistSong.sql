CREATE PROCEDURE [dbo].[AddArtistSong]
	@artistId INT,
	@songId INT
AS
BEGIN
	INSERT INTO ArtistSong(songId,artistId)
	VALUES (@songId,@artistId)
END