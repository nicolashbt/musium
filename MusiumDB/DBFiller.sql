EXEC AddArtist 'BADBADNOTGOOD',0
EXEC AddSong "Can't Leave the Night"
EXEC AddArtistSong 1, 1

EXEC AddArtist 'GoGo Penguin',0
EXEC AddSong "Transient State"
EXEC AddSong "Reactor", 1
EXEC AddArtistSong 2, 2
EXEC AddArtistSong 2, 3

EXEC AddArtist 'Bicep',0
EXEC AddArtist 'Clara La San',0
EXEC AddSong "Saku"
EXEC AddArtistSong 3, 4
EXEC AddArtistSong 4, 4

EXEC UserRegister 'admin1', 'admin1', 'admin1@test.com'
EXEC UserRegister 'user1', 'user1', 'user1@test.com'

UPDATE [User]
SET Role=1
WHERE Id=1

EXEC UserLogin 'user1', 'user1'
EXEC UserLogin 'admin1', 'admin1'
