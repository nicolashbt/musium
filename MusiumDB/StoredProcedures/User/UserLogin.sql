CREATE PROCEDURE [dbo].[UserLogin]
	@nickname VARCHAR(100),
	@password VARCHAR(50)
AS
BEGIN
	DECLARE @salt VARCHAR(100)
	SELECT @salt = salt FROM [User] WHERE nickname = @nickname

	DECLARE @secretkey VARCHAR(100)
	SET @secretkey = dbo.GetSecretKey()

	DECLARE @password_hash VARBINARY(64)
	SET @password_hash = HASHBYTES('SHA2_512', CONCAT(@salt, @secretkey, @password, @salt))

	DECLARE @id INT
	SELECT @id = Id FROM [User] WHERE nickname = @nickname AND [Password] = @password_hash

	SELECT * FROM V_User WHERE id = @id
END