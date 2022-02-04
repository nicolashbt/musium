CREATE VIEW [dbo].[V_InactiveSongs]
	AS SELECT * FROM [Song] WHERE isActive = 0
