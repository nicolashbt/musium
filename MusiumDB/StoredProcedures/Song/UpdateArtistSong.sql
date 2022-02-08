CREATE PROCEDURE [dbo].[UpdateArtistSong]
	@songId INT,
	@artistId T_ArtistId READONLY
AS
BEGIN
	DELETE FROM ArtistSong WHERE songId = @songId
	INSERT INTO ArtistSong(songId,artistId)
	SELECT @songId, id FROM @artistId
END