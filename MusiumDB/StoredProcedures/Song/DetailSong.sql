CREATE PROCEDURE [dbo].[DetailSong]
	@id INT
AS
BEGIN
	SELECT * FROM Song WHERE Song.id = @id
END
