using Microsoft.AspNetCore.Mvc;
using MusiumAPI.Mappers;
using MusiumAPI.Models;
using MusiumDAL.Repositories;

namespace MusiumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongController : ControllerBase
    {
        private ISongRepository _songRepository;

        public SongController(ISongRepository songRepository)
        {
            _songRepository = songRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_songRepository.GetAllSongs().Select(s => s.MapToApi()));
        }

        [HttpGet("{Id}")]
        public IActionResult GetById(int Id)
        {
            return Ok(_songRepository.GetSong(Id).MapToApi());
        }

        [HttpPost]
        public IActionResult Create(SongForm songForm)
        {
            if (!ModelState.IsValid) return BadRequest();
            _songRepository.AddSong(songForm.MapToDal(), songForm.ArtistIds);
            return Ok();
        }

        [HttpPut]
        public IActionResult Update(SongForm songForm)
        {
            if (!ModelState.IsValid) return BadRequest();
            _songRepository.UpdateSong(songForm.MapToDal());
            return Ok();
        }

        [HttpPut("ArtistSong")]
        public IActionResult UpdateArtistSong(SongForm songForm)
        {
            if (!ModelState.IsValid) return BadRequest();
            _songRepository.UpdateArtistSong(songForm.MapToDal().Id, songForm.ArtistIds);
            return Ok();
        }

        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            _songRepository.DeleteSong(Id);
            return Ok();
        }

    }
}
