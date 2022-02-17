CREATE PROCEDURE [dbo].[UpdateArtist]
	@id INT,
	@name NVARCHAR(50)
AS
BEGIN
	UPDATE Artist
	SET name = @name
		WHERE Artist.id = @id
END
