using DAL = MusiumDAL.Entities;
using API = MusiumAPI.Models;
namespace MusiumAPI.Mappers
{
    public static class SongMapper
    {
        public static API.Song MapToApi(this DAL.SongEntity song)
        {
            return new API.Song
            {
                Id = song.Id,
                Name = song.Name,
                IsActive = song.IsActive,
                FilePath = song.FilePath,
                Duration = song.Duration,
                GenreId = song.GenreId
            };
        }
        public static DAL.SongEntity MapToDal(this API.SongForm songForm)
        {
            return new DAL.SongEntity
            {
                Id = songForm.Id,
                Name = songForm.Name,
                IsActive = songForm.IsActive,
                FilePath = songForm.FilePath,
                Duration = songForm.Duration,
                GenreId = songForm.GenreId
            };
        }
    }
}
