using MusiumDAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusiumDAL.Repositories
{
    public interface ISongRepository
    {
        public IEnumerable<SongEntity> GetAllSongs();
        public SongEntity GetSong(int id);
        public void DeleteSong(int id);
        public void AddSong(SongEntity songEntity, IEnumerable<int> artistIds);
        public void UpdateSong(SongEntity songEntity);
        public void UpdateArtistSong(int songId, IEnumerable<int> artistIds);
        public void UpdateSongWithArtists(SongEntity songEntity, IEnumerable<int> artistIds);

    }
}
