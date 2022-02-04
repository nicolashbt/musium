CREATE PROCEDURE [dbo].[UpdateSong]
	@id INT,
	@name NVARCHAR(50),
	@isActive BIT = 1,
	@filePath NVARCHAR(250) = null,
	@duration INT = null,
	@genreId INT = null
AS
BEGIN
	UPDATE Song
	SET name = @name,
		isActive = @isActive,
		filePath = @filePath,
		duration = @duration,
		genreId = @genreId
		WHERE Song.id = @id
END
