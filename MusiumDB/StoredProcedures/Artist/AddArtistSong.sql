CREATE PROCEDURE [dbo].[AddArtistSong]
	@songId INT,
	@artistId INT
AS
BEGIN
	INSERT INTO ArtistSong(songId,artistId)
	VALUES (@songId,@artistId)
END