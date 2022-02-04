CREATE PROCEDURE [dbo].[AddSongWithArtist]
	@name NVARCHAR(50),
	@isActive BIT = 1,
	@artistId T_ArtistId READONLY,
	@filePath NVARCHAR(250) = null,
	@duration INT = null,
	@genreId INT = null
AS
BEGIN
	DECLARE @songId INT;
	INSERT INTO Song(name, isActive, filePath, duration, genreId)
	VALUES (@name,@isActive,@filePath,@duration,@genreId)
	SET @songId = SCOPE_IDENTITY();

	INSERT INTO ArtistSong(songId,artistId)
	SELECT @songId, id FROM @artistId
END