using DAL = MusiumDAL.Entities;
using API = MusiumAPI.Models;
namespace MusiumAPI.Mappers
{
    public static class ArtistMapper
    {
        public static API.Artist MapToApi(this DAL.ArtistEntity artist)
        {
            return new API.Artist
            {
                Id = artist.Id,
                Name = artist.Name
            };
        }
        public static DAL.ArtistEntity MapToDal(this API.ArtistForm artistForm)
        {
            return new DAL.ArtistEntity
            {
                Id = artistForm.Id,
                Name = artistForm.Name
            };
        }
    }
}
