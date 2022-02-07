using MusiumDAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MusiumDAL.Repositories
{
    public interface IArtistRepository
    {
        public IEnumerable<ArtistEntity> GetBySongId(int songId);
        public IEnumerable<ArtistEntity> GetAllArtists();
        public ArtistEntity GetArtist(int id);
        //public void DeleteArtist(int id);
        public int AddArtist(ArtistEntity artistEntity);
        //public void UpdateArtist(ArtistEntity artistEntity);
    }
}
