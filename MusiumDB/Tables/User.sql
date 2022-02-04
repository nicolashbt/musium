CREATE TABLE [dbo].[User]
(
	[id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [email] NVARCHAR(250) NULL, 
    [password] NVARCHAR(250) NOT NULL, 
    [nickname] NVARCHAR(50) NOT NULL UNIQUE, 
    [role] INT NOT NULL,
    [salt] VARCHAR(100) NOT NULL
)
