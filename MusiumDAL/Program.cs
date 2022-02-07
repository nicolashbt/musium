using MusiumDAL.Entities;
using MusiumDAL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusiumDAL
{
    internal class Program
    {
        static void Main(string[] args)
        {
            SongService songService = new SongService();
            ArtistService artistService = new ArtistService();

            //Testing GetAllSongs
            IEnumerable<SongEntity> songs = songService.GetAllSongs();
            foreach (SongEntity songEntity in songs)
            {
                Console.WriteLine("Song name: " + songEntity.Name + " - id: " + songEntity.Id);
            }

            //Testing AddArtist
            artistService.AddArtist(new ArtistEntity()
            {
                Name = "artist1"
            });
            artistService.AddArtist(new ArtistEntity()
            {
                Name = "artist2"
            });
            //Testing GetAllArtists
            IEnumerable<ArtistEntity> artists = artistService.GetAllArtists();
            foreach (ArtistEntity artistEntity in artists)
            {
                Console.WriteLine("Artist name: " + artistEntity.Name + " - id: " + artistEntity.Id);
            }

            //Testing AddSongs
            SongEntity songEntity1 = new SongEntity()
            {
                Name = "song1"
            };
            songService.AddSong(songEntity1, artists);
            Console.WriteLine("added a song");

            //Testing GetAllSongs
            songs = songService.GetAllSongs();
            foreach (SongEntity songEntity in songs)
            {
                Console.WriteLine("Song name: " + songEntity.Name + " - id: " + songEntity.Id);
            }
        }
    }
}
