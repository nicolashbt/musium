CREATE PROCEDURE [dbo].[AddArtist]
	@name NVARCHAR(50),
	@id int output
AS
BEGIN
	INSERT INTO Artist(name)
	VALUES (@name)
	SELECT @id = @@IDENTITY FROM Artist
END