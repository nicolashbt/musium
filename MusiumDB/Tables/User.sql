﻿CREATE TABLE [dbo].[User]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [email] NVARCHAR(250) NOT NULL, 
    [password] NVARCHAR(250) NOT NULL, 
    [nickname] NVARCHAR(50) NOT NULL, 
    [role] INT NOT NULL,
    [SALT] VARCHAR(100) NOT NULL
)
