CREATE VIEW [dbo].[V_ActiveSongs]
	AS SELECT * FROM [Song] WHERE isActive = 1
