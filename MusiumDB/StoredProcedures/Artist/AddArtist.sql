CREATE PROCEDURE [dbo].[AddArtist]
	@name NVARCHAR(50)
AS
BEGIN
	INSERT INTO Artist(name)
	VALUES (@name)
END