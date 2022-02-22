EXEC AddArtist 'BADBADNOTGOOD',0
EXEC AddSong "Can't Leave the Night", 280
EXEC AddArtistSong 1, 1

EXEC AddArtist 'GoGo Penguin',0
EXEC AddSong "Transient State",359
EXEC AddSong "Reactor",359
EXEC AddArtistSong 2, 2
EXEC AddArtistSong 2, 3

EXEC AddArtist 'Bicep',0
EXEC AddArtist 'Clara La San',0
EXEC AddSong "Saku",297
EXEC AddArtistSong 3, 4
EXEC AddArtistSong 4, 4

EXEC AddArtist 'The Cinematic Orchestra', 0
EXEC AddSong "Ode To The Big Sea",339
EXEC AddArtistSong 5, 5

EXEC AddArtist 'Max Cooper', 0
EXEC AddSong "Aleph 2",394
EXEC AddArtistSong 6, 6

EXEC AddArtist 'Ólafur Arnalds', 0
EXEC AddSong "Saudade (When We Are Born)",150
EXEC AddArtistSong 7, 7

EXEC AddArtist 'Ludovico Einaudi', 0
EXEC AddArtist 'Daniel Hope', 0
EXEC AddSong "Petricor",394
EXEC AddArtistSong 8, 8
EXEC AddArtistSong 9, 8

EXEC AddSong "A Test Song",10
EXEC AddArtistSong 8, 9
EXEC AddArtistSong 9, 9


EXEC UserRegister 'admin1', 'admin1', 'admin1@test.com'
EXEC UserRegister 'user1', 'user1', 'user1@test.com'

UPDATE [User]
SET Role=1
WHERE Id=1

--EXEC UserLogin 'user1', 'user1'
--EXEC UserLogin 'admin1', 'admin1'
