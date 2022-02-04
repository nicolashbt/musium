CREATE PROCEDURE [dbo].[DeleteSong]
	@id INT
AS
BEGIN
	UPDATE Song
	SET isActive = 0
		WHERE Song.id = @id
END