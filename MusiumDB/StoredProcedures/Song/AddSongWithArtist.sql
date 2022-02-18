CREATE PROCEDURE [dbo].[AddSongWithArtist]
	@name NVARCHAR(50),
	@duration INT = null,
	@artistId T_ArtistId READONLY,
	@isActive BIT = 1,
	@filePath NVARCHAR(250) = null,
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