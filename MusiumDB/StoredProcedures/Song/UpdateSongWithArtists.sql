CREATE PROCEDURE [dbo].[UpdateSongWithArtist]
	@id INT,
	@name NVARCHAR(50),
	@isActive BIT = 1,
	@artistId T_ArtistId READONLY,
	@filePath NVARCHAR(250) = null,
	@duration INT = null,
	@genreId INT = null
AS
BEGIN
	UPDATE Song
	SET [name] = @name,
		isActive = @isActive,
		filePath = @filePath,
		duration = @duration,
		genreId = @genreId
		WHERE Song.id = @id

	DELETE FROM ArtistSong WHERE songId = @id
	INSERT INTO ArtistSong(songId,artistId)
	SELECT @id, id FROM @artistId
END
