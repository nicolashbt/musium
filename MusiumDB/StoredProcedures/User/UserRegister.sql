CREATE PROCEDURE [dbo].[UserRegister]
	@nickname VARCHAR(50),	
	@password VARCHAR(50),
	@email VARCHAR(100) = NULL
AS
BEGIN
	DECLARE @salt VARCHAR(100)
	SET @salt = CONCAT(NEWID(), NEWID(), NEWID())

	DECLARE @secretkey VARCHAR(100)
	SET @secretkey = dbo.GetSecretKey()

	DECLARE @password_hash VARBINARY(64)
	SET @password_hash = HASHBYTES('SHA2_512', CONCAT(@salt, @secretkey, @password, @salt))

	INSERT INTO [User] ([password], nickname, salt, email) 
	OUTPUT inserted.id
	VALUES (@password_hash, @nickname, @salt,@email)
END
