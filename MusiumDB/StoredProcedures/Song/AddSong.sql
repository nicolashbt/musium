CREATE PROCEDURE [dbo].[AddSong]
	@name NVARCHAR(50),
	@duration INT = null,
	@isActive BIT = 1,
	@filePath NVARCHAR(250) = null,
	@genreId INT = null
AS
BEGIN
	INSERT INTO Song([name], isActive, filePath, duration, genreId)
	VALUES (@name,@isActive,@filePath,@duration,@genreId)
END